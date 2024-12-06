// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "ibc/applications/transfer/v1/transfer.proto" (package "ibc.applications.transfer.v1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class DenomTrace$Type extends MessageType {
    constructor() {
        super("ibc.applications.transfer.v1.DenomTrace", [
            { no: 1, name: "path", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "base_denom", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.path = "";
        message.baseDenom = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string path */ 1:
                    message.path = reader.string();
                    break;
                case /* string base_denom */ 2:
                    message.baseDenom = reader.string();
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
        /* string path = 1; */
        if (message.path !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.path);
        /* string base_denom = 2; */
        if (message.baseDenom !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.baseDenom);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.applications.transfer.v1.DenomTrace
 */
export const DenomTrace = new DenomTrace$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Params$Type extends MessageType {
    constructor() {
        super("ibc.applications.transfer.v1.Params", [
            { no: 1, name: "send_enabled", kind: "scalar", T: 8 /*ScalarType.BOOL*/, options: { "gogoproto.moretags": "yaml:\"send_enabled\"" } },
            { no: 2, name: "receive_enabled", kind: "scalar", T: 8 /*ScalarType.BOOL*/, options: { "gogoproto.moretags": "yaml:\"receive_enabled\"" } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.sendEnabled = false;
        message.receiveEnabled = false;
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool send_enabled */ 1:
                    message.sendEnabled = reader.bool();
                    break;
                case /* bool receive_enabled */ 2:
                    message.receiveEnabled = reader.bool();
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
        /* bool send_enabled = 1; */
        if (message.sendEnabled !== false)
            writer.tag(1, WireType.Varint).bool(message.sendEnabled);
        /* bool receive_enabled = 2; */
        if (message.receiveEnabled !== false)
            writer.tag(2, WireType.Varint).bool(message.receiveEnabled);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.applications.transfer.v1.Params
 */
export const Params = new Params$Type();
