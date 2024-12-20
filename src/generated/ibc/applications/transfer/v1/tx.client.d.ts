// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "ibc/applications/transfer/v1/tx.proto" (package "ibc.applications.transfer.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { MsgTransferResponse } from "./tx";
import type { MsgTransfer } from "./tx";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Msg defines the ibc/transfer Msg service.
 *
 * @generated from protobuf service ibc.applications.transfer.v1.Msg
 */
export interface IMsgClient {
    /**
     * Transfer defines a rpc handler method for MsgTransfer.
     *
     * @generated from protobuf rpc: Transfer(ibc.applications.transfer.v1.MsgTransfer) returns (ibc.applications.transfer.v1.MsgTransferResponse);
     */
    transfer(input: MsgTransfer, options?: RpcOptions): UnaryCall<MsgTransfer, MsgTransferResponse>;
}
/**
 * Msg defines the ibc/transfer Msg service.
 *
 * @generated from protobuf service ibc.applications.transfer.v1.Msg
 */
export declare class MsgClient implements IMsgClient, ServiceInfo {
    private readonly _transport;
    typeName: any;
    methods: any;
    options: any;
    constructor(_transport: RpcTransport);
    /**
     * Transfer defines a rpc handler method for MsgTransfer.
     *
     * @generated from protobuf rpc: Transfer(ibc.applications.transfer.v1.MsgTransfer) returns (ibc.applications.transfer.v1.MsgTransferResponse);
     */
    transfer(input: MsgTransfer, options?: RpcOptions): UnaryCall<MsgTransfer, MsgTransferResponse>;
}
