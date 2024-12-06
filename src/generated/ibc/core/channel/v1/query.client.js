// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "ibc/core/channel/v1/query.proto" (package "ibc.core.channel.v1", syntax proto3)
// tslint:disable
import { Query } from "./query";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * Query provides defines the gRPC querier service
 *
 * @generated from protobuf service ibc.core.channel.v1.Query
 */
export class QueryClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = Query.typeName;
        this.methods = Query.methods;
        this.options = Query.options;
    }
    /**
     * Channel queries an IBC Channel.
     *
     * @generated from protobuf rpc: Channel(ibc.core.channel.v1.QueryChannelRequest) returns (ibc.core.channel.v1.QueryChannelResponse);
     */
    channel(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * Channels queries all the IBC channels of a chain.
     *
     * @generated from protobuf rpc: Channels(ibc.core.channel.v1.QueryChannelsRequest) returns (ibc.core.channel.v1.QueryChannelsResponse);
     */
    channels(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * ConnectionChannels queries all the channels associated with a connection
     * end.
     *
     * @generated from protobuf rpc: ConnectionChannels(ibc.core.channel.v1.QueryConnectionChannelsRequest) returns (ibc.core.channel.v1.QueryConnectionChannelsResponse);
     */
    connectionChannels(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * ChannelClientState queries for the client state for the channel associated
     * with the provided channel identifiers.
     *
     * @generated from protobuf rpc: ChannelClientState(ibc.core.channel.v1.QueryChannelClientStateRequest) returns (ibc.core.channel.v1.QueryChannelClientStateResponse);
     */
    channelClientState(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * ChannelConsensusState queries for the consensus state for the channel
     * associated with the provided channel identifiers.
     *
     * @generated from protobuf rpc: ChannelConsensusState(ibc.core.channel.v1.QueryChannelConsensusStateRequest) returns (ibc.core.channel.v1.QueryChannelConsensusStateResponse);
     */
    channelConsensusState(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * PacketCommitment queries a stored packet commitment hash.
     *
     * @generated from protobuf rpc: PacketCommitment(ibc.core.channel.v1.QueryPacketCommitmentRequest) returns (ibc.core.channel.v1.QueryPacketCommitmentResponse);
     */
    packetCommitment(input, options) {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * PacketCommitments returns all the packet commitments hashes associated
     * with a channel.
     *
     * @generated from protobuf rpc: PacketCommitments(ibc.core.channel.v1.QueryPacketCommitmentsRequest) returns (ibc.core.channel.v1.QueryPacketCommitmentsResponse);
     */
    packetCommitments(input, options) {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * PacketReceipt queries if a given packet sequence has been received on the
     * queried chain
     *
     * @generated from protobuf rpc: PacketReceipt(ibc.core.channel.v1.QueryPacketReceiptRequest) returns (ibc.core.channel.v1.QueryPacketReceiptResponse);
     */
    packetReceipt(input, options) {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * PacketAcknowledgement queries a stored packet acknowledgement hash.
     *
     * @generated from protobuf rpc: PacketAcknowledgement(ibc.core.channel.v1.QueryPacketAcknowledgementRequest) returns (ibc.core.channel.v1.QueryPacketAcknowledgementResponse);
     */
    packetAcknowledgement(input, options) {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * PacketAcknowledgements returns all the packet acknowledgements associated
     * with a channel.
     *
     * @generated from protobuf rpc: PacketAcknowledgements(ibc.core.channel.v1.QueryPacketAcknowledgementsRequest) returns (ibc.core.channel.v1.QueryPacketAcknowledgementsResponse);
     */
    packetAcknowledgements(input, options) {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * UnreceivedPackets returns all the unreceived IBC packets associated with a
     * channel and sequences.
     *
     * @generated from protobuf rpc: UnreceivedPackets(ibc.core.channel.v1.QueryUnreceivedPacketsRequest) returns (ibc.core.channel.v1.QueryUnreceivedPacketsResponse);
     */
    unreceivedPackets(input, options) {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     * with a channel and sequences.
     *
     * @generated from protobuf rpc: UnreceivedAcks(ibc.core.channel.v1.QueryUnreceivedAcksRequest) returns (ibc.core.channel.v1.QueryUnreceivedAcksResponse);
     */
    unreceivedAcks(input, options) {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * NextSequenceReceive returns the next receive sequence for a given channel.
     *
     * @generated from protobuf rpc: NextSequenceReceive(ibc.core.channel.v1.QueryNextSequenceReceiveRequest) returns (ibc.core.channel.v1.QueryNextSequenceReceiveResponse);
     */
    nextSequenceReceive(input, options) {
        const method = this.methods[12], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}