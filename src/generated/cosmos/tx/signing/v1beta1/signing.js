// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/tx/signing/v1beta1/signing.proto" (package "cosmos.tx.signing.v1beta1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { CompactBitArray } from "../../../crypto/multisig/v1beta1/multisig";
import { Any } from "../../../../google/protobuf/any";
/**
 * SignMode represents a signing mode with its own security guarantees.
 *
 * @generated from protobuf enum cosmos.tx.signing.v1beta1.SignMode
 */
export var SignMode;
(function (SignMode) {
    /**
     * SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
     * rejected
     *
     * @generated from protobuf enum value: SIGN_MODE_UNSPECIFIED = 0;
     */
    SignMode[SignMode["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
     * verified with raw bytes from Tx
     *
     * @generated from protobuf enum value: SIGN_MODE_DIRECT = 1;
     */
    SignMode[SignMode["DIRECT"] = 1] = "DIRECT";
    /**
     * SIGN_MODE_TEXTUAL is a future signing mode that will verify some
     * human-readable textual representation on top of the binary representation
     * from SIGN_MODE_DIRECT
     *
     * @generated from protobuf enum value: SIGN_MODE_TEXTUAL = 2;
     */
    SignMode[SignMode["TEXTUAL"] = 2] = "TEXTUAL";
    /**
     * SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
     * Amino JSON and will be removed in the future
     *
     * @generated from protobuf enum value: SIGN_MODE_LEGACY_AMINO_JSON = 127;
     */
    SignMode[SignMode["LEGACY_AMINO_JSON"] = 127] = "LEGACY_AMINO_JSON";
    /**
     * SIGN_MODE_EIP_191 specifies the sign mode for EIP 191 signing on the Cosmos
     * SDK. Ref: https://eips.ethereum.org/EIPS/eip-191
     *
     * Currently, SIGN_MODE_EIP_191 is registered as a SignMode enum variant,
     * but is not implemented on the SDK by default. To enable EIP-191, you need
     * to pass a custom `TxConfig` that has an implementation of
     * `SignModeHandler` for EIP-191. The SDK may decide to fully support
     * EIP-191 in the future.
     *
     * Since: cosmos-sdk 0.45.2
     *
     * @generated from protobuf enum value: SIGN_MODE_EIP_191 = 191;
     */
    SignMode[SignMode["EIP_191"] = 191] = "EIP_191";
})(SignMode || (SignMode = {}));
// @generated message type with reflection information, may provide speed optimized methods
class SignatureDescriptors$Type extends MessageType {
    constructor() {
        super("cosmos.tx.signing.v1beta1.SignatureDescriptors", [
            { no: 1, name: "signatures", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SignatureDescriptor }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.signatures = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated cosmos.tx.signing.v1beta1.SignatureDescriptor signatures */ 1:
                    message.signatures.push(SignatureDescriptor.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated cosmos.tx.signing.v1beta1.SignatureDescriptor signatures = 1; */
        for (let i = 0; i < message.signatures.length; i++)
            SignatureDescriptor.internalBinaryWrite(message.signatures[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.tx.signing.v1beta1.SignatureDescriptors
 */
export const SignatureDescriptors = new SignatureDescriptors$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SignatureDescriptor$Type extends MessageType {
    constructor() {
        super("cosmos.tx.signing.v1beta1.SignatureDescriptor", [
            { no: 1, name: "public_key", kind: "message", T: () => Any },
            { no: 2, name: "data", kind: "message", T: () => SignatureDescriptor_Data },
            { no: 3, name: "sequence", kind: "scalar", T: 4 /*ScalarType.UINT64*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.sequence = "0";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.Any public_key */ 1:
                    message.publicKey = Any.internalBinaryRead(reader, reader.uint32(), options, message.publicKey);
                    break;
                case /* cosmos.tx.signing.v1beta1.SignatureDescriptor.Data data */ 2:
                    message.data = SignatureDescriptor_Data.internalBinaryRead(reader, reader.uint32(), options, message.data);
                    break;
                case /* uint64 sequence */ 3:
                    message.sequence = reader.uint64().toString();
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
        /* google.protobuf.Any public_key = 1; */
        if (message.publicKey)
            Any.internalBinaryWrite(message.publicKey, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* cosmos.tx.signing.v1beta1.SignatureDescriptor.Data data = 2; */
        if (message.data)
            SignatureDescriptor_Data.internalBinaryWrite(message.data, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* uint64 sequence = 3; */
        if (message.sequence !== "0")
            writer.tag(3, WireType.Varint).uint64(message.sequence);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.tx.signing.v1beta1.SignatureDescriptor
 */
export const SignatureDescriptor = new SignatureDescriptor$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SignatureDescriptor_Data$Type extends MessageType {
    constructor() {
        super("cosmos.tx.signing.v1beta1.SignatureDescriptor.Data", [
            { no: 1, name: "single", kind: "message", oneof: "sum", T: () => SignatureDescriptor_Data_Single },
            { no: 2, name: "multi", kind: "message", oneof: "sum", T: () => SignatureDescriptor_Data_Multi }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.sum = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single single */ 1:
                    message.sum = {
                        oneofKind: "single",
                        single: SignatureDescriptor_Data_Single.internalBinaryRead(reader, reader.uint32(), options, message.sum.single)
                    };
                    break;
                case /* cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi multi */ 2:
                    message.sum = {
                        oneofKind: "multi",
                        multi: SignatureDescriptor_Data_Multi.internalBinaryRead(reader, reader.uint32(), options, message.sum.multi)
                    };
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
        /* cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single single = 1; */
        if (message.sum.oneofKind === "single")
            SignatureDescriptor_Data_Single.internalBinaryWrite(message.sum.single, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi multi = 2; */
        if (message.sum.oneofKind === "multi")
            SignatureDescriptor_Data_Multi.internalBinaryWrite(message.sum.multi, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.tx.signing.v1beta1.SignatureDescriptor.Data
 */
export const SignatureDescriptor_Data = new SignatureDescriptor_Data$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SignatureDescriptor_Data_Single$Type extends MessageType {
    constructor() {
        super("cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single", [
            { no: 1, name: "mode", kind: "enum", T: () => ["cosmos.tx.signing.v1beta1.SignMode", SignMode, "SIGN_MODE_"] },
            { no: 2, name: "signature", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.mode = 0;
        message.signature = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* cosmos.tx.signing.v1beta1.SignMode mode */ 1:
                    message.mode = reader.int32();
                    break;
                case /* bytes signature */ 2:
                    message.signature = reader.bytes();
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
        /* cosmos.tx.signing.v1beta1.SignMode mode = 1; */
        if (message.mode !== 0)
            writer.tag(1, WireType.Varint).int32(message.mode);
        /* bytes signature = 2; */
        if (message.signature.length)
            writer.tag(2, WireType.LengthDelimited).bytes(message.signature);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single
 */
export const SignatureDescriptor_Data_Single = new SignatureDescriptor_Data_Single$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SignatureDescriptor_Data_Multi$Type extends MessageType {
    constructor() {
        super("cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi", [
            { no: 1, name: "bitarray", kind: "message", T: () => CompactBitArray },
            { no: 2, name: "signatures", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SignatureDescriptor_Data }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.signatures = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* cosmos.crypto.multisig.v1beta1.CompactBitArray bitarray */ 1:
                    message.bitarray = CompactBitArray.internalBinaryRead(reader, reader.uint32(), options, message.bitarray);
                    break;
                case /* repeated cosmos.tx.signing.v1beta1.SignatureDescriptor.Data signatures */ 2:
                    message.signatures.push(SignatureDescriptor_Data.internalBinaryRead(reader, reader.uint32(), options));
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
        /* cosmos.crypto.multisig.v1beta1.CompactBitArray bitarray = 1; */
        if (message.bitarray)
            CompactBitArray.internalBinaryWrite(message.bitarray, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated cosmos.tx.signing.v1beta1.SignatureDescriptor.Data signatures = 2; */
        for (let i = 0; i < message.signatures.length; i++)
            SignatureDescriptor_Data.internalBinaryWrite(message.signatures[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi
 */
export const SignatureDescriptor_Data_Multi = new SignatureDescriptor_Data_Multi$Type();
