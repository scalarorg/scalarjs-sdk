# Description: Sync proto files from scalarorg/scalar-core

bun clean
bunx degit --force scalarorg/scalar-core/proto/scalar#${TAG:-'main'} proto-gen/scalar
bunx degit --force scalarorg/scalar-core/third_party/proto#${TAG:-'main'} proto-gen/third_party
