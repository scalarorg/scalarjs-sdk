// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/slashing/v1beta1/genesis.proto" (package "cosmos.slashing.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { ValidatorSigningInfo } from "./slashing";
import { Params } from "./slashing";
/**
 * GenesisState defines the slashing module's genesis state.
 *
 * @generated from protobuf message cosmos.slashing.v1beta1.GenesisState
 */
export interface GenesisState {
    /**
     * params defines all the paramaters of related to deposit.
     *
     * @generated from protobuf field: cosmos.slashing.v1beta1.Params params = 1;
     */
    params?: Params;
    /**
     * signing_infos represents a map between validator addresses and their
     * signing infos.
     *
     * @generated from protobuf field: repeated cosmos.slashing.v1beta1.SigningInfo signing_infos = 2;
     */
    signingInfos: SigningInfo[];
    /**
     * missed_blocks represents a map between validator addresses and their
     * missed blocks.
     *
     * @generated from protobuf field: repeated cosmos.slashing.v1beta1.ValidatorMissedBlocks missed_blocks = 3;
     */
    missedBlocks: ValidatorMissedBlocks[];
}
/**
 * SigningInfo stores validator signing info of corresponding address.
 *
 * @generated from protobuf message cosmos.slashing.v1beta1.SigningInfo
 */
export interface SigningInfo {
    /**
     * address is the validator address.
     *
     * @generated from protobuf field: string address = 1;
     */
    address: string;
    /**
     * validator_signing_info represents the signing info of this validator.
     *
     * @generated from protobuf field: cosmos.slashing.v1beta1.ValidatorSigningInfo validator_signing_info = 2;
     */
    validatorSigningInfo?: ValidatorSigningInfo;
}
/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 *
 * @generated from protobuf message cosmos.slashing.v1beta1.ValidatorMissedBlocks
 */
export interface ValidatorMissedBlocks {
    /**
     * address is the validator address.
     *
     * @generated from protobuf field: string address = 1;
     */
    address: string;
    /**
     * missed_blocks is an array of missed blocks by the validator.
     *
     * @generated from protobuf field: repeated cosmos.slashing.v1beta1.MissedBlock missed_blocks = 2;
     */
    missedBlocks: MissedBlock[];
}
/**
 * MissedBlock contains height and missed status as boolean.
 *
 * @generated from protobuf message cosmos.slashing.v1beta1.MissedBlock
 */
export interface MissedBlock {
    /**
     * index is the height at which the block was missed.
     *
     * @generated from protobuf field: int64 index = 1;
     */
    index: string;
    /**
     * missed is the missed status.
     *
     * @generated from protobuf field: bool missed = 2;
     */
    missed: boolean;
}
declare class GenesisState$Type extends MessageType<GenesisState> {
    constructor();
    create(value?: PartialMessage<GenesisState>): GenesisState;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GenesisState): GenesisState;
    internalBinaryWrite(message: GenesisState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.slashing.v1beta1.GenesisState
 */
export declare const GenesisState: GenesisState$Type;
declare class SigningInfo$Type extends MessageType<SigningInfo> {
    constructor();
    create(value?: PartialMessage<SigningInfo>): SigningInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SigningInfo): SigningInfo;
    internalBinaryWrite(message: SigningInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.slashing.v1beta1.SigningInfo
 */
export declare const SigningInfo: SigningInfo$Type;
declare class ValidatorMissedBlocks$Type extends MessageType<ValidatorMissedBlocks> {
    constructor();
    create(value?: PartialMessage<ValidatorMissedBlocks>): ValidatorMissedBlocks;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ValidatorMissedBlocks): ValidatorMissedBlocks;
    internalBinaryWrite(message: ValidatorMissedBlocks, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.slashing.v1beta1.ValidatorMissedBlocks
 */
export declare const ValidatorMissedBlocks: ValidatorMissedBlocks$Type;
declare class MissedBlock$Type extends MessageType<MissedBlock> {
    constructor();
    create(value?: PartialMessage<MissedBlock>): MissedBlock;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MissedBlock): MissedBlock;
    internalBinaryWrite(message: MissedBlock, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.slashing.v1beta1.MissedBlock
 */
export declare const MissedBlock: MissedBlock$Type;
export {};
