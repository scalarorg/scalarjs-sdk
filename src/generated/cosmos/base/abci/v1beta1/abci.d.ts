// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/base/abci/v1beta1/abci.proto" (package "cosmos.base.abci.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Event } from "../../../../tendermint/abci/types";
import { Any } from "../../../../google/protobuf/any";
/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 *
 * @generated from protobuf message cosmos.base.abci.v1beta1.TxResponse
 */
export interface TxResponse {
    /**
     * The block height
     *
     * @generated from protobuf field: int64 height = 1;
     */
    height: string;
    /**
     * The transaction hash.
     *
     * @generated from protobuf field: string txhash = 2;
     */
    txhash: string;
    /**
     * Namespace for the Code
     *
     * @generated from protobuf field: string codespace = 3;
     */
    codespace: string;
    /**
     * Response code.
     *
     * @generated from protobuf field: uint32 code = 4;
     */
    code: number;
    /**
     * Result bytes, if any.
     *
     * @generated from protobuf field: string data = 5;
     */
    data: string;
    /**
     * The output of the application's logger (raw string). May be
     * non-deterministic.
     *
     * @generated from protobuf field: string raw_log = 6;
     */
    rawLog: string;
    /**
     * The output of the application's logger (typed). May be non-deterministic.
     *
     * @generated from protobuf field: repeated cosmos.base.abci.v1beta1.ABCIMessageLog logs = 7;
     */
    logs: ABCIMessageLog[];
    /**
     * Additional information. May be non-deterministic.
     *
     * @generated from protobuf field: string info = 8;
     */
    info: string;
    /**
     * Amount of gas requested for transaction.
     *
     * @generated from protobuf field: int64 gas_wanted = 9;
     */
    gasWanted: string;
    /**
     * Amount of gas consumed by transaction.
     *
     * @generated from protobuf field: int64 gas_used = 10;
     */
    gasUsed: string;
    /**
     * The request transaction bytes.
     *
     * @generated from protobuf field: google.protobuf.Any tx = 11;
     */
    tx?: Any;
    /**
     * Time of the previous block. For heights > 1, it's the weighted median of
     * the timestamps of the valid votes in the block.LastCommit. For height == 1,
     * it's genesis time.
     *
     * @generated from protobuf field: string timestamp = 12;
     */
    timestamp: string;
    /**
     * Events defines all the events emitted by processing a transaction. Note,
     * these events include those emitted by processing all the messages and those
     * emitted from the ante handler. Whereas Logs contains the events, with
     * additional metadata, emitted only by processing the messages.
     *
     * Since: cosmos-sdk 0.42.11, 0.44.5, 0.45
     *
     * @generated from protobuf field: repeated tendermint.abci.Event events = 13;
     */
    events: Event[];
}
/**
 * ABCIMessageLog defines a structure containing an indexed tx ABCI message log.
 *
 * @generated from protobuf message cosmos.base.abci.v1beta1.ABCIMessageLog
 */
export interface ABCIMessageLog {
    /**
     * @generated from protobuf field: uint32 msg_index = 1;
     */
    msgIndex: number;
    /**
     * @generated from protobuf field: string log = 2;
     */
    log: string;
    /**
     * Events contains a slice of Event objects that were emitted during some
     * execution.
     *
     * @generated from protobuf field: repeated cosmos.base.abci.v1beta1.StringEvent events = 3;
     */
    events: StringEvent[];
}
/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 *
 * @generated from protobuf message cosmos.base.abci.v1beta1.StringEvent
 */
export interface StringEvent {
    /**
     * @generated from protobuf field: string type = 1;
     */
    type: string;
    /**
     * @generated from protobuf field: repeated cosmos.base.abci.v1beta1.Attribute attributes = 2;
     */
    attributes: Attribute[];
}
/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 *
 * @generated from protobuf message cosmos.base.abci.v1beta1.Attribute
 */
export interface Attribute {
    /**
     * @generated from protobuf field: string key = 1;
     */
    key: string;
    /**
     * @generated from protobuf field: string value = 2;
     */
    value: string;
}
/**
 * GasInfo defines tx execution gas context.
 *
 * @generated from protobuf message cosmos.base.abci.v1beta1.GasInfo
 */
export interface GasInfo {
    /**
     * GasWanted is the maximum units of work we allow this tx to perform.
     *
     * @generated from protobuf field: uint64 gas_wanted = 1;
     */
    gasWanted: string;
    /**
     * GasUsed is the amount of gas actually consumed.
     *
     * @generated from protobuf field: uint64 gas_used = 2;
     */
    gasUsed: string;
}
/**
 * Result is the union of ResponseFormat and ResponseCheckTx.
 *
 * @generated from protobuf message cosmos.base.abci.v1beta1.Result
 */
export interface Result {
    /**
     * Data is any data returned from message or handler execution. It MUST be
     * length prefixed in order to separate data from multiple message executions.
     *
     * @generated from protobuf field: bytes data = 1;
     */
    data: Uint8Array;
    /**
     * Log contains the log information from message or handler execution.
     *
     * @generated from protobuf field: string log = 2;
     */
    log: string;
    /**
     * Events contains a slice of Event objects that were emitted during message
     * or handler execution.
     *
     * @generated from protobuf field: repeated tendermint.abci.Event events = 3;
     */
    events: Event[];
}
/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 *
 * @generated from protobuf message cosmos.base.abci.v1beta1.SimulationResponse
 */
