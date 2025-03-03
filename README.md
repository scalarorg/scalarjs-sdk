# ScalarJS SDK

## Overview

The ScalarJS SDK is a TypeScript library that provides a set of functions and utilities for interacting with the Scalar network. It allows developers to interact with Scalar's smart contracts and blockchain infrastructure from their JavaScript or TypeScript applications.

## Dependencies

To generate JS/TS code from protocol buufers, you need to install:

- https://formulae.brew.sh/formula/protobuf#default

You can use Brew on macOS:

```
brew install protobuf
```

## Rebuilding types

```sh
bun sync 
bun codegen
```