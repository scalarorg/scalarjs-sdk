npx rimraf build
bun tsc -m commonjs --outDir build/commonjs
bun tsc -m esnext --outDir build/module
