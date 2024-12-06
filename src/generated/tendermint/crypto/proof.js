// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "tendermint/crypto/proof.proto" (package "tendermint.crypto", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class Proof$Type extends MessageType {
    constructor() {
        super("tendermint.crypto.Proof", [
            { no: 1, name: "total", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 2, name: "index", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 3, name: "leaf_hash", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 4, name: "aunts", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.total = "0";
        message.index = "0";
        message.leafHash = new Uint8Array(0);
        message.aunts = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 total */ 1:
                    message.total = reader.int64().toString();
                    break;
                case /* int64 index */ 2:
                    message.index = reader.int64().toString();
                    break;
                case /* bytes leaf_hash */ 3:
                    message.leafHash = reader.bytes();
                    break;
                case /* repeated bytes aunts */ 4:
                    message.aunts.push(reader.bytes());
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
        /* int64 total = 1; */
        if (message.total !== "0")
            writer.tag(1, WireType.Varint).int64(message.total);
        /* int64 index = 2; */
        if (message.index !== "0")
            writer.tag(2, WireType.Varint).int64(message.index);
        /* bytes leaf_hash = 3; */
        if (message.leafHash.length)
            writer.tag(3, WireType.LengthDelimited).bytes(message.leafHash);
        /* repeated bytes aunts = 4; */
        for (let i = 0; i < message.aunts.length; i++)
            writer.tag(4, WireType.LengthDelimited).bytes(message.aunts[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tendermint.crypto.Proof
 */
export const Proof = new Proof$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ValueOp$Type extends MessageType {
    constructor() {
        super("tendermint.crypto.ValueOp", [
            { no: 1, name: "key", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "proof", kind: "message", T: () => Proof }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.key = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes key */ 1:
                    message.key = reader.bytes();
                    break;
                case /* tendermint.crypto.Proof proof */ 2:
                    message.proof = Proof.internalBinaryRead(reader, reader.uint32(), options, message.proof);
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
        /* bytes key = 1; */
        if (message.key.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.key);
        /* tendermint.crypto.Proof proof = 2; */
        if (message.proof)
            Proof.internalBinaryWrite(message.proof, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tendermint.crypto.ValueOp
 */
export const ValueOp = new ValueOp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DominoOp$Type extends MessageType {
    constructor() {
        super("tendermint.crypto.DominoOp", [
            { no: 1, name: "key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "input", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "output", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.key = "";
        message.input = "";
        message.output = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string key */ 1:
                    message.key = reader.string();
                    break;
                case /* string input */ 2:
                    message.input = reader.string();
                    break;
                case /* string output */ 3:
                    message.output = reader.string();
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
        /* string key = 1; */
        if (message.key !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.key);
        /* string input = 2; */
        if (message.input !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.input);
        /* string output = 3; */
        if (message.output !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.output);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tendermint.crypto.DominoOp
 */
export const DominoOp = new DominoOp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProofOp$Type extends MessageType {
    constructor() {
        super("tendermint.crypto.ProofOp", [
            { no: 1, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "key", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 3, name: "data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.type = "";
        message.key = new Uint8Array(0);
        message.data = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string type */ 1:
                    message.type = reader.string();
                    break;
                case /* bytes key */ 2:
                    message.key = reader.bytes();
                    break;
                case /* bytes data */ 3:
                    message.data = reader.bytes();
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
        /* string type = 1; */
        if (message.type !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.type);
        /* bytes key = 2; */
        if (message.key.length)
            writer.tag(2, WireType.LengthDelimited).bytes(message.key);
        /* bytes data = 3; */
        if (message.data.length)
            writer.tag(3, WireType.LengthDelimited).bytes(message.data);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tendermint.crypto.ProofOp
 */
export const ProofOp = new ProofOp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProofOps$Type extends MessageType {
    constructor() {
        super("tendermint.crypto.ProofOps", [
            { no: 1, name: "ops", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ProofOp, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.ops = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated tendermint.crypto.ProofOp ops */ 1:
                    message.ops.push(ProofOp.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated tendermint.crypto.ProofOp ops = 1; */
        for (let i = 0; i < message.ops.length; i++)
            ProofOp.internalBinaryWrite(message.ops[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tendermint.crypto.ProofOps
 */
export const ProofOps = new ProofOps$Type();