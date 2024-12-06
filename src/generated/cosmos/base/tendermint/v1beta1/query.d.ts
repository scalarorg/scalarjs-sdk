// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/base/tendermint/v1beta1/query.proto" (package "cosmos.base.tendermint.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { DefaultNodeInfo } from "../../../../tendermint/p2p/types";
import { Block } from "../../../../tendermint/types/block";
import { BlockID } from "../../../../tendermint/types/types";
import { Any } from "../../../../google/protobuf/any";
import { PageResponse } from "../../query/v1beta1/pagination";
import { PageRequest } from "../../query/v1beta1/pagination";
/**
 * GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method.
 *
 * @generated from protobuf message cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest
 */
export interface GetValidatorSetByHeightRequest {
    /**
     * @generated from protobuf field: int64 height = 1;
     */
    height: string;
    /**
     * pagination defines an pagination for the request.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
}
/**
 * GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method.
 *
 * @generated from protobuf message cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse
 */
export interface GetValidatorSetByHeightResponse {
    /**
     * @generated from protobuf field: int64 block_height = 1;
     */
    blockHeight: string;
    /**
     * @generated from protobuf field: repeated cosmos.base.tendermint.v1beta1.Validator validators = 2;
     */
    validators: Validator[];
    /**
     * pagination defines an pagination for the response.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageResponse pagination = 3;
     */
    pagination?: PageResponse;
}
/**
 * GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method.
 *
 * @generated from protobuf message cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest
 */
export interface GetLatestValidatorSetRequest {
    /**
     * pagination defines an pagination for the request.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
}
/**
 * GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method.
 *
 * @generated from protobuf message cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse
 */
export interface GetLatestValidatorSetResponse {
    /**
     * @generated from protobuf field: int64 block_height = 1;
     */
    blockHeight: string;
    /**
     * @generated from protobuf field: repeated cosmos.base.tendermint.v1beta1.Validator validators = 2;
     */
    validators: Validator[];
    /**
     * pagination defines an pagination for the response.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageResponse pagination = 3;
     */
    pagination?: PageResponse;
}
/**
 * Validator is the type for the validator-set.
 *
 * @generated from protobuf message cosmos.base.tendermint.v1beta1.Validator
 */
export interface Validator {
    /**
     * @generated from protobuf field: string address = 1;
     */
    address: string;
    /**
     * @generated from protobuf field: google.protobuf.Any pub_key = 2;
     */
    pubKey?: Any;
    /**
     * @generated from protobuf field: int64 voting_power = 3;
     */
    votingPower: string;
    /**
     * @generated from protobuf field: int64 proposer_priority = 4;
     */
    proposerPriority: string;
}
/**
 * GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method.
 *
 * @generated from protobuf message cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest
 */
export interface GetBlockByHeightRequest {
    /**
     * @generated from protobuf field: int64 height = 1;
     */
    height: string;
}
/**
 * GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method.
 *
 * @generated from protobuf message cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse
 */
export interface GetBlockByHeightResponse {
    /**
     * @generated from protobuf field: tendermint.types.BlockID block_id = 1;
     */
    blockId?: BlockID;
    /**
     * @generated from protobuf field: tendermint.types.Block block = 2;
     */
    block?: Block;
}
/**
 * GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method.
 *
 * @generated from protobuf message cosmos.base.tendermint.v1beta1.GetLatestBlockRequest
 */
export interface GetLatestBlockRequest {
}
/**
 * GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method.
 *
 * @generated from protobuf message cosmos.base.tendermint.v1beta1.GetLatestBlockResponse
 */
export interface GetLatestBlockResponse {
    /**
     * @generated from protobuf field: tendermint.types.BlockID block_id = 1;
     */
    blockId?: BlockID;
    /**
     * @generated from protobuf field: tendermint.types.Block block = 2;
     */
    block?: Block;
}
/**
 * GetSyncingRequest is the request type for the Query/GetSyncing RPC method.
 *
 * @generated from protobuf message cosmos.base.tendermint.v1beta1.GetSyncingRequest
 */
export interface GetSyncingRequest {
}
/**
 * GetSyncingResponse is the response type for the Query/GetSyncing RPC method.
 *
 * @generated from protobuf message cosmos.base.tendermint.v1beta1.GetSyncingResponse
 */
export interface GetSyncingResponse {
    /**
     * @generated from protobuf field: bool syncing = 1;
     */
    syncing: boolean;
}
/**
 * GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method.
 *
 * @generated from protobuf message cosmos.base.tendermint.v1beta1.GetNodeInfoRequest
 */
export interface GetNodeInfoRequest {
}
/**
 * GetNodeInfoResponse is the request type for the Query/GetNodeInfo RPC method.
 *
 * @generated from protobuf message cosmos.base.tendermint.v1beta1.GetNodeInfoResponse
 */
export interface GetNodeInfoResponse {
    /**
     * @generated from protobuf field: tendermint.p2p.DefaultNodeInfo default_node_info = 1;
     */
    defaultNodeInfo?: DefaultNodeInfo;
    /**
     * @generated from protobuf field: cosmos.base.tendermint.v1beta1.VersionInfo application_version = 2;
     */
    applicationVersion?: VersionInfo;
}
/**
 * VersionInfo is the type for the GetNodeInfoResponse message.
 *
 * @generated from protobuf message cosmos.base.tendermint.v1beta1.VersionInfo
 */
export interface VersionInfo {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string app_name = 2;
     */
    appName: string;
    /**
     * @generated from protobuf field: string version = 3;
     */
    version: string;
    /**
     * @generated from protobuf field: string git_commit = 4;
     */
    gitCommit: string;
    /**
     * @generated from protobuf field: string build_tags = 5;
     */
    buildTags: string;
    /**
     * @generated from protobuf field: string go_version = 6;
     */
    goVersion: string;
    /**
     * @generated from protobuf field: repeated cosmos.base.tendermint.v1beta1.Module build_deps = 7;
     */
    buildDeps: Module[];
    /**
     * Since: cosmos-sdk 0.43
     *
     * @generated from protobuf field: string cosmos_sdk_version = 8;
     */
    cosmosSdkVersion: string;
}
/**
 * Module is the type for VersionInfo
 *
 * @generated from protobuf message cosmos.base.tendermint.v1beta1.Module
 */
export interface Module {
    /**
     * module path
     *
     * @generated from protobuf field: string path = 1;
     */
    path: string;
    /**
     * module version
     *
     * @generated from protobuf field: string version = 2;
     */
    version: string;
    /**
     * checksum
     *
     * @generated from protobuf field: string sum = 3;
     */
    sum: string;
}
declare class GetValidatorSetByHeightRequest$Type extends MessageType<GetValidatorSetByHeightRequest> {
    constructor();
    create(value?: PartialMessage<GetValidatorSetByHeightRequest>): GetValidatorSetByHeightRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetValidatorSetByHeightRequest): GetValidatorSetByHeightRequest;
    internalBinaryWrite(message: GetValidatorSetByHeightRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest
 */
export declare const GetValidatorSetByHeightRequest: GetValidatorSetByHeightRequest$Type;
declare class GetValidatorSetByHeightResponse$Type extends MessageType<GetValidatorSetByHeightResponse> {
    constructor();
    create(value?: PartialMessage<GetValidatorSetByHeightResponse>): GetValidatorSetByHeightResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetValidatorSetByHeightResponse): GetValidatorSetByHeightResponse;
    internalBinaryWrite(message: GetValidatorSetByHeightResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse
 */
export declare const GetValidatorSetByHeightResponse: GetValidatorSetByHeightResponse$Type;
declare class GetLatestValidatorSetRequest$Type extends MessageType<GetLatestValidatorSetRequest> {
    constructor();
    create(value?: PartialMessage<GetLatestValidatorSetRequest>): GetLatestValidatorSetRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetLatestValidatorSetRequest): GetLatestValidatorSetRequest;
    internalBinaryWrite(message: GetLatestValidatorSetRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest
 */
export declare const GetLatestValidatorSetRequest: GetLatestValidatorSetRequest$Type;
declare class GetLatestValidatorSetResponse$Type extends MessageType<GetLatestValidatorSetResponse> {
    constructor();
    create(value?: PartialMessage<GetLatestValidatorSetResponse>): GetLatestValidatorSetResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetLatestValidatorSetResponse): GetLatestValidatorSetResponse;
    internalBinaryWrite(message: GetLatestValidatorSetResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse
 */
export declare const GetLatestValidatorSetResponse: GetLatestValidatorSetResponse$Type;
declare class Validator$Type extends MessageType<Validator> {
    constructor();
    create(value?: PartialMessage<Validator>): Validator;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Validator): Validator;
    internalBinaryWrite(message: Validator, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.tendermint.v1beta1.Validator
 */
export declare const Validator: Validator$Type;
declare class GetBlockByHeightRequest$Type extends MessageType<GetBlockByHeightRequest> {
    constructor();
    create(value?: PartialMessage<GetBlockByHeightRequest>): GetBlockByHeightRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetBlockByHeightRequest): GetBlockByHeightRequest;
    internalBinaryWrite(message: GetBlockByHeightRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest
 */
export declare const GetBlockByHeightRequest: GetBlockByHeightRequest$Type;
declare class GetBlockByHeightResponse$Type extends MessageType<GetBlockByHeightResponse> {
    constructor();
    create(value?: PartialMessage<GetBlockByHeightResponse>): GetBlockByHeightResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetBlockByHeightResponse): GetBlockByHeightResponse;
    internalBinaryWrite(message: GetBlockByHeightResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse
 */
export declare const GetBlockByHeightResponse: GetBlockByHeightResponse$Type;
declare class GetLatestBlockRequest$Type extends MessageType<GetLatestBlockRequest> {
    constructor();
    create(value?: PartialMessage<GetLatestBlockRequest>): GetLatestBlockRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetLatestBlockRequest): GetLatestBlockRequest;
    internalBinaryWrite(message: GetLatestBlockRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.tendermint.v1beta1.GetLatestBlockRequest
 */
export declare const GetLatestBlockRequest: GetLatestBlockRequest$Type;
declare class GetLatestBlockResponse$Type extends MessageType<GetLatestBlockResponse> {
    constructor();
    create(value?: PartialMessage<GetLatestBlockResponse>): GetLatestBlockResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetLatestBlockResponse): GetLatestBlockResponse;
    internalBinaryWrite(message: GetLatestBlockResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.tendermint.v1beta1.GetLatestBlockResponse
 */
export declare const GetLatestBlockResponse: GetLatestBlockResponse$Type;
declare class GetSyncingRequest$Type extends MessageType<GetSyncingRequest> {
    constructor();
    create(value?: PartialMessage<GetSyncingRequest>): GetSyncingRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetSyncingRequest): GetSyncingRequest;
    internalBinaryWrite(message: GetSyncingRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.tendermint.v1beta1.GetSyncingRequest
 */
export declare const GetSyncingRequest: GetSyncingRequest$Type;
declare class GetSyncingResponse$Type extends MessageType<GetSyncingResponse> {
    constructor();
    create(value?: PartialMessage<GetSyncingResponse>): GetSyncingResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetSyncingResponse): GetSyncingResponse;
    internalBinaryWrite(message: GetSyncingResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.tendermint.v1beta1.GetSyncingResponse
 */
export declare const GetSyncingResponse: GetSyncingResponse$Type;
declare class GetNodeInfoRequest$Type extends MessageType<GetNodeInfoRequest> {
    constructor();
    create(value?: PartialMessage<GetNodeInfoRequest>): GetNodeInfoRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetNodeInfoRequest): GetNodeInfoRequest;
    internalBinaryWrite(message: GetNodeInfoRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.tendermint.v1beta1.GetNodeInfoRequest
 */
export declare const GetNodeInfoRequest: GetNodeInfoRequest$Type;
declare class GetNodeInfoResponse$Type extends MessageType<GetNodeInfoResponse> {
    constructor();
    create(value?: PartialMessage<GetNodeInfoResponse>): GetNodeInfoResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetNodeInfoResponse): GetNodeInfoResponse;
    internalBinaryWrite(message: GetNodeInfoResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.tendermint.v1beta1.GetNodeInfoResponse
 */
export declare const GetNodeInfoResponse: GetNodeInfoResponse$Type;
declare class VersionInfo$Type extends MessageType<VersionInfo> {
    constructor();
    create(value?: PartialMessage<VersionInfo>): VersionInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VersionInfo): VersionInfo;
    internalBinaryWrite(message: VersionInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.tendermint.v1beta1.VersionInfo
 */
export declare const VersionInfo: VersionInfo$Type;
declare class Module$Type extends MessageType<Module> {
    constructor();
    create(value?: PartialMessage<Module>): Module;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Module): Module;
    internalBinaryWrite(message: Module, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.tendermint.v1beta1.Module
 */
export declare const Module: Module$Type;
/**
 * @generated ServiceType for protobuf service cosmos.base.tendermint.v1beta1.Service
 */
export declare const Service: any;
export {};