// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/nexus/v1beta1/tx.proto" (package "axelar.nexus.v1beta1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { FeeInfo } from "../exported/v1beta1/types";
// @generated message type with reflection information, may provide speed optimized methods
class RegisterChainMaintainerRequest$Type extends MessageType {
    constructor() {
        super("axelar.nexus.v1beta1.RegisterChainMaintainerRequest", [
            { no: 1, name: "sender", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.casttype": "github.com/cosmos/cosmos-sdk/types.AccAddress" } },
            { no: 2, name: "chains", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/, options: { "gogoproto.casttype": "github.com/axelarnetwork/axelar-core/x/nexus/exported.ChainName" } }
        ], { "axelar.permission.exported.v1beta1.permission_role": "ROLE_UNRESTRICTED" });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.sender = new Uint8Array(0);
        message.chains = [];
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
                case /* repeated string chains */ 2:
                    message.chains.push(reader.string());
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
        /* repeated string chains = 2; */
        for (let i = 0; i < message.chains.length; i++)
            writer.tag(2, WireType.LengthDelimited).string(message.chains[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.nexus.v1beta1.RegisterChainMaintainerRequest
 */
export const RegisterChainMaintainerRequest = new RegisterChainMaintainerRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RegisterChainMaintainerResponse$Type extends MessageType {
    constructor() {
        super("axelar.nexus.v1beta1.RegisterChainMaintainerResponse", []);
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
 * @generated MessageType for protobuf message axelar.nexus.v1beta1.RegisterChainMaintainerResponse
 */
export const RegisterChainMaintainerResponse = new RegisterChainMaintainerResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeregisterChainMaintainerRequest$Type extends MessageType {
    constructor() {
        super("axelar.nexus.v1beta1.DeregisterChainMaintainerRequest", [
            { no: 1, name: "sender", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.casttype": "github.com/cosmos/cosmos-sdk/types.AccAddress" } },
            { no: 2, name: "chains", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/, options: { "gogoproto.casttype": "github.com/axelarnetwork/axelar-core/x/nexus/exported.ChainName" } }
        ], { "axelar.permission.exported.v1beta1.permission_role": "ROLE_UNRESTRICTED" });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.sender = new Uint8Array(0);
        message.chains = [];
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
                case /* repeated string chains */ 2:
                    message.chains.push(reader.string());
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
        /* repeated string chains = 2; */
        for (let i = 0; i < message.chains.length; i++)
            writer.tag(2, WireType.LengthDelimited).string(message.chains[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.nexus.v1beta1.DeregisterChainMaintainerRequest
 */
export const DeregisterChainMaintainerRequest = new DeregisterChainMaintainerRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeregisterChainMaintainerResponse$Type extends MessageType {
    constructor() {
        super("axelar.nexus.v1beta1.DeregisterChainMaintainerResponse", []);
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
 * @generated MessageType for protobuf message axelar.nexus.v1beta1.DeregisterChainMaintainerResponse
 */
export const DeregisterChainMaintainerResponse = new DeregisterChainMaintainerResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ActivateChainRequest$Type extends MessageType {
    constructor() {
        super("axelar.nexus.v1beta1.ActivateChainRequest", [
            { no: 1, name: "sender", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.casttype": "github.com/cosmos/cosmos-sdk/types.AccAddress" } },
            { no: 2, name: "chains", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/, options: { "gogoproto.casttype": "github.com/axelarnetwork/axelar-core/x/nexus/exported.ChainName" } }
        ], { "axelar.permission.exported.v1beta1.permission_role": "ROLE_ACCESS_CONTROL" });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.sender = new Uint8Array(0);
        message.chains = [];
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
                case /* repeated string chains */ 2:
                    message.chains.push(reader.string());
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
        /* repeated string chains = 2; */
        for (let i = 0; i < message.chains.length; i++)
            writer.tag(2, WireType.LengthDelimited).string(message.chains[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.nexus.v1beta1.ActivateChainRequest
 */
export const ActivateChainRequest = new ActivateChainRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ActivateChainResponse$Type extends MessageType {
    constructor() {
        super("axelar.nexus.v1beta1.ActivateChainResponse", []);
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
 * @generated MessageType for protobuf message axelar.nexus.v1beta1.ActivateChainResponse
 */
export const ActivateChainResponse = new ActivateChainResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeactivateChainRequest$Type extends MessageType {
    constructor() {
        super("axelar.nexus.v1beta1.DeactivateChainRequest", [
            { no: 1, name: "sender", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.casttype": "github.com/cosmos/cosmos-sdk/types.AccAddress" } },
            { no: 2, name: "chains", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/, options: { "gogoproto.casttype": "github.com/axelarnetwork/axelar-core/x/nexus/exported.ChainName" } }
        ], { "axelar.permission.exported.v1beta1.permission_role": "ROLE_ACCESS_CONTROL" });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.sender = new Uint8Array(0);
        message.chains = [];
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
                case /* repeated string chains */ 2:
                    message.chains.push(reader.string());
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
        /* repeated string chains = 2; */
        for (let i = 0; i < message.chains.length; i++)
            writer.tag(2, WireType.LengthDelimited).string(message.chains[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.nexus.v1beta1.DeactivateChainRequest
 */
export const DeactivateChainRequest = new DeactivateChainRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeactivateChainResponse$Type extends MessageType {
    constructor() {
        super("axelar.nexus.v1beta1.DeactivateChainResponse", []);
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
 * @generated MessageType for protobuf message axelar.nexus.v1beta1.DeactivateChainResponse
 */
export const DeactivateChainResponse = new DeactivateChainResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RegisterAssetFeeRequest$Type extends MessageType {
    constructor() {
        super("axelar.nexus.v1beta1.RegisterAssetFeeRequest", [
            { no: 1, name: "sender", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.casttype": "github.com/cosmos/cosmos-sdk/types.AccAddress" } },
            { no: 2, name: "fee_info", kind: "message", T: () => FeeInfo, options: { "gogoproto.nullable": false } }
        ], { "axelar.permission.exported.v1beta1.permission_role": "ROLE_CHAIN_MANAGEMENT" });
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
                case /* axelar.nexus.exported.v1beta1.FeeInfo fee_info */ 2:
                    message.feeInfo = FeeInfo.internalBinaryRead(reader, reader.uint32(), options, message.feeInfo);
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
        /* axelar.nexus.exported.v1beta1.FeeInfo fee_info = 2; */
        if (message.feeInfo)
            FeeInfo.internalBinaryWrite(message.feeInfo, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.nexus.v1beta1.RegisterAssetFeeRequest
 */
export const RegisterAssetFeeRequest = new RegisterAssetFeeRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RegisterAssetFeeResponse$Type extends MessageType {
    constructor() {
        super("axelar.nexus.v1beta1.RegisterAssetFeeResponse", []);
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
 * @generated MessageType for protobuf message axelar.nexus.v1beta1.RegisterAssetFeeResponse
 */
export const RegisterAssetFeeResponse = new RegisterAssetFeeResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetTransferRateLimitRequest$Type extends MessageType {
    constructor() {
        super("axelar.nexus.v1beta1.SetTransferRateLimitRequest", [
            { no: 1, name: "sender", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.casttype": "github.com/cosmos/cosmos-sdk/types.AccAddress" } },
            { no: 2, name: "chain", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.casttype": "github.com/axelarnetwork/axelar-core/x/nexus/exported.ChainName" } },
            { no: 3, name: "limit", kind: "message", T: () => Coin, options: { "gogoproto.nullable": false } },
            { no: 4, name: "window", kind: "message", T: () => Duration, options: { "gogoproto.nullable": false, "gogoproto.stdduration": true } }
        ], { "axelar.permission.exported.v1beta1.permission_role": "ROLE_ACCESS_CONTROL" });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.sender = new Uint8Array(0);
        message.chain = "";
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
                case /* cosmos.base.v1beta1.Coin limit */ 3:
                    message.limit = Coin.internalBinaryRead(reader, reader.uint32(), options, message.limit);
                    break;
                case /* google.protobuf.Duration window */ 4:
                    message.window = Duration.internalBinaryRead(reader, reader.uint32(), options, message.window);
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
        /* cosmos.base.v1beta1.Coin limit = 3; */
        if (message.limit)
            Coin.internalBinaryWrite(message.limit, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration window = 4; */
        if (message.window)
            Duration.internalBinaryWrite(message.window, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.nexus.v1beta1.SetTransferRateLimitRequest
 */
export const SetTransferRateLimitRequest = new SetTransferRateLimitRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetTransferRateLimitResponse$Type extends MessageType {
    constructor() {
        super("axelar.nexus.v1beta1.SetTransferRateLimitResponse", []);
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
 * @generated MessageType for protobuf message axelar.nexus.v1beta1.SetTransferRateLimitResponse
 */
export const SetTransferRateLimitResponse = new SetTransferRateLimitResponse$Type();
