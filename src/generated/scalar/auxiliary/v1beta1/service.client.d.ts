// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "scalar/auxiliary/v1beta1/service.proto" (package "scalar.auxiliary.v1beta1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { BatchResponse } from "./tx";
import type { BatchRequest } from "./tx";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Msg defines the nexus Msg service.
 *
 * @generated from protobuf service scalar.auxiliary.v1beta1.MsgService
 */
export interface IMsgServiceClient {
    /**
     * @generated from protobuf rpc: Batch(scalar.auxiliary.v1beta1.BatchRequest) returns (scalar.auxiliary.v1beta1.BatchResponse);
     */
    batch(input: BatchRequest, options?: RpcOptions): UnaryCall<BatchRequest, BatchResponse>;
}
/**
 * Msg defines the nexus Msg service.
 *
 * @generated from protobuf service scalar.auxiliary.v1beta1.MsgService
 */
export declare class MsgServiceClient implements IMsgServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: any;
    methods: any;
    options: any;
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: Batch(scalar.auxiliary.v1beta1.BatchRequest) returns (scalar.auxiliary.v1beta1.BatchResponse);
     */
    batch(input: BatchRequest, options?: RpcOptions): UnaryCall<BatchRequest, BatchResponse>;
}
