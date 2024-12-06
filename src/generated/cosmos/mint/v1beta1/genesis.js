// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/mint/v1beta1/genesis.proto" (package "cosmos.mint.v1beta1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Params } from "./mint";
import { Minter } from "./mint";
// @generated message type with reflection information, may provide speed optimized methods
class GenesisState$Type extends MessageType {
    constructor() {
        super("cosmos.mint.v1beta1.GenesisState", [
            { no: 1, name: "minter", kind: "message", T: () => Minter, options: { "gogoproto.nullable": false } },
            { no: 2, name: "params", kind: "message", T: () => Params, options: { "gogoproto.nullable": false } }
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
                case /* cosmos.mint.v1beta1.Minter minter */ 1:
                    message.minter = Minter.internalBinaryRead(reader, reader.uint32(), options, message.minter);
                    break;
                case /* cosmos.mint.v1beta1.Params params */ 2:
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
        /* cosmos.mint.v1beta1.Minter minter = 1; */
        if (message.minter)
            Minter.internalBinaryWrite(message.minter, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* cosmos.mint.v1beta1.Params params = 2; */
        if (message.params)
            Params.internalBinaryWrite(message.params, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.mint.v1beta1.GenesisState
 */
export const GenesisState = new GenesisState$Type();
