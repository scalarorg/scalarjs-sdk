// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "ibc/core/client/v1/tx.proto" (package "ibc.core.client.v1", syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "ibc/core/client/v1/tx.proto" (package "ibc.core.client.v1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Any } from "../../../../google/protobuf/any";
// @generated message type with reflection information, may provide speed optimized methods
class MsgCreateClient$Type extends MessageType {
    constructor() {
        super("ibc.core.client.v1.MsgCreateClient", [
            { no: 1, name: "client_state", kind: "message", T: () => Any, options: { "gogoproto.moretags": "yaml:\"client_state\"" } },
            { no: 2, name: "consensus_state", kind: "message", T: () => Any, options: { "gogoproto.moretags": "yaml:\"consensus_state\"" } },
            { no: 3, name: "signer", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ], { "gogoproto.goproto_getters": false, "gogoproto.equal": false });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.signer = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.Any client_state */ 1:
                    message.clientState = Any.internalBinaryRead(reader, reader.uint32(), options, message.clientState);
                    break;
                case /* google.protobuf.Any consensus_state */ 2:
                    message.consensusState = Any.internalBinaryRead(reader, reader.uint32(), options, message.consensusState);
                    break;
                case /* string signer */ 3:
                    message.signer = reader.string();
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
        /* google.protobuf.Any client_state = 1; */
        if (message.clientState)
            Any.internalBinaryWrite(message.clientState, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Any consensus_state = 2; */
        if (message.consensusState)
            Any.internalBinaryWrite(message.consensusState, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* string signer = 3; */
        if (message.signer !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.signer);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.core.client.v1.MsgCreateClient
 */
export const MsgCreateClient = new MsgCreateClient$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MsgCreateClientResponse$Type extends MessageType {
    constructor() {
        super("ibc.core.client.v1.MsgCreateClientResponse", []);
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
 * @generated MessageType for protobuf message ibc.core.client.v1.MsgCreateClientResponse
 */
export const MsgCreateClientResponse = new MsgCreateClientResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MsgUpdateClient$Type extends MessageType {
    constructor() {
        super("ibc.core.client.v1.MsgUpdateClient", [
            { no: 1, name: "client_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"client_id\"" } },
            { no: 2, name: "header", kind: "message", T: () => Any },
            { no: 3, name: "signer", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ], { "gogoproto.goproto_getters": false, "gogoproto.equal": false });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.clientId = "";
        message.signer = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string client_id */ 1:
                    message.clientId = reader.string();
                    break;
                case /* google.protobuf.Any header */ 2:
                    message.header = Any.internalBinaryRead(reader, reader.uint32(), options, message.header);
                    break;
                case /* string signer */ 3:
                    message.signer = reader.string();
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
        /* string client_id = 1; */
        if (message.clientId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.clientId);
        /* google.protobuf.Any header = 2; */
        if (message.header)
            Any.internalBinaryWrite(message.header, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* string signer = 3; */
        if (message.signer !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.signer);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.core.client.v1.MsgUpdateClient
 */
export const MsgUpdateClient = new MsgUpdateClient$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MsgUpdateClientResponse$Type extends MessageType {
    constructor() {
        super("ibc.core.client.v1.MsgUpdateClientResponse", []);
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
 * @generated MessageType for protobuf message ibc.core.client.v1.MsgUpdateClientResponse
 */
export const MsgUpdateClientResponse = new MsgUpdateClientResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MsgUpgradeClient$Type extends MessageType {
    constructor() {
        super("ibc.core.client.v1.MsgUpgradeClient", [
            { no: 1, name: "client_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"client_id\"" } },
            { no: 2, name: "client_state", kind: "message", T: () => Any, options: { "gogoproto.moretags": "yaml:\"client_state\"" } },
            { no: 3, name: "consensus_state", kind: "message", T: () => Any, options: { "gogoproto.moretags": "yaml:\"consensus_state\"" } },
            { no: 4, name: "proof_upgrade_client", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.moretags": "yaml:\"proof_upgrade_client\"" } },
            { no: 5, name: "proof_upgrade_consensus_state", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.moretags": "yaml:\"proof_upgrade_consensus_state\"" } },
            { no: 6, name: "signer", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ], { "gogoproto.goproto_getters": false, "gogoproto.equal": false });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.clientId = "";
        message.proofUpgradeClient = new Uint8Array(0);
        message.proofUpgradeConsensusState = new Uint8Array(0);
        message.signer = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string client_id */ 1:
                    message.clientId = reader.string();
                    break;
                case /* google.protobuf.Any client_state */ 2:
                    message.clientState = Any.internalBinaryRead(reader, reader.uint32(), options, message.clientState);
                    break;
                case /* google.protobuf.Any consensus_state */ 3:
                    message.consensusState = Any.internalBinaryRead(reader, reader.uint32(), options, message.consensusState);
                    break;
                case /* bytes proof_upgrade_client */ 4:
                    message.proofUpgradeClient = reader.bytes();
                    break;
                case /* bytes proof_upgrade_consensus_state */ 5:
                    message.proofUpgradeConsensusState = reader.bytes();
                    break;
                case /* string signer */ 6:
                    message.signer = reader.string();
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
        /* string client_id = 1; */
        if (message.clientId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.clientId);
        /* google.protobuf.Any client_state = 2; */
        if (message.clientState)
            Any.internalBinaryWrite(message.clientState, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Any consensus_state = 3; */
        if (message.consensusState)
            Any.internalBinaryWrite(message.consensusState, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* bytes proof_upgrade_client = 4; */
        if (message.proofUpgradeClient.length)
            writer.tag(4, WireType.LengthDelimited).bytes(message.proofUpgradeClient);
        /* bytes proof_upgrade_consensus_state = 5; */
        if (message.proofUpgradeConsensusState.length)
            writer.tag(5, WireType.LengthDelimited).bytes(message.proofUpgradeConsensusState);
        /* string signer = 6; */
        if (message.signer !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.signer);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.core.client.v1.MsgUpgradeClient
 */
export const MsgUpgradeClient = new MsgUpgradeClient$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MsgUpgradeClientResponse$Type extends MessageType {
    constructor() {
        super("ibc.core.client.v1.MsgUpgradeClientResponse", []);
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
 * @generated MessageType for protobuf message ibc.core.client.v1.MsgUpgradeClientResponse
 */
export const MsgUpgradeClientResponse = new MsgUpgradeClientResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MsgSubmitMisbehaviour$Type extends MessageType {
    constructor() {
        super("ibc.core.client.v1.MsgSubmitMisbehaviour", [
            { no: 1, name: "client_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"client_id\"" } },
            { no: 2, name: "misbehaviour", kind: "message", T: () => Any },
            { no: 3, name: "signer", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ], { "gogoproto.goproto_getters": false, "gogoproto.equal": false });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.clientId = "";
        message.signer = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string client_id */ 1:
                    message.clientId = reader.string();
                    break;
                case /* google.protobuf.Any misbehaviour */ 2:
                    message.misbehaviour = Any.internalBinaryRead(reader, reader.uint32(), options, message.misbehaviour);
                    break;
                case /* string signer */ 3:
                    message.signer = reader.string();
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
        /* string client_id = 1; */
        if (message.clientId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.clientId);
        /* google.protobuf.Any misbehaviour = 2; */
        if (message.misbehaviour)
            Any.internalBinaryWrite(message.misbehaviour, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* string signer = 3; */
        if (message.signer !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.signer);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.core.client.v1.MsgSubmitMisbehaviour
 */
export const MsgSubmitMisbehaviour = new MsgSubmitMisbehaviour$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MsgSubmitMisbehaviourResponse$Type extends MessageType {
    constructor() {
        super("ibc.core.client.v1.MsgSubmitMisbehaviourResponse", []);
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
 * @generated MessageType for protobuf message ibc.core.client.v1.MsgSubmitMisbehaviourResponse
 */
export const MsgSubmitMisbehaviourResponse = new MsgSubmitMisbehaviourResponse$Type();
/**
 * @generated ServiceType for protobuf service ibc.core.client.v1.Msg
 */
export const Msg = new ServiceType("ibc.core.client.v1.Msg", [
    { name: "CreateClient", options: {}, I: MsgCreateClient, O: MsgCreateClientResponse },
    { name: "UpdateClient", options: {}, I: MsgUpdateClient, O: MsgUpdateClientResponse },
    { name: "UpgradeClient", options: {}, I: MsgUpgradeClient, O: MsgUpgradeClientResponse },
    { name: "SubmitMisbehaviour", options: {}, I: MsgSubmitMisbehaviour, O: MsgSubmitMisbehaviourResponse }
]);