// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/auth/v1beta1/query.proto" (package "cosmos.auth.v1beta1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { QueryModuleAccountByNameResponse } from "./query";
import type { QueryModuleAccountByNameRequest } from "./query";
import type { QueryParamsResponse } from "./query";
import type { QueryParamsRequest } from "./query";
import type { QueryAccountResponse } from "./query";
import type { QueryAccountRequest } from "./query";
import type { QueryAccountsResponse } from "./query";
import type { QueryAccountsRequest } from "./query";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Query defines the gRPC querier service.
 *
 * @generated from protobuf service cosmos.auth.v1beta1.Query
 */
export interface IQueryClient {
    /**
     * Accounts returns all the existing accounts
     *
     * Since: cosmos-sdk 0.43
     *
     * @generated from protobuf rpc: Accounts(cosmos.auth.v1beta1.QueryAccountsRequest) returns (cosmos.auth.v1beta1.QueryAccountsResponse);
     */
    accounts(input: QueryAccountsRequest, options?: RpcOptions): UnaryCall<QueryAccountsRequest, QueryAccountsResponse>;
    /**
     * Account returns account details based on address.
     *
     * @generated from protobuf rpc: Account(cosmos.auth.v1beta1.QueryAccountRequest) returns (cosmos.auth.v1beta1.QueryAccountResponse);
     */
    account(input: QueryAccountRequest, options?: RpcOptions): UnaryCall<QueryAccountRequest, QueryAccountResponse>;
    /**
     * Params queries all parameters.
     *
     * @generated from protobuf rpc: Params(cosmos.auth.v1beta1.QueryParamsRequest) returns (cosmos.auth.v1beta1.QueryParamsResponse);
     */
    params(input: QueryParamsRequest, options?: RpcOptions): UnaryCall<QueryParamsRequest, QueryParamsResponse>;
    /**
     * ModuleAccountByName returns the module account info by module name
     *
     * @generated from protobuf rpc: ModuleAccountByName(cosmos.auth.v1beta1.QueryModuleAccountByNameRequest) returns (cosmos.auth.v1beta1.QueryModuleAccountByNameResponse);
     */
    moduleAccountByName(input: QueryModuleAccountByNameRequest, options?: RpcOptions): UnaryCall<QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse>;
}
/**
 * Query defines the gRPC querier service.
 *
 * @generated from protobuf service cosmos.auth.v1beta1.Query
 */
export declare class QueryClient implements IQueryClient, ServiceInfo {
    private readonly _transport;
    typeName: any;
    methods: any;
    options: any;
    constructor(_transport: RpcTransport);
    /**
     * Accounts returns all the existing accounts
     *
     * Since: cosmos-sdk 0.43
     *
     * @generated from protobuf rpc: Accounts(cosmos.auth.v1beta1.QueryAccountsRequest) returns (cosmos.auth.v1beta1.QueryAccountsResponse);
     */
    accounts(input: QueryAccountsRequest, options?: RpcOptions): UnaryCall<QueryAccountsRequest, QueryAccountsResponse>;
    /**
     * Account returns account details based on address.
     *
     * @generated from protobuf rpc: Account(cosmos.auth.v1beta1.QueryAccountRequest) returns (cosmos.auth.v1beta1.QueryAccountResponse);
     */
    account(input: QueryAccountRequest, options?: RpcOptions): UnaryCall<QueryAccountRequest, QueryAccountResponse>;
    /**
     * Params queries all parameters.
     *
     * @generated from protobuf rpc: Params(cosmos.auth.v1beta1.QueryParamsRequest) returns (cosmos.auth.v1beta1.QueryParamsResponse);
     */
    params(input: QueryParamsRequest, options?: RpcOptions): UnaryCall<QueryParamsRequest, QueryParamsResponse>;
    /**
     * ModuleAccountByName returns the module account info by module name
     *
     * @generated from protobuf rpc: ModuleAccountByName(cosmos.auth.v1beta1.QueryModuleAccountByNameRequest) returns (cosmos.auth.v1beta1.QueryModuleAccountByNameResponse);
     */
    moduleAccountByName(input: QueryModuleAccountByNameRequest, options?: RpcOptions): UnaryCall<QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse>;
}
