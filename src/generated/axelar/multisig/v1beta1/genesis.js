// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/multisig/v1beta1/genesis.proto" (package "axelar.multisig.v1beta1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { KeyEpoch } from "./types";
import { Key } from "./types";
import { SigningSession } from "./types";
import { KeygenSession } from "./types";
import { Params } from "./params";
// @generated message type with reflection information, may provide speed optimized methods
class GenesisState$Type extends MessageType {
    constructor() {
        super("axelar.multisig.v1beta1.GenesisState", [
            { no: 1, name: "params", kind: "message", T: () => Params, options: { "gogoproto.nullable": false } },
            { no: 2, name: "keygen_sessions", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => KeygenSession, options: { "gogoproto.nullable": false } },
            { no: 3, name: "signing_sessions", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SigningSession, options: { "gogoproto.nullable": false } },
            { no: 4, name: "keys", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Key, options: { "gogoproto.nullable": false } },
            { no: 5, name: "key_epochs", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => KeyEpoch, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.keygenSessions = [];
        message.signingSessions = [];
        message.keys = [];
        message.keyEpochs = [];
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
                case /* repeated axelar.multisig.v1beta1.KeygenSession keygen_sessions */ 2:
                    message.keygenSessions.push(KeygenSession.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated axelar.multisig.v1beta1.SigningSession signing_sessions */ 3:
                    message.signingSessions.push(SigningSession.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated axelar.multisig.v1beta1.Key keys */ 4:
                    message.keys.push(Key.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated axelar.multisig.v1beta1.KeyEpoch key_epochs */ 5:
                    message.keyEpochs.push(KeyEpoch.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated axelar.multisig.v1beta1.KeygenSession keygen_sessions = 2; */
        for (let i = 0; i < message.keygenSessions.length; i++)
            KeygenSession.internalBinaryWrite(message.keygenSessions[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* repeated axelar.multisig.v1beta1.SigningSession signing_sessions = 3; */
        for (let i = 0; i < message.signingSessions.length; i++)
            SigningSession.internalBinaryWrite(message.signingSessions[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated axelar.multisig.v1beta1.Key keys = 4; */
        for (let i = 0; i < message.keys.length; i++)
            Key.internalBinaryWrite(message.keys[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* repeated axelar.multisig.v1beta1.KeyEpoch key_epochs = 5; */
        for (let i = 0; i < message.keyEpochs.length; i++)
            KeyEpoch.internalBinaryWrite(message.keyEpochs[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.multisig.v1beta1.GenesisState
 */
export const GenesisState = new GenesisState$Type();