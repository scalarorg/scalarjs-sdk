// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/bank/v1beta1/genesis.proto" (package "cosmos.bank.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Metadata } from "./bank";
import { Coin } from "../../base/v1beta1/coin";
import { Params } from "./bank";
/**
 * GenesisState defines the bank module's genesis state.
 *
 * @generated from protobuf message cosmos.bank.v1beta1.GenesisState
 */
export interface GenesisState {
    /**
     * params defines all the paramaters of the module.
     *
     * @generated from protobuf field: cosmos.bank.v1beta1.Params params = 1;
     */
    params?: Params;
    /**
     * balances is an array containing the balances of all the accounts.
     *
     * @generated from protobuf field: repeated cosmos.bank.v1beta1.Balance balances = 2;
     */
    balances: Balance[];
    /**
     * supply represents the total supply. If it is left empty, then supply will be calculated based on the provided
     * balances. Otherwise, it will be used to validate that the sum of the balances equals this amount.
     *
     * @generated from protobuf field: repeated cosmos.base.v1beta1.Coin supply = 3;
     */
    supply: Coin[];
    /**
     * denom_metadata defines the metadata of the differents coins.
     *
     * @generated from protobuf field: repeated cosmos.bank.v1beta1.Metadata denom_metadata = 4;
     */
    denomMetadata: Metadata[];
}
/**
 * Balance defines an account address and balance pair used in the bank module's
 * genesis state.
 *
 * @generated from protobuf message cosmos.bank.v1beta1.Balance
 */
export interface Balance {
    /**
     * address is the address of the balance holder.
     *
     * @generated from protobuf field: string address = 1;
     */
    address: string;
    /**
     * coins defines the different coins this balance holds.
     *
     * @generated from protobuf field: repeated cosmos.base.v1beta1.Coin coins = 2;
     */
    coins: Coin[];
}
declare class GenesisState$Type extends MessageType<GenesisState> {
    constructor();
    create(value?: PartialMessage<GenesisState>): GenesisState;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GenesisState): GenesisState;
    internalBinaryWrite(message: GenesisState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.bank.v1beta1.GenesisState
 */
export declare const GenesisState: GenesisState$Type;
declare class Balance$Type extends MessageType<Balance> {
    constructor();
    create(value?: PartialMessage<Balance>): Balance;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Balance): Balance;
    internalBinaryWrite(message: Balance, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.bank.v1beta1.Balance
 */
export declare const Balance: Balance$Type;
export {};