export interface SimulationResponse {
    /**
     * @generated from protobuf field: cosmos.base.abci.v1beta1.GasInfo gas_info = 1;
     */
    gasInfo?: GasInfo;
    /**
     * @generated from protobuf field: cosmos.base.abci.v1beta1.Result result = 2;
     */
    result?: Result;
}
/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 *
 * @generated from protobuf message cosmos.base.abci.v1beta1.MsgData
 */
export interface MsgData {
    /**
     * @generated from protobuf field: string msg_type = 1;
     */
    msgType: string;
    /**
     * @generated from protobuf field: bytes data = 2;
     */
    data: Uint8Array;
}
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 *
 * @generated from protobuf message cosmos.base.abci.v1beta1.TxMsgData
 */
export interface TxMsgData {
    /**
     * @generated from protobuf field: repeated cosmos.base.abci.v1beta1.MsgData data = 1;
     */
    data: MsgData[];
}
/**
 * SearchTxsResult defines a structure for querying txs pageable
 *
 * @generated from protobuf message cosmos.base.abci.v1beta1.SearchTxsResult
 */
export interface SearchTxsResult {
    /**
     * Count of all txs
     *
     * @generated from protobuf field: uint64 total_count = 1;
     */
    totalCount: string;
    /**
     * Count of txs in current page
     *
     * @generated from protobuf field: uint64 count = 2;
     */
    count: string;
    /**
     * Index of current page, start from 1
     *
     * @generated from protobuf field: uint64 page_number = 3;
     */
    pageNumber: string;
    /**
     * Count of total pages
     *
     * @generated from protobuf field: uint64 page_total = 4;
     */
    pageTotal: string;
    /**
     * Max count txs per page
     *
     * @generated from protobuf field: uint64 limit = 5;
     */
    limit: string;
    /**
     * List of txs in current page
     *
     * @generated from protobuf field: repeated cosmos.base.abci.v1beta1.TxResponse txs = 6;
     */
    txs: TxResponse[];
}
declare class TxResponse$Type extends MessageType<TxResponse> {
    constructor();
    create(value?: PartialMessage<TxResponse>): TxResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TxResponse): TxResponse;
    internalBinaryWrite(message: TxResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.abci.v1beta1.TxResponse
 */
export declare const TxResponse: TxResponse$Type;
declare class ABCIMessageLog$Type extends MessageType<ABCIMessageLog> {
    constructor();
    create(value?: PartialMessage<ABCIMessageLog>): ABCIMessageLog;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ABCIMessageLog): ABCIMessageLog;
    internalBinaryWrite(message: ABCIMessageLog, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.abci.v1beta1.ABCIMessageLog
 */
export declare const ABCIMessageLog: ABCIMessageLog$Type;
declare class StringEvent$Type extends MessageType<StringEvent> {
    constructor();
    create(value?: PartialMessage<StringEvent>): StringEvent;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StringEvent): StringEvent;
    internalBinaryWrite(message: StringEvent, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.abci.v1beta1.StringEvent
 */
export declare const StringEvent: StringEvent$Type;
declare class Attribute$Type extends MessageType<Attribute> {
    constructor();
    create(value?: PartialMessage<Attribute>): Attribute;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Attribute): Attribute;
    internalBinaryWrite(message: Attribute, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.abci.v1beta1.Attribute
 */
export declare const Attribute: Attribute$Type;
declare class GasInfo$Type extends MessageType<GasInfo> {
    constructor();
    create(value?: PartialMessage<GasInfo>): GasInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GasInfo): GasInfo;
    internalBinaryWrite(message: GasInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.abci.v1beta1.GasInfo
 */
export declare const GasInfo: GasInfo$Type;
declare class Result$Type extends MessageType<Result> {
    constructor();
    create(value?: PartialMessage<Result>): Result;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Result): Result;
    internalBinaryWrite(message: Result, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.abci.v1beta1.Result
 */
export declare const Result: Result$Type;
declare class SimulationResponse$Type extends MessageType<SimulationResponse> {
    constructor();
    create(value?: PartialMessage<SimulationResponse>): SimulationResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SimulationResponse): SimulationResponse;
    internalBinaryWrite(message: SimulationResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.abci.v1beta1.SimulationResponse
 */
export declare const SimulationResponse: SimulationResponse$Type;
declare class MsgData$Type extends MessageType<MsgData> {
    constructor();
    create(value?: PartialMessage<MsgData>): MsgData;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgData): MsgData;
    internalBinaryWrite(message: MsgData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.abci.v1beta1.MsgData
 */
export declare const MsgData: MsgData$Type;
declare class TxMsgData$Type extends MessageType<TxMsgData> {
    constructor();
    create(value?: PartialMessage<TxMsgData>): TxMsgData;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TxMsgData): TxMsgData;
    internalBinaryWrite(message: TxMsgData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.abci.v1beta1.TxMsgData
 */
export declare const TxMsgData: TxMsgData$Type;
declare class SearchTxsResult$Type extends MessageType<SearchTxsResult> {
    constructor();
    create(value?: PartialMessage<SearchTxsResult>): SearchTxsResult;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SearchTxsResult): SearchTxsResult;
    internalBinaryWrite(message: SearchTxsResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.abci.v1beta1.SearchTxsResult
 */
export declare const SearchTxsResult: SearchTxsResult$Type;
export {};
