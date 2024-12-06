// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "tendermint/types/evidence.proto" (package "tendermint.types", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Validator } from "./validator";
import { LightBlock } from "./types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Vote } from "./types";
// @generated message type with reflection information, may provide speed optimized methods
class Evidence$Type extends MessageType {
    constructor() {
        super("tendermint.types.Evidence", [
            { no: 1, name: "duplicate_vote_evidence", kind: "message", oneof: "sum", T: () => DuplicateVoteEvidence },
            { no: 2, name: "light_client_attack_evidence", kind: "message", oneof: "sum", T: () => LightClientAttackEvidence }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.sum = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* tendermint.types.DuplicateVoteEvidence duplicate_vote_evidence */ 1:
                    message.sum = {
                        oneofKind: "duplicateVoteEvidence",
                        duplicateVoteEvidence: DuplicateVoteEvidence.internalBinaryRead(reader, reader.uint32(), options, message.sum.duplicateVoteEvidence)
                    };
                    break;
                case /* tendermint.types.LightClientAttackEvidence light_client_attack_evidence */ 2:
                    message.sum = {
                        oneofKind: "lightClientAttackEvidence",
                        lightClientAttackEvidence: LightClientAttackEvidence.internalBinaryRead(reader, reader.uint32(), options, message.sum.lightClientAttackEvidence)
                    };
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
        /* tendermint.types.DuplicateVoteEvidence duplicate_vote_evidence = 1; */
        if (message.sum.oneofKind === "duplicateVoteEvidence")
            DuplicateVoteEvidence.internalBinaryWrite(message.sum.duplicateVoteEvidence, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* tendermint.types.LightClientAttackEvidence light_client_attack_evidence = 2; */
        if (message.sum.oneofKind === "lightClientAttackEvidence")
            LightClientAttackEvidence.internalBinaryWrite(message.sum.lightClientAttackEvidence, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tendermint.types.Evidence
 */
export const Evidence = new Evidence$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DuplicateVoteEvidence$Type extends MessageType {
    constructor() {
        super("tendermint.types.DuplicateVoteEvidence", [
            { no: 1, name: "vote_a", kind: "message", T: () => Vote },
            { no: 2, name: "vote_b", kind: "message", T: () => Vote },
            { no: 3, name: "total_voting_power", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 4, name: "validator_power", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 5, name: "timestamp", kind: "message", T: () => Timestamp, options: { "gogoproto.nullable": false, "gogoproto.stdtime": true } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.totalVotingPower = "0";
        message.validatorPower = "0";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* tendermint.types.Vote vote_a */ 1:
                    message.voteA = Vote.internalBinaryRead(reader, reader.uint32(), options, message.voteA);
                    break;
                case /* tendermint.types.Vote vote_b */ 2:
                    message.voteB = Vote.internalBinaryRead(reader, reader.uint32(), options, message.voteB);
                    break;
                case /* int64 total_voting_power */ 3:
                    message.totalVotingPower = reader.int64().toString();
                    break;
                case /* int64 validator_power */ 4:
                    message.validatorPower = reader.int64().toString();
                    break;
                case /* google.protobuf.Timestamp timestamp */ 5:
                    message.timestamp = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.timestamp);
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
        /* tendermint.types.Vote vote_a = 1; */
        if (message.voteA)
            Vote.internalBinaryWrite(message.voteA, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* tendermint.types.Vote vote_b = 2; */
        if (message.voteB)
            Vote.internalBinaryWrite(message.voteB, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* int64 total_voting_power = 3; */
        if (message.totalVotingPower !== "0")
            writer.tag(3, WireType.Varint).int64(message.totalVotingPower);
        /* int64 validator_power = 4; */
        if (message.validatorPower !== "0")
            writer.tag(4, WireType.Varint).int64(message.validatorPower);
        /* google.protobuf.Timestamp timestamp = 5; */
        if (message.timestamp)
            Timestamp.internalBinaryWrite(message.timestamp, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tendermint.types.DuplicateVoteEvidence
 */
export const DuplicateVoteEvidence = new DuplicateVoteEvidence$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LightClientAttackEvidence$Type extends MessageType {
    constructor() {
        super("tendermint.types.LightClientAttackEvidence", [
            { no: 1, name: "conflicting_block", kind: "message", T: () => LightBlock },
            { no: 2, name: "common_height", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 3, name: "byzantine_validators", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Validator },
            { no: 4, name: "total_voting_power", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 5, name: "timestamp", kind: "message", T: () => Timestamp, options: { "gogoproto.nullable": false, "gogoproto.stdtime": true } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.commonHeight = "0";
        message.byzantineValidators = [];
        message.totalVotingPower = "0";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* tendermint.types.LightBlock conflicting_block */ 1:
                    message.conflictingBlock = LightBlock.internalBinaryRead(reader, reader.uint32(), options, message.conflictingBlock);
                    break;
                case /* int64 common_height */ 2:
                    message.commonHeight = reader.int64().toString();
                    break;
                case /* repeated tendermint.types.Validator byzantine_validators */ 3:
                    message.byzantineValidators.push(Validator.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int64 total_voting_power */ 4:
                    message.totalVotingPower = reader.int64().toString();
                    break;
                case /* google.protobuf.Timestamp timestamp */ 5:
                    message.timestamp = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.timestamp);
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
        /* tendermint.types.LightBlock conflicting_block = 1; */
        if (message.conflictingBlock)
            LightBlock.internalBinaryWrite(message.conflictingBlock, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* int64 common_height = 2; */
        if (message.commonHeight !== "0")
            writer.tag(2, WireType.Varint).int64(message.commonHeight);
        /* repeated tendermint.types.Validator byzantine_validators = 3; */
        for (let i = 0; i < message.byzantineValidators.length; i++)
            Validator.internalBinaryWrite(message.byzantineValidators[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* int64 total_voting_power = 4; */
        if (message.totalVotingPower !== "0")
            writer.tag(4, WireType.Varint).int64(message.totalVotingPower);
        /* google.protobuf.Timestamp timestamp = 5; */
        if (message.timestamp)
            Timestamp.internalBinaryWrite(message.timestamp, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tendermint.types.LightClientAttackEvidence
 */
export const LightClientAttackEvidence = new LightClientAttackEvidence$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvidenceList$Type extends MessageType {
    constructor() {
        super("tendermint.types.EvidenceList", [
            { no: 1, name: "evidence", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Evidence, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.evidence = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated tendermint.types.Evidence evidence */ 1:
                    message.evidence.push(Evidence.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated tendermint.types.Evidence evidence = 1; */
        for (let i = 0; i < message.evidence.length; i++)
            Evidence.internalBinaryWrite(message.evidence[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message tendermint.types.EvidenceList
 */
export const EvidenceList = new EvidenceList$Type();