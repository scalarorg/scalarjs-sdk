// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmwasm/wasm/v1/authz.proto" (package "cosmwasm.wasm.v1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";
// @generated message type with reflection information, may provide speed optimized methods
class ContractExecutionAuthorization$Type extends MessageType {
    constructor() {
        super("cosmwasm.wasm.v1.ContractExecutionAuthorization", [
            { no: 1, name: "grants", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ContractGrant, options: { "gogoproto.nullable": false } }
        ], { "cosmos_proto.implements_interface": "cosmos.authz.v1beta1.Authorization" });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.grants = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated cosmwasm.wasm.v1.ContractGrant grants */ 1:
                    message.grants.push(ContractGrant.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated cosmwasm.wasm.v1.ContractGrant grants = 1; */
        for (let i = 0; i < message.grants.length; i++)
            ContractGrant.internalBinaryWrite(message.grants[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.ContractExecutionAuthorization
 */
export const ContractExecutionAuthorization = new ContractExecutionAuthorization$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ContractMigrationAuthorization$Type extends MessageType {
    constructor() {
        super("cosmwasm.wasm.v1.ContractMigrationAuthorization", [
            { no: 1, name: "grants", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ContractGrant, options: { "gogoproto.nullable": false } }
        ], { "cosmos_proto.implements_interface": "cosmos.authz.v1beta1.Authorization" });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.grants = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated cosmwasm.wasm.v1.ContractGrant grants */ 1:
                    message.grants.push(ContractGrant.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated cosmwasm.wasm.v1.ContractGrant grants = 1; */
        for (let i = 0; i < message.grants.length; i++)
            ContractGrant.internalBinaryWrite(message.grants[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.ContractMigrationAuthorization
 */
export const ContractMigrationAuthorization = new ContractMigrationAuthorization$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ContractGrant$Type extends MessageType {
    constructor() {
        super("cosmwasm.wasm.v1.ContractGrant", [
            { no: 1, name: "contract", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "limit", kind: "message", T: () => Any, options: { "cosmos_proto.accepts_interface": "cosmwasm.wasm.v1.ContractAuthzLimitX" } },
            { no: 3, name: "filter", kind: "message", T: () => Any, options: { "cosmos_proto.accepts_interface": "cosmwasm.wasm.v1.ContractAuthzFilterX" } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.contract = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string contract */ 1:
                    message.contract = reader.string();
                    break;
                case /* google.protobuf.Any limit */ 2:
                    message.limit = Any.internalBinaryRead(reader, reader.uint32(), options, message.limit);
                    break;
                case /* google.protobuf.Any filter */ 3:
                    message.filter = Any.internalBinaryRead(reader, reader.uint32(), options, message.filter);
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
        /* string contract = 1; */
        if (message.contract !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.contract);
        /* google.protobuf.Any limit = 2; */
        if (message.limit)
            Any.internalBinaryWrite(message.limit, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Any filter = 3; */
        if (message.filter)
            Any.internalBinaryWrite(message.filter, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.ContractGrant
 */
export const ContractGrant = new ContractGrant$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MaxCallsLimit$Type extends MessageType {
    constructor() {
        super("cosmwasm.wasm.v1.MaxCallsLimit", [
            { no: 1, name: "remaining", kind: "scalar", T: 4 /*ScalarType.UINT64*/ }
        ], { "cosmos_proto.implements_interface": "cosmwasm.wasm.v1.ContractAuthzLimitX" });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.remaining = "0";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 remaining */ 1:
                    message.remaining = reader.uint64().toString();
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
        /* uint64 remaining = 1; */
        if (message.remaining !== "0")
            writer.tag(1, WireType.Varint).uint64(message.remaining);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.MaxCallsLimit
 */
export const MaxCallsLimit = new MaxCallsLimit$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MaxFundsLimit$Type extends MessageType {
    constructor() {
        super("cosmwasm.wasm.v1.MaxFundsLimit", [
            { no: 1, name: "amounts", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Coin, options: { "gogoproto.nullable": false, "gogoproto.castrepeated": "github.com/cosmos/cosmos-sdk/types.Coins" } }
        ], { "cosmos_proto.implements_interface": "cosmwasm.wasm.v1.ContractAuthzLimitX" });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.amounts = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated cosmos.base.v1beta1.Coin amounts */ 1:
                    message.amounts.push(Coin.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated cosmos.base.v1beta1.Coin amounts = 1; */
        for (let i = 0; i < message.amounts.length; i++)
            Coin.internalBinaryWrite(message.amounts[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.MaxFundsLimit
 */
export const MaxFundsLimit = new MaxFundsLimit$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CombinedLimit$Type extends MessageType {
    constructor() {
        super("cosmwasm.wasm.v1.CombinedLimit", [
            { no: 1, name: "calls_remaining", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "amounts", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Coin, options: { "gogoproto.nullable": false, "gogoproto.castrepeated": "github.com/cosmos/cosmos-sdk/types.Coins" } }
        ], { "cosmos_proto.implements_interface": "cosmwasm.wasm.v1.ContractAuthzLimitX" });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.callsRemaining = "0";
        message.amounts = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 calls_remaining */ 1:
                    message.callsRemaining = reader.uint64().toString();
                    break;
                case /* repeated cosmos.base.v1beta1.Coin amounts */ 2:
                    message.amounts.push(Coin.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint64 calls_remaining = 1; */
        if (message.callsRemaining !== "0")
            writer.tag(1, WireType.Varint).uint64(message.callsRemaining);
        /* repeated cosmos.base.v1beta1.Coin amounts = 2; */
        for (let i = 0; i < message.amounts.length; i++)
            Coin.internalBinaryWrite(message.amounts[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.CombinedLimit
 */
export const CombinedLimit = new CombinedLimit$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AllowAllMessagesFilter$Type extends MessageType {
    constructor() {
        super("cosmwasm.wasm.v1.AllowAllMessagesFilter", [], { "cosmos_proto.implements_interface": "cosmwasm.wasm.v1.ContractAuthzFilterX" });
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
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.AllowAllMessagesFilter
 */
export const AllowAllMessagesFilter = new AllowAllMessagesFilter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AcceptedMessageKeysFilter$Type extends MessageType {
    constructor() {
        super("cosmwasm.wasm.v1.AcceptedMessageKeysFilter", [
            { no: 1, name: "keys", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ], { "cosmos_proto.implements_interface": "cosmwasm.wasm.v1.ContractAuthzFilterX" });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.keys = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string keys */ 1:
                    message.keys.push(reader.string());
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
        /* repeated string keys = 1; */
        for (let i = 0; i < message.keys.length; i++)
            writer.tag(1, WireType.LengthDelimited).string(message.keys[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.AcceptedMessageKeysFilter
 */
export const AcceptedMessageKeysFilter = new AcceptedMessageKeysFilter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AcceptedMessagesFilter$Type extends MessageType {
    constructor() {
        super("cosmwasm.wasm.v1.AcceptedMessagesFilter", [
            { no: 1, name: "messages", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.casttype": "RawContractMessage" } }
        ], { "cosmos_proto.implements_interface": "cosmwasm.wasm.v1.ContractAuthzFilterX" });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.messages = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated bytes messages */ 1:
                    message.messages.push(reader.bytes());
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
        /* repeated bytes messages = 1; */
        for (let i = 0; i < message.messages.length; i++)
            writer.tag(1, WireType.LengthDelimited).bytes(message.messages[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.AcceptedMessagesFilter
 */
export const AcceptedMessagesFilter = new AcceptedMessagesFilter$Type();
