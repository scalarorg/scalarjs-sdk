// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "ibc/core/commitment/v1/commitment.proto" (package "ibc.core.commitment.v1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { CommitmentProof } from "../../../../proofs";
// @generated message type with reflection information, may provide speed optimized methods
class MerkleRoot$Type extends MessageType {
    constructor() {
        super("ibc.core.commitment.v1.MerkleRoot", [
            { no: 1, name: "hash", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ], { "gogoproto.goproto_getters": false });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.hash = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes hash */ 1:
                    message.hash = reader.bytes();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* bytes hash = 1; */
        if (message.hash.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.hash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.core.commitment.v1.MerkleRoot
 */
export const MerkleRoot = new MerkleRoot$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MerklePrefix$Type extends MessageType {
    constructor() {
        super("ibc.core.commitment.v1.MerklePrefix", [
            { no: 1, name: "key_prefix", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.moretags": "yaml:\"key_prefix\"" } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.keyPrefix = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes key_prefix */ 1:
                    message.keyPrefix = reader.bytes();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* bytes key_prefix = 1; */
        if (message.keyPrefix.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.keyPrefix);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.core.commitment.v1.MerklePrefix
 */
export const MerklePrefix = new MerklePrefix$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MerklePath$Type extends MessageType {
    constructor() {
        super("ibc.core.commitment.v1.MerklePath", [
            { no: 1, name: "key_path", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"key_path\"" } }
        ], { "gogoproto.goproto_stringer": false });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.keyPath = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string key_path */ 1:
                    message.keyPath.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated string key_path = 1; */
        for (let i = 0; i < message.keyPath.length; i++)
            writer.tag(1, WireType.LengthDelimited).string(message.keyPath[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.core.commitment.v1.MerklePath
 */
export const MerklePath = new MerklePath$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MerkleProof$Type extends MessageType {
    constructor() {
        super("ibc.core.commitment.v1.MerkleProof", [
            { no: 1, name: "proofs", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CommitmentProof }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.proofs = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated ics23.CommitmentProof proofs */ 1:
                    message.proofs.push(CommitmentProof.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated ics23.CommitmentProof proofs = 1; */
        for (let i = 0; i < message.proofs.length; i++)
            CommitmentProof.internalBinaryWrite(message.proofs[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.core.commitment.v1.MerkleProof
 */
export const MerkleProof = new MerkleProof$Type();
