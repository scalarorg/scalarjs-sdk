// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "tendermint/types/types.proto" (package "tendermint.types", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { ValidatorSet } from "./validator";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Consensus } from "../version/types";
import { Proof } from "../crypto/proof";
/**
 * PartsetHeader
 *
 * @generated from protobuf message tendermint.types.PartSetHeader
 */
export interface PartSetHeader {
    /**
     * @generated from protobuf field: uint32 total = 1;
     */
    total: number;
    /**
     * @generated from protobuf field: bytes hash = 2;
     */
    hash: Uint8Array;
}
/**
 * @generated from protobuf message tendermint.types.Part
 */
export interface Part {
    /**
     * @generated from protobuf field: uint32 index = 1;
     */
    index: number;
    /**
     * @generated from protobuf field: bytes bytes = 2;
     */
    bytes: Uint8Array;
    /**
     * @generated from protobuf field: tendermint.crypto.Proof proof = 3;
     */
    proof?: Proof;
}
/**
 * BlockID
 *
 * @generated from protobuf message tendermint.types.BlockID
 */
export interface BlockID {
    /**
     * @generated from protobuf field: bytes hash = 1;
     */
    hash: Uint8Array;
    /**
     * @generated from protobuf field: tendermint.types.PartSetHeader part_set_header = 2;
     */
    partSetHeader?: PartSetHeader;
}
/**
 * Header defines the structure of a block header.
 *
 * @generated from protobuf message tendermint.types.Header
 */
export interface Header {
    /**
     * basic block info
     *
     * @generated from protobuf field: tendermint.version.Consensus version = 1;
     */
    version?: Consensus;
    /**
     * @generated from protobuf field: string chain_id = 2;
     */
    chainId: string;
    /**
     * @generated from protobuf field: int64 height = 3;
     */
    height: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp time = 4;
     */
    time?: Timestamp;
    /**
     * prev block info
     *
     * @generated from protobuf field: tendermint.types.BlockID last_block_id = 5;
     */
    lastBlockId?: BlockID;
    /**
     * hashes of block data
     *
     * @generated from protobuf field: bytes last_commit_hash = 6;
     */
    lastCommitHash: Uint8Array;
    /**
     * @generated from protobuf field: bytes data_hash = 7;
     */
    dataHash: Uint8Array;
    /**
     * hashes from the app output from the prev block
     *
     * @generated from protobuf field: bytes validators_hash = 8;
     */
    validatorsHash: Uint8Array;
    /**
     * @generated from protobuf field: bytes next_validators_hash = 9;
     */
    nextValidatorsHash: Uint8Array;
    /**
     * @generated from protobuf field: bytes consensus_hash = 10;
     */
    consensusHash: Uint8Array;
    /**
     * @generated from protobuf field: bytes app_hash = 11;
     */
    appHash: Uint8Array;
    /**
     * @generated from protobuf field: bytes last_results_hash = 12;
     */
    lastResultsHash: Uint8Array;
    /**
     * consensus info
     *
     * @generated from protobuf field: bytes evidence_hash = 13;
     */
    evidenceHash: Uint8Array;
    /**
     * @generated from protobuf field: bytes proposer_address = 14;
     */
    proposerAddress: Uint8Array;
}
/**
 * Data contains the set of transactions included in the block
 *
 * @generated from protobuf message tendermint.types.Data
 */
export interface Data {
    /**
     * Txs that will be applied by state @ block.Height+1.
     * NOTE: not all txs here are valid.  We're just agreeing on the order first.
     * This means that block.AppHash does not include these txs.
     *
     * @generated from protobuf field: repeated bytes txs = 1;
     */
    txs: Uint8Array[];
}
/**
 * Vote represents a prevote, precommit, or commit vote from validators for
 * consensus.
 *
 * @generated from protobuf message tendermint.types.Vote
 */
export interface Vote {
    /**
     * @generated from protobuf field: tendermint.types.SignedMsgType type = 1;
     */
    type: SignedMsgType;
    /**
     * @generated from protobuf field: int64 height = 2;
     */
    height: string;
    /**
     * @generated from protobuf field: int32 round = 3;
     */
    round: number;
    /**
     * @generated from protobuf field: tendermint.types.BlockID block_id = 4;
     */
    blockId?: BlockID;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp timestamp = 5;
     */
    timestamp?: Timestamp;
    /**
     * @generated from protobuf field: bytes validator_address = 6;
     */
    validatorAddress: Uint8Array;
    /**
     * @generated from protobuf field: int32 validator_index = 7;
     */
    validatorIndex: number;
    /**
     * @generated from protobuf field: bytes signature = 8;
     */
    signature: Uint8Array;
}
/**
 * Commit contains the evidence that a block was committed by a set of validators.
 *
 * @generated from protobuf message tendermint.types.Commit
 */
