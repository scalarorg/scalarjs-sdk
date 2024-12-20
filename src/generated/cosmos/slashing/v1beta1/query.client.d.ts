// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/slashing/v1beta1/query.proto" (package "cosmos.slashing.v1beta1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { QuerySigningInfosResponse } from "./query";
import type { QuerySigningInfosRequest } from "./query";
import type { QuerySigningInfoResponse } from "./query";
import type { QuerySigningInfoRequest } from "./query";
import type { QueryParamsResponse } from "./query";
import type { QueryParamsRequest } from "./query";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Query provides defines the gRPC querier service
 *
 * @generated from protobuf service cosmos.slashing.v1beta1.Query
 */
export interface IQueryClient {
    /**
     * Params queries the parameters of slashing module
     *
     * @generated from protobuf rpc: Params(cosmos.slashing.v1beta1.QueryParamsRequest) returns (cosmos.slashing.v1beta1.QueryParamsResponse);
     */
    params(input: QueryParamsRequest, options?: RpcOptions): UnaryCall<QueryParamsRequest, QueryParamsResponse>;
    /**
     * SigningInfo queries the signing info of given cons address
     *
     * @generated from protobuf rpc: SigningInfo(cosmos.slashing.v1beta1.QuerySigningInfoRequest) returns (cosmos.slashing.v1beta1.QuerySigningInfoResponse);
     */
    signingInfo(input: QuerySigningInfoRequest, options?: RpcOptions): UnaryCall<QuerySigningInfoRequest, QuerySigningInfoResponse>;
    /**
     * SigningInfos queries signing info of all validators
     *
     * @generated from protobuf rpc: SigningInfos(cosmos.slashing.v1beta1.QuerySigningInfosRequest) returns (cosmos.slashing.v1beta1.QuerySigningInfosResponse);
     */
    signingInfos(input: QuerySigningInfosRequest, options?: RpcOptions): UnaryCall<QuerySigningInfosRequest, QuerySigningInfosResponse>;
}
/**
 * Query provides defines the gRPC querier service
 *
 * @generated from protobuf service cosmos.slashing.v1beta1.Query
 */
export declare class QueryClient implements IQueryClient, ServiceInfo {
    private readonly _transport;
    typeName: any;
    methods: any;
    options: any;
    constructor(_transport: RpcTransport);
    /**
     * Params queries the parameters of slashing module
     *
     * @generated from protobuf rpc: Params(cosmos.slashing.v1beta1.QueryParamsRequest) returns (cosmos.slashing.v1beta1.QueryParamsResponse);
     */
    params(input: QueryParamsRequest, options?: RpcOptions): UnaryCall<QueryParamsRequest, QueryParamsResponse>;
    /**
     * SigningInfo queries the signing info of given cons address
     *
     * @generated from protobuf rpc: SigningInfo(cosmos.slashing.v1beta1.QuerySigningInfoRequest) returns (cosmos.slashing.v1beta1.QuerySigningInfoResponse);
     */
    signingInfo(input: QuerySigningInfoRequest, options?: RpcOptions): UnaryCall<QuerySigningInfoRequest, QuerySigningInfoResponse>;
    /**
     * SigningInfos queries signing info of all validators
     *
     * @generated from protobuf rpc: SigningInfos(cosmos.slashing.v1beta1.QuerySigningInfosRequest) returns (cosmos.slashing.v1beta1.QuerySigningInfosResponse);
     */
    signingInfos(input: QuerySigningInfosRequest, options?: RpcOptions): UnaryCall<QuerySigningInfosRequest, QuerySigningInfosResponse>;
}
