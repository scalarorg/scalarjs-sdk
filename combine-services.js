const fs = require("fs");
const path = require("path");
const ts = require("typescript");
const glob = require("glob");

const DEFAULT_CONFIG = {
  dir: "src/generated",
  exportFileName: "scalarGrpcClient",
};

function isVersionDir(dirName) {
  return /^v\d+/.test(dirName);
}

function compareVersions(a, b) {
  // Extract major version numbers
  const majorA = parseInt(a.match(/v(\d+)/)[1]);
  const majorB = parseInt(b.match(/v(\d+)/)[1]);

  if (majorA !== majorB) {
    return majorB - majorA; // Sort by major version first
  }

  // If major versions are equal, prioritize stable versions over alpha/beta
  const isStableA = !/alpha|beta/.test(a);
  const isStableB = !/alpha|beta/.test(b);

  if (isStableA !== isStableB) {
    return isStableA ? -1 : 1; // Stable versions come first
  }

  // If both are alpha or both are beta, compare their numbers
  const subVersionA = a.match(/(?:alpha|beta)(\d+)/)?.[1] || "0";
  const subVersionB = b.match(/(?:alpha|beta)(\d+)/)?.[1] || "0";

  return parseInt(subVersionB) - parseInt(subVersionA);
}

function findClientFilesInDir(dir, parentDirs = []) {
  const results = [];
  const items = fs.readdirSync(dir);
  const currentDirName = path.basename(dir);
  const dirPath = [...parentDirs, currentDirName].filter(
    (d) => d !== "." && d !== "src" && d !== "generated"
  );

  // Group directories into version and non-version dirs
  const versionDirs = [];
  const nonVersionDirs = [];

  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      if (isVersionDir(item)) {
        versionDirs.push({ name: item, path: fullPath });
      } else {
        nonVersionDirs.push(fullPath);
      }
    }
  }

  // If we found version directories, select the newest one and look for client files
  if (versionDirs.length > 0) {
    versionDirs.sort((a, b) => compareVersions(a.name, b.name));
    const newestVersion = versionDirs[0];
    console.log(
      `Found version directory: ${newestVersion.name} at ${newestVersion.path}`
    );

    const files = glob.sync("**/*.client.d.ts", {
      cwd: newestVersion.path,
      absolute: true,
    });

    results.push(
      ...files.map((filePath) => {
        const fileName = path.basename(filePath, ".client.d.ts");
        const name = fileName.split(".")[0];
        const serviceName = name.charAt(0).toUpperCase() + name.slice(1);
        const varName = name.charAt(0).toLowerCase() + name.slice(1);

        const content = fs.readFileSync(filePath, "utf8");
        const clientClassMatch = content.match(
          /export declare class (\w+Client)/
        );
        const clientClassName = clientClassMatch
          ? clientClassMatch[1]
          : "ServiceClient";

        // Create a namespace from the directory path
        const namespace = dirPath
          .map((d) => d.charAt(0).toUpperCase() + d.slice(1))
          .join("");
        const uniqueServiceName = `${namespace}${serviceName}`;

        console.log(
          `Found client: ${clientClassName} (${uniqueServiceName}) in ${path.relative(
            process.cwd(),
            filePath
          )}`
        );

        return {
          name: uniqueServiceName,
          varName: `${varName}${namespace}`, // Make varName unique too
          sourcePath: filePath,
          clientClassName,
          namespace, // Store the namespace for import statements
          fullClientName: `${namespace}${clientClassName}`,
        };
      })
    );
  }

  // Recursively look into non-version directories
  for (const subDir of nonVersionDirs) {
    results.push(...findClientFilesInDir(subDir, dirPath));
  }

  return results;
}

function findClientFiles(sourceDir) {
  const services = findClientFilesInDir(sourceDir);

  if (services.length === 0) {
    throw new Error(
      `No client files found in ${sourceDir} or its subdirectories`
    );
  }

  return services;
}

