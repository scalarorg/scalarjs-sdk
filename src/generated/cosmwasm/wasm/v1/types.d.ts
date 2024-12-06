// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmwasm/wasm/v1/types.proto" (package "cosmwasm.wasm.v1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Any } from "../../../google/protobuf/any";
/**
 * AccessTypeParam
 *
 * @generated from protobuf message cosmwasm.wasm.v1.AccessTypeParam
 */
export interface AccessTypeParam {
    /**
     * @generated from protobuf field: cosmwasm.wasm.v1.AccessType value = 1;
     */
    value: AccessType;
}
/**
 * AccessConfig access control type.
 *
 * @generated from protobuf message cosmwasm.wasm.v1.AccessConfig
 */
export interface AccessConfig {
    /**
     * @generated from protobuf field: cosmwasm.wasm.v1.AccessType permission = 1;
     */
    permission: AccessType;
    /**
     * Address
     * Deprecated: replaced by addresses
     *
     * @generated from protobuf field: string address = 2;
     */
    address: string;
    /**
     * @generated from protobuf field: repeated string addresses = 3;
     */
    addresses: string[];
}
/**
 * Params defines the set of wasm parameters.
 *
 * @generated from protobuf message cosmwasm.wasm.v1.Params
 */
export interface Params {
    /**
     * @generated from protobuf field: cosmwasm.wasm.v1.AccessConfig code_upload_access = 1;
     */
    codeUploadAccess?: AccessConfig;
    /**
     * @generated from protobuf field: cosmwasm.wasm.v1.AccessType instantiate_default_permission = 2;
     */
    instantiateDefaultPermission: AccessType;
}
/**
 * CodeInfo is data for the uploaded contract WASM code
 *
 * @generated from protobuf message cosmwasm.wasm.v1.CodeInfo
 */
export interface CodeInfo {
    /**
     * CodeHash is the unique identifier created by wasmvm
     *
     * @generated from protobuf field: bytes code_hash = 1;
     */
    codeHash: Uint8Array;
    /**
     * Creator address who initially stored the code
     *
     * @generated from protobuf field: string creator = 2;
     */
    creator: string;
    /**
     * InstantiateConfig access control to apply on contract creation, optional
     *
     * @generated from protobuf field: cosmwasm.wasm.v1.AccessConfig instantiate_config = 5;
     */
    instantiateConfig?: AccessConfig;
}
/**
 * ContractInfo stores a WASM contract instance
 *
 * @generated from protobuf message cosmwasm.wasm.v1.ContractInfo
 */
export interface ContractInfo {
    /**
     * CodeID is the reference to the stored Wasm code
     *
     * @generated from protobuf field: uint64 code_id = 1;
     */
    codeId: string;
    /**
     * Creator address who initially instantiated the contract
     *
     * @generated from protobuf field: string creator = 2;
     */
    creator: string;
    /**
     * Admin is an optional address that can execute migrations
     *
     * @generated from protobuf field: string admin = 3;
     */
    admin: string;
    /**
     * Label is optional metadata to be stored with a contract instance.
     *
     * @generated from protobuf field: string label = 4;
     */
    label: string;
    /**
     * Created Tx position when the contract was instantiated.
     *
     * @generated from protobuf field: cosmwasm.wasm.v1.AbsoluteTxPosition created = 5;
     */
    created?: AbsoluteTxPosition;
    /**
     * @generated from protobuf field: string ibc_port_id = 6;
     */
    ibcPortId: string;
    /**
     * Extension is an extension point to store custom metadata within the
     * persistence model.
     *
     * @generated from protobuf field: google.protobuf.Any extension = 7;
     */
    extension?: Any;
}
/**
 * ContractCodeHistoryEntry metadata to a contract.
 *
 * @generated from protobuf message cosmwasm.wasm.v1.ContractCodeHistoryEntry
 */
export interface ContractCodeHistoryEntry {
    /**
     * @generated from protobuf field: cosmwasm.wasm.v1.ContractCodeHistoryOperationType operation = 1;
     */
    operation: ContractCodeHistoryOperationType;
    /**
     * CodeID is the reference to the stored WASM code
     *
     * @generated from protobuf field: uint64 code_id = 2;
     */
    codeId: string;
    /**
     * Updated Tx position when the operation was executed.
     *
     * @generated from protobuf field: cosmwasm.wasm.v1.AbsoluteTxPosition updated = 3;
     */
    updated?: AbsoluteTxPosition;
    /**
     * @generated from protobuf field: bytes msg = 4;
     */
    msg: Uint8Array;
}
/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 *
 * @generated from protobuf message cosmwasm.wasm.v1.AbsoluteTxPosition
 */
export interface AbsoluteTxPosition {
    /**
     * BlockHeight is the block the contract was created at
     *
     * @generated from protobuf field: uint64 block_height = 1;
     */
    blockHeight: string;
    /**
     * TxIndex is a monotonic counter within the block (actual transaction index,
     * or gas consumed)
     *
     * @generated from protobuf field: uint64 tx_index = 2;
     */
    txIndex: string;
}
/**
 * Model is a struct that holds a KV pair
 *
 * @generated from protobuf message cosmwasm.wasm.v1.Model
 */
