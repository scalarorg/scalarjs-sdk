// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "tendermint/types/params.proto" (package "tendermint.types", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Duration } from "../../google/protobuf/duration";
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 *
 * @generated from protobuf message tendermint.types.ConsensusParams
 */
export interface ConsensusParams {
    /**
     * @generated from protobuf field: tendermint.types.BlockParams block = 1;
     */
    block?: BlockParams;
    /**
     * @generated from protobuf field: tendermint.types.EvidenceParams evidence = 2;
     */
    evidence?: EvidenceParams;
    /**
     * @generated from protobuf field: tendermint.types.ValidatorParams validator = 3;
     */
    validator?: ValidatorParams;
    /**
     * @generated from protobuf field: tendermint.types.VersionParams version = 4;
     */
    version?: VersionParams;
}
/**
 * BlockParams contains limits on the block size.
 *
 * @generated from protobuf message tendermint.types.BlockParams
 */
export interface BlockParams {
    /**
     * Max block size, in bytes.
     * Note: must be greater than 0
     *
     * @generated from protobuf field: int64 max_bytes = 1;
     */
    maxBytes: string;
    /**
     * Max gas per block.
     * Note: must be greater or equal to -1
     *
     * @generated from protobuf field: int64 max_gas = 2;
     */
    maxGas: string;
    /**
     * Minimum time increment between consecutive blocks (in milliseconds) If the
     * block header timestamp is ahead of the system clock, decrease this value.
     *
     * Not exposed to the application.
     *
     * @generated from protobuf field: int64 time_iota_ms = 3;
     */
    timeIotaMs: string;
}
/**
 * EvidenceParams determine how we handle evidence of malfeasance.
 *
 * @generated from protobuf message tendermint.types.EvidenceParams
 */
export interface EvidenceParams {
    /**
     * Max age of evidence, in blocks.
     *
     * The basic formula for calculating this is: MaxAgeDuration / {average block
     * time}.
     *
     * @generated from protobuf field: int64 max_age_num_blocks = 1;
     */
    maxAgeNumBlocks: string;
    /**
     * Max age of evidence, in time.
     *
     * It should correspond with an app's "unbonding period" or other similar
     * mechanism for handling [Nothing-At-Stake
     * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
     *
     * @generated from protobuf field: google.protobuf.Duration max_age_duration = 2;
     */
    maxAgeDuration?: Duration;
    /**
     * This sets the maximum size of total evidence in bytes that can be committed in a single block.
     * and should fall comfortably under the max block bytes.
     * Default is 1048576 or 1MB
     *
     * @generated from protobuf field: int64 max_bytes = 3;
     */
    maxBytes: string;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 *
 * @generated from protobuf message tendermint.types.ValidatorParams
 */
export interface ValidatorParams {
    /**
     * @generated from protobuf field: repeated string pub_key_types = 1;
     */
    pubKeyTypes: string[];
}
/**
 * VersionParams contains the ABCI application version.
 *
 * @generated from protobuf message tendermint.types.VersionParams
 */
export interface VersionParams {
    /**
     * @generated from protobuf field: uint64 app_version = 1;
     */
    appVersion: string;
}
/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 *
 * @generated from protobuf message tendermint.types.HashedParams
 */
export interface HashedParams {
    /**
     * @generated from protobuf field: int64 block_max_bytes = 1;
     */
    blockMaxBytes: string;
    /**
     * @generated from protobuf field: int64 block_max_gas = 2;
     */
    blockMaxGas: string;
}
declare class ConsensusParams$Type extends MessageType<ConsensusParams> {
    constructor();
    create(value?: PartialMessage<ConsensusParams>): ConsensusParams;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConsensusParams): ConsensusParams;
    internalBinaryWrite(message: ConsensusParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tendermint.types.ConsensusParams
 */
export declare const ConsensusParams: ConsensusParams$Type;
declare class BlockParams$Type extends MessageType<BlockParams> {
    constructor();
    create(value?: PartialMessage<BlockParams>): BlockParams;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BlockParams): BlockParams;
    internalBinaryWrite(message: BlockParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tendermint.types.BlockParams
 */
export declare const BlockParams: BlockParams$Type;
declare class EvidenceParams$Type extends MessageType<EvidenceParams> {
    constructor();
    create(value?: PartialMessage<EvidenceParams>): EvidenceParams;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EvidenceParams): EvidenceParams;
    internalBinaryWrite(message: EvidenceParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tendermint.types.EvidenceParams
 */
export declare const EvidenceParams: EvidenceParams$Type;
declare class ValidatorParams$Type extends MessageType<ValidatorParams> {
    constructor();
    create(value?: PartialMessage<ValidatorParams>): ValidatorParams;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ValidatorParams): ValidatorParams;
    internalBinaryWrite(message: ValidatorParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tendermint.types.ValidatorParams
 */
export declare const ValidatorParams: ValidatorParams$Type;
declare class VersionParams$Type extends MessageType<VersionParams> {
    constructor();
    create(value?: PartialMessage<VersionParams>): VersionParams;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VersionParams): VersionParams;
    internalBinaryWrite(message: VersionParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tendermint.types.VersionParams
 */
export declare const VersionParams: VersionParams$Type;
declare class HashedParams$Type extends MessageType<HashedParams> {
    constructor();
    create(value?: PartialMessage<HashedParams>): HashedParams;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HashedParams): HashedParams;
    internalBinaryWrite(message: HashedParams, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tendermint.types.HashedParams
 */
export declare const HashedParams: HashedParams$Type;
export {};
