// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/evm/v1beta1/query.proto" (package "axelar.evm.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Params } from "./params";
import { TokenDetails } from "./types";
import { BurnerInfo } from "./types";
import { Event } from "./types";
import { DepositStatus } from "./types";
import { BatchedCommandsStatus } from "./types";
/**
 * DepositQueryParams describe the parameters used to query for an EVM
 * deposit address
 *
 * @generated from protobuf message axelar.evm.v1beta1.DepositQueryParams
 */
export interface DepositQueryParams {
    /**
     * @generated from protobuf field: string address = 1;
     */
    address: string;
    /**
     * @generated from protobuf field: string asset = 2;
     */
    asset: string;
    /**
     * @generated from protobuf field: string chain = 3;
     */
    chain: string;
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.BatchedCommandsRequest
 */
export interface BatchedCommandsRequest {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
    /**
     * id defines an optional id for the commandsbatch. If not specified the
     * latest will be returned
     *
     * @generated from protobuf field: string id = 2;
     */
    id: string;
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.BatchedCommandsResponse
 */
export interface BatchedCommandsResponse {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string data = 2;
     */
    data: string;
    /**
     * @generated from protobuf field: axelar.evm.v1beta1.BatchedCommandsStatus status = 3;
     */
    status: BatchedCommandsStatus;
    /**
     * @generated from protobuf field: string key_id = 4;
     */
    keyId: string;
    /**
     * @generated from protobuf field: string execute_data = 6;
     */
    executeData: string;
    /**
     * @generated from protobuf field: string prev_batched_commands_id = 7;
     */
    prevBatchedCommandsId: string;
    /**
     * @generated from protobuf field: repeated string command_ids = 8;
     */
    commandIds: string[];
    /**
     * @generated from protobuf field: axelar.evm.v1beta1.Proof proof = 9;
     */
    proof?: Proof;
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.KeyAddressRequest
 */
export interface KeyAddressRequest {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
    /**
     * @generated from protobuf field: string key_id = 4;
     */
    keyId: string;
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.KeyAddressResponse
 */
export interface KeyAddressResponse {
    /**
     * @generated from protobuf field: string key_id = 1;
     */
    keyId: string;
    /**
     * @generated from protobuf field: repeated axelar.evm.v1beta1.KeyAddressResponse.WeightedAddress addresses = 2;
     */
    addresses: KeyAddressResponse_WeightedAddress[];
    /**
     * @generated from protobuf field: string threshold = 3;
     */
    threshold: string;
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.KeyAddressResponse.WeightedAddress
 */
export interface KeyAddressResponse_WeightedAddress {
    /**
     * @generated from protobuf field: string address = 1;
     */
    address: string;
    /**
     * @generated from protobuf field: string weight = 2;
     */
    weight: string;
}
/**
 * @deprecated
 * @generated from protobuf message axelar.evm.v1beta1.QueryTokenAddressResponse
 */
export interface QueryTokenAddressResponse {
    /**
     * @generated from protobuf field: string address = 1;
     */
    address: string;
    /**
     * @generated from protobuf field: bool confirmed = 2;
     */
    confirmed: boolean;
}
/**
 * @deprecated
 * @generated from protobuf message axelar.evm.v1beta1.QueryDepositStateParams
 */
export interface QueryDepositStateParams {
    /**
     * @generated from protobuf field: bytes tx_id = 1;
     */
    txId: Uint8Array;
    /**
     * @generated from protobuf field: bytes burner_address = 2;
     */
    burnerAddress: Uint8Array;
}
/**
 * @deprecated
 * @generated from protobuf message axelar.evm.v1beta1.DepositStateRequest
 */
export interface DepositStateRequest {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
    /**
     * @generated from protobuf field: axelar.evm.v1beta1.QueryDepositStateParams params = 2;
     */
    params?: QueryDepositStateParams;
}
/**
 * @deprecated
 * @generated from protobuf message axelar.evm.v1beta1.DepositStateResponse
 */
export interface DepositStateResponse {
    /**
     * @generated from protobuf field: axelar.evm.v1beta1.DepositStatus status = 2;
     */
    status: DepositStatus;
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.EventRequest
 */
export interface EventRequest {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
    /**
     * @generated from protobuf field: string event_id = 2;
     */
    eventId: string;
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.EventResponse
 */
export interface EventResponse {
    /**
     * @generated from protobuf field: axelar.evm.v1beta1.Event event = 1;
     */
    event?: Event;
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.QueryBurnerAddressResponse
 */
export interface QueryBurnerAddressResponse {
    /**
     * @generated from protobuf field: string address = 1;
     */
    address: string;
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.ChainsRequest
 */
export interface ChainsRequest {
    /**
     * @generated from protobuf field: axelar.evm.v1beta1.ChainStatus status = 1;
     */
    status: ChainStatus;
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.ChainsResponse
 */
export interface ChainsResponse {
    /**
     * @generated from protobuf field: repeated string chains = 1;
     */
    chains: string[];
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.CommandRequest
 */
export interface CommandRequest {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
    /**
     * @generated from protobuf field: string id = 2;
     */
    id: string;
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.CommandResponse
 */
export interface CommandResponse {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string type = 2;
     */
    type: string;
    /**
     * @generated from protobuf field: map<string, string> params = 3;
     */
    params: {
        [key: string]: string;
    };
    /**
     * @generated from protobuf field: string key_id = 4;
     */
    keyId: string;
    /**
     * @generated from protobuf field: uint32 max_gas_cost = 5;
     */
    maxGasCost: number;
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.PendingCommandsRequest
 */
export interface PendingCommandsRequest {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.PendingCommandsResponse
 */
export interface PendingCommandsResponse {
    /**
     * @generated from protobuf field: repeated axelar.evm.v1beta1.QueryCommandResponse commands = 1;
     */
    commands: QueryCommandResponse[];
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.QueryCommandResponse
 */
export interface QueryCommandResponse {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string type = 2;
     */
    type: string;
    /**
     * @generated from protobuf field: map<string, string> params = 3;
     */
    params: {
        [key: string]: string;
    };
    /**
     * @generated from protobuf field: string key_id = 4;
     */
    keyId: string;
    /**
     * @generated from protobuf field: uint32 max_gas_cost = 5;
     */
    maxGasCost: number;
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.BurnerInfoRequest
 */
export interface BurnerInfoRequest {
    /**
     * @generated from protobuf field: bytes address = 1;
     */
    address: Uint8Array;
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.BurnerInfoResponse
 */
export interface BurnerInfoResponse {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
    /**
     * @generated from protobuf field: axelar.evm.v1beta1.BurnerInfo burner_info = 2;
     */
    burnerInfo?: BurnerInfo;
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.ConfirmationHeightRequest
 */
export interface ConfirmationHeightRequest {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.ConfirmationHeightResponse
 */
export interface ConfirmationHeightResponse {
    /**
     * @generated from protobuf field: uint64 height = 1;
     */
    height: string;
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.GatewayAddressRequest
 */
export interface GatewayAddressRequest {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.GatewayAddressResponse
 */
export interface GatewayAddressResponse {
    /**
     * @generated from protobuf field: string address = 1;
     */
    address: string;
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.BytecodeRequest
 */
export interface BytecodeRequest {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
    /**
     * @generated from protobuf field: string contract = 2;
     */
    contract: string;
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.BytecodeResponse
 */
export interface BytecodeResponse {
    /**
     * @generated from protobuf field: string bytecode = 1;
     */
    bytecode: string;
}
/**
 * ERC20TokensRequest describes the chain for which the type of ERC20 tokens are
 * requested.
 *
 * @generated from protobuf message axelar.evm.v1beta1.ERC20TokensRequest
 */
export interface ERC20TokensRequest {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
    /**
     * @generated from protobuf field: axelar.evm.v1beta1.TokenType type = 2;
     */
    type: TokenType;
}
/**
 * ERC20TokensResponse describes the asset and symbol for all
 * ERC20 tokens requested for a chain
 *
 * @generated from protobuf message axelar.evm.v1beta1.ERC20TokensResponse
 */
export interface ERC20TokensResponse {
    /**
     * @generated from protobuf field: repeated axelar.evm.v1beta1.ERC20TokensResponse.Token tokens = 1;
     */
    tokens: ERC20TokensResponse_Token[];
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.ERC20TokensResponse.Token
 */
export interface ERC20TokensResponse_Token {
    /**
     * @generated from protobuf field: string asset = 1;
     */
    asset: string;
    /**
     * @generated from protobuf field: string symbol = 2;
     */
    symbol: string;
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.TokenInfoRequest
 */
export interface TokenInfoRequest {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
    /**
     * @generated from protobuf oneof: find_by
     */
    findBy: {
        oneofKind: "asset";
        /**
         * @generated from protobuf field: string asset = 2;
         */
        asset: string;
    } | {
        oneofKind: "symbol";
        /**
         * @generated from protobuf field: string symbol = 3;
         */
        symbol: string;
    } | {
        oneofKind: "address";
        /**
         * @generated from protobuf field: string address = 4;
         */
        address: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.TokenInfoResponse
 */
export interface TokenInfoResponse {
    /**
     * @generated from protobuf field: string asset = 1;
     */
    asset: string;
    /**
     * @generated from protobuf field: axelar.evm.v1beta1.TokenDetails details = 2;
     */
    details?: TokenDetails;
    /**
     * @generated from protobuf field: string address = 3;
     */
    address: string;
    /**
     * @generated from protobuf field: bool confirmed = 4;
     */
    confirmed: boolean;
    /**
     * @generated from protobuf field: bool is_external = 5;
     */
    isExternal: boolean;
    /**
     * @generated from protobuf field: string burner_code_hash = 6;
     */
    burnerCodeHash: string;
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.Proof
 */
export interface Proof {
    /**
     * @generated from protobuf field: repeated string addresses = 1;
     */
    addresses: string[];
    /**
     * @generated from protobuf field: repeated string weights = 2;
     */
    weights: string[];
    /**
     * @generated from protobuf field: string threshold = 3;
     */
    threshold: string;
    /**
     * @generated from protobuf field: repeated string signatures = 4;
     */
    signatures: string[];
}
/**
 * ParamsRequest represents a message that queries the params
 *
 * @generated from protobuf message axelar.evm.v1beta1.ParamsRequest
 */
export interface ParamsRequest {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
}
/**
 * @generated from protobuf message axelar.evm.v1beta1.ParamsResponse
 */
export interface ParamsResponse {
    /**
     * @generated from protobuf field: axelar.evm.v1beta1.Params params = 1;
     */
    params?: Params;
}
/**
 * @generated from protobuf enum axelar.evm.v1beta1.ChainStatus
 */
export declare enum ChainStatus {
    /**
     * @generated from protobuf enum value: CHAIN_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: CHAIN_STATUS_ACTIVATED = 1;
     */
    ACTIVATED = 1,
    /**
     * @generated from protobuf enum value: CHAIN_STATUS_DEACTIVATED = 2;
     */
    DEACTIVATED = 2
}
/**
 * @generated from protobuf enum axelar.evm.v1beta1.TokenType
 */
export declare enum TokenType {
    /**
     * @generated from protobuf enum value: TOKEN_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: TOKEN_TYPE_INTERNAL = 1;
     */
    INTERNAL = 1,
    /**
     * @generated from protobuf enum value: TOKEN_TYPE_EXTERNAL = 2;
     */
    EXTERNAL = 2
}
declare class DepositQueryParams$Type extends MessageType<DepositQueryParams> {
    constructor();
    create(value?: PartialMessage<DepositQueryParams>): DepositQueryParams;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DepositQueryParams): DepositQueryParams;
    internalBinaryWrite(message: DepositQueryParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.DepositQueryParams
 */
export declare const DepositQueryParams: DepositQueryParams$Type;
declare class BatchedCommandsRequest$Type extends MessageType<BatchedCommandsRequest> {
    constructor();
    create(value?: PartialMessage<BatchedCommandsRequest>): BatchedCommandsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchedCommandsRequest): BatchedCommandsRequest;
    internalBinaryWrite(message: BatchedCommandsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.BatchedCommandsRequest
 */
export declare const BatchedCommandsRequest: BatchedCommandsRequest$Type;
declare class BatchedCommandsResponse$Type extends MessageType<BatchedCommandsResponse> {
    constructor();
    create(value?: PartialMessage<BatchedCommandsResponse>): BatchedCommandsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BatchedCommandsResponse): BatchedCommandsResponse;
    internalBinaryWrite(message: BatchedCommandsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.BatchedCommandsResponse
 */
export declare const BatchedCommandsResponse: BatchedCommandsResponse$Type;
declare class KeyAddressRequest$Type extends MessageType<KeyAddressRequest> {
    constructor();
    create(value?: PartialMessage<KeyAddressRequest>): KeyAddressRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: KeyAddressRequest): KeyAddressRequest;
    internalBinaryWrite(message: KeyAddressRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.KeyAddressRequest
 */
export declare const KeyAddressRequest: KeyAddressRequest$Type;
declare class KeyAddressResponse$Type extends MessageType<KeyAddressResponse> {
    constructor();
    create(value?: PartialMessage<KeyAddressResponse>): KeyAddressResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: KeyAddressResponse): KeyAddressResponse;
    internalBinaryWrite(message: KeyAddressResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.KeyAddressResponse
 */
export declare const KeyAddressResponse: KeyAddressResponse$Type;
declare class KeyAddressResponse_WeightedAddress$Type extends MessageType<KeyAddressResponse_WeightedAddress> {
    constructor();
    create(value?: PartialMessage<KeyAddressResponse_WeightedAddress>): KeyAddressResponse_WeightedAddress;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: KeyAddressResponse_WeightedAddress): KeyAddressResponse_WeightedAddress;
    internalBinaryWrite(message: KeyAddressResponse_WeightedAddress, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.KeyAddressResponse.WeightedAddress
 */
export declare const KeyAddressResponse_WeightedAddress: KeyAddressResponse_WeightedAddress$Type;
declare class QueryTokenAddressResponse$Type extends MessageType<QueryTokenAddressResponse> {
    constructor();
    create(value?: PartialMessage<QueryTokenAddressResponse>): QueryTokenAddressResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryTokenAddressResponse): QueryTokenAddressResponse;
    internalBinaryWrite(message: QueryTokenAddressResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @deprecated
 * @generated MessageType for protobuf message axelar.evm.v1beta1.QueryTokenAddressResponse
 */
export declare const QueryTokenAddressResponse: QueryTokenAddressResponse$Type;
declare class QueryDepositStateParams$Type extends MessageType<QueryDepositStateParams> {
    constructor();
    create(value?: PartialMessage<QueryDepositStateParams>): QueryDepositStateParams;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDepositStateParams): QueryDepositStateParams;
    internalBinaryWrite(message: QueryDepositStateParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @deprecated
 * @generated MessageType for protobuf message axelar.evm.v1beta1.QueryDepositStateParams
 */
export declare const QueryDepositStateParams: QueryDepositStateParams$Type;
declare class DepositStateRequest$Type extends MessageType<DepositStateRequest> {
    constructor();
    create(value?: PartialMessage<DepositStateRequest>): DepositStateRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DepositStateRequest): DepositStateRequest;
    internalBinaryWrite(message: DepositStateRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @deprecated
 * @generated MessageType for protobuf message axelar.evm.v1beta1.DepositStateRequest
 */
export declare const DepositStateRequest: DepositStateRequest$Type;
declare class DepositStateResponse$Type extends MessageType<DepositStateResponse> {
    constructor();
    create(value?: PartialMessage<DepositStateResponse>): DepositStateResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DepositStateResponse): DepositStateResponse;
    internalBinaryWrite(message: DepositStateResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @deprecated
 * @generated MessageType for protobuf message axelar.evm.v1beta1.DepositStateResponse
 */
export declare const DepositStateResponse: DepositStateResponse$Type;
declare class EventRequest$Type extends MessageType<EventRequest> {
    constructor();
    create(value?: PartialMessage<EventRequest>): EventRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EventRequest): EventRequest;
    internalBinaryWrite(message: EventRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.EventRequest
 */
export declare const EventRequest: EventRequest$Type;
declare class EventResponse$Type extends MessageType<EventResponse> {
    constructor();
    create(value?: PartialMessage<EventResponse>): EventResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EventResponse): EventResponse;
    internalBinaryWrite(message: EventResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.EventResponse
 */
export declare const EventResponse: EventResponse$Type;
declare class QueryBurnerAddressResponse$Type extends MessageType<QueryBurnerAddressResponse> {
    constructor();
    create(value?: PartialMessage<QueryBurnerAddressResponse>): QueryBurnerAddressResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryBurnerAddressResponse): QueryBurnerAddressResponse;
    internalBinaryWrite(message: QueryBurnerAddressResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.QueryBurnerAddressResponse
 */
export declare const QueryBurnerAddressResponse: QueryBurnerAddressResponse$Type;
declare class ChainsRequest$Type extends MessageType<ChainsRequest> {
    constructor();
    create(value?: PartialMessage<ChainsRequest>): ChainsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChainsRequest): ChainsRequest;
    internalBinaryWrite(message: ChainsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.ChainsRequest
 */
export declare const ChainsRequest: ChainsRequest$Type;
declare class ChainsResponse$Type extends MessageType<ChainsResponse> {
    constructor();
    create(value?: PartialMessage<ChainsResponse>): ChainsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChainsResponse): ChainsResponse;
    internalBinaryWrite(message: ChainsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.ChainsResponse
 */
export declare const ChainsResponse: ChainsResponse$Type;
declare class CommandRequest$Type extends MessageType<CommandRequest> {
    constructor();
    create(value?: PartialMessage<CommandRequest>): CommandRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CommandRequest): CommandRequest;
    internalBinaryWrite(message: CommandRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.CommandRequest
 */
export declare const CommandRequest: CommandRequest$Type;
declare class CommandResponse$Type extends MessageType<CommandResponse> {
    constructor();
    create(value?: PartialMessage<CommandResponse>): CommandResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CommandResponse): CommandResponse;
    private binaryReadMap3;
    internalBinaryWrite(message: CommandResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.CommandResponse
 */
export declare const CommandResponse: CommandResponse$Type;
declare class PendingCommandsRequest$Type extends MessageType<PendingCommandsRequest> {
    constructor();
    create(value?: PartialMessage<PendingCommandsRequest>): PendingCommandsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PendingCommandsRequest): PendingCommandsRequest;
    internalBinaryWrite(message: PendingCommandsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.PendingCommandsRequest
 */
export declare const PendingCommandsRequest: PendingCommandsRequest$Type;
declare class PendingCommandsResponse$Type extends MessageType<PendingCommandsResponse> {
    constructor();
    create(value?: PartialMessage<PendingCommandsResponse>): PendingCommandsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PendingCommandsResponse): PendingCommandsResponse;
    internalBinaryWrite(message: PendingCommandsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.PendingCommandsResponse
 */
export declare const PendingCommandsResponse: PendingCommandsResponse$Type;
declare class QueryCommandResponse$Type extends MessageType<QueryCommandResponse> {
    constructor();
    create(value?: PartialMessage<QueryCommandResponse>): QueryCommandResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryCommandResponse): QueryCommandResponse;
    private binaryReadMap3;
    internalBinaryWrite(message: QueryCommandResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.QueryCommandResponse
 */
export declare const QueryCommandResponse: QueryCommandResponse$Type;
declare class BurnerInfoRequest$Type extends MessageType<BurnerInfoRequest> {
    constructor();
    create(value?: PartialMessage<BurnerInfoRequest>): BurnerInfoRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BurnerInfoRequest): BurnerInfoRequest;
    internalBinaryWrite(message: BurnerInfoRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.BurnerInfoRequest
 */
export declare const BurnerInfoRequest: BurnerInfoRequest$Type;
declare class BurnerInfoResponse$Type extends MessageType<BurnerInfoResponse> {
    constructor();
    create(value?: PartialMessage<BurnerInfoResponse>): BurnerInfoResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BurnerInfoResponse): BurnerInfoResponse;
    internalBinaryWrite(message: BurnerInfoResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.BurnerInfoResponse
 */
export declare const BurnerInfoResponse: BurnerInfoResponse$Type;
declare class ConfirmationHeightRequest$Type extends MessageType<ConfirmationHeightRequest> {
    constructor();
    create(value?: PartialMessage<ConfirmationHeightRequest>): ConfirmationHeightRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConfirmationHeightRequest): ConfirmationHeightRequest;
    internalBinaryWrite(message: ConfirmationHeightRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.ConfirmationHeightRequest
 */
export declare const ConfirmationHeightRequest: ConfirmationHeightRequest$Type;
declare class ConfirmationHeightResponse$Type extends MessageType<ConfirmationHeightResponse> {
    constructor();
    create(value?: PartialMessage<ConfirmationHeightResponse>): ConfirmationHeightResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConfirmationHeightResponse): ConfirmationHeightResponse;
    internalBinaryWrite(message: ConfirmationHeightResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.ConfirmationHeightResponse
 */
export declare const ConfirmationHeightResponse: ConfirmationHeightResponse$Type;
declare class GatewayAddressRequest$Type extends MessageType<GatewayAddressRequest> {
    constructor();
    create(value?: PartialMessage<GatewayAddressRequest>): GatewayAddressRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GatewayAddressRequest): GatewayAddressRequest;
    internalBinaryWrite(message: GatewayAddressRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.GatewayAddressRequest
 */
export declare const GatewayAddressRequest: GatewayAddressRequest$Type;
declare class GatewayAddressResponse$Type extends MessageType<GatewayAddressResponse> {
    constructor();
    create(value?: PartialMessage<GatewayAddressResponse>): GatewayAddressResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GatewayAddressResponse): GatewayAddressResponse;
    internalBinaryWrite(message: GatewayAddressResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.GatewayAddressResponse
 */
export declare const GatewayAddressResponse: GatewayAddressResponse$Type;
declare class BytecodeRequest$Type extends MessageType<BytecodeRequest> {
    constructor();
    create(value?: PartialMessage<BytecodeRequest>): BytecodeRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BytecodeRequest): BytecodeRequest;
    internalBinaryWrite(message: BytecodeRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.BytecodeRequest
 */
export declare const BytecodeRequest: BytecodeRequest$Type;
declare class BytecodeResponse$Type extends MessageType<BytecodeResponse> {
    constructor();
    create(value?: PartialMessage<BytecodeResponse>): BytecodeResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BytecodeResponse): BytecodeResponse;
    internalBinaryWrite(message: BytecodeResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.BytecodeResponse
 */
export declare const BytecodeResponse: BytecodeResponse$Type;
declare class ERC20TokensRequest$Type extends MessageType<ERC20TokensRequest> {
    constructor();
    create(value?: PartialMessage<ERC20TokensRequest>): ERC20TokensRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ERC20TokensRequest): ERC20TokensRequest;
    internalBinaryWrite(message: ERC20TokensRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.ERC20TokensRequest
 */
export declare const ERC20TokensRequest: ERC20TokensRequest$Type;
declare class ERC20TokensResponse$Type extends MessageType<ERC20TokensResponse> {
    constructor();
    create(value?: PartialMessage<ERC20TokensResponse>): ERC20TokensResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ERC20TokensResponse): ERC20TokensResponse;
    internalBinaryWrite(message: ERC20TokensResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.ERC20TokensResponse
 */
export declare const ERC20TokensResponse: ERC20TokensResponse$Type;
declare class ERC20TokensResponse_Token$Type extends MessageType<ERC20TokensResponse_Token> {
    constructor();
    create(value?: PartialMessage<ERC20TokensResponse_Token>): ERC20TokensResponse_Token;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ERC20TokensResponse_Token): ERC20TokensResponse_Token;
    internalBinaryWrite(message: ERC20TokensResponse_Token, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.ERC20TokensResponse.Token
 */
export declare const ERC20TokensResponse_Token: ERC20TokensResponse_Token$Type;
declare class TokenInfoRequest$Type extends MessageType<TokenInfoRequest> {
    constructor();
    create(value?: PartialMessage<TokenInfoRequest>): TokenInfoRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TokenInfoRequest): TokenInfoRequest;
    internalBinaryWrite(message: TokenInfoRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.TokenInfoRequest
 */
export declare const TokenInfoRequest: TokenInfoRequest$Type;
declare class TokenInfoResponse$Type extends MessageType<TokenInfoResponse> {
    constructor();
    create(value?: PartialMessage<TokenInfoResponse>): TokenInfoResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TokenInfoResponse): TokenInfoResponse;
    internalBinaryWrite(message: TokenInfoResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.TokenInfoResponse
 */
export declare const TokenInfoResponse: TokenInfoResponse$Type;
declare class Proof$Type extends MessageType<Proof> {
    constructor();
    create(value?: PartialMessage<Proof>): Proof;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Proof): Proof;
    internalBinaryWrite(message: Proof, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.Proof
 */
export declare const Proof: Proof$Type;
declare class ParamsRequest$Type extends MessageType<ParamsRequest> {
    constructor();
    create(value?: PartialMessage<ParamsRequest>): ParamsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ParamsRequest): ParamsRequest;
    internalBinaryWrite(message: ParamsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.ParamsRequest
 */
export declare const ParamsRequest: ParamsRequest$Type;
declare class ParamsResponse$Type extends MessageType<ParamsResponse> {
    constructor();
    create(value?: PartialMessage<ParamsResponse>): ParamsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ParamsResponse): ParamsResponse;
    internalBinaryWrite(message: ParamsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.ParamsResponse
 */
export declare const ParamsResponse: ParamsResponse$Type;
export {};