export interface Model {
    /**
     * hex-encode key to read it better (this is often ascii)
     *
     * @generated from protobuf field: bytes key = 1;
     */
    key: Uint8Array;
    /**
     * base64-encode raw value
     *
     * @generated from protobuf field: bytes value = 2;
     */
    value: Uint8Array;
}
/**
 * AccessType permission types
 *
 * @generated from protobuf enum cosmwasm.wasm.v1.AccessType
 */
export declare enum AccessType {
    /**
     * AccessTypeUnspecified placeholder for empty value
     *
     * @generated from protobuf enum value: ACCESS_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * AccessTypeNobody forbidden
     *
     * @generated from protobuf enum value: ACCESS_TYPE_NOBODY = 1;
     */
    NOBODY = 1,
    /**
     * AccessTypeOnlyAddress restricted to a single address
     * Deprecated: use AccessTypeAnyOfAddresses instead
     *
     * @generated from protobuf enum value: ACCESS_TYPE_ONLY_ADDRESS = 2;
     */
    ONLY_ADDRESS = 2,
    /**
     * AccessTypeEverybody unrestricted
     *
     * @generated from protobuf enum value: ACCESS_TYPE_EVERYBODY = 3;
     */
    EVERYBODY = 3,
    /**
     * AccessTypeAnyOfAddresses allow any of the addresses
     *
     * @generated from protobuf enum value: ACCESS_TYPE_ANY_OF_ADDRESSES = 4;
     */
    ANY_OF_ADDRESSES = 4
}
/**
 * ContractCodeHistoryOperationType actions that caused a code change
 *
 * @generated from protobuf enum cosmwasm.wasm.v1.ContractCodeHistoryOperationType
 */
export declare enum ContractCodeHistoryOperationType {
    /**
     * ContractCodeHistoryOperationTypeUnspecified placeholder for empty value
     *
     * @generated from protobuf enum value: CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * ContractCodeHistoryOperationTypeInit on chain contract instantiation
     *
     * @generated from protobuf enum value: CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT = 1;
     */
    INIT = 1,
    /**
     * ContractCodeHistoryOperationTypeMigrate code migration
     *
     * @generated from protobuf enum value: CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE = 2;
     */
    MIGRATE = 2,
    /**
     * ContractCodeHistoryOperationTypeGenesis based on genesis data
     *
     * @generated from protobuf enum value: CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS = 3;
     */
    GENESIS = 3
}
declare class AccessTypeParam$Type extends MessageType<AccessTypeParam> {
    constructor();
    create(value?: PartialMessage<AccessTypeParam>): AccessTypeParam;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AccessTypeParam): AccessTypeParam;
    internalBinaryWrite(message: AccessTypeParam, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.AccessTypeParam
 */
export declare const AccessTypeParam: AccessTypeParam$Type;
declare class AccessConfig$Type extends MessageType<AccessConfig> {
    constructor();
    create(value?: PartialMessage<AccessConfig>): AccessConfig;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AccessConfig): AccessConfig;
    internalBinaryWrite(message: AccessConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.AccessConfig
 */
export declare const AccessConfig: AccessConfig$Type;
declare class Params$Type extends MessageType<Params> {
    constructor();
    create(value?: PartialMessage<Params>): Params;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Params): Params;
    internalBinaryWrite(message: Params, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.Params
 */
export declare const Params: Params$Type;
declare class CodeInfo$Type extends MessageType<CodeInfo> {
    constructor();
    create(value?: PartialMessage<CodeInfo>): CodeInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CodeInfo): CodeInfo;
    internalBinaryWrite(message: CodeInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.CodeInfo
 */
export declare const CodeInfo: CodeInfo$Type;
declare class ContractInfo$Type extends MessageType<ContractInfo> {
    constructor();
    create(value?: PartialMessage<ContractInfo>): ContractInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ContractInfo): ContractInfo;
    internalBinaryWrite(message: ContractInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.ContractInfo
 */
export declare const ContractInfo: ContractInfo$Type;
declare class ContractCodeHistoryEntry$Type extends MessageType<ContractCodeHistoryEntry> {
    constructor();
    create(value?: PartialMessage<ContractCodeHistoryEntry>): ContractCodeHistoryEntry;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ContractCodeHistoryEntry): ContractCodeHistoryEntry;
    internalBinaryWrite(message: ContractCodeHistoryEntry, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.ContractCodeHistoryEntry
 */
export declare const ContractCodeHistoryEntry: ContractCodeHistoryEntry$Type;
declare class AbsoluteTxPosition$Type extends MessageType<AbsoluteTxPosition> {
    constructor();
    create(value?: PartialMessage<AbsoluteTxPosition>): AbsoluteTxPosition;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AbsoluteTxPosition): AbsoluteTxPosition;
    internalBinaryWrite(message: AbsoluteTxPosition, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.AbsoluteTxPosition
 */
export declare const AbsoluteTxPosition: AbsoluteTxPosition$Type;
declare class Model$Type extends MessageType<Model> {
    constructor();
    create(value?: PartialMessage<Model>): Model;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Model): Model;
    internalBinaryWrite(message: Model, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.Model
 */
export declare const Model: Model$Type;
export {};