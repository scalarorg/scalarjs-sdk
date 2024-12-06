// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/authz/v1beta1/event.proto" (package "cosmos.authz.v1beta1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class EventGrant$Type extends MessageType {
    constructor() {
        super("cosmos.authz.v1beta1.EventGrant", [
            { no: 2, name: "msg_type_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "granter", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "grantee", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.msgTypeUrl = "";
        message.granter = "";
        message.grantee = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string msg_type_url */ 2:
                    message.msgTypeUrl = reader.string();
                    break;
                case /* string granter */ 3:
                    message.granter = reader.string();
                    break;
                case /* string grantee */ 4:
                    message.grantee = reader.string();
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
        /* string msg_type_url = 2; */
        if (message.msgTypeUrl !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.msgTypeUrl);
        /* string granter = 3; */
        if (message.granter !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.granter);
        /* string grantee = 4; */
        if (message.grantee !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.grantee);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.authz.v1beta1.EventGrant
 */
export const EventGrant = new EventGrant$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EventRevoke$Type extends MessageType {
    constructor() {
        super("cosmos.authz.v1beta1.EventRevoke", [
            { no: 2, name: "msg_type_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "granter", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "grantee", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.msgTypeUrl = "";
        message.granter = "";
        message.grantee = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string msg_type_url */ 2:
                    message.msgTypeUrl = reader.string();
                    break;
                case /* string granter */ 3:
                    message.granter = reader.string();
                    break;
                case /* string grantee */ 4:
                    message.grantee = reader.string();
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
        /* string msg_type_url = 2; */
        if (message.msgTypeUrl !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.msgTypeUrl);
        /* string granter = 3; */
        if (message.granter !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.granter);
        /* string grantee = 4; */
        if (message.grantee !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.grantee);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.authz.v1beta1.EventRevoke
 */
export const EventRevoke = new EventRevoke$Type();
