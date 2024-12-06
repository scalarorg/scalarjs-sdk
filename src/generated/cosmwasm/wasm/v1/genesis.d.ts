// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmwasm/wasm/v1/genesis.proto" (package "cosmwasm.wasm.v1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { ContractCodeHistoryEntry } from "./types";
import { Model } from "./types";
import { ContractInfo } from "./types";
import { CodeInfo } from "./types";
import { Params } from "./types";
/**
 * GenesisState - genesis state of x/wasm
 *
 * @generated from protobuf message cosmwasm.wasm.v1.GenesisState
 */
export interface GenesisState {
    /**
     * @generated from protobuf field: cosmwasm.wasm.v1.Params params = 1;
     */
    params?: Params;
    /**
     * @generated from protobuf field: repeated cosmwasm.wasm.v1.Code codes = 2;
     */
    codes: Code[];
    /**
     * @generated from protobuf field: repeated cosmwasm.wasm.v1.Contract contracts = 3;
     */
    contracts: Contract[];
    /**
     * @generated from protobuf field: repeated cosmwasm.wasm.v1.Sequence sequences = 4;
     */
    sequences: Sequence[];
}
/**
 * Code struct encompasses CodeInfo and CodeBytes
 *
 * @generated from protobuf message cosmwasm.wasm.v1.Code
 */
export interface Code {
    /**
     * @generated from protobuf field: uint64 code_id = 1;
     */
    codeId: string;
    /**
     * @generated from protobuf field: cosmwasm.wasm.v1.CodeInfo code_info = 2;
     */
    codeInfo?: CodeInfo;
    /**
     * @generated from protobuf field: bytes code_bytes = 3;
     */
    codeBytes: Uint8Array;
    /**
     * Pinned to wasmvm cache
     *
     * @generated from protobuf field: bool pinned = 4;
     */
    pinned: boolean;
}
/**
 * Contract struct encompasses ContractAddress, ContractInfo, and ContractState
 *
 * @generated from protobuf message cosmwasm.wasm.v1.Contract
 */
export interface Contract {
    /**
     * @generated from protobuf field: string contract_address = 1;
     */
    contractAddress: string;
    /**
     * @generated from protobuf field: cosmwasm.wasm.v1.ContractInfo contract_info = 2;
     */
    contractInfo?: ContractInfo;
    /**
     * @generated from protobuf field: repeated cosmwasm.wasm.v1.Model contract_state = 3;
     */
    contractState: Model[];
    /**
     * @generated from protobuf field: repeated cosmwasm.wasm.v1.ContractCodeHistoryEntry contract_code_history = 4;
     */
    contractCodeHistory: ContractCodeHistoryEntry[];
}
/**
 * Sequence key and value of an id generation counter
 *
 * @generated from protobuf message cosmwasm.wasm.v1.Sequence
 */
export interface Sequence {
    /**
     * @generated from protobuf field: bytes id_key = 1;
     */
    idKey: Uint8Array;
    /**
     * @generated from protobuf field: uint64 value = 2;
     */
    value: string;
}
declare class GenesisState$Type extends MessageType<GenesisState> {
    constructor();
    create(value?: PartialMessage<GenesisState>): GenesisState;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GenesisState): GenesisState;
    internalBinaryWrite(message: GenesisState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.GenesisState
 */
export declare const GenesisState: GenesisState$Type;
declare class Code$Type extends MessageType<Code> {
    constructor();
    create(value?: PartialMessage<Code>): Code;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Code): Code;
    internalBinaryWrite(message: Code, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.Code
 */
export declare const Code: Code$Type;
declare class Contract$Type extends MessageType<Contract> {
    constructor();
    create(value?: PartialMessage<Contract>): Contract;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Contract): Contract;
    internalBinaryWrite(message: Contract, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.Contract
 */
export declare const Contract: Contract$Type;
declare class Sequence$Type extends MessageType<Sequence> {
    constructor();
    create(value?: PartialMessage<Sequence>): Sequence;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Sequence): Sequence;
    internalBinaryWrite(message: Sequence, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.Sequence
 */
export declare const Sequence: Sequence$Type;
export {};
