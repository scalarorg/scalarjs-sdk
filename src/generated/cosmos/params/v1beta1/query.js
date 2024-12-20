// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/params/v1beta1/query.proto" (package "cosmos.params.v1beta1", syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/params/v1beta1/query.proto" (package "cosmos.params.v1beta1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { ParamChange } from "./params";
// @generated message type with reflection information, may provide speed optimized methods
class QueryParamsRequest$Type extends MessageType {
    constructor() {
        super("cosmos.params.v1beta1.QueryParamsRequest", [
            { no: 1, name: "subspace", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "key", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.subspace = "";
        message.key = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string subspace */ 1:
                    message.subspace = reader.string();
                    break;
                case /* string key */ 2:
                    message.key = reader.string();
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
        /* string subspace = 1; */
        if (message.subspace !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.subspace);
        /* string key = 2; */
        if (message.key !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.key);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.params.v1beta1.QueryParamsRequest
 */
export const QueryParamsRequest = new QueryParamsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryParamsResponse$Type extends MessageType {
    constructor() {
        super("cosmos.params.v1beta1.QueryParamsResponse", [
            { no: 1, name: "param", kind: "message", T: () => ParamChange, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* cosmos.params.v1beta1.ParamChange param */ 1:
                    message.param = ParamChange.internalBinaryRead(reader, reader.uint32(), options, message.param);
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
        /* cosmos.params.v1beta1.ParamChange param = 1; */
        if (message.param)
            ParamChange.internalBinaryWrite(message.param, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.params.v1beta1.QueryParamsResponse
 */
export const QueryParamsResponse = new QueryParamsResponse$Type();
/**
 * @generated ServiceType for protobuf service cosmos.params.v1beta1.Query
 */
export const Query = new ServiceType("cosmos.params.v1beta1.Query", [
    { name: "Params", options: { "google.api.http": { get: "/cosmos/params/v1beta1/params" } }, I: QueryParamsRequest, O: QueryParamsResponse }
]);
