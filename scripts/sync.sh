# Description: Sync proto files from scalarorg/scalar-core

bun clean
bunx degit scalarorg/scalar-core/proto/scalar#${TAG:-'main'} proto/scalar
bunx degit scalarorg/scalar-core/third_party/proto#${TAG:-'main'} proto/third_party
