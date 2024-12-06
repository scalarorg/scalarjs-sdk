// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/vote/v1beta1/tx.proto" (package "axelar.vote.v1beta1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Any } from "../../../google/protobuf/any";
// @generated message type with reflection information, may provide speed optimized methods
class VoteRequest$Type extends MessageType {
    constructor() {
        super("axelar.vote.v1beta1.VoteRequest", [
            { no: 1, name: "sender", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.casttype": "github.com/cosmos/cosmos-sdk/types.AccAddress" } },
            { no: 4, name: "poll_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/axelarnetwork/axelar-core/x/vote/exported.PollID", "gogoproto.customname": "PollID" } },
            { no: 5, name: "vote", kind: "message", T: () => Any, options: { "cosmos_proto.accepts_interface": "github.com/cosmos/codec/ProtoMarshaler" } }
        ], { "axelar.permission.exported.v1beta1.permission_role": "ROLE_UNRESTRICTED" });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.sender = new Uint8Array(0);
        message.pollId = "0";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes sender */ 1:
                    message.sender = reader.bytes();
                    break;
                case /* uint64 poll_id */ 4:
                    message.pollId = reader.uint64().toString();
                    break;
                case /* google.protobuf.Any vote */ 5:
                    message.vote = Any.internalBinaryRead(reader, reader.uint32(), options, message.vote);
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
        /* bytes sender = 1; */
        if (message.sender.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.sender);
        /* uint64 poll_id = 4; */
        if (message.pollId !== "0")
            writer.tag(4, WireType.Varint).uint64(message.pollId);
        /* google.protobuf.Any vote = 5; */
        if (message.vote)
            Any.internalBinaryWrite(message.vote, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.vote.v1beta1.VoteRequest
 */
export const VoteRequest = new VoteRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VoteResponse$Type extends MessageType {
    constructor() {
        super("axelar.vote.v1beta1.VoteResponse", [
            { no: 1, name: "log", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.log = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string log */ 1:
                    message.log = reader.string();
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
        /* string log = 1; */
        if (message.log !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.log);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.vote.v1beta1.VoteResponse
 */
export const VoteResponse = new VoteResponse$Type();