function generateCombinedFiles(servicesConfig) {
  const { outputDir, services, exportFileName } = servicesConfig;

  // Generate .d.ts content
  let dtsContent = `// @generated automatically
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
`;

  // Add imports for client classes only
  services.forEach((service) => {
    const { sourcePath, clientClassName, namespace } = service;

    // Calculate relative path for client class import
    const clientRelativePath = path.relative(
      outputDir,
      path.resolve(path.dirname(sourcePath), path.basename(sourcePath, ".d.ts"))
    );
    const adjustedClientPath = clientRelativePath.startsWith(".")
      ? clientRelativePath
      : `./${clientRelativePath}`;

    dtsContent += `import { ${clientClassName} as ${namespace}${clientClassName} } from "${adjustedClientPath}";\n`;
  });

  // Start class declaration
  dtsContent += `\nexport declare class ScalarGrpcClient {
    private readonly ${services
      .map((s) => `${s.varName}Client: ${s.fullClientName}`)
      .join(";\n    private readonly ")};
    constructor(_transport: RpcTransport);

    ${services
      .map((service) => extractMethodDefinitions(service))
      .join("\n\n    ")}
}\n`;

  // Generate .js content
  let jsContent = `// @generated automatically
${services
  .map((service) => {
    const clientRelativePath = path.relative(
      outputDir,
      path.resolve(
        path.dirname(service.sourcePath),
        path.basename(service.sourcePath, ".d.ts")
      )
    );
    const adjustedClientPath = clientRelativePath.startsWith(".")
      ? clientRelativePath
      : `./${clientRelativePath}`;
    return `import { ${service.clientClassName} as ${service.name}Client } from "${adjustedClientPath}";`;
  })
  .join("\n")}

export class ScalarGrpcClient {
    constructor(_transport) {
        ${services
          .map(
            (service) =>
              `this.${service.varName}Client = new ${service.name}Client(_transport);`
          )
          .join("\n        ")}
    }

    ${services
      .map((service) => generateDelegateMethods(service))
      .join("\n\n    ")}
}
`;

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write files
  fs.writeFileSync(path.join(outputDir, `${exportFileName}.d.ts`), dtsContent);
  fs.writeFileSync(path.join(outputDir, `${exportFileName}.js`), jsContent);
}

function extractMethodDefinitions(service) {
  const sourceFile = ts.createSourceFile(
    "temp.d.ts",
    fs.readFileSync(service.sourcePath, "utf8"),
    ts.ScriptTarget.Latest,
    true
  );

  const methods = [];
  function visit(node) {
    if (ts.isMethodDeclaration(node)) {
      const methodName = node.name.text;
      // Use full client name (with namespace prefix)
      const prefixedMethodName = `${service.fullClientName.toLowerCase()}_${methodName}`;

      methods.push(
        `${prefixedMethodName}: ${service.fullClientName}['${methodName}'];`
      );
    }
    ts.forEachChild(node, visit);
  }

  ts.forEachChild(sourceFile, (node) => {
    if (
      ts.isClassDeclaration(node) &&
      node.name?.text === (service.clientClassName || "ServiceClient")
    ) {
      ts.forEachChild(node, visit);
    }
  });

  return methods.join("\n\n    ");
}

function generateDelegateMethods(service) {
  const sourceFile = ts.createSourceFile(
    "temp.d.ts",
    fs.readFileSync(service.sourcePath, "utf8"),
    ts.ScriptTarget.Latest,
    true
  );

  const methods = [];
  function visit(node) {
    if (
      ts.isClassDeclaration(node) &&
      node.name?.text === (service.clientClassName || "ServiceClient")
    ) {
      ts.forEachChild(node, (child) => {
        if (ts.isMethodDeclaration(child)) {
          const methodName = child.name.text;
          // Use full client name (with namespace prefix)
          const prefixedMethodName = `${service.fullClientName.toLowerCase()}_${methodName}`;

          methods.push({
            original: methodName,
            prefixed: prefixedMethodName,
          });
        }
      });
    }
    ts.forEachChild(node, visit);
  }
  ts.forEachChild(sourceFile, visit);

  return methods
    .map(
      ({ original, prefixed }) => `${prefixed}(...args) {
        return this.${service.varName}Client.${original}(...args);
    }`
    )
    .join("\n\n    ");
}

// Modify the main function call
function generateCombinedServicesFromDir(config) {
  const services = findClientFiles(config.dir);
  generateCombinedFiles({
    outputDir: config.dir,
    services,
    exportFileName: config.exportFileName,
  });
}

// --- main module ---
function parseArgs() {
  const args = process.argv.slice(2);
  const config = {
    dir: DEFAULT_CONFIG.dir,
    exportFileName: DEFAULT_CONFIG.exportFileName,
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case "--dir":
      case "-d":
        config.dir = args[++i];
        break;
      case "--output":
      case "-o":
        config.exportFileName = args[++i];
        break;
      case "--help":
      case "-h":
        console.log(`
Usage: node combine-services.js [options]

Options:
  -d, --dir <path>      Directory to scan for .client.d.ts files (default: "${DEFAULT_CONFIG.dir}")
  -o, --output <name>   Base name for output files without extension (default: "${DEFAULT_CONFIG.exportFileName}")
  -h, --help            Show this help message
        `);
        process.exit(0);
    }
  }

  return config;
}

function main() {
  try {
    const config = parseArgs();
    console.log(`Running with configuration:
  Directory: ${config.dir}
  Output filename: ${config.exportFileName}`);

    generateCombinedServicesFromDir(config);
    console.log("Successfully generated combined service files");
  } catch (error) {
    console.error("Error generating combined services:", error);
    process.exit(1);
  }
}

// Execute if this is the main module
if (require.main === module) {
  main();
}

// Export the main functions for use as a module
module.exports = {
  generateCombinedServicesFromDir,
  generateCombinedFiles,
  findClientFiles,
  DEFAULT_CONFIG,
};