export interface Commit {
    /**
     * @generated from protobuf field: int64 height = 1;
     */
    height: string;
    /**
     * @generated from protobuf field: int32 round = 2;
     */
    round: number;
    /**
     * @generated from protobuf field: tendermint.types.BlockID block_id = 3;
     */
    blockId?: BlockID;
    /**
     * @generated from protobuf field: repeated tendermint.types.CommitSig signatures = 4;
     */
    signatures: CommitSig[];
}
/**
 * CommitSig is a part of the Vote included in a Commit.
 *
 * @generated from protobuf message tendermint.types.CommitSig
 */
export interface CommitSig {
    /**
     * @generated from protobuf field: tendermint.types.BlockIDFlag block_id_flag = 1;
     */
    blockIdFlag: BlockIDFlag;
    /**
     * @generated from protobuf field: bytes validator_address = 2;
     */
    validatorAddress: Uint8Array;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp timestamp = 3;
     */
    timestamp?: Timestamp;
    /**
     * @generated from protobuf field: bytes signature = 4;
     */
    signature: Uint8Array;
}
/**
 * @generated from protobuf message tendermint.types.Proposal
 */
export interface Proposal {
    /**
     * @generated from protobuf field: tendermint.types.SignedMsgType type = 1;
     */
    type: SignedMsgType;
    /**
     * @generated from protobuf field: int64 height = 2;
     */
    height: string;
    /**
     * @generated from protobuf field: int32 round = 3;
     */
    round: number;
    /**
     * @generated from protobuf field: int32 pol_round = 4;
     */
    polRound: number;
    /**
     * @generated from protobuf field: tendermint.types.BlockID block_id = 5;
     */
    blockId?: BlockID;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp timestamp = 6;
     */
    timestamp?: Timestamp;
    /**
     * @generated from protobuf field: bytes signature = 7;
     */
    signature: Uint8Array;
}
/**
 * @generated from protobuf message tendermint.types.SignedHeader
 */
export interface SignedHeader {
    /**
     * @generated from protobuf field: tendermint.types.Header header = 1;
     */
    header?: Header;
    /**
     * @generated from protobuf field: tendermint.types.Commit commit = 2;
     */
    commit?: Commit;
}
/**
 * @generated from protobuf message tendermint.types.LightBlock
 */
export interface LightBlock {
    /**
     * @generated from protobuf field: tendermint.types.SignedHeader signed_header = 1;
     */
    signedHeader?: SignedHeader;
    /**
     * @generated from protobuf field: tendermint.types.ValidatorSet validator_set = 2;
     */
    validatorSet?: ValidatorSet;
}
/**
 * @generated from protobuf message tendermint.types.BlockMeta
 */
export interface BlockMeta {
    /**
     * @generated from protobuf field: tendermint.types.BlockID block_id = 1;
     */
    blockId?: BlockID;
    /**
     * @generated from protobuf field: int64 block_size = 2;
     */
    blockSize: string;
    /**
     * @generated from protobuf field: tendermint.types.Header header = 3;
     */
    header?: Header;
    /**
     * @generated from protobuf field: int64 num_txs = 4;
     */
    numTxs: string;
}
/**
 * TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree.
 *
 * @generated from protobuf message tendermint.types.TxProof
 */
export interface TxProof {
    /**
     * @generated from protobuf field: bytes root_hash = 1;
     */
    rootHash: Uint8Array;
    /**
     * @generated from protobuf field: bytes data = 2;
     */
    data: Uint8Array;
    /**
     * @generated from protobuf field: tendermint.crypto.Proof proof = 3;
     */
    proof?: Proof;
}
/**
 * BlockIdFlag indicates which BlcokID the signature is for
 *
 * @generated from protobuf enum tendermint.types.BlockIDFlag
 */
export declare enum BlockIDFlag {
    /**
     * @generated from protobuf enum value: BLOCK_ID_FLAG_UNKNOWN = 0;
     */
    BLOCK_ID_FLAG_UNKNOWN = 0,
    /**
     * @generated from protobuf enum value: BLOCK_ID_FLAG_ABSENT = 1;
     */
    BLOCK_ID_FLAG_ABSENT = 1,
    /**
     * @generated from protobuf enum value: BLOCK_ID_FLAG_COMMIT = 2;
     */
    BLOCK_ID_FLAG_COMMIT = 2,
    /**
     * @generated from protobuf enum value: BLOCK_ID_FLAG_NIL = 3;
     */
    BLOCK_ID_FLAG_NIL = 3
}
/**
 * SignedMsgType is a type of signed message in the consensus.
 *
 * @generated from protobuf enum tendermint.types.SignedMsgType
 */
