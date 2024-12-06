// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/bank/v1beta1/bank.proto" (package "cosmos.bank.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Coin } from "../../base/v1beta1/coin";
/**
 * Params defines the parameters for the bank module.
 *
 * @generated from protobuf message cosmos.bank.v1beta1.Params
 */
export interface Params {
    /**
     * @generated from protobuf field: repeated cosmos.bank.v1beta1.SendEnabled send_enabled = 1;
     */
    sendEnabled: SendEnabled[];
    /**
     * @generated from protobuf field: bool default_send_enabled = 2;
     */
    defaultSendEnabled: boolean;
}
/**
 * SendEnabled maps coin denom to a send_enabled status (whether a denom is
 * sendable).
 *
 * @generated from protobuf message cosmos.bank.v1beta1.SendEnabled
 */
export interface SendEnabled {
    /**
     * @generated from protobuf field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from protobuf field: bool enabled = 2;
     */
    enabled: boolean;
}
/**
 * Input models transaction input.
 *
 * @generated from protobuf message cosmos.bank.v1beta1.Input
 */
export interface Input {
    /**
     * @generated from protobuf field: string address = 1;
     */
    address: string;
    /**
     * @generated from protobuf field: repeated cosmos.base.v1beta1.Coin coins = 2;
     */
    coins: Coin[];
}
/**
 * Output models transaction outputs.
 *
 * @generated from protobuf message cosmos.bank.v1beta1.Output
 */
export interface Output {
    /**
     * @generated from protobuf field: string address = 1;
     */
    address: string;
    /**
     * @generated from protobuf field: repeated cosmos.base.v1beta1.Coin coins = 2;
     */
    coins: Coin[];
}
/**
 * Supply represents a struct that passively keeps track of the total supply
 * amounts in the network.
 * This message is deprecated now that supply is indexed by denom.
 *
 * @deprecated
 * @generated from protobuf message cosmos.bank.v1beta1.Supply
 */
export interface Supply {
    /**
     * @generated from protobuf field: repeated cosmos.base.v1beta1.Coin total = 1;
     */
    total: Coin[];
}
/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 *
 * @generated from protobuf message cosmos.bank.v1beta1.DenomUnit
 */
export interface DenomUnit {
    /**
     * denom represents the string name of the given denom unit (e.g uatom).
     *
     * @generated from protobuf field: string denom = 1;
     */
    denom: string;
    /**
     * exponent represents power of 10 exponent that one must
     * raise the base_denom to in order to equal the given DenomUnit's denom
     * 1 denom = 1^exponent base_denom
     * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
     * exponent = 6, thus: 1 atom = 10^6 uatom).
     *
     * @generated from protobuf field: uint32 exponent = 2;
     */
    exponent: number;
    /**
     * aliases is a list of string aliases for the given denom
     *
     * @generated from protobuf field: repeated string aliases = 3;
     */
    aliases: string[];
}
/**
 * Metadata represents a struct that describes
 * a basic token.
 *
 * @generated from protobuf message cosmos.bank.v1beta1.Metadata
 */
export interface Metadata {
    /**
     * @generated from protobuf field: string description = 1;
     */
    description: string;
    /**
     * denom_units represents the list of DenomUnit's for a given coin
     *
     * @generated from protobuf field: repeated cosmos.bank.v1beta1.DenomUnit denom_units = 2;
     */
    denomUnits: DenomUnit[];
    /**
     * base represents the base denom (should be the DenomUnit with exponent = 0).
     *
     * @generated from protobuf field: string base = 3;
     */
    base: string;
    /**
     * display indicates the suggested denom that should be
     * displayed in clients.
     *
     * @generated from protobuf field: string display = 4;
     */
    display: string;
    /**
     * name defines the name of the token (eg: Cosmos Atom)
     *
     * Since: cosmos-sdk 0.43
     *
     * @generated from protobuf field: string name = 5;
     */
    name: string;
    /**
     * symbol is the token symbol usually shown on exchanges (eg: ATOM). This can
     * be the same as the display.
     *
     * Since: cosmos-sdk 0.43
     *
     * @generated from protobuf field: string symbol = 6;
     */
    symbol: string;
}
declare class Params$Type extends MessageType<Params> {
    constructor();
    create(value?: PartialMessage<Params>): Params;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Params): Params;
    internalBinaryWrite(message: Params, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.bank.v1beta1.Params
 */
export declare const Params: Params$Type;
declare class SendEnabled$Type extends MessageType<SendEnabled> {
    constructor();
    create(value?: PartialMessage<SendEnabled>): SendEnabled;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SendEnabled): SendEnabled;
    internalBinaryWrite(message: SendEnabled, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.bank.v1beta1.SendEnabled
 */
export declare const SendEnabled: SendEnabled$Type;
declare class Input$Type extends MessageType<Input> {
    constructor();
    create(value?: PartialMessage<Input>): Input;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Input): Input;
    internalBinaryWrite(message: Input, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.bank.v1beta1.Input
 */
export declare const Input: Input$Type;
declare class Output$Type extends MessageType<Output> {
    constructor();
    create(value?: PartialMessage<Output>): Output;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Output): Output;
    internalBinaryWrite(message: Output, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.bank.v1beta1.Output
 */
export declare const Output: Output$Type;
declare class Supply$Type extends MessageType<Supply> {
    constructor();
    create(value?: PartialMessage<Supply>): Supply;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Supply): Supply;
    internalBinaryWrite(message: Supply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @deprecated
 * @generated MessageType for protobuf message cosmos.bank.v1beta1.Supply
 */
export declare const Supply: Supply$Type;
declare class DenomUnit$Type extends MessageType<DenomUnit> {
    constructor();
    create(value?: PartialMessage<DenomUnit>): DenomUnit;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DenomUnit): DenomUnit;
    internalBinaryWrite(message: DenomUnit, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.bank.v1beta1.DenomUnit
 */
export declare const DenomUnit: DenomUnit$Type;
declare class Metadata$Type extends MessageType<Metadata> {
    constructor();
    create(value?: PartialMessage<Metadata>): Metadata;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Metadata): Metadata;
    internalBinaryWrite(message: Metadata, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.bank.v1beta1.Metadata
 */
export declare const Metadata: Metadata$Type;
export {};
