// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/auth/v1beta1/query.proto" (package "cosmos.auth.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Params } from "./auth";
import { PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { PageRequest } from "../../base/query/v1beta1/pagination";
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from protobuf message cosmos.auth.v1beta1.QueryAccountsRequest
 */
export interface QueryAccountsRequest {
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from protobuf message cosmos.auth.v1beta1.QueryAccountsResponse
 */
export interface QueryAccountsResponse {
    /**
     * accounts are the existing accounts
     *
     * @generated from protobuf field: repeated google.protobuf.Any accounts = 1;
     */
    accounts: Any[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
}
/**
 * QueryAccountRequest is the request type for the Query/Account RPC method.
 *
 * @generated from protobuf message cosmos.auth.v1beta1.QueryAccountRequest
 */
export interface QueryAccountRequest {
    /**
     * address defines the address to query for.
     *
     * @generated from protobuf field: string address = 1;
     */
    address: string;
}
/**
 * QueryAccountResponse is the response type for the Query/Account RPC method.
 *
 * @generated from protobuf message cosmos.auth.v1beta1.QueryAccountResponse
 */
export interface QueryAccountResponse {
    /**
     * account defines the account of the corresponding address.
     *
     * @generated from protobuf field: google.protobuf.Any account = 1;
     */
    account?: Any;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from protobuf message cosmos.auth.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequest {
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from protobuf message cosmos.auth.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponse {
    /**
     * params defines the parameters of the module.
     *
     * @generated from protobuf field: cosmos.auth.v1beta1.Params params = 1;
     */
    params?: Params;
}
/**
 * QueryModuleAccountByNameRequest is the request type for the Query/ModuleAccountByName RPC method.
 *
 * @generated from protobuf message cosmos.auth.v1beta1.QueryModuleAccountByNameRequest
 */
export interface QueryModuleAccountByNameRequest {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
/**
 * QueryModuleAccountByNameResponse is the response type for the Query/ModuleAccountByName RPC method.
 *
 * @generated from protobuf message cosmos.auth.v1beta1.QueryModuleAccountByNameResponse
 */
export interface QueryModuleAccountByNameResponse {
    /**
     * @generated from protobuf field: google.protobuf.Any account = 1;
     */
    account?: Any;
}
declare class QueryAccountsRequest$Type extends MessageType<QueryAccountsRequest> {
    constructor();
    create(value?: PartialMessage<QueryAccountsRequest>): QueryAccountsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryAccountsRequest): QueryAccountsRequest;
    internalBinaryWrite(message: QueryAccountsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.auth.v1beta1.QueryAccountsRequest
 */
export declare const QueryAccountsRequest: QueryAccountsRequest$Type;
declare class QueryAccountsResponse$Type extends MessageType<QueryAccountsResponse> {
    constructor();
    create(value?: PartialMessage<QueryAccountsResponse>): QueryAccountsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryAccountsResponse): QueryAccountsResponse;
    internalBinaryWrite(message: QueryAccountsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.auth.v1beta1.QueryAccountsResponse
 */
export declare const QueryAccountsResponse: QueryAccountsResponse$Type;
declare class QueryAccountRequest$Type extends MessageType<QueryAccountRequest> {
    constructor();
    create(value?: PartialMessage<QueryAccountRequest>): QueryAccountRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryAccountRequest): QueryAccountRequest;
    internalBinaryWrite(message: QueryAccountRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.auth.v1beta1.QueryAccountRequest
 */
export declare const QueryAccountRequest: QueryAccountRequest$Type;
declare class QueryAccountResponse$Type extends MessageType<QueryAccountResponse> {
    constructor();
    create(value?: PartialMessage<QueryAccountResponse>): QueryAccountResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryAccountResponse): QueryAccountResponse;
    internalBinaryWrite(message: QueryAccountResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.auth.v1beta1.QueryAccountResponse
 */
export declare const QueryAccountResponse: QueryAccountResponse$Type;
declare class QueryParamsRequest$Type extends MessageType<QueryParamsRequest> {
    constructor();
    create(value?: PartialMessage<QueryParamsRequest>): QueryParamsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryParamsRequest): QueryParamsRequest;
    internalBinaryWrite(message: QueryParamsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.auth.v1beta1.QueryParamsRequest
 */
export declare const QueryParamsRequest: QueryParamsRequest$Type;
declare class QueryParamsResponse$Type extends MessageType<QueryParamsResponse> {
    constructor();
    create(value?: PartialMessage<QueryParamsResponse>): QueryParamsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryParamsResponse): QueryParamsResponse;
    internalBinaryWrite(message: QueryParamsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.auth.v1beta1.QueryParamsResponse
 */
export declare const QueryParamsResponse: QueryParamsResponse$Type;
declare class QueryModuleAccountByNameRequest$Type extends MessageType<QueryModuleAccountByNameRequest> {
    constructor();
    create(value?: PartialMessage<QueryModuleAccountByNameRequest>): QueryModuleAccountByNameRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryModuleAccountByNameRequest): QueryModuleAccountByNameRequest;
    internalBinaryWrite(message: QueryModuleAccountByNameRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.auth.v1beta1.QueryModuleAccountByNameRequest
 */
export declare const QueryModuleAccountByNameRequest: QueryModuleAccountByNameRequest$Type;
declare class QueryModuleAccountByNameResponse$Type extends MessageType<QueryModuleAccountByNameResponse> {
    constructor();
    create(value?: PartialMessage<QueryModuleAccountByNameResponse>): QueryModuleAccountByNameResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryModuleAccountByNameResponse): QueryModuleAccountByNameResponse;
    internalBinaryWrite(message: QueryModuleAccountByNameResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.auth.v1beta1.QueryModuleAccountByNameResponse
 */
export declare const QueryModuleAccountByNameResponse: QueryModuleAccountByNameResponse$Type;
/**
 * @generated ServiceType for protobuf service cosmos.auth.v1beta1.Query
 */
export declare const Query: any;
export {};
