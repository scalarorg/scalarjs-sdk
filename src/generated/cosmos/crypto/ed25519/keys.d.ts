// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/crypto/ed25519/keys.proto" (package "cosmos.crypto.ed25519", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * PubKey is an ed25519 public key for handling Tendermint keys in SDK.
 * It's needed for Any serialization and SDK compatibility.
 * It must not be used in a non Tendermint key context because it doesn't implement
 * ADR-28. Nevertheless, you will like to use ed25519 in app user level
 * then you must create a new proto message and follow ADR-28 for Address construction.
 *
 * @generated from protobuf message cosmos.crypto.ed25519.PubKey
 */
export interface PubKey {
    /**
     * @generated from protobuf field: bytes key = 1;
     */
    key: Uint8Array;
}
/**
 * Deprecated: PrivKey defines a ed25519 private key.
 * NOTE: ed25519 keys must not be used in SDK apps except in a tendermint validator context.
 *
 * @generated from protobuf message cosmos.crypto.ed25519.PrivKey
 */
export interface PrivKey {
    /**
     * @generated from protobuf field: bytes key = 1;
     */
    key: Uint8Array;
}
declare class PubKey$Type extends MessageType<PubKey> {
    constructor();
    create(value?: PartialMessage<PubKey>): PubKey;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PubKey): PubKey;
    internalBinaryWrite(message: PubKey, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.crypto.ed25519.PubKey
 */
export declare const PubKey: PubKey$Type;
declare class PrivKey$Type extends MessageType<PrivKey> {
    constructor();
    create(value?: PartialMessage<PrivKey>): PrivKey;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PrivKey): PrivKey;
    internalBinaryWrite(message: PrivKey, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.crypto.ed25519.PrivKey
 */
export declare const PrivKey: PrivKey$Type;
export {};