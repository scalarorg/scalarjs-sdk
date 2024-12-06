// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "ibc/applications/transfer/v1/genesis.proto" (package "ibc.applications.transfer.v1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Params } from "./transfer";
import { DenomTrace } from "./transfer";
// @generated message type with reflection information, may provide speed optimized methods
class GenesisState$Type extends MessageType {
    constructor() {
        super("ibc.applications.transfer.v1.GenesisState", [
            { no: 1, name: "port_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"port_id\"" } },
            { no: 2, name: "denom_traces", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => DenomTrace, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"denom_traces\"", "gogoproto.castrepeated": "Traces" } },
            { no: 3, name: "params", kind: "message", T: () => Params, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.portId = "";
        message.denomTraces = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string port_id */ 1:
                    message.portId = reader.string();
                    break;
                case /* repeated ibc.applications.transfer.v1.DenomTrace denom_traces */ 2:
                    message.denomTraces.push(DenomTrace.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* ibc.applications.transfer.v1.Params params */ 3:
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
        /* string port_id = 1; */
        if (message.portId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.portId);
        /* repeated ibc.applications.transfer.v1.DenomTrace denom_traces = 2; */
        for (let i = 0; i < message.denomTraces.length; i++)
            DenomTrace.internalBinaryWrite(message.denomTraces[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* ibc.applications.transfer.v1.Params params = 3; */
        if (message.params)
            Params.internalBinaryWrite(message.params, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.applications.transfer.v1.GenesisState
 */
export const GenesisState = new GenesisState$Type();
