// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "ibc/core/channel/v1/query.proto" (package "ibc.core.channel.v1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { PacketState } from "./channel";
import { Any } from "../../../../google/protobuf/any";
import { IdentifiedClientState } from "../../client/v1/client";
import { PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { IdentifiedChannel } from "./channel";
import { PageRequest } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Height } from "../../client/v1/client";
import { Channel } from "./channel";
/**
 * QueryChannelRequest is the request type for the Query/Channel RPC method
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryChannelRequest
 */
export interface QueryChannelRequest {
    /**
     * port unique identifier
     *
     * @generated from protobuf field: string port_id = 1;
     */
    portId: string;
    /**
     * channel unique identifier
     *
     * @generated from protobuf field: string channel_id = 2;
     */
    channelId: string;
}
/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryChannelResponse
 */
export interface QueryChannelResponse {
    /**
     * channel associated with the request identifiers
     *
     * @generated from protobuf field: ibc.core.channel.v1.Channel channel = 1;
     */
    channel?: Channel;
    /**
     * merkle proof of existence
     *
     * @generated from protobuf field: bytes proof = 2;
     */
    proof: Uint8Array;
    /**
     * height at which the proof was retrieved
     *
     * @generated from protobuf field: ibc.core.client.v1.Height proof_height = 3;
     */
    proofHeight?: Height;
}
/**
 * QueryChannelsRequest is the request type for the Query/Channels RPC method
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryChannelsRequest
 */
