// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/authz/v1beta1/query.proto" (package "cosmos.authz.v1beta1", syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/authz/v1beta1/query.proto" (package "cosmos.authz.v1beta1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { GrantAuthorization } from "./authz";
import { PageResponse } from "../../base/query/v1beta1/pagination";
import { Grant } from "./authz";
import { PageRequest } from "../../base/query/v1beta1/pagination";
// @generated message type with reflection information, may provide speed optimized methods
class QueryGrantsRequest$Type extends MessageType {
    constructor() {
        super("cosmos.authz.v1beta1.QueryGrantsRequest", [
            { no: 1, name: "granter", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "grantee", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "msg_type_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "pagination", kind: "message", T: () => PageRequest }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.granter = "";
        message.grantee = "";
        message.msgTypeUrl = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string granter */ 1:
                    message.granter = reader.string();
                    break;
                case /* string grantee */ 2:
                    message.grantee = reader.string();
                    break;
                case /* string msg_type_url */ 3:
                    message.msgTypeUrl = reader.string();
                    break;
                case /* cosmos.base.query.v1beta1.PageRequest pagination */ 4:
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
        /* string granter = 1; */
        if (message.granter !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.granter);
        /* string grantee = 2; */
        if (message.grantee !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.grantee);
        /* string msg_type_url = 3; */
        if (message.msgTypeUrl !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.msgTypeUrl);
        /* cosmos.base.query.v1beta1.PageRequest pagination = 4; */
        if (message.pagination)
            PageRequest.internalBinaryWrite(message.pagination, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.authz.v1beta1.QueryGrantsRequest
 */
export const QueryGrantsRequest = new QueryGrantsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryGrantsResponse$Type extends MessageType {
    constructor() {
        super("cosmos.authz.v1beta1.QueryGrantsResponse", [
            { no: 1, name: "grants", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Grant },
            { no: 2, name: "pagination", kind: "message", T: () => PageResponse }
        ]);
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
                case /* repeated cosmos.authz.v1beta1.Grant grants */ 1:
                    message.grants.push(Grant.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated cosmos.authz.v1beta1.Grant grants = 1; */
        for (let i = 0; i < message.grants.length; i++)
            Grant.internalBinaryWrite(message.grants[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message cosmos.authz.v1beta1.QueryGrantsResponse
 */
export const QueryGrantsResponse = new QueryGrantsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryGranterGrantsRequest$Type extends MessageType {
    constructor() {
        super("cosmos.authz.v1beta1.QueryGranterGrantsRequest", [
            { no: 1, name: "granter", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "pagination", kind: "message", T: () => PageRequest }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.granter = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string granter */ 1:
                    message.granter = reader.string();
                    break;
                case /* cosmos.base.query.v1beta1.PageRequest pagination */ 2:
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
        /* string granter = 1; */
        if (message.granter !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.granter);
        /* cosmos.base.query.v1beta1.PageRequest pagination = 2; */
        if (message.pagination)
            PageRequest.internalBinaryWrite(message.pagination, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.authz.v1beta1.QueryGranterGrantsRequest
 */
export const QueryGranterGrantsRequest = new QueryGranterGrantsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryGranterGrantsResponse$Type extends MessageType {
    constructor() {
        super("cosmos.authz.v1beta1.QueryGranterGrantsResponse", [
            { no: 1, name: "grants", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GrantAuthorization },
            { no: 2, name: "pagination", kind: "message", T: () => PageResponse }
        ]);
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
                case /* repeated cosmos.authz.v1beta1.GrantAuthorization grants */ 1:
                    message.grants.push(GrantAuthorization.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated cosmos.authz.v1beta1.GrantAuthorization grants = 1; */
        for (let i = 0; i < message.grants.length; i++)
            GrantAuthorization.internalBinaryWrite(message.grants[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message cosmos.authz.v1beta1.QueryGranterGrantsResponse
 */
export const QueryGranterGrantsResponse = new QueryGranterGrantsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryGranteeGrantsRequest$Type extends MessageType {
    constructor() {
        super("cosmos.authz.v1beta1.QueryGranteeGrantsRequest", [
            { no: 1, name: "grantee", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "pagination", kind: "message", T: () => PageRequest }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
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
                case /* string grantee */ 1:
                    message.grantee = reader.string();
                    break;
                case /* cosmos.base.query.v1beta1.PageRequest pagination */ 2:
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
        /* string grantee = 1; */
        if (message.grantee !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.grantee);
        /* cosmos.base.query.v1beta1.PageRequest pagination = 2; */
        if (message.pagination)
            PageRequest.internalBinaryWrite(message.pagination, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.authz.v1beta1.QueryGranteeGrantsRequest
 */
export const QueryGranteeGrantsRequest = new QueryGranteeGrantsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryGranteeGrantsResponse$Type extends MessageType {
    constructor() {
        super("cosmos.authz.v1beta1.QueryGranteeGrantsResponse", [
            { no: 1, name: "grants", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GrantAuthorization },
            { no: 2, name: "pagination", kind: "message", T: () => PageResponse }
        ]);
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
                case /* repeated cosmos.authz.v1beta1.GrantAuthorization grants */ 1:
                    message.grants.push(GrantAuthorization.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated cosmos.authz.v1beta1.GrantAuthorization grants = 1; */
        for (let i = 0; i < message.grants.length; i++)
            GrantAuthorization.internalBinaryWrite(message.grants[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message cosmos.authz.v1beta1.QueryGranteeGrantsResponse
 */
export const QueryGranteeGrantsResponse = new QueryGranteeGrantsResponse$Type();
/**
 * @generated ServiceType for protobuf service cosmos.authz.v1beta1.Query
 */
export const Query = new ServiceType("cosmos.authz.v1beta1.Query", [
    { name: "Grants", options: { "google.api.http": { get: "/cosmos/authz/v1beta1/grants" } }, I: QueryGrantsRequest, O: QueryGrantsResponse },
    { name: "GranterGrants", options: { "google.api.http": { get: "/cosmos/authz/v1beta1/grants/granter/{granter}" } }, I: QueryGranterGrantsRequest, O: QueryGranterGrantsResponse },
    { name: "GranteeGrants", options: { "google.api.http": { get: "/cosmos/authz/v1beta1/grants/grantee/{grantee}" } }, I: QueryGranteeGrantsRequest, O: QueryGranteeGrantsResponse }
]);
