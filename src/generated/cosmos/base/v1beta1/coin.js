// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/base/v1beta1/coin.proto" (package "cosmos.base.v1beta1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class Coin$Type extends MessageType {
    constructor() {
        super("cosmos.base.v1beta1.Coin", [
            { no: 1, name: "denom", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "amount", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "Int" } }
        ], { "gogoproto.equal": true });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.denom = "";
        message.amount = "";
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
                case /* string amount */ 2:
                    message.amount = reader.string();
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
        /* string amount = 2; */
        if (message.amount !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.amount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.base.v1beta1.Coin
 */
export const Coin = new Coin$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DecCoin$Type extends MessageType {
    constructor() {
        super("cosmos.base.v1beta1.DecCoin", [
            { no: 1, name: "denom", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "amount", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "Dec" } }
        ], { "gogoproto.equal": true });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.denom = "";
        message.amount = "";
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
                case /* string amount */ 2:
                    message.amount = reader.string();
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
        /* string amount = 2; */
        if (message.amount !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.amount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.base.v1beta1.DecCoin
 */
export const DecCoin = new DecCoin$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IntProto$Type extends MessageType {
    constructor() {
        super("cosmos.base.v1beta1.IntProto", [
            { no: 1, name: "int", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "Int" } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.int = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string int */ 1:
                    message.int = reader.string();
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
        /* string int = 1; */
        if (message.int !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.int);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.base.v1beta1.IntProto
 */
export const IntProto = new IntProto$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DecProto$Type extends MessageType {
    constructor() {
        super("cosmos.base.v1beta1.DecProto", [
            { no: 1, name: "dec", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "Dec" } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.dec = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string dec */ 1:
                    message.dec = reader.string();
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
        /* string dec = 1; */
        if (message.dec !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.dec);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.base.v1beta1.DecProto
 */
export const DecProto = new DecProto$Type();