npx rimraf build
pnpm tsc -m commonjs --outDir build/commonjs
pnpm tsc -m esnext --outDir build/module
