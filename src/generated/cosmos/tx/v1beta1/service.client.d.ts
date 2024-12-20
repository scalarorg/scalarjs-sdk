// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/tx/v1beta1/service.proto" (package "cosmos.tx.v1beta1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { GetBlockWithTxsResponse } from "./service";
import type { GetBlockWithTxsRequest } from "./service";
import type { GetTxsEventResponse } from "./service";
import type { GetTxsEventRequest } from "./service";
import type { BroadcastTxResponse } from "./service";
import type { BroadcastTxRequest } from "./service";
import type { GetTxResponse } from "./service";
import type { GetTxRequest } from "./service";
import type { SimulateResponse } from "./service";
import type { SimulateRequest } from "./service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Service defines a gRPC service for interacting with transactions.
 *
 * @generated from protobuf service cosmos.tx.v1beta1.Service
 */
export interface IServiceClient {
    /**
     * Simulate simulates executing a transaction for estimating gas usage.
     *
     * @generated from protobuf rpc: Simulate(cosmos.tx.v1beta1.SimulateRequest) returns (cosmos.tx.v1beta1.SimulateResponse);
     */
    simulate(input: SimulateRequest, options?: RpcOptions): UnaryCall<SimulateRequest, SimulateResponse>;
    /**
     * GetTx fetches a tx by hash.
     *
     * @generated from protobuf rpc: GetTx(cosmos.tx.v1beta1.GetTxRequest) returns (cosmos.tx.v1beta1.GetTxResponse);
     */
    getTx(input: GetTxRequest, options?: RpcOptions): UnaryCall<GetTxRequest, GetTxResponse>;
    /**
     * BroadcastTx broadcast transaction.
     *
     * @generated from protobuf rpc: BroadcastTx(cosmos.tx.v1beta1.BroadcastTxRequest) returns (cosmos.tx.v1beta1.BroadcastTxResponse);
     */
    broadcastTx(input: BroadcastTxRequest, options?: RpcOptions): UnaryCall<BroadcastTxRequest, BroadcastTxResponse>;
    /**
     * GetTxsEvent fetches txs by event.
     *
     * @generated from protobuf rpc: GetTxsEvent(cosmos.tx.v1beta1.GetTxsEventRequest) returns (cosmos.tx.v1beta1.GetTxsEventResponse);
     */
    getTxsEvent(input: GetTxsEventRequest, options?: RpcOptions): UnaryCall<GetTxsEventRequest, GetTxsEventResponse>;
    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     *
     * Since: cosmos-sdk 0.45.2
     *
     * @generated from protobuf rpc: GetBlockWithTxs(cosmos.tx.v1beta1.GetBlockWithTxsRequest) returns (cosmos.tx.v1beta1.GetBlockWithTxsResponse);
     */
    getBlockWithTxs(input: GetBlockWithTxsRequest, options?: RpcOptions): UnaryCall<GetBlockWithTxsRequest, GetBlockWithTxsResponse>;
}
/**
 * Service defines a gRPC service for interacting with transactions.
 *
 * @generated from protobuf service cosmos.tx.v1beta1.Service
 */
export declare class ServiceClient implements IServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: any;
    methods: any;
    options: any;
    constructor(_transport: RpcTransport);
    /**
     * Simulate simulates executing a transaction for estimating gas usage.
     *
     * @generated from protobuf rpc: Simulate(cosmos.tx.v1beta1.SimulateRequest) returns (cosmos.tx.v1beta1.SimulateResponse);
     */
    simulate(input: SimulateRequest, options?: RpcOptions): UnaryCall<SimulateRequest, SimulateResponse>;
    /**
     * GetTx fetches a tx by hash.
     *
     * @generated from protobuf rpc: GetTx(cosmos.tx.v1beta1.GetTxRequest) returns (cosmos.tx.v1beta1.GetTxResponse);
     */
    getTx(input: GetTxRequest, options?: RpcOptions): UnaryCall<GetTxRequest, GetTxResponse>;
    /**
     * BroadcastTx broadcast transaction.
     *
     * @generated from protobuf rpc: BroadcastTx(cosmos.tx.v1beta1.BroadcastTxRequest) returns (cosmos.tx.v1beta1.BroadcastTxResponse);
     */
    broadcastTx(input: BroadcastTxRequest, options?: RpcOptions): UnaryCall<BroadcastTxRequest, BroadcastTxResponse>;
    /**
     * GetTxsEvent fetches txs by event.
     *
     * @generated from protobuf rpc: GetTxsEvent(cosmos.tx.v1beta1.GetTxsEventRequest) returns (cosmos.tx.v1beta1.GetTxsEventResponse);
     */
    getTxsEvent(input: GetTxsEventRequest, options?: RpcOptions): UnaryCall<GetTxsEventRequest, GetTxsEventResponse>;
    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     *
     * Since: cosmos-sdk 0.45.2
     *
     * @generated from protobuf rpc: GetBlockWithTxs(cosmos.tx.v1beta1.GetBlockWithTxsRequest) returns (cosmos.tx.v1beta1.GetBlockWithTxsResponse);
     */
    getBlockWithTxs(input: GetBlockWithTxsRequest, options?: RpcOptions): UnaryCall<GetBlockWithTxsRequest, GetBlockWithTxsResponse>;
}
