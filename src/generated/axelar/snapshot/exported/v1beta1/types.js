// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/snapshot/exported/v1beta1/types.proto" (package "axelar.snapshot.exported.v1beta1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "../../../../google/protobuf/timestamp";
// @generated message type with reflection information, may provide speed optimized methods
class Participant$Type extends MessageType {
    constructor() {
        super("axelar.snapshot.exported.v1beta1.Participant", [
            { no: 1, name: "address", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.casttype": "github.com/cosmos/cosmos-sdk/types.ValAddress" } },
            { no: 2, name: "weight", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Uint" } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.address = new Uint8Array(0);
        message.weight = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes address */ 1:
                    message.address = reader.bytes();
                    break;
                case /* bytes weight */ 2:
                    message.weight = reader.bytes();
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
        /* bytes address = 1; */
        if (message.address.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.address);
        /* bytes weight = 2; */
        if (message.weight.length)
            writer.tag(2, WireType.LengthDelimited).bytes(message.weight);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.snapshot.exported.v1beta1.Participant
 */
export const Participant = new Participant$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Snapshot$Type extends MessageType {
    constructor() {
        super("axelar.snapshot.exported.v1beta1.Snapshot", [
            { no: 2, name: "timestamp", kind: "message", T: () => Timestamp, options: { "gogoproto.nullable": false, "gogoproto.stdtime": true } },
            { no: 3, name: "height", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 8, name: "participants", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => Participant }, options: { "gogoproto.nullable": false } },
            { no: 9, name: "bonded_weight", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Uint" } }
        ], { "gogoproto.stable_marshaler": true });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.height = "0";
        message.participants = {};
        message.bondedWeight = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.Timestamp timestamp */ 2:
                    message.timestamp = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.timestamp);
                    break;
                case /* int64 height */ 3:
                    message.height = reader.int64().toString();
                    break;
                case /* map<string, axelar.snapshot.exported.v1beta1.Participant> participants */ 8:
                    this.binaryReadMap8(message.participants, reader, options);
                    break;
                case /* bytes bonded_weight */ 9:
                    message.bondedWeight = reader.bytes();
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
    binaryReadMap8(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = Participant.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field axelar.snapshot.exported.v1beta1.Snapshot.participants");
            }
        }
        map[key !== null && key !== void 0 ? key : ""] = val !== null && val !== void 0 ? val : Participant.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* google.protobuf.Timestamp timestamp = 2; */
        if (message.timestamp)
            Timestamp.internalBinaryWrite(message.timestamp, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* int64 height = 3; */
        if (message.height !== "0")
            writer.tag(3, WireType.Varint).int64(message.height);
        /* map<string, axelar.snapshot.exported.v1beta1.Participant> participants = 8; */
        for (let k of globalThis.Object.keys(message.participants)) {
            writer.tag(8, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k);
            writer.tag(2, WireType.LengthDelimited).fork();
            Participant.internalBinaryWrite(message.participants[k], writer, options);
            writer.join().join();
        }
        /* bytes bonded_weight = 9; */
        if (message.bondedWeight.length)
            writer.tag(9, WireType.LengthDelimited).bytes(message.bondedWeight);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.snapshot.exported.v1beta1.Snapshot
 */
export const Snapshot = new Snapshot$Type();
