// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "ibc/core/channel/v1/tx.proto" (package "ibc.core.channel.v1", syntax proto3)
// tslint:disable
import { Msg } from "./tx";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * Msg defines the ibc/channel Msg service.
 *
 * @generated from protobuf service ibc.core.channel.v1.Msg
 */
export class MsgClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = Msg.typeName;
        this.methods = Msg.methods;
        this.options = Msg.options;
    }
    /**
     * ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit.
     *
     * @generated from protobuf rpc: ChannelOpenInit(ibc.core.channel.v1.MsgChannelOpenInit) returns (ibc.core.channel.v1.MsgChannelOpenInitResponse);
     */
    channelOpenInit(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry.
     *
     * @generated from protobuf rpc: ChannelOpenTry(ibc.core.channel.v1.MsgChannelOpenTry) returns (ibc.core.channel.v1.MsgChannelOpenTryResponse);
     */
    channelOpenTry(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck.
     *
     * @generated from protobuf rpc: ChannelOpenAck(ibc.core.channel.v1.MsgChannelOpenAck) returns (ibc.core.channel.v1.MsgChannelOpenAckResponse);
     */
    channelOpenAck(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm.
     *
     * @generated from protobuf rpc: ChannelOpenConfirm(ibc.core.channel.v1.MsgChannelOpenConfirm) returns (ibc.core.channel.v1.MsgChannelOpenConfirmResponse);
     */
    channelOpenConfirm(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit.
     *
     * @generated from protobuf rpc: ChannelCloseInit(ibc.core.channel.v1.MsgChannelCloseInit) returns (ibc.core.channel.v1.MsgChannelCloseInitResponse);
     */
    channelCloseInit(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * ChannelCloseConfirm defines a rpc handler method for
     * MsgChannelCloseConfirm.
     *
     * @generated from protobuf rpc: ChannelCloseConfirm(ibc.core.channel.v1.MsgChannelCloseConfirm) returns (ibc.core.channel.v1.MsgChannelCloseConfirmResponse);
     */
    channelCloseConfirm(input, options) {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * RecvPacket defines a rpc handler method for MsgRecvPacket.
     *
     * @generated from protobuf rpc: RecvPacket(ibc.core.channel.v1.MsgRecvPacket) returns (ibc.core.channel.v1.MsgRecvPacketResponse);
     */
    recvPacket(input, options) {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * Timeout defines a rpc handler method for MsgTimeout.
     *
     * @generated from protobuf rpc: Timeout(ibc.core.channel.v1.MsgTimeout) returns (ibc.core.channel.v1.MsgTimeoutResponse);
     */
    timeout(input, options) {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose.
     *
     * @generated from protobuf rpc: TimeoutOnClose(ibc.core.channel.v1.MsgTimeoutOnClose) returns (ibc.core.channel.v1.MsgTimeoutOnCloseResponse);
     */
    timeoutOnClose(input, options) {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * Acknowledgement defines a rpc handler method for MsgAcknowledgement.
     *
     * @generated from protobuf rpc: Acknowledgement(ibc.core.channel.v1.MsgAcknowledgement) returns (ibc.core.channel.v1.MsgAcknowledgementResponse);
     */
    acknowledgement(input, options) {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}