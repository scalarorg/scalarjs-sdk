// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "scalar/nexus/v1beta1/genesis.proto" (package "scalar.nexus.v1beta1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { GeneralMessage } from "../exported/v1beta1/types";
import { TransferEpoch } from "./types";
import { RateLimit } from "./types";
import { FeeInfo } from "../exported/v1beta1/types";
import { TransferFee } from "../exported/v1beta1/types";
import { CrossChainTransfer } from "../exported/v1beta1/types";
import { LinkedAddresses } from "./types";
import { ChainState } from "./types";
import { Chain } from "../exported/v1beta1/types";
import { Params } from "./params";
// @generated message type with reflection information, may provide speed optimized methods
class GenesisState$Type extends MessageType {
    constructor() {
        super("scalar.nexus.v1beta1.GenesisState", [
            { no: 1, name: "params", kind: "message", T: () => Params, options: { "gogoproto.nullable": false } },
            { no: 2, name: "nonce", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 3, name: "chains", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Chain, options: { "gogoproto.nullable": false } },
            { no: 4, name: "chain_states", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ChainState, options: { "gogoproto.nullable": false } },
            { no: 5, name: "linked_addresses", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => LinkedAddresses, options: { "gogoproto.nullable": false } },
            { no: 6, name: "transfers", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CrossChainTransfer, options: { "gogoproto.nullable": false } },
            { no: 7, name: "fee", kind: "message", T: () => TransferFee, options: { "gogoproto.nullable": false } },
            { no: 8, name: "fee_infos", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FeeInfo, options: { "gogoproto.nullable": false } },
            { no: 9, name: "rate_limits", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RateLimit, options: { "gogoproto.nullable": false } },
            { no: 10, name: "transfer_epochs", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TransferEpoch, options: { "gogoproto.nullable": false } },
            { no: 11, name: "messages", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GeneralMessage, options: { "gogoproto.nullable": false } },
            { no: 12, name: "message_nonce", kind: "scalar", T: 4 /*ScalarType.UINT64*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.nonce = "0";
        message.chains = [];
        message.chainStates = [];
        message.linkedAddresses = [];
        message.transfers = [];
        message.feeInfos = [];
        message.rateLimits = [];
        message.transferEpochs = [];
        message.messages = [];
        message.messageNonce = "0";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* scalar.nexus.v1beta1.Params params */ 1:
                    message.params = Params.internalBinaryRead(reader, reader.uint32(), options, message.params);
                    break;
                case /* uint64 nonce */ 2:
                    message.nonce = reader.uint64().toString();
                    break;
                case /* repeated scalar.nexus.exported.v1beta1.Chain chains */ 3:
                    message.chains.push(Chain.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated scalar.nexus.v1beta1.ChainState chain_states */ 4:
                    message.chainStates.push(ChainState.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated scalar.nexus.v1beta1.LinkedAddresses linked_addresses */ 5:
                    message.linkedAddresses.push(LinkedAddresses.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated scalar.nexus.exported.v1beta1.CrossChainTransfer transfers */ 6:
                    message.transfers.push(CrossChainTransfer.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* scalar.nexus.exported.v1beta1.TransferFee fee */ 7:
                    message.fee = TransferFee.internalBinaryRead(reader, reader.uint32(), options, message.fee);
                    break;
                case /* repeated scalar.nexus.exported.v1beta1.FeeInfo fee_infos */ 8:
                    message.feeInfos.push(FeeInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated scalar.nexus.v1beta1.RateLimit rate_limits */ 9:
                    message.rateLimits.push(RateLimit.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated scalar.nexus.v1beta1.TransferEpoch transfer_epochs */ 10:
                    message.transferEpochs.push(TransferEpoch.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated scalar.nexus.exported.v1beta1.GeneralMessage messages */ 11:
                    message.messages.push(GeneralMessage.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint64 message_nonce */ 12:
                    message.messageNonce = reader.uint64().toString();
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
        /* scalar.nexus.v1beta1.Params params = 1; */
        if (message.params)
            Params.internalBinaryWrite(message.params, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* uint64 nonce = 2; */
        if (message.nonce !== "0")
            writer.tag(2, WireType.Varint).uint64(message.nonce);
        /* repeated scalar.nexus.exported.v1beta1.Chain chains = 3; */
        for (let i = 0; i < message.chains.length; i++)
            Chain.internalBinaryWrite(message.chains[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated scalar.nexus.v1beta1.ChainState chain_states = 4; */
        for (let i = 0; i < message.chainStates.length; i++)
            ChainState.internalBinaryWrite(message.chainStates[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* repeated scalar.nexus.v1beta1.LinkedAddresses linked_addresses = 5; */
        for (let i = 0; i < message.linkedAddresses.length; i++)
            LinkedAddresses.internalBinaryWrite(message.linkedAddresses[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* repeated scalar.nexus.exported.v1beta1.CrossChainTransfer transfers = 6; */
        for (let i = 0; i < message.transfers.length; i++)
            CrossChainTransfer.internalBinaryWrite(message.transfers[i], writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* scalar.nexus.exported.v1beta1.TransferFee fee = 7; */
        if (message.fee)
            TransferFee.internalBinaryWrite(message.fee, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* repeated scalar.nexus.exported.v1beta1.FeeInfo fee_infos = 8; */
        for (let i = 0; i < message.feeInfos.length; i++)
            FeeInfo.internalBinaryWrite(message.feeInfos[i], writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* repeated scalar.nexus.v1beta1.RateLimit rate_limits = 9; */
        for (let i = 0; i < message.rateLimits.length; i++)
            RateLimit.internalBinaryWrite(message.rateLimits[i], writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* repeated scalar.nexus.v1beta1.TransferEpoch transfer_epochs = 10; */
        for (let i = 0; i < message.transferEpochs.length; i++)
            TransferEpoch.internalBinaryWrite(message.transferEpochs[i], writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* repeated scalar.nexus.exported.v1beta1.GeneralMessage messages = 11; */
        for (let i = 0; i < message.messages.length; i++)
            GeneralMessage.internalBinaryWrite(message.messages[i], writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* uint64 message_nonce = 12; */
        if (message.messageNonce !== "0")
            writer.tag(12, WireType.Varint).uint64(message.messageNonce);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.nexus.v1beta1.GenesisState
 */
export const GenesisState = new GenesisState$Type();
