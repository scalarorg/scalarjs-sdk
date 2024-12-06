// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/slashing/v1beta1/slashing.proto" (package "cosmos.slashing.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 *
 * @generated from protobuf message cosmos.slashing.v1beta1.ValidatorSigningInfo
 */
export interface ValidatorSigningInfo {
    /**
     * @generated from protobuf field: string address = 1;
     */
    address: string;
    /**
     * Height at which validator was first a candidate OR was unjailed
     *
     * @generated from protobuf field: int64 start_height = 2;
     */
    startHeight: string;
    /**
     * Index which is incremented each time the validator was a bonded
     * in a block and may have signed a precommit or not. This in conjunction with the
     * `SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`.
     *
     * @generated from protobuf field: int64 index_offset = 3;
     */
    indexOffset: string;
    /**
     * Timestamp until which the validator is jailed due to liveness downtime.
     *
     * @generated from protobuf field: google.protobuf.Timestamp jailed_until = 4;
     */
    jailedUntil?: Timestamp;
    /**
     * Whether or not a validator has been tombstoned (killed out of validator set). It is set
     * once the validator commits an equivocation or for any other configured misbehiavor.
     *
     * @generated from protobuf field: bool tombstoned = 5;
     */
    tombstoned: boolean;
    /**
     * A counter kept to avoid unnecessary array reads.
     * Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.
     *
     * @generated from protobuf field: int64 missed_blocks_counter = 6;
     */
    missedBlocksCounter: string;
}
/**
 * Params represents the parameters used for by the slashing module.
 *
 * @generated from protobuf message cosmos.slashing.v1beta1.Params
 */
export interface Params {
    /**
     * @generated from protobuf field: int64 signed_blocks_window = 1;
     */
    signedBlocksWindow: string;
    /**
     * @generated from protobuf field: bytes min_signed_per_window = 2;
     */
    minSignedPerWindow: Uint8Array;
    /**
     * @generated from protobuf field: google.protobuf.Duration downtime_jail_duration = 3;
     */
    downtimeJailDuration?: Duration;
    /**
     * @generated from protobuf field: bytes slash_fraction_double_sign = 4;
     */
    slashFractionDoubleSign: Uint8Array;
    /**
     * @generated from protobuf field: bytes slash_fraction_downtime = 5;
     */
    slashFractionDowntime: Uint8Array;
}
declare class ValidatorSigningInfo$Type extends MessageType<ValidatorSigningInfo> {
    constructor();
    create(value?: PartialMessage<ValidatorSigningInfo>): ValidatorSigningInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ValidatorSigningInfo): ValidatorSigningInfo;
    internalBinaryWrite(message: ValidatorSigningInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.slashing.v1beta1.ValidatorSigningInfo
 */
export declare const ValidatorSigningInfo: ValidatorSigningInfo$Type;
declare class Params$Type extends MessageType<Params> {
    constructor();
    create(value?: PartialMessage<Params>): Params;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Params): Params;
    internalBinaryWrite(message: Params, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.slashing.v1beta1.Params
 */
export declare const Params: Params$Type;
export {};
