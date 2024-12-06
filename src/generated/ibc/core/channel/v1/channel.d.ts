// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "ibc/core/channel/v1/channel.proto" (package "ibc.core.channel.v1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Height } from "../../client/v1/client";
/**
 * Channel defines pipeline for exactly-once packet delivery between specific
 * modules on separate blockchains, which has at least one end capable of
 * sending packets and one end capable of receiving packets.
 *
 * @generated from protobuf message ibc.core.channel.v1.Channel
 */
export interface Channel {
    /**
     * current state of the channel end
     *
     * @generated from protobuf field: ibc.core.channel.v1.State state = 1;
     */
    state: State;
    /**
     * whether the channel is ordered or unordered
     *
     * @generated from protobuf field: ibc.core.channel.v1.Order ordering = 2;
     */
    ordering: Order;
    /**
     * counterparty channel end
     *
     * @generated from protobuf field: ibc.core.channel.v1.Counterparty counterparty = 3;
     */
    counterparty?: Counterparty;
    /**
     * list of connection identifiers, in order, along which packets sent on
     * this channel will travel
     *
     * @generated from protobuf field: repeated string connection_hops = 4;
     */
    connectionHops: string[];
    /**
     * opaque channel version, which is agreed upon during the handshake
     *
     * @generated from protobuf field: string version = 5;
     */
    version: string;
}
/**
 * IdentifiedChannel defines a channel with additional port and channel
 * identifier fields.
 *
 * @generated from protobuf message ibc.core.channel.v1.IdentifiedChannel
 */
export interface IdentifiedChannel {
    /**
     * current state of the channel end
     *
     * @generated from protobuf field: ibc.core.channel.v1.State state = 1;
     */
    state: State;
    /**
     * whether the channel is ordered or unordered
     *
     * @generated from protobuf field: ibc.core.channel.v1.Order ordering = 2;
     */
    ordering: Order;
    /**
     * counterparty channel end
     *
     * @generated from protobuf field: ibc.core.channel.v1.Counterparty counterparty = 3;
     */
    counterparty?: Counterparty;
    /**
     * list of connection identifiers, in order, along which packets sent on
     * this channel will travel
     *
     * @generated from protobuf field: repeated string connection_hops = 4;
     */
    connectionHops: string[];
    /**
     * opaque channel version, which is agreed upon during the handshake
     *
     * @generated from protobuf field: string version = 5;
     */
    version: string;
    /**
     * port identifier
     *
     * @generated from protobuf field: string port_id = 6;
     */
    portId: string;
    /**
     * channel identifier
     *
     * @generated from protobuf field: string channel_id = 7;
     */
    channelId: string;
}
/**
 * Counterparty defines a channel end counterparty
 *
 * @generated from protobuf message ibc.core.channel.v1.Counterparty
 */
export interface Counterparty {
    /**
     * port on the counterparty chain which owns the other end of the channel.
     *
     * @generated from protobuf field: string port_id = 1;
     */
    portId: string;
    /**
     * channel end on the counterparty chain
     *
     * @generated from protobuf field: string channel_id = 2;
     */
    channelId: string;
}
/**
 * Packet defines a type that carries data across different chains through IBC
 *
 * @generated from protobuf message ibc.core.channel.v1.Packet
 */
export interface Packet {
    /**
     * number corresponds to the order of sends and receives, where a Packet
     * with an earlier sequence number must be sent and received before a Packet
     * with a later sequence number.
     *
     * @generated from protobuf field: uint64 sequence = 1;
     */
    sequence: string;
    /**
     * identifies the port on the sending chain.
     *
     * @generated from protobuf field: string source_port = 2;
     */
    sourcePort: string;
    /**
     * identifies the channel end on the sending chain.
     *
     * @generated from protobuf field: string source_channel = 3;
     */
    sourceChannel: string;
    /**
     * identifies the port on the receiving chain.
     *
     * @generated from protobuf field: string destination_port = 4;
     */
    destinationPort: string;
    /**
     * identifies the channel end on the receiving chain.
     *
     * @generated from protobuf field: string destination_channel = 5;
     */
    destinationChannel: string;
    /**
     * actual opaque bytes transferred directly to the application module
     *
     * @generated from protobuf field: bytes data = 6;
     */
    data: Uint8Array;
    /**
     * block height after which the packet times out
     *
     * @generated from protobuf field: ibc.core.client.v1.Height timeout_height = 7;
     */
    timeoutHeight?: Height;
    /**
     * block timestamp (in nanoseconds) after which the packet times out
     *
     * @generated from protobuf field: uint64 timeout_timestamp = 8;
     */
    timeoutTimestamp: string;
}
/**
 * PacketState defines the generic type necessary to retrieve and store
 * packet commitments, acknowledgements, and receipts.
 * Caller is responsible for knowing the context necessary to interpret this
 * state as a commitment, acknowledgement, or a receipt.
 *
 * @generated from protobuf message ibc.core.channel.v1.PacketState
 */
