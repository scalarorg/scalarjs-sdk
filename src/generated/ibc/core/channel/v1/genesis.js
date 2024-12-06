// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "ibc/core/channel/v1/genesis.proto" (package "ibc.core.channel.v1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { PacketState } from "./channel";
import { IdentifiedChannel } from "./channel";
// @generated message type with reflection information, may provide speed optimized methods
class GenesisState$Type extends MessageType {
    constructor() {
        super("ibc.core.channel.v1.GenesisState", [
            { no: 1, name: "channels", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => IdentifiedChannel, options: { "gogoproto.nullable": false, "gogoproto.casttype": "IdentifiedChannel" } },
            { no: 2, name: "acknowledgements", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PacketState, options: { "gogoproto.nullable": false } },
            { no: 3, name: "commitments", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PacketState, options: { "gogoproto.nullable": false } },
            { no: 4, name: "receipts", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PacketState, options: { "gogoproto.nullable": false } },
            { no: 5, name: "send_sequences", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PacketSequence, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"send_sequences\"" } },
            { no: 6, name: "recv_sequences", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PacketSequence, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"recv_sequences\"" } },
            { no: 7, name: "ack_sequences", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PacketSequence, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"ack_sequences\"" } },
            { no: 8, name: "next_channel_sequence", kind: "scalar", T: 4 /*ScalarType.UINT64*/, options: { "gogoproto.moretags": "yaml:\"next_channel_sequence\"" } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.channels = [];
        message.acknowledgements = [];
        message.commitments = [];
        message.receipts = [];
        message.sendSequences = [];
        message.recvSequences = [];
        message.ackSequences = [];
        message.nextChannelSequence = "0";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated ibc.core.channel.v1.IdentifiedChannel channels */ 1:
                    message.channels.push(IdentifiedChannel.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ibc.core.channel.v1.PacketState acknowledgements */ 2:
                    message.acknowledgements.push(PacketState.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ibc.core.channel.v1.PacketState commitments */ 3:
                    message.commitments.push(PacketState.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ibc.core.channel.v1.PacketState receipts */ 4:
                    message.receipts.push(PacketState.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ibc.core.channel.v1.PacketSequence send_sequences */ 5:
                    message.sendSequences.push(PacketSequence.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ibc.core.channel.v1.PacketSequence recv_sequences */ 6:
                    message.recvSequences.push(PacketSequence.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ibc.core.channel.v1.PacketSequence ack_sequences */ 7:
                    message.ackSequences.push(PacketSequence.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint64 next_channel_sequence */ 8:
                    message.nextChannelSequence = reader.uint64().toString();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated ibc.core.channel.v1.IdentifiedChannel channels = 1; */
        for (let i = 0; i < message.channels.length; i++)
            IdentifiedChannel.internalBinaryWrite(message.channels[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated ibc.core.channel.v1.PacketState acknowledgements = 2; */
        for (let i = 0; i < message.acknowledgements.length; i++)
            PacketState.internalBinaryWrite(message.acknowledgements[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* repeated ibc.core.channel.v1.PacketState commitments = 3; */
        for (let i = 0; i < message.commitments.length; i++)
            PacketState.internalBinaryWrite(message.commitments[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated ibc.core.channel.v1.PacketState receipts = 4; */
        for (let i = 0; i < message.receipts.length; i++)
            PacketState.internalBinaryWrite(message.receipts[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* repeated ibc.core.channel.v1.PacketSequence send_sequences = 5; */
        for (let i = 0; i < message.sendSequences.length; i++)
            PacketSequence.internalBinaryWrite(message.sendSequences[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* repeated ibc.core.channel.v1.PacketSequence recv_sequences = 6; */
        for (let i = 0; i < message.recvSequences.length; i++)
            PacketSequence.internalBinaryWrite(message.recvSequences[i], writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* repeated ibc.core.channel.v1.PacketSequence ack_sequences = 7; */
        for (let i = 0; i < message.ackSequences.length; i++)
            PacketSequence.internalBinaryWrite(message.ackSequences[i], writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* uint64 next_channel_sequence = 8; */
        if (message.nextChannelSequence !== "0")
            writer.tag(8, WireType.Varint).uint64(message.nextChannelSequence);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.GenesisState
 */
export const GenesisState = new GenesisState$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PacketSequence$Type extends MessageType {
    constructor() {
        super("ibc.core.channel.v1.PacketSequence", [
            { no: 1, name: "port_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"port_id\"" } },
            { no: 2, name: "channel_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"channel_id\"" } },
            { no: 3, name: "sequence", kind: "scalar", T: 4 /*ScalarType.UINT64*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.portId = "";
        message.channelId = "";
        message.sequence = "0";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string port_id */ 1:
                    message.portId = reader.string();
                    break;
                case /* string channel_id */ 2:
                    message.channelId = reader.string();
                    break;
                case /* uint64 sequence */ 3:
                    message.sequence = reader.uint64().toString();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string port_id = 1; */
        if (message.portId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.portId);
        /* string channel_id = 2; */
        if (message.channelId !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.channelId);
        /* uint64 sequence = 3; */
        if (message.sequence !== "0")
            writer.tag(3, WireType.Varint).uint64(message.sequence);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.core.channel.v1.PacketSequence
 */
export const PacketSequence = new PacketSequence$Type();