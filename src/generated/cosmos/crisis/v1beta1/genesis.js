// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/crisis/v1beta1/genesis.proto" (package "cosmos.crisis.v1beta1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Coin } from "../../base/v1beta1/coin";
// @generated message type with reflection information, may provide speed optimized methods
class GenesisState$Type extends MessageType {
    constructor() {
        super("cosmos.crisis.v1beta1.GenesisState", [
            { no: 3, name: "constant_fee", kind: "message", T: () => Coin, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"constant_fee\"" } }
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
                case /* cosmos.base.v1beta1.Coin constant_fee */ 3:
                    message.constantFee = Coin.internalBinaryRead(reader, reader.uint32(), options, message.constantFee);
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
        /* cosmos.base.v1beta1.Coin constant_fee = 3; */
        if (message.constantFee)
            Coin.internalBinaryWrite(message.constantFee, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.crisis.v1beta1.GenesisState
 */
export const GenesisState = new GenesisState$Type();
