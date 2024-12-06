// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/permission/v1beta1/genesis.proto" (package "axelar.permission.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { GovAccount } from "./types";
import { LegacyAminoPubKey } from "../../../cosmos/crypto/multisig/keys";
import { Params } from "./params";
/**
 * GenesisState represents the genesis state
 *
 * @generated from protobuf message axelar.permission.v1beta1.GenesisState
 */
export interface GenesisState {
    /**
     * @generated from protobuf field: axelar.permission.v1beta1.Params params = 1;
     */
    params?: Params;
    /**
     * @generated from protobuf field: cosmos.crypto.multisig.LegacyAminoPubKey governance_key = 2;
     */
    governanceKey?: LegacyAminoPubKey;
    /**
     * @generated from protobuf field: repeated axelar.permission.v1beta1.GovAccount gov_accounts = 3;
     */
    govAccounts: GovAccount[];
}
declare class GenesisState$Type extends MessageType<GenesisState> {
    constructor();
    create(value?: PartialMessage<GenesisState>): GenesisState;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GenesisState): GenesisState;
    internalBinaryWrite(message: GenesisState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.permission.v1beta1.GenesisState
 */
export declare const GenesisState: GenesisState$Type;
export {};