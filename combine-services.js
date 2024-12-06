const fs = require("fs");
const path = require("path");
const ts = require("typescript");

function generateCombinedFiles(servicesConfig) {
  const { outputDir, services } = servicesConfig;

  // Generate .d.ts content
  let dtsContent = `// @generated automatically
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
`;

  // Add imports and collect method types
  services.forEach((service) => {
    const { name, sourcePath } = service;

    // Calculate relative path for client class import (without .d.ts extension)
    const clientRelativePath = path.relative(
      outputDir,
      path.resolve(path.dirname(sourcePath), path.basename(sourcePath, ".d.ts"))
    );
    const adjustedClientPath = clientRelativePath.startsWith(".")
      ? clientRelativePath
      : `./${clientRelativePath}`;

    dtsContent += `import { ${
      service.clientClassName || "ServiceClient"
    } as ${name}ServiceClient } from "${adjustedClientPath}";\n`;

    // Read the source file to extract types
    const sourceContent = fs.readFileSync(sourcePath, "utf8");
    const importMatches =
      sourceContent.match(/import type {[^}]+} from "[^"]+";/g) || [];
    const typeImports = new Set();
    importMatches.forEach((imp) => {
      if (imp.includes("Request") || imp.includes("Response")) {
        // Extract the types and original path
        const [importClause, fromPath] = imp.split(" from ");
        // Remove quotes from the original path
        const originalPath = fromPath.slice(1, -2);

        // Calculate relative path from output directory to the import file
        const relativePath = path.relative(
          outputDir,
          path.resolve(path.dirname(sourcePath), originalPath)
        );

        // Create new import statement with adjusted path, ensuring it starts with "./"
        const adjustedPath = relativePath.startsWith(".")
          ? relativePath
          : `./${relativePath}`;
        const newImport = `${importClause} from "${adjustedPath}";`;
        typeImports.add(newImport);
      }
    });
    dtsContent += Array.from(typeImports).join("\n") + "\n";
  });

  // Start class declaration
  dtsContent += `\nexport declare class CombinedServiceClient {
    private readonly ${services
      .map((s) => `${s.varName}Client: ${s.name}ServiceClient`)
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
    return `import { ${service.clientClassName || "ServiceClient"} as ${
      service.name
    }ServiceClient } from "${adjustedClientPath}";`;
  })
  .join("\n")}

export class CombinedServiceClient {
    constructor(_transport) {
        ${services
          .map(
            (service) =>
              `this.${service.varName}Client = new ${service.name}ServiceClient(_transport);`
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
  fs.writeFileSync(path.join(outputDir, "combined-service.d.ts"), dtsContent);
  fs.writeFileSync(path.join(outputDir, "combined-service.js"), jsContent);
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
      const methodText = node.getText(sourceFile);
      methods.push(methodText);
    }
    ts.forEachChild(node, visit);
  }

  // Find the specified client class and visit its methods
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
          methods.push(child.name.text);
        }
      });
    }
    ts.forEachChild(node, visit);
  }
  ts.forEachChild(sourceFile, visit);

  return methods
    .map(
      (method) => `${method}(...args) {
        return this.${service.varName}Client.${method}(...args);
    }`
    )
    .join("\n\n    ");
}

// Example usage
const config = {
  outputDir: "src/generated",
  services: [
    {
      name: "Node",
      varName: "node",
      sourcePath: "src/generated/cosmos/base/node/v1beta1/query.client.d.ts",
      clientClassName: "ServiceClient",
    },
    {
      name: "Tendermint",
      varName: "tendermint",
      sourcePath:
        "src/generated/cosmos/base/tendermint/v1beta1/query.client.d.ts",
      clientClassName: "ServiceClient",
    },
    {
      name: "Reflection",
      varName: "reflection",
      sourcePath:
        "src/generated/cosmos/base/reflection/v2alpha1/reflection.client.d.ts",
      clientClassName: "ReflectionServiceClient",
    },
  ],
};

generateCombinedFiles(config);
