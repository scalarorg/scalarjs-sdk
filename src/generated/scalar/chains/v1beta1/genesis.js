// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "scalar/chains/v1beta1/genesis.proto" (package "scalar.chains.v1beta1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Event } from "./events";
import { Gateway } from "./types";
import { CommandBatchMetadata } from "./types";
import { StakingTx } from "./types";
import { QueueState } from "../../utils/v1beta1/queuer";
import { Params } from "./params";
// @generated message type with reflection information, may provide speed optimized methods
class GenesisState$Type extends MessageType {
    constructor() {
        super("scalar.chains.v1beta1.GenesisState", [
            { no: 1, name: "chains", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GenesisState_Chain, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.chains = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated scalar.chains.v1beta1.GenesisState.Chain chains */ 1:
                    message.chains.push(GenesisState_Chain.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated scalar.chains.v1beta1.GenesisState.Chain chains = 1; */
        for (let i = 0; i < message.chains.length; i++)
            GenesisState_Chain.internalBinaryWrite(message.chains[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.chains.v1beta1.GenesisState
 */
export const GenesisState = new GenesisState$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GenesisState_Chain$Type extends MessageType {
    constructor() {
        super("scalar.chains.v1beta1.GenesisState.Chain", [
            { no: 1, name: "params", kind: "message", T: () => Params, options: { "gogoproto.nullable": false } },
            { no: 2, name: "command_queue", kind: "message", T: () => QueueState, options: { "gogoproto.nullable": false } },
            { no: 3, name: "confirmed_staking_txs", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => StakingTx, options: { "gogoproto.nullable": false } },
            { no: 4, name: "command_batches", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CommandBatchMetadata, options: { "gogoproto.nullable": false } },
            { no: 5, name: "gateway", kind: "message", T: () => Gateway },
            { no: 6, name: "events", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Event, options: { "gogoproto.nullable": false } },
            { no: 7, name: "confirmed_event_queue", kind: "message", T: () => QueueState, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.confirmedStakingTxs = [];
        message.commandBatches = [];
        message.events = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* scalar.chains.v1beta1.Params params */ 1:
                    message.params = Params.internalBinaryRead(reader, reader.uint32(), options, message.params);
                    break;
                case /* scalar.utils.v1beta1.QueueState command_queue */ 2:
                    message.commandQueue = QueueState.internalBinaryRead(reader, reader.uint32(), options, message.commandQueue);
                    break;
                case /* repeated scalar.chains.v1beta1.StakingTx confirmed_staking_txs */ 3:
                    message.confirmedStakingTxs.push(StakingTx.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated scalar.chains.v1beta1.CommandBatchMetadata command_batches */ 4:
                    message.commandBatches.push(CommandBatchMetadata.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* scalar.chains.v1beta1.Gateway gateway */ 5:
                    message.gateway = Gateway.internalBinaryRead(reader, reader.uint32(), options, message.gateway);
                    break;
                case /* repeated scalar.chains.v1beta1.Event events */ 6:
                    message.events.push(Event.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* scalar.utils.v1beta1.QueueState confirmed_event_queue */ 7:
                    message.confirmedEventQueue = QueueState.internalBinaryRead(reader, reader.uint32(), options, message.confirmedEventQueue);
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
        /* scalar.chains.v1beta1.Params params = 1; */
        if (message.params)
            Params.internalBinaryWrite(message.params, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* scalar.utils.v1beta1.QueueState command_queue = 2; */
        if (message.commandQueue)
            QueueState.internalBinaryWrite(message.commandQueue, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* repeated scalar.chains.v1beta1.StakingTx confirmed_staking_txs = 3; */
        for (let i = 0; i < message.confirmedStakingTxs.length; i++)
            StakingTx.internalBinaryWrite(message.confirmedStakingTxs[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated scalar.chains.v1beta1.CommandBatchMetadata command_batches = 4; */
        for (let i = 0; i < message.commandBatches.length; i++)
            CommandBatchMetadata.internalBinaryWrite(message.commandBatches[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* scalar.chains.v1beta1.Gateway gateway = 5; */
        if (message.gateway)
            Gateway.internalBinaryWrite(message.gateway, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* repeated scalar.chains.v1beta1.Event events = 6; */
        for (let i = 0; i < message.events.length; i++)
            Event.internalBinaryWrite(message.events[i], writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* scalar.utils.v1beta1.QueueState confirmed_event_queue = 7; */
        if (message.confirmedEventQueue)
            QueueState.internalBinaryWrite(message.confirmedEventQueue, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.chains.v1beta1.GenesisState.Chain
 */
export const GenesisState_Chain = new GenesisState_Chain$Type();