export declare enum SignedMsgType {
    /**
     * @generated from protobuf enum value: SIGNED_MSG_TYPE_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * Votes
     *
     * @generated from protobuf enum value: SIGNED_MSG_TYPE_PREVOTE = 1;
     */
    PREVOTE = 1,
    /**
     * @generated from protobuf enum value: SIGNED_MSG_TYPE_PRECOMMIT = 2;
     */
    PRECOMMIT = 2,
    /**
     * Proposals
     *
     * @generated from protobuf enum value: SIGNED_MSG_TYPE_PROPOSAL = 32;
     */
    PROPOSAL = 32
}
declare class PartSetHeader$Type extends MessageType<PartSetHeader> {
    constructor();
    create(value?: PartialMessage<PartSetHeader>): PartSetHeader;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PartSetHeader): PartSetHeader;
    internalBinaryWrite(message: PartSetHeader, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tendermint.types.PartSetHeader
 */
export declare const PartSetHeader: PartSetHeader$Type;
declare class Part$Type extends MessageType<Part> {
    constructor();
    create(value?: PartialMessage<Part>): Part;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Part): Part;
    internalBinaryWrite(message: Part, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tendermint.types.Part
 */
export declare const Part: Part$Type;
declare class BlockID$Type extends MessageType<BlockID> {
    constructor();
    create(value?: PartialMessage<BlockID>): BlockID;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BlockID): BlockID;
    internalBinaryWrite(message: BlockID, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tendermint.types.BlockID
 */
export declare const BlockID: BlockID$Type;
declare class Header$Type extends MessageType<Header> {
    constructor();
    create(value?: PartialMessage<Header>): Header;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Header): Header;
    internalBinaryWrite(message: Header, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tendermint.types.Header
 */
export declare const Header: Header$Type;
declare class Data$Type extends MessageType<Data> {
    constructor();
    create(value?: PartialMessage<Data>): Data;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Data): Data;
    internalBinaryWrite(message: Data, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tendermint.types.Data
 */
export declare const Data: Data$Type;
declare class Vote$Type extends MessageType<Vote> {
    constructor();
    create(value?: PartialMessage<Vote>): Vote;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Vote): Vote;
    internalBinaryWrite(message: Vote, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tendermint.types.Vote
 */
export declare const Vote: Vote$Type;
declare class Commit$Type extends MessageType<Commit> {
    constructor();
    create(value?: PartialMessage<Commit>): Commit;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Commit): Commit;
    internalBinaryWrite(message: Commit, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tendermint.types.Commit
 */
export declare const Commit: Commit$Type;
declare class CommitSig$Type extends MessageType<CommitSig> {
    constructor();
    create(value?: PartialMessage<CommitSig>): CommitSig;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CommitSig): CommitSig;
    internalBinaryWrite(message: CommitSig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tendermint.types.CommitSig
 */
export declare const CommitSig: CommitSig$Type;
declare class Proposal$Type extends MessageType<Proposal> {
    constructor();
    create(value?: PartialMessage<Proposal>): Proposal;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Proposal): Proposal;
    internalBinaryWrite(message: Proposal, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tendermint.types.Proposal
 */
export declare const Proposal: Proposal$Type;
declare class SignedHeader$Type extends MessageType<SignedHeader> {
    constructor();
    create(value?: PartialMessage<SignedHeader>): SignedHeader;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SignedHeader): SignedHeader;
    internalBinaryWrite(message: SignedHeader, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tendermint.types.SignedHeader
 */
export declare const SignedHeader: SignedHeader$Type;
declare class LightBlock$Type extends MessageType<LightBlock> {
    constructor();
    create(value?: PartialMessage<LightBlock>): LightBlock;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LightBlock): LightBlock;
    internalBinaryWrite(message: LightBlock, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tendermint.types.LightBlock
 */
export declare const LightBlock: LightBlock$Type;
declare class BlockMeta$Type extends MessageType<BlockMeta> {
    constructor();
    create(value?: PartialMessage<BlockMeta>): BlockMeta;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BlockMeta): BlockMeta;
    internalBinaryWrite(message: BlockMeta, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tendermint.types.BlockMeta
 */
export declare const BlockMeta: BlockMeta$Type;
declare class TxProof$Type extends MessageType<TxProof> {
    constructor();
    create(value?: PartialMessage<TxProof>): TxProof;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TxProof): TxProof;
    internalBinaryWrite(message: TxProof, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message tendermint.types.TxProof
 */
export declare const TxProof: TxProof$Type;
export {};