export interface QueryChannelsRequest {
    /**
     * pagination request
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
}
/**
 * QueryChannelsResponse is the response type for the Query/Channels RPC method.
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryChannelsResponse
 */
export interface QueryChannelsResponse {
    /**
     * list of stored channels of the chain.
     *
     * @generated from protobuf field: repeated ibc.core.channel.v1.IdentifiedChannel channels = 1;
     */
    channels: IdentifiedChannel[];
    /**
     * pagination response
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    /**
     * query block height
     *
     * @generated from protobuf field: ibc.core.client.v1.Height height = 3;
     */
    height?: Height;
}
/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryConnectionChannelsRequest
 */
export interface QueryConnectionChannelsRequest {
    /**
     * connection unique identifier
     *
     * @generated from protobuf field: string connection = 1;
     */
    connection: string;
    /**
     * pagination request
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
}
/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryConnectionChannelsResponse
 */
export interface QueryConnectionChannelsResponse {
    /**
     * list of channels associated with a connection.
     *
     * @generated from protobuf field: repeated ibc.core.channel.v1.IdentifiedChannel channels = 1;
     */
    channels: IdentifiedChannel[];
    /**
     * pagination response
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    /**
     * query block height
     *
     * @generated from protobuf field: ibc.core.client.v1.Height height = 3;
     */
    height?: Height;
}
/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryChannelClientStateRequest
 */
export interface QueryChannelClientStateRequest {
    /**
     * port unique identifier
     *
     * @generated from protobuf field: string port_id = 1;
     */
    portId: string;
    /**
     * channel unique identifier
     *
     * @generated from protobuf field: string channel_id = 2;
     */
    channelId: string;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryChannelClientStateResponse
 */
export interface QueryChannelClientStateResponse {
    /**
     * client state associated with the channel
     *
     * @generated from protobuf field: ibc.core.client.v1.IdentifiedClientState identified_client_state = 1;
     */
    identifiedClientState?: IdentifiedClientState;
    /**
     * merkle proof of existence
     *
     * @generated from protobuf field: bytes proof = 2;
     */
    proof: Uint8Array;
    /**
     * height at which the proof was retrieved
     *
     * @generated from protobuf field: ibc.core.client.v1.Height proof_height = 3;
     */
    proofHeight?: Height;
}
/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryChannelConsensusStateRequest
 */
export interface QueryChannelConsensusStateRequest {
    /**
     * port unique identifier
     *
     * @generated from protobuf field: string port_id = 1;
     */
    portId: string;
    /**
     * channel unique identifier
     *
     * @generated from protobuf field: string channel_id = 2;
     */
    channelId: string;
    /**
     * revision number of the consensus state
     *
     * @generated from protobuf field: uint64 revision_number = 3;
     */
    revisionNumber: string;
    /**
     * revision height of the consensus state
     *
     * @generated from protobuf field: uint64 revision_height = 4;
     */
    revisionHeight: string;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryChannelConsensusStateResponse
 */
export interface QueryChannelConsensusStateResponse {
    /**
     * consensus state associated with the channel
     *
     * @generated from protobuf field: google.protobuf.Any consensus_state = 1;
     */
    consensusState?: Any;
    /**
     * client ID associated with the consensus state
     *
     * @generated from protobuf field: string client_id = 2;
     */
    clientId: string;
    /**
     * merkle proof of existence
     *
     * @generated from protobuf field: bytes proof = 3;
     */
    proof: Uint8Array;
    /**
     * height at which the proof was retrieved
     *
     * @generated from protobuf field: ibc.core.client.v1.Height proof_height = 4;
     */
    proofHeight?: Height;
}
/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryPacketCommitmentRequest
 */
export interface QueryPacketCommitmentRequest {
    /**
     * port unique identifier
     *
     * @generated from protobuf field: string port_id = 1;
     */
    portId: string;
    /**
     * channel unique identifier
     *
     * @generated from protobuf field: string channel_id = 2;
     */
    channelId: string;
    /**
     * packet sequence
     *
     * @generated from protobuf field: uint64 sequence = 3;
     */
    sequence: string;
}
/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryPacketCommitmentResponse
 */
export interface QueryPacketCommitmentResponse {
    /**
     * packet associated with the request fields
     *
     * @generated from protobuf field: bytes commitment = 1;
     */
    commitment: Uint8Array;
    /**
     * merkle proof of existence
     *
     * @generated from protobuf field: bytes proof = 2;
     */
    proof: Uint8Array;
    /**
     * height at which the proof was retrieved
     *
     * @generated from protobuf field: ibc.core.client.v1.Height proof_height = 3;
     */
    proofHeight?: Height;
}
/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryPacketCommitmentsRequest
 */
export interface QueryPacketCommitmentsRequest {
    /**
     * port unique identifier
     *
     * @generated from protobuf field: string port_id = 1;
     */
    portId: string;
    /**
     * channel unique identifier
     *
     * @generated from protobuf field: string channel_id = 2;
     */
    channelId: string;
    /**
     * pagination request
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageRequest pagination = 3;
     */
    pagination?: PageRequest;
}
/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryPacketCommitmentsResponse
 */
export interface QueryPacketCommitmentsResponse {
    /**
     * @generated from protobuf field: repeated ibc.core.channel.v1.PacketState commitments = 1;
     */
    commitments: PacketState[];
    /**
     * pagination response
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    /**
     * query block height
     *
     * @generated from protobuf field: ibc.core.client.v1.Height height = 3;
     */
    height?: Height;
}
/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryPacketReceiptRequest
 */
export interface QueryPacketReceiptRequest {
    /**
     * port unique identifier
     *
     * @generated from protobuf field: string port_id = 1;
     */
    portId: string;
    /**
     * channel unique identifier
     *
     * @generated from protobuf field: string channel_id = 2;
     */
    channelId: string;
    /**
     * packet sequence
     *
     * @generated from protobuf field: uint64 sequence = 3;
     */
    sequence: string;
}
/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryPacketReceiptResponse
 */
export interface QueryPacketReceiptResponse {
    /**
     * success flag for if receipt exists
     *
     * @generated from protobuf field: bool received = 2;
     */
    received: boolean;
    /**
     * merkle proof of existence
     *
     * @generated from protobuf field: bytes proof = 3;
     */
    proof: Uint8Array;
    /**
     * height at which the proof was retrieved
     *
     * @generated from protobuf field: ibc.core.client.v1.Height proof_height = 4;
     */
    proofHeight?: Height;
}
/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryPacketAcknowledgementRequest
 */
export interface QueryPacketAcknowledgementRequest {
    /**
     * port unique identifier
     *
     * @generated from protobuf field: string port_id = 1;
     */
    portId: string;
    /**
     * channel unique identifier
     *
     * @generated from protobuf field: string channel_id = 2;
     */
    channelId: string;
    /**
     * packet sequence
     *
     * @generated from protobuf field: uint64 sequence = 3;
     */
    sequence: string;
}
/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryPacketAcknowledgementResponse
 */
export interface QueryPacketAcknowledgementResponse {
    /**
     * packet associated with the request fields
     *
     * @generated from protobuf field: bytes acknowledgement = 1;
     */
    acknowledgement: Uint8Array;
    /**
     * merkle proof of existence
     *
     * @generated from protobuf field: bytes proof = 2;
     */
    proof: Uint8Array;
    /**
     * height at which the proof was retrieved
     *
     * @generated from protobuf field: ibc.core.client.v1.Height proof_height = 3;
     */
    proofHeight?: Height;
}
/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryPacketAcknowledgementsRequest
 */
export interface QueryPacketAcknowledgementsRequest {
    /**
     * port unique identifier
     *
     * @generated from protobuf field: string port_id = 1;
     */
    portId: string;
    /**
     * channel unique identifier
     *
     * @generated from protobuf field: string channel_id = 2;
     */
    channelId: string;
    /**
     * pagination request
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageRequest pagination = 3;
     */
    pagination?: PageRequest;
    /**
     * list of packet sequences
     *
     * @generated from protobuf field: repeated uint64 packet_commitment_sequences = 4;
     */
    packetCommitmentSequences: string[];
}
/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryPacketAcknowledgementsResponse
 */
export interface QueryPacketAcknowledgementsResponse {
    /**
     * @generated from protobuf field: repeated ibc.core.channel.v1.PacketState acknowledgements = 1;
     */
    acknowledgements: PacketState[];
    /**
     * pagination response
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    /**
     * query block height
     *
     * @generated from protobuf field: ibc.core.client.v1.Height height = 3;
     */
    height?: Height;
}
/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryUnreceivedPacketsRequest
 */
export interface QueryUnreceivedPacketsRequest {
    /**
     * port unique identifier
     *
     * @generated from protobuf field: string port_id = 1;
     */
    portId: string;
    /**
     * channel unique identifier
     *
     * @generated from protobuf field: string channel_id = 2;
     */
    channelId: string;
    /**
     * list of packet sequences
     *
     * @generated from protobuf field: repeated uint64 packet_commitment_sequences = 3;
     */
    packetCommitmentSequences: string[];
}
/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryUnreceivedPacketsResponse
 */
export interface QueryUnreceivedPacketsResponse {
    /**
     * list of unreceived packet sequences
     *
     * @generated from protobuf field: repeated uint64 sequences = 1;
     */
    sequences: string[];
    /**
     * query block height
     *
     * @generated from protobuf field: ibc.core.client.v1.Height height = 2;
     */
    height?: Height;
}
/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryUnreceivedAcksRequest
 */
export interface QueryUnreceivedAcksRequest {
    /**
     * port unique identifier
     *
     * @generated from protobuf field: string port_id = 1;
     */
    portId: string;
    /**
     * channel unique identifier
     *
     * @generated from protobuf field: string channel_id = 2;
     */
    channelId: string;
    /**
     * list of acknowledgement sequences
     *
     * @generated from protobuf field: repeated uint64 packet_ack_sequences = 3;
     */
    packetAckSequences: string[];
}
/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryUnreceivedAcksResponse
 */
export interface QueryUnreceivedAcksResponse {
    /**
     * list of unreceived acknowledgement sequences
     *
     * @generated from protobuf field: repeated uint64 sequences = 1;
     */
    sequences: string[];
    /**
     * query block height
     *
     * @generated from protobuf field: ibc.core.client.v1.Height height = 2;
     */
    height?: Height;
}
/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryNextSequenceReceiveRequest
 */
export interface QueryNextSequenceReceiveRequest {
    /**
     * port unique identifier
     *
     * @generated from protobuf field: string port_id = 1;
     */
    portId: string;
    /**
     * channel unique identifier
     *
     * @generated from protobuf field: string channel_id = 2;
     */
    channelId: string;
}
/**
 * QuerySequenceResponse is the request type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 *
 * @generated from protobuf message ibc.core.channel.v1.QueryNextSequenceReceiveResponse
 */
export interface QueryNextSequenceReceiveResponse {
    /**
     * next sequence receive number
     *
     * @generated from protobuf field: uint64 next_sequence_receive = 1;
     */
    nextSequenceReceive: string;
    /**
     * merkle proof of existence
     *
     * @generated from protobuf field: bytes proof = 2;
     */
    proof: Uint8Array;
    /**
     * height at which the proof was retrieved
     *
     * @generated from protobuf field: ibc.core.client.v1.Height proof_height = 3;
     */
    proofHeight?: Height;
}
declare class QueryChannelRequest$Type extends MessageType<QueryChannelRequest> {
    constructor();
    create(value?: PartialMessage<QueryChannelRequest>): QueryChannelRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryChannelRequest): QueryChannelRequest;
    internalBinaryWrite(message: QueryChannelRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryChannelRequest
 */
export declare const QueryChannelRequest: QueryChannelRequest$Type;
declare class QueryChannelResponse$Type extends MessageType<QueryChannelResponse> {
    constructor();
    create(value?: PartialMessage<QueryChannelResponse>): QueryChannelResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryChannelResponse): QueryChannelResponse;
    internalBinaryWrite(message: QueryChannelResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryChannelResponse
 */
export declare const QueryChannelResponse: QueryChannelResponse$Type;
declare class QueryChannelsRequest$Type extends MessageType<QueryChannelsRequest> {
    constructor();
    create(value?: PartialMessage<QueryChannelsRequest>): QueryChannelsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryChannelsRequest): QueryChannelsRequest;
    internalBinaryWrite(message: QueryChannelsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryChannelsRequest
 */
export declare const QueryChannelsRequest: QueryChannelsRequest$Type;
declare class QueryChannelsResponse$Type extends MessageType<QueryChannelsResponse> {
    constructor();
    create(value?: PartialMessage<QueryChannelsResponse>): QueryChannelsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryChannelsResponse): QueryChannelsResponse;
    internalBinaryWrite(message: QueryChannelsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryChannelsResponse
 */
export declare const QueryChannelsResponse: QueryChannelsResponse$Type;
declare class QueryConnectionChannelsRequest$Type extends MessageType<QueryConnectionChannelsRequest> {
    constructor();
    create(value?: PartialMessage<QueryConnectionChannelsRequest>): QueryConnectionChannelsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryConnectionChannelsRequest): QueryConnectionChannelsRequest;
    internalBinaryWrite(message: QueryConnectionChannelsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryConnectionChannelsRequest
 */
export declare const QueryConnectionChannelsRequest: QueryConnectionChannelsRequest$Type;
declare class QueryConnectionChannelsResponse$Type extends MessageType<QueryConnectionChannelsResponse> {
    constructor();
    create(value?: PartialMessage<QueryConnectionChannelsResponse>): QueryConnectionChannelsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryConnectionChannelsResponse): QueryConnectionChannelsResponse;
    internalBinaryWrite(message: QueryConnectionChannelsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryConnectionChannelsResponse
 */
export declare const QueryConnectionChannelsResponse: QueryConnectionChannelsResponse$Type;
declare class QueryChannelClientStateRequest$Type extends MessageType<QueryChannelClientStateRequest> {
    constructor();
    create(value?: PartialMessage<QueryChannelClientStateRequest>): QueryChannelClientStateRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryChannelClientStateRequest): QueryChannelClientStateRequest;
    internalBinaryWrite(message: QueryChannelClientStateRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryChannelClientStateRequest
 */
export declare const QueryChannelClientStateRequest: QueryChannelClientStateRequest$Type;
declare class QueryChannelClientStateResponse$Type extends MessageType<QueryChannelClientStateResponse> {
    constructor();
    create(value?: PartialMessage<QueryChannelClientStateResponse>): QueryChannelClientStateResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryChannelClientStateResponse): QueryChannelClientStateResponse;
    internalBinaryWrite(message: QueryChannelClientStateResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryChannelClientStateResponse
 */
export declare const QueryChannelClientStateResponse: QueryChannelClientStateResponse$Type;
declare class QueryChannelConsensusStateRequest$Type extends MessageType<QueryChannelConsensusStateRequest> {
    constructor();
    create(value?: PartialMessage<QueryChannelConsensusStateRequest>): QueryChannelConsensusStateRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryChannelConsensusStateRequest): QueryChannelConsensusStateRequest;
    internalBinaryWrite(message: QueryChannelConsensusStateRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryChannelConsensusStateRequest
 */
export declare const QueryChannelConsensusStateRequest: QueryChannelConsensusStateRequest$Type;
declare class QueryChannelConsensusStateResponse$Type extends MessageType<QueryChannelConsensusStateResponse> {
    constructor();
    create(value?: PartialMessage<QueryChannelConsensusStateResponse>): QueryChannelConsensusStateResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryChannelConsensusStateResponse): QueryChannelConsensusStateResponse;
    internalBinaryWrite(message: QueryChannelConsensusStateResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryChannelConsensusStateResponse
 */
export declare const QueryChannelConsensusStateResponse: QueryChannelConsensusStateResponse$Type;
declare class QueryPacketCommitmentRequest$Type extends MessageType<QueryPacketCommitmentRequest> {
    constructor();
    create(value?: PartialMessage<QueryPacketCommitmentRequest>): QueryPacketCommitmentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryPacketCommitmentRequest): QueryPacketCommitmentRequest;
    internalBinaryWrite(message: QueryPacketCommitmentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryPacketCommitmentRequest
 */
export declare const QueryPacketCommitmentRequest: QueryPacketCommitmentRequest$Type;
declare class QueryPacketCommitmentResponse$Type extends MessageType<QueryPacketCommitmentResponse> {
    constructor();
    create(value?: PartialMessage<QueryPacketCommitmentResponse>): QueryPacketCommitmentResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryPacketCommitmentResponse): QueryPacketCommitmentResponse;
    internalBinaryWrite(message: QueryPacketCommitmentResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryPacketCommitmentResponse
 */
export declare const QueryPacketCommitmentResponse: QueryPacketCommitmentResponse$Type;
declare class QueryPacketCommitmentsRequest$Type extends MessageType<QueryPacketCommitmentsRequest> {
    constructor();
    create(value?: PartialMessage<QueryPacketCommitmentsRequest>): QueryPacketCommitmentsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryPacketCommitmentsRequest): QueryPacketCommitmentsRequest;
    internalBinaryWrite(message: QueryPacketCommitmentsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryPacketCommitmentsRequest
 */
export declare const QueryPacketCommitmentsRequest: QueryPacketCommitmentsRequest$Type;
declare class QueryPacketCommitmentsResponse$Type extends MessageType<QueryPacketCommitmentsResponse> {
    constructor();
    create(value?: PartialMessage<QueryPacketCommitmentsResponse>): QueryPacketCommitmentsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryPacketCommitmentsResponse): QueryPacketCommitmentsResponse;
    internalBinaryWrite(message: QueryPacketCommitmentsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryPacketCommitmentsResponse
 */
export declare const QueryPacketCommitmentsResponse: QueryPacketCommitmentsResponse$Type;
declare class QueryPacketReceiptRequest$Type extends MessageType<QueryPacketReceiptRequest> {
    constructor();
    create(value?: PartialMessage<QueryPacketReceiptRequest>): QueryPacketReceiptRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryPacketReceiptRequest): QueryPacketReceiptRequest;
    internalBinaryWrite(message: QueryPacketReceiptRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryPacketReceiptRequest
 */
export declare const QueryPacketReceiptRequest: QueryPacketReceiptRequest$Type;
declare class QueryPacketReceiptResponse$Type extends MessageType<QueryPacketReceiptResponse> {
    constructor();
    create(value?: PartialMessage<QueryPacketReceiptResponse>): QueryPacketReceiptResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryPacketReceiptResponse): QueryPacketReceiptResponse;
    internalBinaryWrite(message: QueryPacketReceiptResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryPacketReceiptResponse
 */
export declare const QueryPacketReceiptResponse: QueryPacketReceiptResponse$Type;
declare class QueryPacketAcknowledgementRequest$Type extends MessageType<QueryPacketAcknowledgementRequest> {
    constructor();
    create(value?: PartialMessage<QueryPacketAcknowledgementRequest>): QueryPacketAcknowledgementRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryPacketAcknowledgementRequest): QueryPacketAcknowledgementRequest;
    internalBinaryWrite(message: QueryPacketAcknowledgementRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryPacketAcknowledgementRequest
 */
export declare const QueryPacketAcknowledgementRequest: QueryPacketAcknowledgementRequest$Type;
declare class QueryPacketAcknowledgementResponse$Type extends MessageType<QueryPacketAcknowledgementResponse> {
    constructor();
    create(value?: PartialMessage<QueryPacketAcknowledgementResponse>): QueryPacketAcknowledgementResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryPacketAcknowledgementResponse): QueryPacketAcknowledgementResponse;
    internalBinaryWrite(message: QueryPacketAcknowledgementResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryPacketAcknowledgementResponse
 */
export declare const QueryPacketAcknowledgementResponse: QueryPacketAcknowledgementResponse$Type;
declare class QueryPacketAcknowledgementsRequest$Type extends MessageType<QueryPacketAcknowledgementsRequest> {
    constructor();
    create(value?: PartialMessage<QueryPacketAcknowledgementsRequest>): QueryPacketAcknowledgementsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryPacketAcknowledgementsRequest): QueryPacketAcknowledgementsRequest;
    internalBinaryWrite(message: QueryPacketAcknowledgementsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryPacketAcknowledgementsRequest
 */
export declare const QueryPacketAcknowledgementsRequest: QueryPacketAcknowledgementsRequest$Type;
declare class QueryPacketAcknowledgementsResponse$Type extends MessageType<QueryPacketAcknowledgementsResponse> {
    constructor();
    create(value?: PartialMessage<QueryPacketAcknowledgementsResponse>): QueryPacketAcknowledgementsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryPacketAcknowledgementsResponse): QueryPacketAcknowledgementsResponse;
    internalBinaryWrite(message: QueryPacketAcknowledgementsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryPacketAcknowledgementsResponse
 */
export declare const QueryPacketAcknowledgementsResponse: QueryPacketAcknowledgementsResponse$Type;
declare class QueryUnreceivedPacketsRequest$Type extends MessageType<QueryUnreceivedPacketsRequest> {
    constructor();
    create(value?: PartialMessage<QueryUnreceivedPacketsRequest>): QueryUnreceivedPacketsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryUnreceivedPacketsRequest): QueryUnreceivedPacketsRequest;
    internalBinaryWrite(message: QueryUnreceivedPacketsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryUnreceivedPacketsRequest
 */
export declare const QueryUnreceivedPacketsRequest: QueryUnreceivedPacketsRequest$Type;
declare class QueryUnreceivedPacketsResponse$Type extends MessageType<QueryUnreceivedPacketsResponse> {
    constructor();
    create(value?: PartialMessage<QueryUnreceivedPacketsResponse>): QueryUnreceivedPacketsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryUnreceivedPacketsResponse): QueryUnreceivedPacketsResponse;
    internalBinaryWrite(message: QueryUnreceivedPacketsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryUnreceivedPacketsResponse
 */
export declare const QueryUnreceivedPacketsResponse: QueryUnreceivedPacketsResponse$Type;
declare class QueryUnreceivedAcksRequest$Type extends MessageType<QueryUnreceivedAcksRequest> {
    constructor();
    create(value?: PartialMessage<QueryUnreceivedAcksRequest>): QueryUnreceivedAcksRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryUnreceivedAcksRequest): QueryUnreceivedAcksRequest;
    internalBinaryWrite(message: QueryUnreceivedAcksRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryUnreceivedAcksRequest
 */
export declare const QueryUnreceivedAcksRequest: QueryUnreceivedAcksRequest$Type;
declare class QueryUnreceivedAcksResponse$Type extends MessageType<QueryUnreceivedAcksResponse> {
    constructor();
    create(value?: PartialMessage<QueryUnreceivedAcksResponse>): QueryUnreceivedAcksResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryUnreceivedAcksResponse): QueryUnreceivedAcksResponse;
    internalBinaryWrite(message: QueryUnreceivedAcksResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryUnreceivedAcksResponse
 */
export declare const QueryUnreceivedAcksResponse: QueryUnreceivedAcksResponse$Type;
declare class QueryNextSequenceReceiveRequest$Type extends MessageType<QueryNextSequenceReceiveRequest> {
    constructor();
    create(value?: PartialMessage<QueryNextSequenceReceiveRequest>): QueryNextSequenceReceiveRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryNextSequenceReceiveRequest): QueryNextSequenceReceiveRequest;
    internalBinaryWrite(message: QueryNextSequenceReceiveRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryNextSequenceReceiveRequest
 */
export declare const QueryNextSequenceReceiveRequest: QueryNextSequenceReceiveRequest$Type;
declare class QueryNextSequenceReceiveResponse$Type extends MessageType<QueryNextSequenceReceiveResponse> {
    constructor();
    create(value?: PartialMessage<QueryNextSequenceReceiveResponse>): QueryNextSequenceReceiveResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryNextSequenceReceiveResponse): QueryNextSequenceReceiveResponse;
    internalBinaryWrite(message: QueryNextSequenceReceiveResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.QueryNextSequenceReceiveResponse
 */
export declare const QueryNextSequenceReceiveResponse: QueryNextSequenceReceiveResponse$Type;
/**
 * @generated ServiceType for protobuf service ibc.core.channel.v1.Query
 */
export declare const Query: any;
export {};
