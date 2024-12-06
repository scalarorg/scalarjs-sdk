// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/reward/v1beta1/params.proto" (package "axelar.reward.v1beta1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class Params$Type extends MessageType {
    constructor() {
        super("axelar.reward.v1beta1.Params", [
            { no: 1, name: "external_chain_voting_inflation_rate", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec" } },
            { no: 2, name: "key_mgmt_relative_inflation_rate", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec" } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.externalChainVotingInflationRate = new Uint8Array(0);
        message.keyMgmtRelativeInflationRate = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes external_chain_voting_inflation_rate */ 1:
                    message.externalChainVotingInflationRate = reader.bytes();
                    break;
                case /* bytes key_mgmt_relative_inflation_rate */ 2:
                    message.keyMgmtRelativeInflationRate = reader.bytes();
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
        /* bytes external_chain_voting_inflation_rate = 1; */
        if (message.externalChainVotingInflationRate.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.externalChainVotingInflationRate);
        /* bytes key_mgmt_relative_inflation_rate = 2; */
        if (message.keyMgmtRelativeInflationRate.length)
            writer.tag(2, WireType.LengthDelimited).bytes(message.keyMgmtRelativeInflationRate);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message axelar.reward.v1beta1.Params
 */
export const Params = new Params$Type();