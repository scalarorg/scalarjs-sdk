// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "ibc/applications/transfer/v1/tx.proto" (package "ibc.applications.transfer.v1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Height } from "../../../core/client/v1/client";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 *
 * @generated from protobuf message ibc.applications.transfer.v1.MsgTransfer
 */
export interface MsgTransfer {
    /**
     * the port on which the packet will be sent
     *
     * @generated from protobuf field: string source_port = 1;
     */
    sourcePort: string;
    /**
     * the channel by which the packet will be sent
     *
     * @generated from protobuf field: string source_channel = 2;
     */
    sourceChannel: string;
    /**
     * the tokens to be transferred
     *
     * @generated from protobuf field: cosmos.base.v1beta1.Coin token = 3;
     */
    token?: Coin;
    /**
     * the sender address
     *
     * @generated from protobuf field: string sender = 4;
     */
    sender: string;
    /**
     * the recipient address on the destination chain
     *
     * @generated from protobuf field: string receiver = 5;
     */
    receiver: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     *
     * @generated from protobuf field: ibc.core.client.v1.Height timeout_height = 6;
     */
    timeoutHeight?: Height;
    /**
     * Timeout timestamp in absolute nanoseconds since unix epoch.
     * The timeout is disabled when set to 0.
     *
     * @generated from protobuf field: uint64 timeout_timestamp = 7;
     */
    timeoutTimestamp: string;
    /**
     * optional memo
     *
     * @generated from protobuf field: string memo = 8;
     */
    memo: string;
}
/**
 * MsgTransferResponse defines the Msg/Transfer response type.
 *
 * @generated from protobuf message ibc.applications.transfer.v1.MsgTransferResponse
 */
export interface MsgTransferResponse {
    /**
     * sequence number of the transfer packet sent
     *
     * @generated from protobuf field: uint64 sequence = 1;
     */
    sequence: string;
}
declare class MsgTransfer$Type extends MessageType<MsgTransfer> {
    constructor();
    create(value?: PartialMessage<MsgTransfer>): MsgTransfer;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgTransfer): MsgTransfer;
    internalBinaryWrite(message: MsgTransfer, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.applications.transfer.v1.MsgTransfer
 */
export declare const MsgTransfer: MsgTransfer$Type;
declare class MsgTransferResponse$Type extends MessageType<MsgTransferResponse> {
    constructor();
    create(value?: PartialMessage<MsgTransferResponse>): MsgTransferResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgTransferResponse): MsgTransferResponse;
    internalBinaryWrite(message: MsgTransferResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.applications.transfer.v1.MsgTransferResponse
 */
export declare const MsgTransferResponse: MsgTransferResponse$Type;
/**
 * @generated ServiceType for protobuf service ibc.applications.transfer.v1.Msg
 */
export declare const Msg: any;
export {};
