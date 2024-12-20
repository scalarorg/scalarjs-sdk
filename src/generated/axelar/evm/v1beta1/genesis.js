// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/evm/v1beta1/genesis.proto" (package "axelar.evm.v1beta1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Event } from "./types";
import { ERC20TokenMetadata } from "./types";
import { Gateway } from "./types";
import { CommandBatchMetadata } from "./types";
import { ERC20Deposit } from "./types";
import { QueueState } from "../../utils/v1beta1/queuer";
import { BurnerInfo } from "./types";
import { Params } from "./params";
// @generated message type with reflection information, may provide speed optimized methods
class GenesisState$Type extends MessageType {
    constructor() {
        super("axelar.evm.v1beta1.GenesisState", [
            { no: 3, name: "chains", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GenesisState_Chain, options: { "gogoproto.nullable": false } }
        ], { "gogoproto.stable_marshaler": true });
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
                case /* repeated axelar.evm.v1beta1.GenesisState.Chain chains */ 3:
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
        /* repeated axelar.evm.v1beta1.GenesisState.Chain chains = 3; */
        for (let i = 0; i < message.chains.length; i++)
            GenesisState_Chain.internalBinaryWrite(message.chains[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.GenesisState
 */
export const GenesisState = new GenesisState$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GenesisState_Chain$Type extends MessageType {
    constructor() {
        super("axelar.evm.v1beta1.GenesisState.Chain", [
            { no: 1, name: "params", kind: "message", T: () => Params, options: { "gogoproto.nullable": false } },
            { no: 2, name: "burner_infos", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BurnerInfo, options: { "gogoproto.nullable": false } },
            { no: 3, name: "command_queue", kind: "message", T: () => QueueState, options: { "gogoproto.nullable": false } },
            { no: 4, name: "confirmed_deposits", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ERC20Deposit, options: { "gogoproto.nullable": false } },
            { no: 5, name: "burned_deposits", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ERC20Deposit, options: { "gogoproto.nullable": false } },
            { no: 8, name: "command_batches", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CommandBatchMetadata, options: { "gogoproto.nullable": false } },
            { no: 9, name: "gateway", kind: "message", T: () => Gateway, options: { "gogoproto.nullable": false } },
            { no: 10, name: "tokens", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ERC20TokenMetadata, options: { "gogoproto.nullable": false } },
            { no: 11, name: "events", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Event, options: { "gogoproto.nullable": false } },
            { no: 12, name: "confirmed_event_queue", kind: "message", T: () => QueueState, options: { "gogoproto.nullable": false } },
            { no: 13, name: "legacy_confirmed_deposits", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ERC20Deposit, options: { "gogoproto.nullable": false } },
            { no: 14, name: "legacy_burned_deposits", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ERC20Deposit, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.burnerInfos = [];
        message.confirmedDeposits = [];
        message.burnedDeposits = [];
        message.commandBatches = [];
        message.tokens = [];
        message.events = [];
        message.legacyConfirmedDeposits = [];
        message.legacyBurnedDeposits = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* axelar.evm.v1beta1.Params params */ 1:
                    message.params = Params.internalBinaryRead(reader, reader.uint32(), options, message.params);
                    break;
                case /* repeated axelar.evm.v1beta1.BurnerInfo burner_infos */ 2:
                    message.burnerInfos.push(BurnerInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* axelar.utils.v1beta1.QueueState command_queue */ 3:
                    message.commandQueue = QueueState.internalBinaryRead(reader, reader.uint32(), options, message.commandQueue);
                    break;
                case /* repeated axelar.evm.v1beta1.ERC20Deposit confirmed_deposits */ 4:
                    message.confirmedDeposits.push(ERC20Deposit.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated axelar.evm.v1beta1.ERC20Deposit burned_deposits */ 5:
                    message.burnedDeposits.push(ERC20Deposit.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated axelar.evm.v1beta1.CommandBatchMetadata command_batches */ 8:
                    message.commandBatches.push(CommandBatchMetadata.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* axelar.evm.v1beta1.Gateway gateway */ 9:
                    message.gateway = Gateway.internalBinaryRead(reader, reader.uint32(), options, message.gateway);
                    break;
                case /* repeated axelar.evm.v1beta1.ERC20TokenMetadata tokens */ 10:
                    message.tokens.push(ERC20TokenMetadata.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated axelar.evm.v1beta1.Event events */ 11:
                    message.events.push(Event.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* axelar.utils.v1beta1.QueueState confirmed_event_queue */ 12:
                    message.confirmedEventQueue = QueueState.internalBinaryRead(reader, reader.uint32(), options, message.confirmedEventQueue);
                    break;
                case /* repeated axelar.evm.v1beta1.ERC20Deposit legacy_confirmed_deposits */ 13:
                    message.legacyConfirmedDeposits.push(ERC20Deposit.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated axelar.evm.v1beta1.ERC20Deposit legacy_burned_deposits */ 14:
                    message.legacyBurnedDeposits.push(ERC20Deposit.internalBinaryRead(reader, reader.uint32(), options));
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
        /* axelar.evm.v1beta1.Params params = 1; */
        if (message.params)
            Params.internalBinaryWrite(message.params, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated axelar.evm.v1beta1.BurnerInfo burner_infos = 2; */
        for (let i = 0; i < message.burnerInfos.length; i++)
            BurnerInfo.internalBinaryWrite(message.burnerInfos[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* axelar.utils.v1beta1.QueueState command_queue = 3; */
        if (message.commandQueue)
            QueueState.internalBinaryWrite(message.commandQueue, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated axelar.evm.v1beta1.ERC20Deposit confirmed_deposits = 4; */
        for (let i = 0; i < message.confirmedDeposits.length; i++)
            ERC20Deposit.internalBinaryWrite(message.confirmedDeposits[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* repeated axelar.evm.v1beta1.ERC20Deposit burned_deposits = 5; */
        for (let i = 0; i < message.burnedDeposits.length; i++)
            ERC20Deposit.internalBinaryWrite(message.burnedDeposits[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* repeated axelar.evm.v1beta1.CommandBatchMetadata command_batches = 8; */
        for (let i = 0; i < message.commandBatches.length; i++)
            CommandBatchMetadata.internalBinaryWrite(message.commandBatches[i], writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* axelar.evm.v1beta1.Gateway gateway = 9; */
        if (message.gateway)
            Gateway.internalBinaryWrite(message.gateway, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* repeated axelar.evm.v1beta1.ERC20TokenMetadata tokens = 10; */
        for (let i = 0; i < message.tokens.length; i++)
            ERC20TokenMetadata.internalBinaryWrite(message.tokens[i], writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* repeated axelar.evm.v1beta1.Event events = 11; */
        for (let i = 0; i < message.events.length; i++)
            Event.internalBinaryWrite(message.events[i], writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* axelar.utils.v1beta1.QueueState confirmed_event_queue = 12; */
        if (message.confirmedEventQueue)
            QueueState.internalBinaryWrite(message.confirmedEventQueue, writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        /* repeated axelar.evm.v1beta1.ERC20Deposit legacy_confirmed_deposits = 13; */
        for (let i = 0; i < message.legacyConfirmedDeposits.length; i++)
            ERC20Deposit.internalBinaryWrite(message.legacyConfirmedDeposits[i], writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        /* repeated axelar.evm.v1beta1.ERC20Deposit legacy_burned_deposits = 14; */
        for (let i = 0; i < message.legacyBurnedDeposits.length; i++)
            ERC20Deposit.internalBinaryWrite(message.legacyBurnedDeposits[i], writer.tag(14, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.evm.v1beta1.GenesisState.Chain
 */
export const GenesisState_Chain = new GenesisState_Chain$Type();
