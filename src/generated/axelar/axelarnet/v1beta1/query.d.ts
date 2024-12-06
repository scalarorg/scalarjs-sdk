// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/axelarnet/v1beta1/query.proto" (package "axelar.axelarnet.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Params } from "./params";
/**
 * @generated from protobuf message axelar.axelarnet.v1beta1.PendingIBCTransferCountRequest
 */
export interface PendingIBCTransferCountRequest {
}
/**
 * @generated from protobuf message axelar.axelarnet.v1beta1.PendingIBCTransferCountResponse
 */
export interface PendingIBCTransferCountResponse {
    /**
     * @generated from protobuf field: map<string, uint32> transfers_by_chain = 1;
     */
    transfersByChain: {
        [key: string]: number;
    };
}
/**
 * ParamsRequest represents a message that queries the params
 *
 * @generated from protobuf message axelar.axelarnet.v1beta1.ParamsRequest
 */
export interface ParamsRequest {
}
/**
 * @generated from protobuf message axelar.axelarnet.v1beta1.ParamsResponse
 */
export interface ParamsResponse {
    /**
     * @generated from protobuf field: axelar.axelarnet.v1beta1.Params params = 1;
     */
    params?: Params;
}
/**
 * IBCPathRequest represents a message that queries the IBC path registered for
 * a given chain
 *
 * @generated from protobuf message axelar.axelarnet.v1beta1.IBCPathRequest
 */
export interface IBCPathRequest {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
}
/**
 * @generated from protobuf message axelar.axelarnet.v1beta1.IBCPathResponse
 */
export interface IBCPathResponse {
    /**
     * @generated from protobuf field: string ibc_path = 1;
     */
    ibcPath: string;
}
/**
 * ChainByIBCPathRequest represents a message that queries the chain that an IBC
 * path is registered to
 *
 * @generated from protobuf message axelar.axelarnet.v1beta1.ChainByIBCPathRequest
 */
export interface ChainByIBCPathRequest {
    /**
     * @generated from protobuf field: string ibc_path = 1;
     */
    ibcPath: string;
}
/**
 * @generated from protobuf message axelar.axelarnet.v1beta1.ChainByIBCPathResponse
 */
export interface ChainByIBCPathResponse {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
}
declare class PendingIBCTransferCountRequest$Type extends MessageType<PendingIBCTransferCountRequest> {
    constructor();
    create(value?: PartialMessage<PendingIBCTransferCountRequest>): PendingIBCTransferCountRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PendingIBCTransferCountRequest): PendingIBCTransferCountRequest;
    internalBinaryWrite(message: PendingIBCTransferCountRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.axelarnet.v1beta1.PendingIBCTransferCountRequest
 */
export declare const PendingIBCTransferCountRequest: PendingIBCTransferCountRequest$Type;
declare class PendingIBCTransferCountResponse$Type extends MessageType<PendingIBCTransferCountResponse> {
    constructor();
    create(value?: PartialMessage<PendingIBCTransferCountResponse>): PendingIBCTransferCountResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PendingIBCTransferCountResponse): PendingIBCTransferCountResponse;
    private binaryReadMap1;
    internalBinaryWrite(message: PendingIBCTransferCountResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.axelarnet.v1beta1.PendingIBCTransferCountResponse
 */
export declare const PendingIBCTransferCountResponse: PendingIBCTransferCountResponse$Type;
declare class ParamsRequest$Type extends MessageType<ParamsRequest> {
    constructor();
    create(value?: PartialMessage<ParamsRequest>): ParamsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ParamsRequest): ParamsRequest;
    internalBinaryWrite(message: ParamsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.axelarnet.v1beta1.ParamsRequest
 */
export declare const ParamsRequest: ParamsRequest$Type;
declare class ParamsResponse$Type extends MessageType<ParamsResponse> {
    constructor();
    create(value?: PartialMessage<ParamsResponse>): ParamsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ParamsResponse): ParamsResponse;
    internalBinaryWrite(message: ParamsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.axelarnet.v1beta1.ParamsResponse
 */
export declare const ParamsResponse: ParamsResponse$Type;
declare class IBCPathRequest$Type extends MessageType<IBCPathRequest> {
    constructor();
    create(value?: PartialMessage<IBCPathRequest>): IBCPathRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IBCPathRequest): IBCPathRequest;
    internalBinaryWrite(message: IBCPathRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.axelarnet.v1beta1.IBCPathRequest
 */
export declare const IBCPathRequest: IBCPathRequest$Type;
declare class IBCPathResponse$Type extends MessageType<IBCPathResponse> {
    constructor();
    create(value?: PartialMessage<IBCPathResponse>): IBCPathResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IBCPathResponse): IBCPathResponse;
    internalBinaryWrite(message: IBCPathResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.axelarnet.v1beta1.IBCPathResponse
 */
export declare const IBCPathResponse: IBCPathResponse$Type;
declare class ChainByIBCPathRequest$Type extends MessageType<ChainByIBCPathRequest> {
    constructor();
    create(value?: PartialMessage<ChainByIBCPathRequest>): ChainByIBCPathRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChainByIBCPathRequest): ChainByIBCPathRequest;
    internalBinaryWrite(message: ChainByIBCPathRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.axelarnet.v1beta1.ChainByIBCPathRequest
 */
export declare const ChainByIBCPathRequest: ChainByIBCPathRequest$Type;
declare class ChainByIBCPathResponse$Type extends MessageType<ChainByIBCPathResponse> {
    constructor();
    create(value?: PartialMessage<ChainByIBCPathResponse>): ChainByIBCPathResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChainByIBCPathResponse): ChainByIBCPathResponse;
    internalBinaryWrite(message: ChainByIBCPathResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.axelarnet.v1beta1.ChainByIBCPathResponse
 */
export declare const ChainByIBCPathResponse: ChainByIBCPathResponse$Type;
export {};