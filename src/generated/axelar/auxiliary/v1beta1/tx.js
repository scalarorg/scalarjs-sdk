// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/auxiliary/v1beta1/tx.proto" (package "axelar.auxiliary.v1beta1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Result } from "../../../cosmos/base/abci/v1beta1/abci";
import { Any } from "../../../google/protobuf/any";
// @generated message type with reflection information, may provide speed optimized methods
class BatchRequest$Type extends MessageType {
    constructor() {
        super("axelar.auxiliary.v1beta1.BatchRequest", [
            { no: 1, name: "sender", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.casttype": "github.com/cosmos/cosmos-sdk/types.AccAddress" } },
            { no: 2, name: "messages", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Any, options: { "gogoproto.nullable": false, "cosmos_proto.accepts_interface": "cosmos.base.v1beta1.Msg" } }
        ], { "axelar.permission.exported.v1beta1.permission_role": "ROLE_UNRESTRICTED" });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.sender = new Uint8Array(0);
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
                case /* bytes sender */ 1:
                    message.sender = reader.bytes();
                    break;
                case /* repeated google.protobuf.Any messages */ 2:
                    message.messages.push(Any.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated google.protobuf.Any messages = 2; */
        for (let i = 0; i < message.messages.length; i++)
            Any.internalBinaryWrite(message.messages[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.auxiliary.v1beta1.BatchRequest
 */
export const BatchRequest = new BatchRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BatchResponse$Type extends MessageType {
    constructor() {
        super("axelar.auxiliary.v1beta1.BatchResponse", [
            { no: 1, name: "responses", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BatchResponse_Response, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.responses = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated axelar.auxiliary.v1beta1.BatchResponse.Response responses */ 1:
                    message.responses.push(BatchResponse_Response.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated axelar.auxiliary.v1beta1.BatchResponse.Response responses = 1; */
        for (let i = 0; i < message.responses.length; i++)
            BatchResponse_Response.internalBinaryWrite(message.responses[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.auxiliary.v1beta1.BatchResponse
 */
export const BatchResponse = new BatchResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BatchResponse_Response$Type extends MessageType {
    constructor() {
        super("axelar.auxiliary.v1beta1.BatchResponse.Response", [
            { no: 1, name: "result", kind: "message", oneof: "res", T: () => Result },
            { no: 2, name: "err", kind: "scalar", oneof: "res", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.res = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* cosmos.base.abci.v1beta1.Result result */ 1:
                    message.res = {
                        oneofKind: "result",
                        result: Result.internalBinaryRead(reader, reader.uint32(), options, message.res.result)
                    };
                    break;
                case /* string err */ 2:
                    message.res = {
                        oneofKind: "err",
                        err: reader.string()
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
        /* cosmos.base.abci.v1beta1.Result result = 1; */
        if (message.res.oneofKind === "result")
            Result.internalBinaryWrite(message.res.result, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string err = 2; */
        if (message.res.oneofKind === "err")
            writer.tag(2, WireType.LengthDelimited).string(message.res.err);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.auxiliary.v1beta1.BatchResponse.Response
 */
export const BatchResponse_Response = new BatchResponse_Response$Type();
