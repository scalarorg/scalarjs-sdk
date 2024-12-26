/// <reference types="bun-types" />
import { generateDtsBundle } from "dts-bundle-generator";
import { dependencies } from "./package.json";
import fs from "node:fs";

const external = [
  ...Object.keys(dependencies),
  "@grpc/grpc-js",
  "@protobuf-ts/grpc-transport",
];

// Build types bundle
await Bun.build({
  entrypoints: ["./src/types/index.ts"],
  external,
  format: "esm",
  minify: true,
  outdir: "./dist/types",
  sourcemap: "external",
  target: "browser",
});

// Build services bundle
await Bun.build({
  entrypoints: ["./src/services/index.ts"],
  external,
  format: "esm",
  minify: true,
  outdir: "./dist/services",
  sourcemap: "external",
  target: "node",
});

// Build main bundle
await Bun.build({
  entrypoints: ["./src/index.ts"],
  external,
  format: "esm",
  minify: true,
  outdir: "./dist",
  sourcemap: "external",
  target: "browser",
});

// Generate type definitions
const generateTypes = (entryPath: string, outputPath: string) => {
  const types = generateDtsBundle([{ filePath: entryPath }]);
  fs.mkdirSync(outputPath, { recursive: true });
  fs.writeFileSync(`${outputPath}/index.d.ts`, types.join("\n"));
};

generateTypes("./src/types/index.ts", "./dist/types");
generateTypes("./src/services/index.ts", "./dist/services");
generateTypes("./src/index.ts", "./dist");
