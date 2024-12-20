// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/bank/v1beta1/bank.proto" (package "cosmos.bank.v1beta1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Coin } from "../../base/v1beta1/coin";
// @generated message type with reflection information, may provide speed optimized methods
class Params$Type extends MessageType {
    constructor() {
        super("cosmos.bank.v1beta1.Params", [
            { no: 1, name: "send_enabled", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SendEnabled, options: { "gogoproto.moretags": "yaml:\"send_enabled,omitempty\"" } },
            { no: 2, name: "default_send_enabled", kind: "scalar", T: 8 /*ScalarType.BOOL*/, options: { "gogoproto.moretags": "yaml:\"default_send_enabled,omitempty\"" } }
        ], { "gogoproto.goproto_stringer": false });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.sendEnabled = [];
        message.defaultSendEnabled = false;
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated cosmos.bank.v1beta1.SendEnabled send_enabled */ 1:
                    message.sendEnabled.push(SendEnabled.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool default_send_enabled */ 2:
                    message.defaultSendEnabled = reader.bool();
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
        /* repeated cosmos.bank.v1beta1.SendEnabled send_enabled = 1; */
        for (let i = 0; i < message.sendEnabled.length; i++)
            SendEnabled.internalBinaryWrite(message.sendEnabled[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* bool default_send_enabled = 2; */
        if (message.defaultSendEnabled !== false)
            writer.tag(2, WireType.Varint).bool(message.defaultSendEnabled);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.bank.v1beta1.Params
 */
export const Params = new Params$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SendEnabled$Type extends MessageType {
    constructor() {
        super("cosmos.bank.v1beta1.SendEnabled", [
            { no: 1, name: "denom", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "enabled", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ], { "gogoproto.goproto_stringer": false, "gogoproto.equal": true });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.denom = "";
        message.enabled = false;
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string denom */ 1:
                    message.denom = reader.string();
                    break;
                case /* bool enabled */ 2:
                    message.enabled = reader.bool();
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
        /* string denom = 1; */
        if (message.denom !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.denom);
        /* bool enabled = 2; */
        if (message.enabled !== false)
            writer.tag(2, WireType.Varint).bool(message.enabled);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.bank.v1beta1.SendEnabled
 */
export const SendEnabled = new SendEnabled$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Input$Type extends MessageType {
    constructor() {
        super("cosmos.bank.v1beta1.Input", [
            { no: 1, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "coins", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Coin, options: { "gogoproto.nullable": false, "gogoproto.castrepeated": "github.com/cosmos/cosmos-sdk/types.Coins" } }
        ], { "gogoproto.goproto_getters": false, "gogoproto.equal": false });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.address = "";
        message.coins = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string address */ 1:
                    message.address = reader.string();
                    break;
                case /* repeated cosmos.base.v1beta1.Coin coins */ 2:
                    message.coins.push(Coin.internalBinaryRead(reader, reader.uint32(), options));
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
        /* string address = 1; */
        if (message.address !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.address);
        /* repeated cosmos.base.v1beta1.Coin coins = 2; */
        for (let i = 0; i < message.coins.length; i++)
            Coin.internalBinaryWrite(message.coins[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.bank.v1beta1.Input
 */
export const Input = new Input$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Output$Type extends MessageType {
    constructor() {
        super("cosmos.bank.v1beta1.Output", [
            { no: 1, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "coins", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Coin, options: { "gogoproto.nullable": false, "gogoproto.castrepeated": "github.com/cosmos/cosmos-sdk/types.Coins" } }
        ], { "gogoproto.goproto_getters": false, "gogoproto.equal": false });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.address = "";
        message.coins = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string address */ 1:
                    message.address = reader.string();
                    break;
                case /* repeated cosmos.base.v1beta1.Coin coins */ 2:
                    message.coins.push(Coin.internalBinaryRead(reader, reader.uint32(), options));
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
        /* string address = 1; */
        if (message.address !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.address);
        /* repeated cosmos.base.v1beta1.Coin coins = 2; */
        for (let i = 0; i < message.coins.length; i++)
            Coin.internalBinaryWrite(message.coins[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.bank.v1beta1.Output
 */
export const Output = new Output$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Supply$Type extends MessageType {
    constructor() {
        super("cosmos.bank.v1beta1.Supply", [
            { no: 1, name: "total", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Coin, options: { "gogoproto.nullable": false, "gogoproto.castrepeated": "github.com/cosmos/cosmos-sdk/types.Coins" } }
        ], { "gogoproto.goproto_getters": false, "gogoproto.equal": true, "cosmos_proto.implements_interface": "*github.com/cosmos/cosmos-sdk/x/bank/legacy/v040.SupplyI" });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.total = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated cosmos.base.v1beta1.Coin total */ 1:
                    message.total.push(Coin.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated cosmos.base.v1beta1.Coin total = 1; */
        for (let i = 0; i < message.total.length; i++)
            Coin.internalBinaryWrite(message.total[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @deprecated
 * @generated MessageType for protobuf message cosmos.bank.v1beta1.Supply
 */
export const Supply = new Supply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DenomUnit$Type extends MessageType {
    constructor() {
        super("cosmos.bank.v1beta1.DenomUnit", [
            { no: 1, name: "denom", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "exponent", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "aliases", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.denom = "";
        message.exponent = 0;
        message.aliases = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string denom */ 1:
                    message.denom = reader.string();
                    break;
                case /* uint32 exponent */ 2:
                    message.exponent = reader.uint32();
                    break;
                case /* repeated string aliases */ 3:
                    message.aliases.push(reader.string());
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
        /* string denom = 1; */
        if (message.denom !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.denom);
        /* uint32 exponent = 2; */
        if (message.exponent !== 0)
            writer.tag(2, WireType.Varint).uint32(message.exponent);
        /* repeated string aliases = 3; */
        for (let i = 0; i < message.aliases.length; i++)
            writer.tag(3, WireType.LengthDelimited).string(message.aliases[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.bank.v1beta1.DenomUnit
 */
export const DenomUnit = new DenomUnit$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Metadata$Type extends MessageType {
    constructor() {
        super("cosmos.bank.v1beta1.Metadata", [
            { no: 1, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "denom_units", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => DenomUnit },
            { no: 3, name: "base", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "display", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "symbol", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.description = "";
        message.denomUnits = [];
        message.base = "";
        message.display = "";
        message.name = "";
        message.symbol = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string description */ 1:
                    message.description = reader.string();
                    break;
                case /* repeated cosmos.bank.v1beta1.DenomUnit denom_units */ 2:
                    message.denomUnits.push(DenomUnit.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string base */ 3:
                    message.base = reader.string();
                    break;
                case /* string display */ 4:
                    message.display = reader.string();
                    break;
                case /* string name */ 5:
                    message.name = reader.string();
                    break;
                case /* string symbol */ 6:
                    message.symbol = reader.string();
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
        /* string description = 1; */
        if (message.description !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.description);
        /* repeated cosmos.bank.v1beta1.DenomUnit denom_units = 2; */
        for (let i = 0; i < message.denomUnits.length; i++)
            DenomUnit.internalBinaryWrite(message.denomUnits[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* string base = 3; */
        if (message.base !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.base);
        /* string display = 4; */
        if (message.display !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.display);
        /* string name = 5; */
        if (message.name !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.name);
        /* string symbol = 6; */
        if (message.symbol !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.symbol);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.bank.v1beta1.Metadata
 */
export const Metadata = new Metadata$Type();
