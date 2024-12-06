// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/auth/v1beta1/query.proto" (package "cosmos.auth.v1beta1", syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/auth/v1beta1/query.proto" (package "cosmos.auth.v1beta1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Params } from "./auth";
import { PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { PageRequest } from "../../base/query/v1beta1/pagination";
// @generated message type with reflection information, may provide speed optimized methods
class QueryAccountsRequest$Type extends MessageType {
    constructor() {
        super("cosmos.auth.v1beta1.QueryAccountsRequest", [
            { no: 1, name: "pagination", kind: "message", T: () => PageRequest }
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
                case /* cosmos.base.query.v1beta1.PageRequest pagination */ 1:
                    message.pagination = PageRequest.internalBinaryRead(reader, reader.uint32(), options, message.pagination);
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
        /* cosmos.base.query.v1beta1.PageRequest pagination = 1; */
        if (message.pagination)
            PageRequest.internalBinaryWrite(message.pagination, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.auth.v1beta1.QueryAccountsRequest
 */
export const QueryAccountsRequest = new QueryAccountsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryAccountsResponse$Type extends MessageType {
    constructor() {
        super("cosmos.auth.v1beta1.QueryAccountsResponse", [
            { no: 1, name: "accounts", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Any, options: { "cosmos_proto.accepts_interface": "AccountI" } },
            { no: 2, name: "pagination", kind: "message", T: () => PageResponse }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.accounts = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated google.protobuf.Any accounts */ 1:
                    message.accounts.push(Any.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* cosmos.base.query.v1beta1.PageResponse pagination */ 2:
                    message.pagination = PageResponse.internalBinaryRead(reader, reader.uint32(), options, message.pagination);
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
        /* repeated google.protobuf.Any accounts = 1; */
        for (let i = 0; i < message.accounts.length; i++)
            Any.internalBinaryWrite(message.accounts[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* cosmos.base.query.v1beta1.PageResponse pagination = 2; */
        if (message.pagination)
            PageResponse.internalBinaryWrite(message.pagination, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.auth.v1beta1.QueryAccountsResponse
 */
export const QueryAccountsResponse = new QueryAccountsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryAccountRequest$Type extends MessageType {
    constructor() {
        super("cosmos.auth.v1beta1.QueryAccountRequest", [
            { no: 1, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ], { "gogoproto.goproto_getters": false, "gogoproto.equal": false });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.address = "";
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
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.auth.v1beta1.QueryAccountRequest
 */
export const QueryAccountRequest = new QueryAccountRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryAccountResponse$Type extends MessageType {
    constructor() {
        super("cosmos.auth.v1beta1.QueryAccountResponse", [
            { no: 1, name: "account", kind: "message", T: () => Any, options: { "cosmos_proto.accepts_interface": "AccountI" } }
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
                case /* google.protobuf.Any account */ 1:
                    message.account = Any.internalBinaryRead(reader, reader.uint32(), options, message.account);
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
        /* google.protobuf.Any account = 1; */
        if (message.account)
            Any.internalBinaryWrite(message.account, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.auth.v1beta1.QueryAccountResponse
 */
export const QueryAccountResponse = new QueryAccountResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryParamsRequest$Type extends MessageType {
    constructor() {
        super("cosmos.auth.v1beta1.QueryParamsRequest", []);
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
 * @generated MessageType for protobuf message cosmos.auth.v1beta1.QueryParamsRequest
 */
export const QueryParamsRequest = new QueryParamsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryParamsResponse$Type extends MessageType {
    constructor() {
        super("cosmos.auth.v1beta1.QueryParamsResponse", [
            { no: 1, name: "params", kind: "message", T: () => Params, options: { "gogoproto.nullable": false } }
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
                case /* cosmos.auth.v1beta1.Params params */ 1:
                    message.params = Params.internalBinaryRead(reader, reader.uint32(), options, message.params);
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
        /* cosmos.auth.v1beta1.Params params = 1; */
        if (message.params)
            Params.internalBinaryWrite(message.params, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.auth.v1beta1.QueryParamsResponse
 */
export const QueryParamsResponse = new QueryParamsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryModuleAccountByNameRequest$Type extends MessageType {
    constructor() {
        super("cosmos.auth.v1beta1.QueryModuleAccountByNameRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.name = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
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
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.auth.v1beta1.QueryModuleAccountByNameRequest
 */
export const QueryModuleAccountByNameRequest = new QueryModuleAccountByNameRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryModuleAccountByNameResponse$Type extends MessageType {
    constructor() {
        super("cosmos.auth.v1beta1.QueryModuleAccountByNameResponse", [
            { no: 1, name: "account", kind: "message", T: () => Any, options: { "cosmos_proto.accepts_interface": "ModuleAccountI" } }
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
                case /* google.protobuf.Any account */ 1:
                    message.account = Any.internalBinaryRead(reader, reader.uint32(), options, message.account);
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
        /* google.protobuf.Any account = 1; */
        if (message.account)
            Any.internalBinaryWrite(message.account, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.auth.v1beta1.QueryModuleAccountByNameResponse
 */
export const QueryModuleAccountByNameResponse = new QueryModuleAccountByNameResponse$Type();
/**
 * @generated ServiceType for protobuf service cosmos.auth.v1beta1.Query
 */
export const Query = new ServiceType("cosmos.auth.v1beta1.Query", [
    { name: "Accounts", options: { "google.api.http": { get: "/cosmos/auth/v1beta1/accounts" } }, I: QueryAccountsRequest, O: QueryAccountsResponse },
    { name: "Account", options: { "google.api.http": { get: "/cosmos/auth/v1beta1/accounts/{address}" } }, I: QueryAccountRequest, O: QueryAccountResponse },
    { name: "Params", options: { "google.api.http": { get: "/cosmos/auth/v1beta1/params" } }, I: QueryParamsRequest, O: QueryParamsResponse },
    { name: "ModuleAccountByName", options: { "google.api.http": { get: "/cosmos/auth/v1beta1/module_accounts/{name}" } }, I: QueryModuleAccountByNameRequest, O: QueryModuleAccountByNameResponse }
]);