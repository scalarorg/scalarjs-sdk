// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/multisig/v1beta1/query.proto" (package "axelar.multisig.v1beta1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Params } from "./params";
import { MultisigState } from "../exported/v1beta1/types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { KeyState } from "../exported/v1beta1/types";
// @generated message type with reflection information, may provide speed optimized methods
class KeyIDRequest$Type extends MessageType {
    constructor() {
        super("axelar.multisig.v1beta1.KeyIDRequest", [
            { no: 1, name: "chain", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.chain = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string chain */ 1:
                    message.chain = reader.string();
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
        /* string chain = 1; */
        if (message.chain !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.chain);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.multisig.v1beta1.KeyIDRequest
 */
export const KeyIDRequest = new KeyIDRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class KeyIDResponse$Type extends MessageType {
    constructor() {
        super("axelar.multisig.v1beta1.KeyIDResponse", [
            { no: 1, name: "key_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.customname": "KeyID", "gogoproto.casttype": "github.com/axelarnetwork/axelar-core/x/multisig/exported.KeyID" } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.keyId = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string key_id */ 1:
                    message.keyId = reader.string();
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
        /* string key_id = 1; */
        if (message.keyId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.keyId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.multisig.v1beta1.KeyIDResponse
 */
export const KeyIDResponse = new KeyIDResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NextKeyIDRequest$Type extends MessageType {
    constructor() {
        super("axelar.multisig.v1beta1.NextKeyIDRequest", [
            { no: 1, name: "chain", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.chain = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string chain */ 1:
                    message.chain = reader.string();
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
        /* string chain = 1; */
        if (message.chain !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.chain);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.multisig.v1beta1.NextKeyIDRequest
 */
export const NextKeyIDRequest = new NextKeyIDRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NextKeyIDResponse$Type extends MessageType {
    constructor() {
        super("axelar.multisig.v1beta1.NextKeyIDResponse", [
            { no: 1, name: "key_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.customname": "KeyID", "gogoproto.casttype": "github.com/axelarnetwork/axelar-core/x/multisig/exported.KeyID" } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.keyId = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string key_id */ 1:
                    message.keyId = reader.string();
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
        /* string key_id = 1; */
        if (message.keyId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.keyId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.multisig.v1beta1.NextKeyIDResponse
 */
export const NextKeyIDResponse = new NextKeyIDResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class KeyRequest$Type extends MessageType {
    constructor() {
        super("axelar.multisig.v1beta1.KeyRequest", [
            { no: 1, name: "key_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.customname": "KeyID", "gogoproto.casttype": "github.com/axelarnetwork/axelar-core/x/multisig/exported.KeyID" } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.keyId = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string key_id */ 1:
                    message.keyId = reader.string();
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
        /* string key_id = 1; */
        if (message.keyId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.keyId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.multisig.v1beta1.KeyRequest
 */
export const KeyRequest = new KeyRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class KeygenParticipant$Type extends MessageType {
    constructor() {
        super("axelar.multisig.v1beta1.KeygenParticipant", [
            { no: 1, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "weight", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Uint" } },
            { no: 3, name: "pub_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.address = "";
        message.weight = new Uint8Array(0);
        message.pubKey = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string address */ 1:
                    message.address = reader.string();
                    break;
                case /* bytes weight */ 2:
                    message.weight = reader.bytes();
                    break;
                case /* string pub_key */ 3:
                    message.pubKey = reader.string();
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
        /* string address = 1; */
        if (message.address !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.address);
        /* bytes weight = 2; */
        if (message.weight.length)
            writer.tag(2, WireType.LengthDelimited).bytes(message.weight);
        /* string pub_key = 3; */
        if (message.pubKey !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.pubKey);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.multisig.v1beta1.KeygenParticipant
 */
export const KeygenParticipant = new KeygenParticipant$Type();
// @generated message type with reflection information, may provide speed optimized methods
class KeyResponse$Type extends MessageType {
    constructor() {
        super("axelar.multisig.v1beta1.KeyResponse", [
            { no: 1, name: "key_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.customname": "KeyID", "gogoproto.casttype": "github.com/axelarnetwork/axelar-core/x/multisig/exported.KeyID" } },
            { no: 2, name: "state", kind: "enum", T: () => ["axelar.multisig.exported.v1beta1.KeyState", KeyState, "KEY_STATE_"] },
            { no: 3, name: "started_at", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 4, name: "started_at_timestamp", kind: "message", T: () => Timestamp, options: { "gogoproto.nullable": false, "gogoproto.stdtime": true } },
            { no: 5, name: "threshold_weight", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Uint" } },
            { no: 6, name: "bonded_weight", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Uint" } },
            { no: 7, name: "participants", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => KeygenParticipant, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.keyId = "";
        message.state = 0;
        message.startedAt = "0";
        message.thresholdWeight = new Uint8Array(0);
        message.bondedWeight = new Uint8Array(0);
        message.participants = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string key_id */ 1:
                    message.keyId = reader.string();
                    break;
                case /* axelar.multisig.exported.v1beta1.KeyState state */ 2:
                    message.state = reader.int32();
                    break;
                case /* int64 started_at */ 3:
                    message.startedAt = reader.int64().toString();
                    break;
                case /* google.protobuf.Timestamp started_at_timestamp */ 4:
                    message.startedAtTimestamp = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.startedAtTimestamp);
                    break;
                case /* bytes threshold_weight */ 5:
                    message.thresholdWeight = reader.bytes();
                    break;
                case /* bytes bonded_weight */ 6:
                    message.bondedWeight = reader.bytes();
                    break;
                case /* repeated axelar.multisig.v1beta1.KeygenParticipant participants */ 7:
                    message.participants.push(KeygenParticipant.internalBinaryRead(reader, reader.uint32(), options));
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
        /* string key_id = 1; */
        if (message.keyId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.keyId);
        /* axelar.multisig.exported.v1beta1.KeyState state = 2; */
        if (message.state !== 0)
            writer.tag(2, WireType.Varint).int32(message.state);
        /* int64 started_at = 3; */
        if (message.startedAt !== "0")
            writer.tag(3, WireType.Varint).int64(message.startedAt);
        /* google.protobuf.Timestamp started_at_timestamp = 4; */
        if (message.startedAtTimestamp)
            Timestamp.internalBinaryWrite(message.startedAtTimestamp, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* bytes threshold_weight = 5; */
        if (message.thresholdWeight.length)
            writer.tag(5, WireType.LengthDelimited).bytes(message.thresholdWeight);
        /* bytes bonded_weight = 6; */
        if (message.bondedWeight.length)
            writer.tag(6, WireType.LengthDelimited).bytes(message.bondedWeight);
        /* repeated axelar.multisig.v1beta1.KeygenParticipant participants = 7; */
        for (let i = 0; i < message.participants.length; i++)
            KeygenParticipant.internalBinaryWrite(message.participants[i], writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.multisig.v1beta1.KeyResponse
 */
export const KeyResponse = new KeyResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class KeygenSessionRequest$Type extends MessageType {
    constructor() {
        super("axelar.multisig.v1beta1.KeygenSessionRequest", [
            { no: 1, name: "key_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.customname": "KeyID", "gogoproto.casttype": "github.com/axelarnetwork/axelar-core/x/multisig/exported.KeyID" } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.keyId = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string key_id */ 1:
                    message.keyId = reader.string();
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
        /* string key_id = 1; */
        if (message.keyId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.keyId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.multisig.v1beta1.KeygenSessionRequest
 */
export const KeygenSessionRequest = new KeygenSessionRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class KeygenSessionResponse$Type extends MessageType {
    constructor() {
        super("axelar.multisig.v1beta1.KeygenSessionResponse", [
            { no: 1, name: "started_at", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 2, name: "started_at_timestamp", kind: "message", T: () => Timestamp, options: { "gogoproto.nullable": false, "gogoproto.stdtime": true } },
            { no: 3, name: "expires_at", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 4, name: "completed_at", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 5, name: "grace_period", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 6, name: "state", kind: "enum", T: () => ["axelar.multisig.exported.v1beta1.MultisigState", MultisigState, "MULTISIG_STATE_"] },
            { no: 7, name: "keygen_threshold_weight", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Uint" } },
            { no: 8, name: "signing_threshold_weight", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Uint" } },
            { no: 9, name: "bonded_weight", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Uint" } },
            { no: 10, name: "participants", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => KeygenParticipant, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.startedAt = "0";
        message.expiresAt = "0";
        message.completedAt = "0";
        message.gracePeriod = "0";
        message.state = 0;
        message.keygenThresholdWeight = new Uint8Array(0);
        message.signingThresholdWeight = new Uint8Array(0);
        message.bondedWeight = new Uint8Array(0);
        message.participants = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 started_at */ 1:
                    message.startedAt = reader.int64().toString();
                    break;
                case /* google.protobuf.Timestamp started_at_timestamp */ 2:
                    message.startedAtTimestamp = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.startedAtTimestamp);
                    break;
                case /* int64 expires_at */ 3:
                    message.expiresAt = reader.int64().toString();
                    break;
                case /* int64 completed_at */ 4:
                    message.completedAt = reader.int64().toString();
                    break;
                case /* int64 grace_period */ 5:
                    message.gracePeriod = reader.int64().toString();
                    break;
                case /* axelar.multisig.exported.v1beta1.MultisigState state */ 6:
                    message.state = reader.int32();
                    break;
                case /* bytes keygen_threshold_weight */ 7:
                    message.keygenThresholdWeight = reader.bytes();
                    break;
                case /* bytes signing_threshold_weight */ 8:
                    message.signingThresholdWeight = reader.bytes();
                    break;
                case /* bytes bonded_weight */ 9:
                    message.bondedWeight = reader.bytes();
                    break;
                case /* repeated axelar.multisig.v1beta1.KeygenParticipant participants */ 10:
                    message.participants.push(KeygenParticipant.internalBinaryRead(reader, reader.uint32(), options));
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
        /* int64 started_at = 1; */
        if (message.startedAt !== "0")
            writer.tag(1, WireType.Varint).int64(message.startedAt);
        /* google.protobuf.Timestamp started_at_timestamp = 2; */
        if (message.startedAtTimestamp)
            Timestamp.internalBinaryWrite(message.startedAtTimestamp, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* int64 expires_at = 3; */
        if (message.expiresAt !== "0")
            writer.tag(3, WireType.Varint).int64(message.expiresAt);
        /* int64 completed_at = 4; */
        if (message.completedAt !== "0")
            writer.tag(4, WireType.Varint).int64(message.completedAt);
        /* int64 grace_period = 5; */
        if (message.gracePeriod !== "0")
            writer.tag(5, WireType.Varint).int64(message.gracePeriod);
        /* axelar.multisig.exported.v1beta1.MultisigState state = 6; */
        if (message.state !== 0)
            writer.tag(6, WireType.Varint).int32(message.state);
        /* bytes keygen_threshold_weight = 7; */
        if (message.keygenThresholdWeight.length)
            writer.tag(7, WireType.LengthDelimited).bytes(message.keygenThresholdWeight);
        /* bytes signing_threshold_weight = 8; */
        if (message.signingThresholdWeight.length)
            writer.tag(8, WireType.LengthDelimited).bytes(message.signingThresholdWeight);
        /* bytes bonded_weight = 9; */
        if (message.bondedWeight.length)
            writer.tag(9, WireType.LengthDelimited).bytes(message.bondedWeight);
        /* repeated axelar.multisig.v1beta1.KeygenParticipant participants = 10; */
        for (let i = 0; i < message.participants.length; i++)
            KeygenParticipant.internalBinaryWrite(message.participants[i], writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.multisig.v1beta1.KeygenSessionResponse
 */
export const KeygenSessionResponse = new KeygenSessionResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ParamsRequest$Type extends MessageType {
    constructor() {
        super("axelar.multisig.v1beta1.ParamsRequest", []);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target !== null && target !== void 0 ? target : this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.multisig.v1beta1.ParamsRequest
 */
export const ParamsRequest = new ParamsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ParamsResponse$Type extends MessageType {
    constructor() {
        super("axelar.multisig.v1beta1.ParamsResponse", [
            { no: 1, name: "params", kind: "message", T: () => Params, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* axelar.multisig.v1beta1.Params params */ 1:
                    message.params = Params.internalBinaryRead(reader, reader.uint32(), options, message.params);
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
        /* axelar.multisig.v1beta1.Params params = 1; */
        if (message.params)
            Params.internalBinaryWrite(message.params, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.multisig.v1beta1.ParamsResponse
 */
export const ParamsResponse = new ParamsResponse$Type();
