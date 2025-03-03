# Description: Generate typescript types from proto files

protoc -I=proto-gen -I=proto-gen/third_party proto-gen/scalar/**/**/*.proto\
 --plugin=./node_modules/.bin/protoc-gen-ts_proto\
 --ts_proto_out=src/proto\
 --ts_proto_opt='esModuleInterop=true,forceLong=long,useOptionals=messages'

# remove descriptor.ts to avoid infinite type recursion
npx rimraf src/google/protobuf/descriptor.ts

bun format