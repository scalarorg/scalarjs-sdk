// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/distribution/v1beta1/tx.proto" (package "cosmos.distribution.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Coin } from "../../base/v1beta1/coin";
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.MsgSetWithdrawAddress
 */
export interface MsgSetWithdrawAddress {
    /**
     * @generated from protobuf field: string delegator_address = 1;
     */
    delegatorAddress: string;
    /**
     * @generated from protobuf field: string withdraw_address = 2;
     */
    withdrawAddress: string;
}
/**
 * MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type.
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse
 */
export interface MsgSetWithdrawAddressResponse {
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward
 */
export interface MsgWithdrawDelegatorReward {
    /**
     * @generated from protobuf field: string delegator_address = 1;
     */
    delegatorAddress: string;
    /**
     * @generated from protobuf field: string validator_address = 2;
     */
    validatorAddress: string;
}
/**
 * MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type.
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse
 */
export interface MsgWithdrawDelegatorRewardResponse {
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission
 */
export interface MsgWithdrawValidatorCommission {
    /**
     * @generated from protobuf field: string validator_address = 1;
     */
    validatorAddress: string;
}
/**
 * MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type.
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse
 */
export interface MsgWithdrawValidatorCommissionResponse {
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.MsgFundCommunityPool
 */
export interface MsgFundCommunityPool {
    /**
     * @generated from protobuf field: repeated cosmos.base.v1beta1.Coin amount = 1;
     */
    amount: Coin[];
    /**
     * @generated from protobuf field: string depositor = 2;
     */
    depositor: string;
}
/**
 * MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type.
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse
 */
export interface MsgFundCommunityPoolResponse {
}
declare class MsgSetWithdrawAddress$Type extends MessageType<MsgSetWithdrawAddress> {
    constructor();
    create(value?: PartialMessage<MsgSetWithdrawAddress>): MsgSetWithdrawAddress;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgSetWithdrawAddress): MsgSetWithdrawAddress;
    internalBinaryWrite(message: MsgSetWithdrawAddress, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.MsgSetWithdrawAddress
 */
export declare const MsgSetWithdrawAddress: MsgSetWithdrawAddress$Type;
declare class MsgSetWithdrawAddressResponse$Type extends MessageType<MsgSetWithdrawAddressResponse> {
    constructor();
    create(value?: PartialMessage<MsgSetWithdrawAddressResponse>): MsgSetWithdrawAddressResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponse;
    internalBinaryWrite(message: MsgSetWithdrawAddressResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse
 */
export declare const MsgSetWithdrawAddressResponse: MsgSetWithdrawAddressResponse$Type;
declare class MsgWithdrawDelegatorReward$Type extends MessageType<MsgWithdrawDelegatorReward> {
    constructor();
    create(value?: PartialMessage<MsgWithdrawDelegatorReward>): MsgWithdrawDelegatorReward;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorReward;
    internalBinaryWrite(message: MsgWithdrawDelegatorReward, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward
 */
export declare const MsgWithdrawDelegatorReward: MsgWithdrawDelegatorReward$Type;
declare class MsgWithdrawDelegatorRewardResponse$Type extends MessageType<MsgWithdrawDelegatorRewardResponse> {
    constructor();
    create(value?: PartialMessage<MsgWithdrawDelegatorRewardResponse>): MsgWithdrawDelegatorRewardResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponse;
    internalBinaryWrite(message: MsgWithdrawDelegatorRewardResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse
 */
export declare const MsgWithdrawDelegatorRewardResponse: MsgWithdrawDelegatorRewardResponse$Type;
declare class MsgWithdrawValidatorCommission$Type extends MessageType<MsgWithdrawValidatorCommission> {
    constructor();
    create(value?: PartialMessage<MsgWithdrawValidatorCommission>): MsgWithdrawValidatorCommission;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommission;
    internalBinaryWrite(message: MsgWithdrawValidatorCommission, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission
 */
export declare const MsgWithdrawValidatorCommission: MsgWithdrawValidatorCommission$Type;
declare class MsgWithdrawValidatorCommissionResponse$Type extends MessageType<MsgWithdrawValidatorCommissionResponse> {
    constructor();
    create(value?: PartialMessage<MsgWithdrawValidatorCommissionResponse>): MsgWithdrawValidatorCommissionResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponse;
    internalBinaryWrite(message: MsgWithdrawValidatorCommissionResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse
 */
export declare const MsgWithdrawValidatorCommissionResponse: MsgWithdrawValidatorCommissionResponse$Type;
declare class MsgFundCommunityPool$Type extends MessageType<MsgFundCommunityPool> {
    constructor();
    create(value?: PartialMessage<MsgFundCommunityPool>): MsgFundCommunityPool;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgFundCommunityPool): MsgFundCommunityPool;
    internalBinaryWrite(message: MsgFundCommunityPool, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.MsgFundCommunityPool
 */
export declare const MsgFundCommunityPool: MsgFundCommunityPool$Type;
declare class MsgFundCommunityPoolResponse$Type extends MessageType<MsgFundCommunityPoolResponse> {
    constructor();
    create(value?: PartialMessage<MsgFundCommunityPoolResponse>): MsgFundCommunityPoolResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponse;
    internalBinaryWrite(message: MsgFundCommunityPoolResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse
 */
export declare const MsgFundCommunityPoolResponse: MsgFundCommunityPoolResponse$Type;
/**
 * @generated ServiceType for protobuf service cosmos.distribution.v1beta1.Msg
 */
export declare const Msg: any;
export {};