export interface PacketState {
    /**
     * channel port identifier.
     *
     * @generated from protobuf field: string port_id = 1;
     */
    portId: string;
    /**
     * channel unique identifier.
     *
     * @generated from protobuf field: string channel_id = 2;
     */
    channelId: string;
    /**
     * packet sequence.
     *
     * @generated from protobuf field: uint64 sequence = 3;
     */
    sequence: string;
    /**
     * embedded data that represents packet state.
     *
     * @generated from protobuf field: bytes data = 4;
     */
    data: Uint8Array;
}
/**
 * PacketId is an identifer for a unique Packet
 * Source chains refer to packets by source port/channel
 * Destination chains refer to packets by destination port/channel
 *
 * @generated from protobuf message ibc.core.channel.v1.PacketId
 */
export interface PacketId {
    /**
     * channel port identifier
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
 * Acknowledgement is the recommended acknowledgement format to be used by
 * app-specific protocols.
 * NOTE: The field numbers 21 and 22 were explicitly chosen to avoid accidental
 * conflicts with other protobuf message formats used for acknowledgements.
 * The first byte of any message with this format will be the non-ASCII values
 * `0xaa` (result) or `0xb2` (error). Implemented as defined by ICS:
 * https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope
 *
 * @generated from protobuf message ibc.core.channel.v1.Acknowledgement
 */
export interface Acknowledgement {
    /**
     * @generated from protobuf oneof: response
     */
    response: {
        oneofKind: "result";
        /**
         * @generated from protobuf field: bytes result = 21;
         */
        result: Uint8Array;
    } | {
        oneofKind: "error";
        /**
         * @generated from protobuf field: string error = 22;
         */
        error: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * State defines if a channel is in one of the following states:
 * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
 *
 * @generated from protobuf enum ibc.core.channel.v1.State
 */
export declare enum State {
    /**
     * Default State
     *
     * @generated from protobuf enum value: STATE_UNINITIALIZED_UNSPECIFIED = 0;
     */
    UNINITIALIZED_UNSPECIFIED = 0,
    /**
     * A channel has just started the opening handshake.
     *
     * @generated from protobuf enum value: STATE_INIT = 1;
     */
    INIT = 1,
    /**
     * A channel has acknowledged the handshake step on the counterparty chain.
     *
     * @generated from protobuf enum value: STATE_TRYOPEN = 2;
     */
    TRYOPEN = 2,
    /**
     * A channel has completed the handshake. Open channels are
     * ready to send and receive packets.
     *
     * @generated from protobuf enum value: STATE_OPEN = 3;
     */
    OPEN = 3,
    /**
     * A channel has been closed and can no longer be used to send or receive
     * packets.
     *
     * @generated from protobuf enum value: STATE_CLOSED = 4;
     */
    CLOSED = 4
}
/**
 * Order defines if a channel is ORDERED or UNORDERED
 *
 * @generated from protobuf enum ibc.core.channel.v1.Order
 */
export declare enum Order {
    /**
     * zero-value for channel ordering
     *
     * @generated from protobuf enum value: ORDER_NONE_UNSPECIFIED = 0;
     */
    NONE_UNSPECIFIED = 0,
    /**
     * packets can be delivered in any order, which may differ from the order in
     * which they were sent.
     *
     * @generated from protobuf enum value: ORDER_UNORDERED = 1;
     */
    UNORDERED = 1,
    /**
     * packets are delivered exactly in the order which they were sent
     *
     * @generated from protobuf enum value: ORDER_ORDERED = 2;
     */
    ORDERED = 2
}
declare class Channel$Type extends MessageType<Channel> {
    constructor();
    create(value?: PartialMessage<Channel>): Channel;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Channel): Channel;
    internalBinaryWrite(message: Channel, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.Channel
 */
export declare const Channel: Channel$Type;
declare class IdentifiedChannel$Type extends MessageType<IdentifiedChannel> {
    constructor();
    create(value?: PartialMessage<IdentifiedChannel>): IdentifiedChannel;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IdentifiedChannel): IdentifiedChannel;
    internalBinaryWrite(message: IdentifiedChannel, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.IdentifiedChannel
 */
export declare const IdentifiedChannel: IdentifiedChannel$Type;
declare class Counterparty$Type extends MessageType<Counterparty> {
    constructor();
    create(value?: PartialMessage<Counterparty>): Counterparty;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Counterparty): Counterparty;
    internalBinaryWrite(message: Counterparty, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.Counterparty
 */
export declare const Counterparty: Counterparty$Type;
declare class Packet$Type extends MessageType<Packet> {
    constructor();
    create(value?: PartialMessage<Packet>): Packet;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Packet): Packet;
    internalBinaryWrite(message: Packet, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.Packet
 */
export declare const Packet: Packet$Type;
declare class PacketState$Type extends MessageType<PacketState> {
    constructor();
    create(value?: PartialMessage<PacketState>): PacketState;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PacketState): PacketState;
    internalBinaryWrite(message: PacketState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.PacketState
 */
export declare const PacketState: PacketState$Type;
declare class PacketId$Type extends MessageType<PacketId> {
    constructor();
    create(value?: PartialMessage<PacketId>): PacketId;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PacketId): PacketId;
    internalBinaryWrite(message: PacketId, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.PacketId
 */
export declare const PacketId: PacketId$Type;
declare class Acknowledgement$Type extends MessageType<Acknowledgement> {
    constructor();
    create(value?: PartialMessage<Acknowledgement>): Acknowledgement;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Acknowledgement): Acknowledgement;
    internalBinaryWrite(message: Acknowledgement, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.Acknowledgement
 */
export declare const Acknowledgement: Acknowledgement$Type;
export {};
