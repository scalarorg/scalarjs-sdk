// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/tss/v1beta1/service.proto" (package "axelar.tss.v1beta1", syntax proto3)
// tslint:disable
import type { ParamsResponse } from "./query";
import type { ParamsRequest } from "./query";
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { HeartBeatResponse } from "./tx";
import type { HeartBeatRequest } from "./tx";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Msg defines the tss Msg service.
 *
 * @generated from protobuf service axelar.tss.v1beta1.MsgService
 */
export interface IMsgServiceClient {
    /**
     * @generated from protobuf rpc: HeartBeat(axelar.tss.v1beta1.HeartBeatRequest) returns (axelar.tss.v1beta1.HeartBeatResponse);
     */
    heartBeat(input: HeartBeatRequest, options?: RpcOptions): UnaryCall<HeartBeatRequest, HeartBeatResponse>;
}
/**
 * Msg defines the tss Msg service.
 *
 * @generated from protobuf service axelar.tss.v1beta1.MsgService
 */
export declare class MsgServiceClient implements IMsgServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: any;
    methods: any;
    options: any;
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: HeartBeat(axelar.tss.v1beta1.HeartBeatRequest) returns (axelar.tss.v1beta1.HeartBeatResponse);
     */
    heartBeat(input: HeartBeatRequest, options?: RpcOptions): UnaryCall<HeartBeatRequest, HeartBeatResponse>;
}
/**
 * Query defines the gRPC querier service.
 *
 * @generated from protobuf service axelar.tss.v1beta1.QueryService
 */
export interface IQueryServiceClient {
    /**
     * @generated from protobuf rpc: Params(axelar.tss.v1beta1.ParamsRequest) returns (axelar.tss.v1beta1.ParamsResponse);
     */
    params(input: ParamsRequest, options?: RpcOptions): UnaryCall<ParamsRequest, ParamsResponse>;
}
/**
 * Query defines the gRPC querier service.
 *
 * @generated from protobuf service axelar.tss.v1beta1.QueryService
 */
export declare class QueryServiceClient implements IQueryServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: any;
    methods: any;
    options: any;
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: Params(axelar.tss.v1beta1.ParamsRequest) returns (axelar.tss.v1beta1.ParamsResponse);
     */
    params(input: ParamsRequest, options?: RpcOptions): UnaryCall<ParamsRequest, ParamsResponse>;
}
