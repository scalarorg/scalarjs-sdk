// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/distribution/v1beta1/tx.proto" (package "cosmos.distribution.v1beta1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { MsgFundCommunityPoolResponse } from "./tx";
import type { MsgFundCommunityPool } from "./tx";
import type { MsgWithdrawValidatorCommissionResponse } from "./tx";
import type { MsgWithdrawValidatorCommission } from "./tx";
import type { MsgWithdrawDelegatorRewardResponse } from "./tx";
import type { MsgWithdrawDelegatorReward } from "./tx";
import type { MsgSetWithdrawAddressResponse } from "./tx";
import type { MsgSetWithdrawAddress } from "./tx";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Msg defines the distribution Msg service.
 *
 * @generated from protobuf service cosmos.distribution.v1beta1.Msg
 */
export interface IMsgClient {
    /**
     * SetWithdrawAddress defines a method to change the withdraw address
     * for a delegator (or validator self-delegation).
     *
     * @generated from protobuf rpc: SetWithdrawAddress(cosmos.distribution.v1beta1.MsgSetWithdrawAddress) returns (cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse);
     */
    setWithdrawAddress(input: MsgSetWithdrawAddress, options?: RpcOptions): UnaryCall<MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse>;
    /**
     * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
     * from a single validator.
     *
     * @generated from protobuf rpc: WithdrawDelegatorReward(cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward) returns (cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse);
     */
    withdrawDelegatorReward(input: MsgWithdrawDelegatorReward, options?: RpcOptions): UnaryCall<MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse>;
    /**
     * WithdrawValidatorCommission defines a method to withdraw the
     * full commission to the validator address.
     *
     * @generated from protobuf rpc: WithdrawValidatorCommission(cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission) returns (cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse);
     */
    withdrawValidatorCommission(input: MsgWithdrawValidatorCommission, options?: RpcOptions): UnaryCall<MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse>;
    /**
     * FundCommunityPool defines a method to allow an account to directly
     * fund the community pool.
     *
     * @generated from protobuf rpc: FundCommunityPool(cosmos.distribution.v1beta1.MsgFundCommunityPool) returns (cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse);
     */
    fundCommunityPool(input: MsgFundCommunityPool, options?: RpcOptions): UnaryCall<MsgFundCommunityPool, MsgFundCommunityPoolResponse>;
}
/**
 * Msg defines the distribution Msg service.
 *
 * @generated from protobuf service cosmos.distribution.v1beta1.Msg
 */
export declare class MsgClient implements IMsgClient, ServiceInfo {
    private readonly _transport;
    typeName: any;
    methods: any;
    options: any;
    constructor(_transport: RpcTransport);
    /**
     * SetWithdrawAddress defines a method to change the withdraw address
     * for a delegator (or validator self-delegation).
     *
     * @generated from protobuf rpc: SetWithdrawAddress(cosmos.distribution.v1beta1.MsgSetWithdrawAddress) returns (cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse);
     */
    setWithdrawAddress(input: MsgSetWithdrawAddress, options?: RpcOptions): UnaryCall<MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse>;
    /**
     * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
     * from a single validator.
     *
     * @generated from protobuf rpc: WithdrawDelegatorReward(cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward) returns (cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse);
     */
    withdrawDelegatorReward(input: MsgWithdrawDelegatorReward, options?: RpcOptions): UnaryCall<MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse>;
    /**
     * WithdrawValidatorCommission defines a method to withdraw the
     * full commission to the validator address.
     *
     * @generated from protobuf rpc: WithdrawValidatorCommission(cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission) returns (cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse);
     */
    withdrawValidatorCommission(input: MsgWithdrawValidatorCommission, options?: RpcOptions): UnaryCall<MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse>;
    /**
     * FundCommunityPool defines a method to allow an account to directly
     * fund the community pool.
     *
     * @generated from protobuf rpc: FundCommunityPool(cosmos.distribution.v1beta1.MsgFundCommunityPool) returns (cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse);
     */
    fundCommunityPool(input: MsgFundCommunityPool, options?: RpcOptions): UnaryCall<MsgFundCommunityPool, MsgFundCommunityPoolResponse>;
}