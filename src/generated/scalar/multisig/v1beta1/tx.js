// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "scalar/multisig/v1beta1/tx.proto" (package "scalar.multisig.v1beta1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class StartKeygenRequest$Type extends MessageType {
    constructor() {
        super("scalar.multisig.v1beta1.StartKeygenRequest", [
            { no: 1, name: "sender", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.casttype": "github.com/cosmos/cosmos-sdk/types.AccAddress" } },
            { no: 2, name: "key_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.customname": "KeyID", "gogoproto.casttype": "github.com/scalarorg/scalar-core/x/multisig/exported.KeyID" } }
        ], { "scalar.permission.exported.v1beta1.permission_role": "ROLE_CHAIN_MANAGEMENT" });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.sender = "";
        message.keyId = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string sender */ 1:
                    message.sender = reader.string();
                    break;
                case /* string key_id */ 2:
                    message.keyId = reader.string();
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
        /* string sender = 1; */
        if (message.sender !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.sender);
        /* string key_id = 2; */
        if (message.keyId !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.keyId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.multisig.v1beta1.StartKeygenRequest
 */
export const StartKeygenRequest = new StartKeygenRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StartKeygenResponse$Type extends MessageType {
    constructor() {
        super("scalar.multisig.v1beta1.StartKeygenResponse", []);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target !== null && target !== void 0 ? target : this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.multisig.v1beta1.StartKeygenResponse
 */
export const StartKeygenResponse = new StartKeygenResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SubmitPubKeyRequest$Type extends MessageType {
    constructor() {
        super("scalar.multisig.v1beta1.SubmitPubKeyRequest", [
            { no: 1, name: "sender", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.casttype": "github.com/cosmos/cosmos-sdk/types.AccAddress" } },
            { no: 2, name: "key_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.customname": "KeyID", "gogoproto.casttype": "github.com/scalarorg/scalar-core/x/multisig/exported.KeyID" } },
            { no: 3, name: "pub_key", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.casttype": "github.com/scalarorg/scalar-core/x/multisig/exported.PublicKey" } },
            { no: 4, name: "signature", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.casttype": "Signature" } }
        ], { "scalar.permission.exported.v1beta1.permission_role": "ROLE_UNRESTRICTED" });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.sender = "";
        message.keyId = "";
        message.pubKey = new Uint8Array(0);
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
                case /* string sender */ 1:
                    message.sender = reader.string();
                    break;
                case /* string key_id */ 2:
                    message.keyId = reader.string();
                    break;
                case /* bytes pub_key */ 3:
                    message.pubKey = reader.bytes();
                    break;
                case /* bytes signature */ 4:
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
        /* string sender = 1; */
        if (message.sender !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.sender);
        /* string key_id = 2; */
        if (message.keyId !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.keyId);
        /* bytes pub_key = 3; */
        if (message.pubKey.length)
            writer.tag(3, WireType.LengthDelimited).bytes(message.pubKey);
        /* bytes signature = 4; */
        if (message.signature.length)
            writer.tag(4, WireType.LengthDelimited).bytes(message.signature);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.multisig.v1beta1.SubmitPubKeyRequest
 */
export const SubmitPubKeyRequest = new SubmitPubKeyRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SubmitPubKeyResponse$Type extends MessageType {
    constructor() {
        super("scalar.multisig.v1beta1.SubmitPubKeyResponse", []);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target !== null && target !== void 0 ? target : this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.multisig.v1beta1.SubmitPubKeyResponse
 */
export const SubmitPubKeyResponse = new SubmitPubKeyResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SubmitSignatureRequest$Type extends MessageType {
    constructor() {
        super("scalar.multisig.v1beta1.SubmitSignatureRequest", [
            { no: 1, name: "sender", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.casttype": "github.com/cosmos/cosmos-sdk/types.AccAddress" } },
            { no: 2, name: "sig_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, options: { "gogoproto.customname": "SigID" } },
            { no: 3, name: "signature", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.casttype": "Signature" } }
        ], { "scalar.permission.exported.v1beta1.permission_role": "ROLE_UNRESTRICTED" });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.sender = "";
        message.sigId = "0";
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
                case /* string sender */ 1:
                    message.sender = reader.string();
                    break;
                case /* uint64 sig_id */ 2:
                    message.sigId = reader.uint64().toString();
                    break;
                case /* bytes signature */ 3:
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
        /* string sender = 1; */
        if (message.sender !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.sender);
        /* uint64 sig_id = 2; */
        if (message.sigId !== "0")
            writer.tag(2, WireType.Varint).uint64(message.sigId);
        /* bytes signature = 3; */
        if (message.signature.length)
            writer.tag(3, WireType.LengthDelimited).bytes(message.signature);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.multisig.v1beta1.SubmitSignatureRequest
 */
export const SubmitSignatureRequest = new SubmitSignatureRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SubmitSignatureResponse$Type extends MessageType {
    constructor() {
        super("scalar.multisig.v1beta1.SubmitSignatureResponse", []);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target !== null && target !== void 0 ? target : this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.multisig.v1beta1.SubmitSignatureResponse
 */
export const SubmitSignatureResponse = new SubmitSignatureResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RotateKeyRequest$Type extends MessageType {
    constructor() {
        super("scalar.multisig.v1beta1.RotateKeyRequest", [
            { no: 1, name: "sender", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.casttype": "github.com/cosmos/cosmos-sdk/types.AccAddress" } },
            { no: 2, name: "chain", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.casttype": "github.com/scalarorg/scalar-core/x/nexus/exported.ChainName" } },
            { no: 3, name: "key_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.customname": "KeyID", "gogoproto.casttype": "github.com/scalarorg/scalar-core/x/multisig/exported.KeyID" } }
        ], { "scalar.permission.exported.v1beta1.permission_role": "ROLE_CHAIN_MANAGEMENT" });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.sender = new Uint8Array(0);
        message.chain = "";
        message.keyId = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes sender */ 1:
                    message.sender = reader.bytes();
                    break;
                case /* string chain */ 2:
                    message.chain = reader.string();
                    break;
                case /* string key_id */ 3:
                    message.keyId = reader.string();
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
        /* bytes sender = 1; */
        if (message.sender.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.sender);
        /* string chain = 2; */
        if (message.chain !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.chain);
        /* string key_id = 3; */
        if (message.keyId !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.keyId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.multisig.v1beta1.RotateKeyRequest
 */
export const RotateKeyRequest = new RotateKeyRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RotateKeyResponse$Type extends MessageType {
    constructor() {
        super("scalar.multisig.v1beta1.RotateKeyResponse", []);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target !== null && target !== void 0 ? target : this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.multisig.v1beta1.RotateKeyResponse
 */
export const RotateKeyResponse = new RotateKeyResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class KeygenOptOutRequest$Type extends MessageType {
    constructor() {
        super("scalar.multisig.v1beta1.KeygenOptOutRequest", [
            { no: 1, name: "sender", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.casttype": "github.com/cosmos/cosmos-sdk/types.AccAddress" } }
        ], { "scalar.permission.exported.v1beta1.permission_role": "ROLE_UNRESTRICTED" });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.sender = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes sender */ 1:
                    message.sender = reader.bytes();
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
        /* bytes sender = 1; */
        if (message.sender.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.sender);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.multisig.v1beta1.KeygenOptOutRequest
 */
export const KeygenOptOutRequest = new KeygenOptOutRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class KeygenOptOutResponse$Type extends MessageType {
    constructor() {
        super("scalar.multisig.v1beta1.KeygenOptOutResponse", []);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target !== null && target !== void 0 ? target : this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.multisig.v1beta1.KeygenOptOutResponse
 */
export const KeygenOptOutResponse = new KeygenOptOutResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class KeygenOptInRequest$Type extends MessageType {
    constructor() {
        super("scalar.multisig.v1beta1.KeygenOptInRequest", [
            { no: 1, name: "sender", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.casttype": "github.com/cosmos/cosmos-sdk/types.AccAddress" } }
        ], { "scalar.permission.exported.v1beta1.permission_role": "ROLE_UNRESTRICTED" });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.sender = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes sender */ 1:
                    message.sender = reader.bytes();
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
        /* bytes sender = 1; */
        if (message.sender.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.sender);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.multisig.v1beta1.KeygenOptInRequest
 */
export const KeygenOptInRequest = new KeygenOptInRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class KeygenOptInResponse$Type extends MessageType {
    constructor() {
        super("scalar.multisig.v1beta1.KeygenOptInResponse", []);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target !== null && target !== void 0 ? target : this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.multisig.v1beta1.KeygenOptInResponse
 */
export const KeygenOptInResponse = new KeygenOptInResponse$Type();
