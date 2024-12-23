// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "scalar/protocol/v1beta1/genesis.proto" (package "scalar.protocol.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Protocol } from "./types";
/**
 * @generated from protobuf message scalar.protocol.v1beta1.GenesisState
 */
export interface GenesisState {
    /**
     * @generated from protobuf field: repeated scalar.protocol.v1beta1.Protocol protocols = 1;
     */
    protocols: Protocol[];
}
declare class GenesisState$Type extends MessageType<GenesisState> {
    constructor();
    create(value?: PartialMessage<GenesisState>): GenesisState;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GenesisState): GenesisState;
    internalBinaryWrite(message: GenesisState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.protocol.v1beta1.GenesisState
 */
export declare const GenesisState: GenesisState$Type;
export {};
