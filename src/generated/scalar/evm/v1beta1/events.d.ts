// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "scalar/evm/v1beta1/events.proto" (package "scalar.evm.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { TokenDetails } from "./types";
import { PollParticipants } from "../../vote/exported/v1beta1/types";
/**
 * @generated from protobuf message scalar.evm.v1beta1.PollFailed
 */
export interface PollFailed {
    /**
     * @generated from protobuf field: bytes tx_id = 1;
     */
    txId: Uint8Array;
    /**
     * @generated from protobuf field: string chain = 2;
     */
    chain: string;
    /**
     * @generated from protobuf field: uint64 poll_id = 3;
     */
    pollId: string;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.PollExpired
 */
export interface PollExpired {
    /**
     * @generated from protobuf field: bytes tx_id = 1;
     */
    txId: Uint8Array;
    /**
     * @generated from protobuf field: string chain = 2;
     */
    chain: string;
    /**
     * @generated from protobuf field: uint64 poll_id = 3;
     */
    pollId: string;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.PollCompleted
 */
export interface PollCompleted {
    /**
     * @generated from protobuf field: bytes tx_id = 1;
     */
    txId: Uint8Array;
    /**
     * @generated from protobuf field: string chain = 2;
     */
    chain: string;
    /**
     * @generated from protobuf field: uint64 poll_id = 3;
     */
    pollId: string;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.NoEventsConfirmed
 */
export interface NoEventsConfirmed {
    /**
     * @generated from protobuf field: bytes tx_id = 1;
     */
    txId: Uint8Array;
    /**
     * @generated from protobuf field: string chain = 2;
     */
    chain: string;
    /**
     * @generated from protobuf field: uint64 poll_id = 3;
     */
    pollId: string;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.ConfirmKeyTransferStarted
 */
export interface ConfirmKeyTransferStarted {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
    /**
     * @generated from protobuf field: bytes tx_id = 2;
     */
    txId: Uint8Array;
    /**
     * @generated from protobuf field: bytes gateway_address = 3;
     */
    gatewayAddress: Uint8Array;
    /**
     * @generated from protobuf field: uint64 confirmation_height = 4;
     */
    confirmationHeight: string;
    /**
     * @generated from protobuf field: scalar.vote.exported.v1beta1.PollParticipants participants = 5;
     */
    participants?: PollParticipants;
}
/**
 * @deprecated
 * @generated from protobuf message scalar.evm.v1beta1.ConfirmGatewayTxStarted
 */
export interface ConfirmGatewayTxStarted {
    /**
     * @generated from protobuf field: bytes tx_id = 1;
     */
    txId: Uint8Array;
    /**
     * @generated from protobuf field: string chain = 2;
     */
    chain: string;
    /**
     * @generated from protobuf field: bytes gateway_address = 3;
     */
    gatewayAddress: Uint8Array;
    /**
     * @generated from protobuf field: uint64 confirmation_height = 4;
     */
    confirmationHeight: string;
    /**
     * @generated from protobuf field: scalar.vote.exported.v1beta1.PollParticipants participants = 5;
     */
    participants?: PollParticipants;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.PollMapping
 */
export interface PollMapping {
    /**
     * @generated from protobuf field: bytes tx_id = 1;
     */
    txId: Uint8Array;
    /**
     * @generated from protobuf field: uint64 poll_id = 2;
     */
    pollId: string;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.ConfirmGatewayTxsStarted
 */
export interface ConfirmGatewayTxsStarted {
    /**
     * @generated from protobuf field: repeated scalar.evm.v1beta1.PollMapping poll_mappings = 1;
     */
    pollMappings: PollMapping[];
    /**
     * @generated from protobuf field: string chain = 2;
     */
    chain: string;
    /**
     * @generated from protobuf field: bytes gateway_address = 3;
     */
    gatewayAddress: Uint8Array;
    /**
     * @generated from protobuf field: uint64 confirmation_height = 4;
     */
    confirmationHeight: string;
    /**
     * @generated from protobuf field: repeated bytes participants = 5;
     */
    participants: Uint8Array[];
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.ConfirmDepositStarted
 */
export interface ConfirmDepositStarted {
    /**
     * @generated from protobuf field: bytes tx_id = 1;
     */
    txId: Uint8Array;
    /**
     * @generated from protobuf field: string chain = 2;
     */
    chain: string;
    /**
     * @generated from protobuf field: bytes deposit_address = 3;
     */
    depositAddress: Uint8Array;
    /**
     * @generated from protobuf field: bytes token_address = 4;
     */
    tokenAddress: Uint8Array;
    /**
     * @generated from protobuf field: uint64 confirmation_height = 5;
     */
    confirmationHeight: string;
    /**
     * @generated from protobuf field: scalar.vote.exported.v1beta1.PollParticipants participants = 6;
     */
    participants?: PollParticipants;
    /**
     * @generated from protobuf field: string asset = 7;
     */
    asset: string;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.ConfirmTokenStarted
 */
export interface ConfirmTokenStarted {
    /**
     * @generated from protobuf field: bytes tx_id = 1;
     */
    txId: Uint8Array;
    /**
     * @generated from protobuf field: string chain = 2;
     */
    chain: string;
    /**
     * @generated from protobuf field: bytes gateway_address = 3;
     */
    gatewayAddress: Uint8Array;
    /**
     * @generated from protobuf field: bytes token_address = 4;
     */
    tokenAddress: Uint8Array;
    /**
     * @generated from protobuf field: scalar.evm.v1beta1.TokenDetails token_details = 5;
     */
    tokenDetails?: TokenDetails;
    /**
     * @generated from protobuf field: uint64 confirmation_height = 6;
     */
    confirmationHeight: string;
    /**
     * @generated from protobuf field: scalar.vote.exported.v1beta1.PollParticipants participants = 7;
     */
    participants?: PollParticipants;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.ChainAdded
 */
export interface ChainAdded {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.CommandBatchSigned
 */
export interface CommandBatchSigned {
    /**
     * @generated from protobuf field: string chain = 2;
     */
    chain: string;
    /**
     * @generated from protobuf field: bytes command_batch_id = 3;
     */
    commandBatchId: Uint8Array;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.CommandBatchAborted
 */
export interface CommandBatchAborted {
    /**
     * @generated from protobuf field: string chain = 2;
     */
    chain: string;
    /**
     * @generated from protobuf field: bytes command_batch_id = 3;
     */
    commandBatchId: Uint8Array;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.EVMEventConfirmed
 */
export interface EVMEventConfirmed {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
    /**
     * @generated from protobuf field: string event_id = 2;
     */
    eventId: string;
    /**
     * @generated from protobuf field: string type = 3;
     */
    type: string;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.EVMEventCompleted
 */
export interface EVMEventCompleted {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
    /**
     * @generated from protobuf field: string event_id = 2;
     */
    eventId: string;
    /**
     * @generated from protobuf field: string type = 3;
     */
    type: string;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.EVMEventFailed
 */
export interface EVMEventFailed {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
    /**
     * @generated from protobuf field: string event_id = 2;
     */
    eventId: string;
    /**
     * @generated from protobuf field: string type = 3;
     */
    type: string;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.EVMEventRetryFailed
 */
export interface EVMEventRetryFailed {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
    /**
     * @generated from protobuf field: string event_id = 2;
     */
    eventId: string;
    /**
     * @generated from protobuf field: string type = 3;
     */
    type: string;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.ContractCallApproved
 */
export interface ContractCallApproved {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
    /**
     * @generated from protobuf field: string event_id = 2;
     */
    eventId: string;
    /**
     * @generated from protobuf field: bytes command_id = 3;
     */
    commandId: Uint8Array;
    /**
     * @generated from protobuf field: string sender = 4;
     */
    sender: string;
    /**
     * @generated from protobuf field: string destination_chain = 5;
     */
    destinationChain: string;
    /**
     * @generated from protobuf field: string contract_address = 6;
     */
    contractAddress: string;
    /**
     * @generated from protobuf field: bytes payload_hash = 7;
     */
    payloadHash: Uint8Array;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.ContractCallFailed
 */
export interface ContractCallFailed {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
    /**
     * @generated from protobuf field: string msg_id = 2;
     */
    msgId: string;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.ContractCallWithMintApproved
 */
export interface ContractCallWithMintApproved {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
    /**
     * @generated from protobuf field: string event_id = 2;
     */
    eventId: string;
    /**
     * @generated from protobuf field: bytes command_id = 3;
     */
    commandId: Uint8Array;
    /**
     * @generated from protobuf field: string sender = 4;
     */
    sender: string;
    /**
     * @generated from protobuf field: string destination_chain = 5;
     */
    destinationChain: string;
    /**
     * @generated from protobuf field: string contract_address = 6;
     */
    contractAddress: string;
    /**
     * @generated from protobuf field: bytes payload_hash = 7;
     */
    payloadHash: Uint8Array;
    /**
     * @generated from protobuf field: cosmos.base.v1beta1.Coin asset = 8;
     */
    asset?: Coin;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.TokenSent
 */
export interface TokenSent {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
    /**
     * @generated from protobuf field: string event_id = 2;
     */
    eventId: string;
    /**
     * @generated from protobuf field: uint64 transfer_id = 3;
     */
    transferId: string;
    /**
     * @generated from protobuf field: string sender = 4;
     */
    sender: string;
    /**
     * @generated from protobuf field: string destination_chain = 5;
     */
    destinationChain: string;
    /**
     * @generated from protobuf field: string destination_address = 6;
     */
    destinationAddress: string;
    /**
     * @generated from protobuf field: cosmos.base.v1beta1.Coin asset = 7;
     */
    asset?: Coin;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.MintCommand
 */
export interface MintCommand {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
    /**
     * @generated from protobuf field: uint64 transfer_id = 2;
     */
    transferId: string;
    /**
     * @generated from protobuf field: bytes command_id = 3;
     */
    commandId: Uint8Array;
    /**
     * @generated from protobuf field: string destination_chain = 4;
     */
    destinationChain: string;
    /**
     * @generated from protobuf field: string destination_address = 5;
     */
    destinationAddress: string;
    /**
     * @generated from protobuf field: cosmos.base.v1beta1.Coin asset = 6;
     */
    asset?: Coin;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.BurnCommand
 */
export interface BurnCommand {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
    /**
     * @generated from protobuf field: bytes command_id = 2;
     */
    commandId: Uint8Array;
    /**
     * @generated from protobuf field: string destination_chain = 3;
     */
    destinationChain: string;
    /**
     * @generated from protobuf field: string deposit_address = 4;
     */
    depositAddress: string;
    /**
     * @generated from protobuf field: string asset = 5;
     */
    asset: string;
}
declare class PollFailed$Type extends MessageType<PollFailed> {
    constructor();
    create(value?: PartialMessage<PollFailed>): PollFailed;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PollFailed): PollFailed;
    internalBinaryWrite(message: PollFailed, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.PollFailed
 */
export declare const PollFailed: PollFailed$Type;
declare class PollExpired$Type extends MessageType<PollExpired> {
    constructor();
    create(value?: PartialMessage<PollExpired>): PollExpired;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PollExpired): PollExpired;
    internalBinaryWrite(message: PollExpired, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.PollExpired
 */
export declare const PollExpired: PollExpired$Type;
declare class PollCompleted$Type extends MessageType<PollCompleted> {
    constructor();
    create(value?: PartialMessage<PollCompleted>): PollCompleted;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PollCompleted): PollCompleted;
    internalBinaryWrite(message: PollCompleted, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.PollCompleted
 */
export declare const PollCompleted: PollCompleted$Type;
declare class NoEventsConfirmed$Type extends MessageType<NoEventsConfirmed> {
    constructor();
    create(value?: PartialMessage<NoEventsConfirmed>): NoEventsConfirmed;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: NoEventsConfirmed): NoEventsConfirmed;
    internalBinaryWrite(message: NoEventsConfirmed, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.NoEventsConfirmed
 */
export declare const NoEventsConfirmed: NoEventsConfirmed$Type;
declare class ConfirmKeyTransferStarted$Type extends MessageType<ConfirmKeyTransferStarted> {
    constructor();
    create(value?: PartialMessage<ConfirmKeyTransferStarted>): ConfirmKeyTransferStarted;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConfirmKeyTransferStarted): ConfirmKeyTransferStarted;
    internalBinaryWrite(message: ConfirmKeyTransferStarted, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.ConfirmKeyTransferStarted
 */
export declare const ConfirmKeyTransferStarted: ConfirmKeyTransferStarted$Type;
declare class ConfirmGatewayTxStarted$Type extends MessageType<ConfirmGatewayTxStarted> {
    constructor();
    create(value?: PartialMessage<ConfirmGatewayTxStarted>): ConfirmGatewayTxStarted;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConfirmGatewayTxStarted): ConfirmGatewayTxStarted;
    internalBinaryWrite(message: ConfirmGatewayTxStarted, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @deprecated
 * @generated MessageType for protobuf message scalar.evm.v1beta1.ConfirmGatewayTxStarted
 */
export declare const ConfirmGatewayTxStarted: ConfirmGatewayTxStarted$Type;
declare class PollMapping$Type extends MessageType<PollMapping> {
    constructor();
    create(value?: PartialMessage<PollMapping>): PollMapping;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PollMapping): PollMapping;
    internalBinaryWrite(message: PollMapping, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.PollMapping
 */
export declare const PollMapping: PollMapping$Type;
declare class ConfirmGatewayTxsStarted$Type extends MessageType<ConfirmGatewayTxsStarted> {
    constructor();
    create(value?: PartialMessage<ConfirmGatewayTxsStarted>): ConfirmGatewayTxsStarted;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConfirmGatewayTxsStarted): ConfirmGatewayTxsStarted;
    internalBinaryWrite(message: ConfirmGatewayTxsStarted, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.ConfirmGatewayTxsStarted
 */
export declare const ConfirmGatewayTxsStarted: ConfirmGatewayTxsStarted$Type;
declare class ConfirmDepositStarted$Type extends MessageType<ConfirmDepositStarted> {
    constructor();
    create(value?: PartialMessage<ConfirmDepositStarted>): ConfirmDepositStarted;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConfirmDepositStarted): ConfirmDepositStarted;
    internalBinaryWrite(message: ConfirmDepositStarted, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.ConfirmDepositStarted
 */
export declare const ConfirmDepositStarted: ConfirmDepositStarted$Type;
declare class ConfirmTokenStarted$Type extends MessageType<ConfirmTokenStarted> {
    constructor();
    create(value?: PartialMessage<ConfirmTokenStarted>): ConfirmTokenStarted;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConfirmTokenStarted): ConfirmTokenStarted;
    internalBinaryWrite(message: ConfirmTokenStarted, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.ConfirmTokenStarted
 */
export declare const ConfirmTokenStarted: ConfirmTokenStarted$Type;
declare class ChainAdded$Type extends MessageType<ChainAdded> {
    constructor();
    create(value?: PartialMessage<ChainAdded>): ChainAdded;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChainAdded): ChainAdded;
    internalBinaryWrite(message: ChainAdded, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.ChainAdded
 */
export declare const ChainAdded: ChainAdded$Type;
declare class CommandBatchSigned$Type extends MessageType<CommandBatchSigned> {
    constructor();
    create(value?: PartialMessage<CommandBatchSigned>): CommandBatchSigned;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CommandBatchSigned): CommandBatchSigned;
    internalBinaryWrite(message: CommandBatchSigned, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.CommandBatchSigned
 */
export declare const CommandBatchSigned: CommandBatchSigned$Type;
declare class CommandBatchAborted$Type extends MessageType<CommandBatchAborted> {
    constructor();
    create(value?: PartialMessage<CommandBatchAborted>): CommandBatchAborted;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CommandBatchAborted): CommandBatchAborted;
    internalBinaryWrite(message: CommandBatchAborted, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.CommandBatchAborted
 */
export declare const CommandBatchAborted: CommandBatchAborted$Type;
declare class EVMEventConfirmed$Type extends MessageType<EVMEventConfirmed> {
    constructor();
    create(value?: PartialMessage<EVMEventConfirmed>): EVMEventConfirmed;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EVMEventConfirmed): EVMEventConfirmed;
    internalBinaryWrite(message: EVMEventConfirmed, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.EVMEventConfirmed
 */
export declare const EVMEventConfirmed: EVMEventConfirmed$Type;
declare class EVMEventCompleted$Type extends MessageType<EVMEventCompleted> {
    constructor();
    create(value?: PartialMessage<EVMEventCompleted>): EVMEventCompleted;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EVMEventCompleted): EVMEventCompleted;
    internalBinaryWrite(message: EVMEventCompleted, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.EVMEventCompleted
 */
export declare const EVMEventCompleted: EVMEventCompleted$Type;
declare class EVMEventFailed$Type extends MessageType<EVMEventFailed> {
    constructor();
    create(value?: PartialMessage<EVMEventFailed>): EVMEventFailed;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EVMEventFailed): EVMEventFailed;
    internalBinaryWrite(message: EVMEventFailed, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.EVMEventFailed
 */
export declare const EVMEventFailed: EVMEventFailed$Type;
declare class EVMEventRetryFailed$Type extends MessageType<EVMEventRetryFailed> {
    constructor();
    create(value?: PartialMessage<EVMEventRetryFailed>): EVMEventRetryFailed;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EVMEventRetryFailed): EVMEventRetryFailed;
    internalBinaryWrite(message: EVMEventRetryFailed, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.EVMEventRetryFailed
 */
export declare const EVMEventRetryFailed: EVMEventRetryFailed$Type;
declare class ContractCallApproved$Type extends MessageType<ContractCallApproved> {
    constructor();
    create(value?: PartialMessage<ContractCallApproved>): ContractCallApproved;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ContractCallApproved): ContractCallApproved;
    internalBinaryWrite(message: ContractCallApproved, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.ContractCallApproved
 */
export declare const ContractCallApproved: ContractCallApproved$Type;
declare class ContractCallFailed$Type extends MessageType<ContractCallFailed> {
    constructor();
    create(value?: PartialMessage<ContractCallFailed>): ContractCallFailed;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ContractCallFailed): ContractCallFailed;
    internalBinaryWrite(message: ContractCallFailed, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.ContractCallFailed
 */
export declare const ContractCallFailed: ContractCallFailed$Type;
declare class ContractCallWithMintApproved$Type extends MessageType<ContractCallWithMintApproved> {
    constructor();
    create(value?: PartialMessage<ContractCallWithMintApproved>): ContractCallWithMintApproved;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ContractCallWithMintApproved): ContractCallWithMintApproved;
    internalBinaryWrite(message: ContractCallWithMintApproved, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.ContractCallWithMintApproved
 */
export declare const ContractCallWithMintApproved: ContractCallWithMintApproved$Type;
declare class TokenSent$Type extends MessageType<TokenSent> {
    constructor();
    create(value?: PartialMessage<TokenSent>): TokenSent;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TokenSent): TokenSent;
    internalBinaryWrite(message: TokenSent, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.TokenSent
 */
export declare const TokenSent: TokenSent$Type;
declare class MintCommand$Type extends MessageType<MintCommand> {
    constructor();
    create(value?: PartialMessage<MintCommand>): MintCommand;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MintCommand): MintCommand;
    internalBinaryWrite(message: MintCommand, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.MintCommand
 */
export declare const MintCommand: MintCommand$Type;
declare class BurnCommand$Type extends MessageType<BurnCommand> {
    constructor();
    create(value?: PartialMessage<BurnCommand>): BurnCommand;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BurnCommand): BurnCommand;
    internalBinaryWrite(message: BurnCommand, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.BurnCommand
 */
export declare const BurnCommand: BurnCommand$Type;
export {};
