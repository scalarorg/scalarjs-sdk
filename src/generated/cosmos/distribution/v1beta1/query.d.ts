// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/distribution/v1beta1/query.proto" (package "cosmos.distribution.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { DelegationDelegatorReward } from "./distribution";
import { DecCoin } from "../../base/v1beta1/coin";
import { PageResponse } from "../../base/query/v1beta1/pagination";
import { ValidatorSlashEvent } from "./distribution";
import { PageRequest } from "../../base/query/v1beta1/pagination";
import { ValidatorAccumulatedCommission } from "./distribution";
import { ValidatorOutstandingRewards } from "./distribution";
import { Params } from "./distribution";
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequest {
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponse {
    /**
     * params defines the parameters of the module.
     *
     * @generated from protobuf field: cosmos.distribution.v1beta1.Params params = 1;
     */
    params?: Params;
}
/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest
 */
export interface QueryValidatorOutstandingRewardsRequest {
    /**
     * validator_address defines the validator address to query for.
     *
     * @generated from protobuf field: string validator_address = 1;
     */
    validatorAddress: string;
}
/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse
 */
export interface QueryValidatorOutstandingRewardsResponse {
    /**
     * @generated from protobuf field: cosmos.distribution.v1beta1.ValidatorOutstandingRewards rewards = 1;
     */
    rewards?: ValidatorOutstandingRewards;
}
/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.QueryValidatorCommissionRequest
 */
export interface QueryValidatorCommissionRequest {
    /**
     * validator_address defines the validator address to query for.
     *
     * @generated from protobuf field: string validator_address = 1;
     */
    validatorAddress: string;
}
/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.QueryValidatorCommissionResponse
 */
export interface QueryValidatorCommissionResponse {
    /**
     * commission defines the commision the validator received.
     *
     * @generated from protobuf field: cosmos.distribution.v1beta1.ValidatorAccumulatedCommission commission = 1;
     */
    commission?: ValidatorAccumulatedCommission;
}
/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.QueryValidatorSlashesRequest
 */
export interface QueryValidatorSlashesRequest {
    /**
     * validator_address defines the validator address to query for.
     *
     * @generated from protobuf field: string validator_address = 1;
     */
    validatorAddress: string;
    /**
     * starting_height defines the optional starting height to query the slashes.
     *
     * @generated from protobuf field: uint64 starting_height = 2;
     */
    startingHeight: string;
    /**
     * starting_height defines the optional ending height to query the slashes.
     *
     * @generated from protobuf field: uint64 ending_height = 3;
     */
    endingHeight: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageRequest pagination = 4;
     */
    pagination?: PageRequest;
}
/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.QueryValidatorSlashesResponse
 */
export interface QueryValidatorSlashesResponse {
    /**
     * slashes defines the slashes the validator received.
     *
     * @generated from protobuf field: repeated cosmos.distribution.v1beta1.ValidatorSlashEvent slashes = 1;
     */
    slashes: ValidatorSlashEvent[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
}
/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.QueryDelegationRewardsRequest
 */
export interface QueryDelegationRewardsRequest {
    /**
     * delegator_address defines the delegator address to query for.
     *
     * @generated from protobuf field: string delegator_address = 1;
     */
    delegatorAddress: string;
    /**
     * validator_address defines the validator address to query for.
     *
     * @generated from protobuf field: string validator_address = 2;
     */
    validatorAddress: string;
}
/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.QueryDelegationRewardsResponse
 */
export interface QueryDelegationRewardsResponse {
    /**
     * rewards defines the rewards accrued by a delegation.
     *
     * @generated from protobuf field: repeated cosmos.base.v1beta1.DecCoin rewards = 1;
     */
    rewards: DecCoin[];
}
/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest
 */
export interface QueryDelegationTotalRewardsRequest {
    /**
     * delegator_address defines the delegator address to query for.
     *
     * @generated from protobuf field: string delegator_address = 1;
     */
    delegatorAddress: string;
}
/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse
 */
export interface QueryDelegationTotalRewardsResponse {
    /**
     * rewards defines all the rewards accrued by a delegator.
     *
     * @generated from protobuf field: repeated cosmos.distribution.v1beta1.DelegationDelegatorReward rewards = 1;
     */
    rewards: DelegationDelegatorReward[];
    /**
     * total defines the sum of all the rewards.
     *
     * @generated from protobuf field: repeated cosmos.base.v1beta1.DecCoin total = 2;
     */
    total: DecCoin[];
}
/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest
 */
export interface QueryDelegatorValidatorsRequest {
    /**
     * delegator_address defines the delegator address to query for.
     *
     * @generated from protobuf field: string delegator_address = 1;
     */
    delegatorAddress: string;
}
/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse
 */
export interface QueryDelegatorValidatorsResponse {
    /**
     * validators defines the validators a delegator is delegating for.
     *
     * @generated from protobuf field: repeated string validators = 1;
     */
    validators: string[];
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest
 */
export interface QueryDelegatorWithdrawAddressRequest {
    /**
     * delegator_address defines the delegator address to query for.
     *
     * @generated from protobuf field: string delegator_address = 1;
     */
    delegatorAddress: string;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse
 */
export interface QueryDelegatorWithdrawAddressResponse {
    /**
     * withdraw_address defines the delegator address to query for.
     *
     * @generated from protobuf field: string withdraw_address = 1;
     */
    withdrawAddress: string;
}
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.QueryCommunityPoolRequest
 */
export interface QueryCommunityPoolRequest {
}
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 *
 * @generated from protobuf message cosmos.distribution.v1beta1.QueryCommunityPoolResponse
 */
export interface QueryCommunityPoolResponse {
    /**
     * pool defines community pool's coins.
     *
     * @generated from protobuf field: repeated cosmos.base.v1beta1.DecCoin pool = 1;
     */
    pool: DecCoin[];
}
declare class QueryParamsRequest$Type extends MessageType<QueryParamsRequest> {
    constructor();
    create(value?: PartialMessage<QueryParamsRequest>): QueryParamsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryParamsRequest): QueryParamsRequest;
    internalBinaryWrite(message: QueryParamsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.QueryParamsRequest
 */
export declare const QueryParamsRequest: QueryParamsRequest$Type;
declare class QueryParamsResponse$Type extends MessageType<QueryParamsResponse> {
    constructor();
    create(value?: PartialMessage<QueryParamsResponse>): QueryParamsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryParamsResponse): QueryParamsResponse;
    internalBinaryWrite(message: QueryParamsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.QueryParamsResponse
 */
export declare const QueryParamsResponse: QueryParamsResponse$Type;
declare class QueryValidatorOutstandingRewardsRequest$Type extends MessageType<QueryValidatorOutstandingRewardsRequest> {
    constructor();
    create(value?: PartialMessage<QueryValidatorOutstandingRewardsRequest>): QueryValidatorOutstandingRewardsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryValidatorOutstandingRewardsRequest): QueryValidatorOutstandingRewardsRequest;
    internalBinaryWrite(message: QueryValidatorOutstandingRewardsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest
 */
export declare const QueryValidatorOutstandingRewardsRequest: QueryValidatorOutstandingRewardsRequest$Type;
declare class QueryValidatorOutstandingRewardsResponse$Type extends MessageType<QueryValidatorOutstandingRewardsResponse> {
    constructor();
    create(value?: PartialMessage<QueryValidatorOutstandingRewardsResponse>): QueryValidatorOutstandingRewardsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryValidatorOutstandingRewardsResponse): QueryValidatorOutstandingRewardsResponse;
    internalBinaryWrite(message: QueryValidatorOutstandingRewardsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse
 */
export declare const QueryValidatorOutstandingRewardsResponse: QueryValidatorOutstandingRewardsResponse$Type;
declare class QueryValidatorCommissionRequest$Type extends MessageType<QueryValidatorCommissionRequest> {
    constructor();
    create(value?: PartialMessage<QueryValidatorCommissionRequest>): QueryValidatorCommissionRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryValidatorCommissionRequest): QueryValidatorCommissionRequest;
    internalBinaryWrite(message: QueryValidatorCommissionRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.QueryValidatorCommissionRequest
 */
export declare const QueryValidatorCommissionRequest: QueryValidatorCommissionRequest$Type;
declare class QueryValidatorCommissionResponse$Type extends MessageType<QueryValidatorCommissionResponse> {
    constructor();
    create(value?: PartialMessage<QueryValidatorCommissionResponse>): QueryValidatorCommissionResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryValidatorCommissionResponse): QueryValidatorCommissionResponse;
    internalBinaryWrite(message: QueryValidatorCommissionResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.QueryValidatorCommissionResponse
 */
export declare const QueryValidatorCommissionResponse: QueryValidatorCommissionResponse$Type;
declare class QueryValidatorSlashesRequest$Type extends MessageType<QueryValidatorSlashesRequest> {
    constructor();
    create(value?: PartialMessage<QueryValidatorSlashesRequest>): QueryValidatorSlashesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryValidatorSlashesRequest): QueryValidatorSlashesRequest;
    internalBinaryWrite(message: QueryValidatorSlashesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.QueryValidatorSlashesRequest
 */
export declare const QueryValidatorSlashesRequest: QueryValidatorSlashesRequest$Type;
declare class QueryValidatorSlashesResponse$Type extends MessageType<QueryValidatorSlashesResponse> {
    constructor();
    create(value?: PartialMessage<QueryValidatorSlashesResponse>): QueryValidatorSlashesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryValidatorSlashesResponse): QueryValidatorSlashesResponse;
    internalBinaryWrite(message: QueryValidatorSlashesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.QueryValidatorSlashesResponse
 */
export declare const QueryValidatorSlashesResponse: QueryValidatorSlashesResponse$Type;
declare class QueryDelegationRewardsRequest$Type extends MessageType<QueryDelegationRewardsRequest> {
    constructor();
    create(value?: PartialMessage<QueryDelegationRewardsRequest>): QueryDelegationRewardsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDelegationRewardsRequest): QueryDelegationRewardsRequest;
    internalBinaryWrite(message: QueryDelegationRewardsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.QueryDelegationRewardsRequest
 */
export declare const QueryDelegationRewardsRequest: QueryDelegationRewardsRequest$Type;
declare class QueryDelegationRewardsResponse$Type extends MessageType<QueryDelegationRewardsResponse> {
    constructor();
    create(value?: PartialMessage<QueryDelegationRewardsResponse>): QueryDelegationRewardsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDelegationRewardsResponse): QueryDelegationRewardsResponse;
    internalBinaryWrite(message: QueryDelegationRewardsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.QueryDelegationRewardsResponse
 */
export declare const QueryDelegationRewardsResponse: QueryDelegationRewardsResponse$Type;
declare class QueryDelegationTotalRewardsRequest$Type extends MessageType<QueryDelegationTotalRewardsRequest> {
    constructor();
    create(value?: PartialMessage<QueryDelegationTotalRewardsRequest>): QueryDelegationTotalRewardsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDelegationTotalRewardsRequest): QueryDelegationTotalRewardsRequest;
    internalBinaryWrite(message: QueryDelegationTotalRewardsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest
 */
export declare const QueryDelegationTotalRewardsRequest: QueryDelegationTotalRewardsRequest$Type;
declare class QueryDelegationTotalRewardsResponse$Type extends MessageType<QueryDelegationTotalRewardsResponse> {
    constructor();
    create(value?: PartialMessage<QueryDelegationTotalRewardsResponse>): QueryDelegationTotalRewardsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDelegationTotalRewardsResponse): QueryDelegationTotalRewardsResponse;
    internalBinaryWrite(message: QueryDelegationTotalRewardsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse
 */
export declare const QueryDelegationTotalRewardsResponse: QueryDelegationTotalRewardsResponse$Type;
declare class QueryDelegatorValidatorsRequest$Type extends MessageType<QueryDelegatorValidatorsRequest> {
    constructor();
    create(value?: PartialMessage<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequest;
    internalBinaryWrite(message: QueryDelegatorValidatorsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest
 */
export declare const QueryDelegatorValidatorsRequest: QueryDelegatorValidatorsRequest$Type;
declare class QueryDelegatorValidatorsResponse$Type extends MessageType<QueryDelegatorValidatorsResponse> {
    constructor();
    create(value?: PartialMessage<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponse;
    internalBinaryWrite(message: QueryDelegatorValidatorsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse
 */
export declare const QueryDelegatorValidatorsResponse: QueryDelegatorValidatorsResponse$Type;
declare class QueryDelegatorWithdrawAddressRequest$Type extends MessageType<QueryDelegatorWithdrawAddressRequest> {
    constructor();
    create(value?: PartialMessage<QueryDelegatorWithdrawAddressRequest>): QueryDelegatorWithdrawAddressRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDelegatorWithdrawAddressRequest): QueryDelegatorWithdrawAddressRequest;
    internalBinaryWrite(message: QueryDelegatorWithdrawAddressRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest
 */
export declare const QueryDelegatorWithdrawAddressRequest: QueryDelegatorWithdrawAddressRequest$Type;
declare class QueryDelegatorWithdrawAddressResponse$Type extends MessageType<QueryDelegatorWithdrawAddressResponse> {
    constructor();
    create(value?: PartialMessage<QueryDelegatorWithdrawAddressResponse>): QueryDelegatorWithdrawAddressResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDelegatorWithdrawAddressResponse): QueryDelegatorWithdrawAddressResponse;
    internalBinaryWrite(message: QueryDelegatorWithdrawAddressResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse
 */
export declare const QueryDelegatorWithdrawAddressResponse: QueryDelegatorWithdrawAddressResponse$Type;
declare class QueryCommunityPoolRequest$Type extends MessageType<QueryCommunityPoolRequest> {
    constructor();
    create(value?: PartialMessage<QueryCommunityPoolRequest>): QueryCommunityPoolRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryCommunityPoolRequest): QueryCommunityPoolRequest;
    internalBinaryWrite(message: QueryCommunityPoolRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.QueryCommunityPoolRequest
 */
export declare const QueryCommunityPoolRequest: QueryCommunityPoolRequest$Type;
declare class QueryCommunityPoolResponse$Type extends MessageType<QueryCommunityPoolResponse> {
    constructor();
    create(value?: PartialMessage<QueryCommunityPoolResponse>): QueryCommunityPoolResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryCommunityPoolResponse): QueryCommunityPoolResponse;
    internalBinaryWrite(message: QueryCommunityPoolResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.distribution.v1beta1.QueryCommunityPoolResponse
 */
export declare const QueryCommunityPoolResponse: QueryCommunityPoolResponse$Type;
/**
 * @generated ServiceType for protobuf service cosmos.distribution.v1beta1.Query
 */
export declare const Query: any;
export {};