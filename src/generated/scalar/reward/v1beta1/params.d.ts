// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "scalar/reward/v1beta1/params.proto" (package "scalar.reward.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * Params represent the genesis parameters for the module
 *
 * @generated from protobuf message scalar.reward.v1beta1.Params
 */
export interface Params {
    /**
     * @generated from protobuf field: bytes external_chain_voting_inflation_rate = 1;
     */
    externalChainVotingInflationRate: Uint8Array;
    /**
     * @generated from protobuf field: bytes key_mgmt_relative_inflation_rate = 2;
     */
    keyMgmtRelativeInflationRate: Uint8Array;
}
declare class Params$Type extends MessageType<Params> {
    constructor();
    create(value?: PartialMessage<Params>): Params;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Params): Params;
    internalBinaryWrite(message: Params, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.reward.v1beta1.Params
 */
export declare const Params: Params$Type;
export {};
