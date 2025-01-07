// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "scalar/covenant/v1beta1/genesis.proto" (package "scalar.covenant.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { CustodianGroup } from "./types";
import { Custodian } from "./types";
import { SigningSession } from "./types";
import { Params } from "./params";
/**
 * @generated from protobuf message scalar.covenant.v1beta1.GenesisState
 */
export interface GenesisState {
    /**
     * @generated from protobuf field: scalar.covenant.v1beta1.Params params = 1;
     */
    params?: Params;
    /**
     * @generated from protobuf field: repeated scalar.covenant.v1beta1.SigningSession signing_sessions = 2;
     */
    signingSessions: SigningSession[];
    /**
     * @generated from protobuf field: repeated scalar.covenant.v1beta1.Custodian custodians = 3;
     */
    custodians: Custodian[];
    /**
     * @generated from protobuf field: repeated scalar.covenant.v1beta1.CustodianGroup groups = 4;
     */
    groups: CustodianGroup[];
}
declare class GenesisState$Type extends MessageType<GenesisState> {
    constructor();
    create(value?: PartialMessage<GenesisState>): GenesisState;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GenesisState): GenesisState;
    internalBinaryWrite(message: GenesisState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.covenant.v1beta1.GenesisState
 */
export declare const GenesisState: GenesisState$Type;
export {};
