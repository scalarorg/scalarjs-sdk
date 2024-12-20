// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/base/v1beta1/coin.proto" (package "cosmos.base.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * Coin defines a token with a denomination and an amount.
 *
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 *
 * @generated from protobuf message cosmos.base.v1beta1.Coin
 */
export interface Coin {
    /**
     * @generated from protobuf field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from protobuf field: string amount = 2;
     */
    amount: string;
}
/**
 * DecCoin defines a token with a denomination and a decimal amount.
 *
 * NOTE: The amount field is an Dec which implements the custom method
 * signatures required by gogoproto.
 *
 * @generated from protobuf message cosmos.base.v1beta1.DecCoin
 */
export interface DecCoin {
    /**
     * @generated from protobuf field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from protobuf field: string amount = 2;
     */
    amount: string;
}
/**
 * IntProto defines a Protobuf wrapper around an Int object.
 *
 * @generated from protobuf message cosmos.base.v1beta1.IntProto
 */
export interface IntProto {
    /**
     * @generated from protobuf field: string int = 1;
     */
    int: string;
}
/**
 * DecProto defines a Protobuf wrapper around a Dec object.
 *
 * @generated from protobuf message cosmos.base.v1beta1.DecProto
 */
export interface DecProto {
    /**
     * @generated from protobuf field: string dec = 1;
     */
    dec: string;
}
declare class Coin$Type extends MessageType<Coin> {
    constructor();
    create(value?: PartialMessage<Coin>): Coin;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Coin): Coin;
    internalBinaryWrite(message: Coin, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.v1beta1.Coin
 */
export declare const Coin: Coin$Type;
declare class DecCoin$Type extends MessageType<DecCoin> {
    constructor();
    create(value?: PartialMessage<DecCoin>): DecCoin;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DecCoin): DecCoin;
    internalBinaryWrite(message: DecCoin, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.v1beta1.DecCoin
 */
export declare const DecCoin: DecCoin$Type;
declare class IntProto$Type extends MessageType<IntProto> {
    constructor();
    create(value?: PartialMessage<IntProto>): IntProto;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IntProto): IntProto;
    internalBinaryWrite(message: IntProto, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.v1beta1.IntProto
 */
export declare const IntProto: IntProto$Type;
declare class DecProto$Type extends MessageType<DecProto> {
    constructor();
    create(value?: PartialMessage<DecProto>): DecProto;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DecProto): DecProto;
    internalBinaryWrite(message: DecProto, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.v1beta1.DecProto
 */
export declare const DecProto: DecProto$Type;
export {};
