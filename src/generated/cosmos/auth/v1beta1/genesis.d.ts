// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/auth/v1beta1/genesis.proto" (package "cosmos.auth.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Any } from "../../../google/protobuf/any";
import { Params } from "./auth";
/**
 * GenesisState defines the auth module's genesis state.
 *
 * @generated from protobuf message cosmos.auth.v1beta1.GenesisState
 */
export interface GenesisState {
    /**
     * params defines all the paramaters of the module.
     *
     * @generated from protobuf field: cosmos.auth.v1beta1.Params params = 1;
     */
    params?: Params;
    /**
     * accounts are the accounts present at genesis.
     *
     * @generated from protobuf field: repeated google.protobuf.Any accounts = 2;
     */
    accounts: Any[];
}
declare class GenesisState$Type extends MessageType<GenesisState> {
    constructor();
    create(value?: PartialMessage<GenesisState>): GenesisState;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GenesisState): GenesisState;
    internalBinaryWrite(message: GenesisState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.auth.v1beta1.GenesisState
 */
export declare const GenesisState: GenesisState$Type;
export {};