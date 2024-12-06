// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/vote/v1beta1/service.proto" (package "axelar.vote.v1beta1", syntax proto3)
// tslint:disable
import type { ParamsResponse } from "./query";
import type { ParamsRequest } from "./query";
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { VoteResponse } from "./tx";
import type { VoteRequest } from "./tx";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Msg defines the vote Msg service.
 *
 * @generated from protobuf service axelar.vote.v1beta1.MsgService
 */
export interface IMsgServiceClient {
    /**
     * @generated from protobuf rpc: Vote(axelar.vote.v1beta1.VoteRequest) returns (axelar.vote.v1beta1.VoteResponse);
     */
    vote(input: VoteRequest, options?: RpcOptions): UnaryCall<VoteRequest, VoteResponse>;
}
/**
 * Msg defines the vote Msg service.
 *
 * @generated from protobuf service axelar.vote.v1beta1.MsgService
 */
export declare class MsgServiceClient implements IMsgServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: any;
    methods: any;
    options: any;
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: Vote(axelar.vote.v1beta1.VoteRequest) returns (axelar.vote.v1beta1.VoteResponse);
     */
    vote(input: VoteRequest, options?: RpcOptions): UnaryCall<VoteRequest, VoteResponse>;
}
/**
 * QueryService defines the gRPC querier service.
 *
 * @generated from protobuf service axelar.vote.v1beta1.QueryService
 */
export interface IQueryServiceClient {
    /**
     * @generated from protobuf rpc: Params(axelar.vote.v1beta1.ParamsRequest) returns (axelar.vote.v1beta1.ParamsResponse);
     */
    params(input: ParamsRequest, options?: RpcOptions): UnaryCall<ParamsRequest, ParamsResponse>;
}
/**
 * QueryService defines the gRPC querier service.
 *
 * @generated from protobuf service axelar.vote.v1beta1.QueryService
 */
export declare class QueryServiceClient implements IQueryServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: any;
    methods: any;
    options: any;
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: Params(axelar.vote.v1beta1.ParamsRequest) returns (axelar.vote.v1beta1.ParamsResponse);
     */
    params(input: ParamsRequest, options?: RpcOptions): UnaryCall<ParamsRequest, ParamsResponse>;
}