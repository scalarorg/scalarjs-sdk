// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/axelarnet/v1beta1/types.proto" (package "axelar.axelarnet.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
/**
 * @generated from protobuf message axelar.axelarnet.v1beta1.IBCTransfer
 */
export interface IBCTransfer {
    /**
     * @generated from protobuf field: bytes sender = 1;
     */
    sender: Uint8Array;
    /**
     * @generated from protobuf field: string receiver = 2;
     */
    receiver: string;
    /**
     * @generated from protobuf field: cosmos.base.v1beta1.Coin token = 3;
     */
    token?: Coin;
    /**
     * @generated from protobuf field: string port_id = 4;
     */
    portId: string;
    /**
     * @generated from protobuf field: string channel_id = 5;
     */
    channelId: string;
    /**
     * @deprecated
     * @generated from protobuf field: uint64 sequence = 6 [deprecated = true];
     */
    sequence: string;
    /**
     * @generated from protobuf field: uint64 id = 7;
     */
    id: string;
    /**
     * @generated from protobuf field: axelar.axelarnet.v1beta1.IBCTransfer.Status status = 8;
     */
    status: IBCTransfer_Status;
}
/**
 * @generated from protobuf enum axelar.axelarnet.v1beta1.IBCTransfer.Status
 */
export declare enum IBCTransfer_Status {
    /**
     * @generated from protobuf enum value: STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: STATUS_PENDING = 1;
     */
    PENDING = 1,
    /**
     * @generated from protobuf enum value: STATUS_COMPLETED = 2;
     */
    COMPLETED = 2,
    /**
     * @generated from protobuf enum value: STATUS_FAILED = 3;
     */
    FAILED = 3
}
/**
 * @generated from protobuf message axelar.axelarnet.v1beta1.CosmosChain
 */
export interface CosmosChain {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string ibc_path = 2;
     */
    ibcPath: string;
    /**
     * @deprecated
     * @generated from protobuf field: repeated axelar.axelarnet.v1beta1.Asset assets = 3 [deprecated = true];
     */
    assets: Asset[];
    /**
     * @generated from protobuf field: string addr_prefix = 4;
     */
    addrPrefix: string;
}
/**
 * @deprecated
 * @generated from protobuf message axelar.axelarnet.v1beta1.Asset
 */
export interface Asset {
    /**
     * @generated from protobuf field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from protobuf field: bytes min_amount = 2;
     */
    minAmount: Uint8Array;
}
/**
 * @generated from protobuf message axelar.axelarnet.v1beta1.Fee
 */
export interface Fee {
    /**
     * @generated from protobuf field: cosmos.base.v1beta1.Coin amount = 1;
     */
    amount?: Coin;
    /**
     * @generated from protobuf field: bytes recipient = 2;
     */
    recipient: Uint8Array;
    /**
     * @generated from protobuf field: bytes refund_recipient = 3;
     */
    refundRecipient: Uint8Array;
}
declare class IBCTransfer$Type extends MessageType<IBCTransfer> {
    constructor();
    create(value?: PartialMessage<IBCTransfer>): IBCTransfer;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IBCTransfer): IBCTransfer;
    internalBinaryWrite(message: IBCTransfer, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.axelarnet.v1beta1.IBCTransfer
 */
export declare const IBCTransfer: IBCTransfer$Type;
declare class CosmosChain$Type extends MessageType<CosmosChain> {
    constructor();
    create(value?: PartialMessage<CosmosChain>): CosmosChain;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CosmosChain): CosmosChain;
    internalBinaryWrite(message: CosmosChain, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.axelarnet.v1beta1.CosmosChain
 */
export declare const CosmosChain: CosmosChain$Type;
declare class Asset$Type extends MessageType<Asset> {
    constructor();
    create(value?: PartialMessage<Asset>): Asset;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Asset): Asset;
    internalBinaryWrite(message: Asset, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @deprecated
 * @generated MessageType for protobuf message axelar.axelarnet.v1beta1.Asset
 */
export declare const Asset: Asset$Type;
declare class Fee$Type extends MessageType<Fee> {
    constructor();
    create(value?: PartialMessage<Fee>): Fee;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Fee): Fee;
    internalBinaryWrite(message: Fee, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.axelarnet.v1beta1.Fee
 */
export declare const Fee: Fee$Type;
export {};