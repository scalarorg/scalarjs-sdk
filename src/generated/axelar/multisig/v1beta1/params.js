// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/multisig/v1beta1/params.proto" (package "axelar.multisig.v1beta1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Threshold } from "../../utils/v1beta1/threshold";
// @generated message type with reflection information, may provide speed optimized methods
class Params$Type extends MessageType {
    constructor() {
        super("axelar.multisig.v1beta1.Params", [
            { no: 1, name: "keygen_threshold", kind: "message", T: () => Threshold, options: { "gogoproto.nullable": false } },
            { no: 2, name: "signing_threshold", kind: "message", T: () => Threshold, options: { "gogoproto.nullable": false } },
            { no: 3, name: "keygen_timeout", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 4, name: "keygen_grace_period", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 5, name: "signing_timeout", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 6, name: "signing_grace_period", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 7, name: "active_epoch_count", kind: "scalar", T: 4 /*ScalarType.UINT64*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.keygenTimeout = "0";
        message.keygenGracePeriod = "0";
        message.signingTimeout = "0";
        message.signingGracePeriod = "0";
        message.activeEpochCount = "0";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* axelar.utils.v1beta1.Threshold keygen_threshold */ 1:
                    message.keygenThreshold = Threshold.internalBinaryRead(reader, reader.uint32(), options, message.keygenThreshold);
                    break;
                case /* axelar.utils.v1beta1.Threshold signing_threshold */ 2:
                    message.signingThreshold = Threshold.internalBinaryRead(reader, reader.uint32(), options, message.signingThreshold);
                    break;
                case /* int64 keygen_timeout */ 3:
                    message.keygenTimeout = reader.int64().toString();
                    break;
                case /* int64 keygen_grace_period */ 4:
                    message.keygenGracePeriod = reader.int64().toString();
                    break;
                case /* int64 signing_timeout */ 5:
                    message.signingTimeout = reader.int64().toString();
                    break;
                case /* int64 signing_grace_period */ 6:
                    message.signingGracePeriod = reader.int64().toString();
                    break;
                case /* uint64 active_epoch_count */ 7:
                    message.activeEpochCount = reader.uint64().toString();
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
        /* axelar.utils.v1beta1.Threshold keygen_threshold = 1; */
        if (message.keygenThreshold)
            Threshold.internalBinaryWrite(message.keygenThreshold, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* axelar.utils.v1beta1.Threshold signing_threshold = 2; */
        if (message.signingThreshold)
            Threshold.internalBinaryWrite(message.signingThreshold, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* int64 keygen_timeout = 3; */
        if (message.keygenTimeout !== "0")
            writer.tag(3, WireType.Varint).int64(message.keygenTimeout);
        /* int64 keygen_grace_period = 4; */
        if (message.keygenGracePeriod !== "0")
            writer.tag(4, WireType.Varint).int64(message.keygenGracePeriod);
        /* int64 signing_timeout = 5; */
        if (message.signingTimeout !== "0")
            writer.tag(5, WireType.Varint).int64(message.signingTimeout);
        /* int64 signing_grace_period = 6; */
        if (message.signingGracePeriod !== "0")
            writer.tag(6, WireType.Varint).int64(message.signingGracePeriod);
        /* uint64 active_epoch_count = 7; */
        if (message.activeEpochCount !== "0")
            writer.tag(7, WireType.Varint).uint64(message.activeEpochCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.multisig.v1beta1.Params
 */
export const Params = new Params$Type();
