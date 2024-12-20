// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/tx/v1beta1/tx.proto" (package "cosmos.tx.v1beta1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Coin } from "../../base/v1beta1/coin";
import { CompactBitArray } from "../../crypto/multisig/v1beta1/multisig";
import { SignMode } from "../signing/v1beta1/signing";
import { Any } from "../../../google/protobuf/any";
// @generated message type with reflection information, may provide speed optimized methods
class Tx$Type extends MessageType {
    constructor() {
        super("cosmos.tx.v1beta1.Tx", [
            { no: 1, name: "body", kind: "message", T: () => TxBody },
            { no: 2, name: "auth_info", kind: "message", T: () => AuthInfo },
            { no: 3, name: "signatures", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 12 /*ScalarType.BYTES*/ }
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
                case /* cosmos.tx.v1beta1.TxBody body */ 1:
                    message.body = TxBody.internalBinaryRead(reader, reader.uint32(), options, message.body);
                    break;
                case /* cosmos.tx.v1beta1.AuthInfo auth_info */ 2:
                    message.authInfo = AuthInfo.internalBinaryRead(reader, reader.uint32(), options, message.authInfo);
                    break;
                case /* repeated bytes signatures */ 3:
                    message.signatures.push(reader.bytes());
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
        /* cosmos.tx.v1beta1.TxBody body = 1; */
        if (message.body)
            TxBody.internalBinaryWrite(message.body, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* cosmos.tx.v1beta1.AuthInfo auth_info = 2; */
        if (message.authInfo)
            AuthInfo.internalBinaryWrite(message.authInfo, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* repeated bytes signatures = 3; */
        for (let i = 0; i < message.signatures.length; i++)
            writer.tag(3, WireType.LengthDelimited).bytes(message.signatures[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.tx.v1beta1.Tx
 */
export const Tx = new Tx$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TxRaw$Type extends MessageType {
    constructor() {
        super("cosmos.tx.v1beta1.TxRaw", [
            { no: 1, name: "body_bytes", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "auth_info_bytes", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 3, name: "signatures", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.bodyBytes = new Uint8Array(0);
        message.authInfoBytes = new Uint8Array(0);
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
                case /* bytes body_bytes */ 1:
                    message.bodyBytes = reader.bytes();
                    break;
                case /* bytes auth_info_bytes */ 2:
                    message.authInfoBytes = reader.bytes();
                    break;
                case /* repeated bytes signatures */ 3:
                    message.signatures.push(reader.bytes());
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
        /* bytes body_bytes = 1; */
        if (message.bodyBytes.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.bodyBytes);
        /* bytes auth_info_bytes = 2; */
        if (message.authInfoBytes.length)
            writer.tag(2, WireType.LengthDelimited).bytes(message.authInfoBytes);
        /* repeated bytes signatures = 3; */
        for (let i = 0; i < message.signatures.length; i++)
            writer.tag(3, WireType.LengthDelimited).bytes(message.signatures[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.tx.v1beta1.TxRaw
 */
export const TxRaw = new TxRaw$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SignDoc$Type extends MessageType {
    constructor() {
        super("cosmos.tx.v1beta1.SignDoc", [
            { no: 1, name: "body_bytes", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "auth_info_bytes", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 3, name: "chain_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "account_number", kind: "scalar", T: 4 /*ScalarType.UINT64*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.bodyBytes = new Uint8Array(0);
        message.authInfoBytes = new Uint8Array(0);
        message.chainId = "";
        message.accountNumber = "0";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes body_bytes */ 1:
                    message.bodyBytes = reader.bytes();
                    break;
                case /* bytes auth_info_bytes */ 2:
                    message.authInfoBytes = reader.bytes();
                    break;
                case /* string chain_id */ 3:
                    message.chainId = reader.string();
                    break;
                case /* uint64 account_number */ 4:
                    message.accountNumber = reader.uint64().toString();
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
        /* bytes body_bytes = 1; */
        if (message.bodyBytes.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.bodyBytes);
        /* bytes auth_info_bytes = 2; */
        if (message.authInfoBytes.length)
            writer.tag(2, WireType.LengthDelimited).bytes(message.authInfoBytes);
        /* string chain_id = 3; */
        if (message.chainId !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.chainId);
        /* uint64 account_number = 4; */
        if (message.accountNumber !== "0")
            writer.tag(4, WireType.Varint).uint64(message.accountNumber);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.tx.v1beta1.SignDoc
 */
export const SignDoc = new SignDoc$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TxBody$Type extends MessageType {
    constructor() {
        super("cosmos.tx.v1beta1.TxBody", [
            { no: 1, name: "messages", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Any },
            { no: 2, name: "memo", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "timeout_height", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 1023, name: "extension_options", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Any },
            { no: 2047, name: "non_critical_extension_options", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Any }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.messages = [];
        message.memo = "";
        message.timeoutHeight = "0";
        message.extensionOptions = [];
        message.nonCriticalExtensionOptions = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated google.protobuf.Any messages */ 1:
                    message.messages.push(Any.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string memo */ 2:
                    message.memo = reader.string();
                    break;
                case /* uint64 timeout_height */ 3:
                    message.timeoutHeight = reader.uint64().toString();
                    break;
                case /* repeated google.protobuf.Any extension_options */ 1023:
                    message.extensionOptions.push(Any.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated google.protobuf.Any non_critical_extension_options */ 2047:
                    message.nonCriticalExtensionOptions.push(Any.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated google.protobuf.Any messages = 1; */
        for (let i = 0; i < message.messages.length; i++)
            Any.internalBinaryWrite(message.messages[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string memo = 2; */
        if (message.memo !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.memo);
        /* uint64 timeout_height = 3; */
        if (message.timeoutHeight !== "0")
            writer.tag(3, WireType.Varint).uint64(message.timeoutHeight);
        /* repeated google.protobuf.Any extension_options = 1023; */
        for (let i = 0; i < message.extensionOptions.length; i++)
            Any.internalBinaryWrite(message.extensionOptions[i], writer.tag(1023, WireType.LengthDelimited).fork(), options).join();
        /* repeated google.protobuf.Any non_critical_extension_options = 2047; */
        for (let i = 0; i < message.nonCriticalExtensionOptions.length; i++)
            Any.internalBinaryWrite(message.nonCriticalExtensionOptions[i], writer.tag(2047, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.tx.v1beta1.TxBody
 */
export const TxBody = new TxBody$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AuthInfo$Type extends MessageType {
    constructor() {
        super("cosmos.tx.v1beta1.AuthInfo", [
            { no: 1, name: "signer_infos", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SignerInfo },
            { no: 2, name: "fee", kind: "message", T: () => Fee }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.signerInfos = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated cosmos.tx.v1beta1.SignerInfo signer_infos */ 1:
                    message.signerInfos.push(SignerInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* cosmos.tx.v1beta1.Fee fee */ 2:
                    message.fee = Fee.internalBinaryRead(reader, reader.uint32(), options, message.fee);
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
        /* repeated cosmos.tx.v1beta1.SignerInfo signer_infos = 1; */
        for (let i = 0; i < message.signerInfos.length; i++)
            SignerInfo.internalBinaryWrite(message.signerInfos[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* cosmos.tx.v1beta1.Fee fee = 2; */
        if (message.fee)
            Fee.internalBinaryWrite(message.fee, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.tx.v1beta1.AuthInfo
 */
export const AuthInfo = new AuthInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SignerInfo$Type extends MessageType {
    constructor() {
        super("cosmos.tx.v1beta1.SignerInfo", [
            { no: 1, name: "public_key", kind: "message", T: () => Any },
            { no: 2, name: "mode_info", kind: "message", T: () => ModeInfo },
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
                case /* cosmos.tx.v1beta1.ModeInfo mode_info */ 2:
                    message.modeInfo = ModeInfo.internalBinaryRead(reader, reader.uint32(), options, message.modeInfo);
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
        /* cosmos.tx.v1beta1.ModeInfo mode_info = 2; */
        if (message.modeInfo)
            ModeInfo.internalBinaryWrite(message.modeInfo, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message cosmos.tx.v1beta1.SignerInfo
 */
export const SignerInfo = new SignerInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ModeInfo$Type extends MessageType {
    constructor() {
        super("cosmos.tx.v1beta1.ModeInfo", [
            { no: 1, name: "single", kind: "message", oneof: "sum", T: () => ModeInfo_Single },
            { no: 2, name: "multi", kind: "message", oneof: "sum", T: () => ModeInfo_Multi }
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
                case /* cosmos.tx.v1beta1.ModeInfo.Single single */ 1:
                    message.sum = {
                        oneofKind: "single",
                        single: ModeInfo_Single.internalBinaryRead(reader, reader.uint32(), options, message.sum.single)
                    };
                    break;
                case /* cosmos.tx.v1beta1.ModeInfo.Multi multi */ 2:
                    message.sum = {
                        oneofKind: "multi",
                        multi: ModeInfo_Multi.internalBinaryRead(reader, reader.uint32(), options, message.sum.multi)
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
        /* cosmos.tx.v1beta1.ModeInfo.Single single = 1; */
        if (message.sum.oneofKind === "single")
            ModeInfo_Single.internalBinaryWrite(message.sum.single, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* cosmos.tx.v1beta1.ModeInfo.Multi multi = 2; */
        if (message.sum.oneofKind === "multi")
            ModeInfo_Multi.internalBinaryWrite(message.sum.multi, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.tx.v1beta1.ModeInfo
 */
export const ModeInfo = new ModeInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ModeInfo_Single$Type extends MessageType {
    constructor() {
        super("cosmos.tx.v1beta1.ModeInfo.Single", [
            { no: 1, name: "mode", kind: "enum", T: () => ["cosmos.tx.signing.v1beta1.SignMode", SignMode, "SIGN_MODE_"] }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.mode = 0;
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
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.tx.v1beta1.ModeInfo.Single
 */
export const ModeInfo_Single = new ModeInfo_Single$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ModeInfo_Multi$Type extends MessageType {
    constructor() {
        super("cosmos.tx.v1beta1.ModeInfo.Multi", [
            { no: 1, name: "bitarray", kind: "message", T: () => CompactBitArray },
            { no: 2, name: "mode_infos", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ModeInfo }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.modeInfos = [];
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
                case /* repeated cosmos.tx.v1beta1.ModeInfo mode_infos */ 2:
                    message.modeInfos.push(ModeInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated cosmos.tx.v1beta1.ModeInfo mode_infos = 2; */
        for (let i = 0; i < message.modeInfos.length; i++)
            ModeInfo.internalBinaryWrite(message.modeInfos[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.tx.v1beta1.ModeInfo.Multi
 */
export const ModeInfo_Multi = new ModeInfo_Multi$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Fee$Type extends MessageType {
    constructor() {
        super("cosmos.tx.v1beta1.Fee", [
            { no: 1, name: "amount", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Coin, options: { "gogoproto.nullable": false, "gogoproto.castrepeated": "github.com/cosmos/cosmos-sdk/types.Coins" } },
            { no: 2, name: "gas_limit", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 3, name: "payer", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "granter", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.amount = [];
        message.gasLimit = "0";
        message.payer = "";
        message.granter = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated cosmos.base.v1beta1.Coin amount */ 1:
                    message.amount.push(Coin.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint64 gas_limit */ 2:
                    message.gasLimit = reader.uint64().toString();
                    break;
                case /* string payer */ 3:
                    message.payer = reader.string();
                    break;
                case /* string granter */ 4:
                    message.granter = reader.string();
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
        /* repeated cosmos.base.v1beta1.Coin amount = 1; */
        for (let i = 0; i < message.amount.length; i++)
            Coin.internalBinaryWrite(message.amount[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* uint64 gas_limit = 2; */
        if (message.gasLimit !== "0")
            writer.tag(2, WireType.Varint).uint64(message.gasLimit);
        /* string payer = 3; */
        if (message.payer !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.payer);
        /* string granter = 4; */
        if (message.granter !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.granter);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.tx.v1beta1.Fee
 */
export const Fee = new Fee$Type();
