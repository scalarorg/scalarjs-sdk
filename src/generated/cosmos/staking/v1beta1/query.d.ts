// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/staking/v1beta1/query.proto" (package "cosmos.staking.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Params } from "./staking";
import { Pool } from "./staking";
import { HistoricalInfo } from "./staking";
import { RedelegationResponse } from "./staking";
import { UnbondingDelegation } from "./staking";
import { DelegationResponse } from "./staking";
import { PageResponse } from "../../base/query/v1beta1/pagination";
import { Validator } from "./staking";
import { PageRequest } from "../../base/query/v1beta1/pagination";
/**
 * QueryValidatorsRequest is request type for Query/Validators RPC method.
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryValidatorsRequest
 */
export interface QueryValidatorsRequest {
    /**
     * status enables to query for validators matching a given status.
     *
     * @generated from protobuf field: string status = 1;
     */
    status: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
}
/**
 * QueryValidatorsResponse is response type for the Query/Validators RPC method
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryValidatorsResponse
 */
export interface QueryValidatorsResponse {
    /**
     * validators contains all the queried validators.
     *
     * @generated from protobuf field: repeated cosmos.staking.v1beta1.Validator validators = 1;
     */
    validators: Validator[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
}
/**
 * QueryValidatorRequest is response type for the Query/Validator RPC method
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryValidatorRequest
 */
export interface QueryValidatorRequest {
    /**
     * validator_addr defines the validator address to query for.
     *
     * @generated from protobuf field: string validator_addr = 1;
     */
    validatorAddr: string;
}
/**
 * QueryValidatorResponse is response type for the Query/Validator RPC method
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryValidatorResponse
 */
export interface QueryValidatorResponse {
    /**
     * validator defines the the validator info.
     *
     * @generated from protobuf field: cosmos.staking.v1beta1.Validator validator = 1;
     */
    validator?: Validator;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryValidatorDelegationsRequest
 */
export interface QueryValidatorDelegationsRequest {
    /**
     * validator_addr defines the validator address to query for.
     *
     * @generated from protobuf field: string validator_addr = 1;
     */
    validatorAddr: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryValidatorDelegationsResponse
 */
export interface QueryValidatorDelegationsResponse {
    /**
     * @generated from protobuf field: repeated cosmos.staking.v1beta1.DelegationResponse delegation_responses = 1;
     */
    delegationResponses: DelegationResponse[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest
 */
export interface QueryValidatorUnbondingDelegationsRequest {
    /**
     * validator_addr defines the validator address to query for.
     *
     * @generated from protobuf field: string validator_addr = 1;
     */
    validatorAddr: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse
 */
export interface QueryValidatorUnbondingDelegationsResponse {
    /**
     * @generated from protobuf field: repeated cosmos.staking.v1beta1.UnbondingDelegation unbonding_responses = 1;
     */
    unbondingResponses: UnbondingDelegation[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
}
/**
 * QueryDelegationRequest is request type for the Query/Delegation RPC method.
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryDelegationRequest
 */
export interface QueryDelegationRequest {
    /**
     * delegator_addr defines the delegator address to query for.
     *
     * @generated from protobuf field: string delegator_addr = 1;
     */
    delegatorAddr: string;
    /**
     * validator_addr defines the validator address to query for.
     *
     * @generated from protobuf field: string validator_addr = 2;
     */
    validatorAddr: string;
}
/**
 * QueryDelegationResponse is response type for the Query/Delegation RPC method.
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryDelegationResponse
 */
export interface QueryDelegationResponse {
    /**
     * delegation_responses defines the delegation info of a delegation.
     *
     * @generated from protobuf field: cosmos.staking.v1beta1.DelegationResponse delegation_response = 1;
     */
    delegationResponse?: DelegationResponse;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryUnbondingDelegationRequest
 */
export interface QueryUnbondingDelegationRequest {
    /**
     * delegator_addr defines the delegator address to query for.
     *
     * @generated from protobuf field: string delegator_addr = 1;
     */
    delegatorAddr: string;
    /**
     * validator_addr defines the validator address to query for.
     *
     * @generated from protobuf field: string validator_addr = 2;
     */
    validatorAddr: string;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryUnbondingDelegationResponse
 */
export interface QueryUnbondingDelegationResponse {
    /**
     * unbond defines the unbonding information of a delegation.
     *
     * @generated from protobuf field: cosmos.staking.v1beta1.UnbondingDelegation unbond = 1;
     */
    unbond?: UnbondingDelegation;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest
 */
export interface QueryDelegatorDelegationsRequest {
    /**
     * delegator_addr defines the delegator address to query for.
     *
     * @generated from protobuf field: string delegator_addr = 1;
     */
    delegatorAddr: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse
 */
export interface QueryDelegatorDelegationsResponse {
    /**
     * delegation_responses defines all the delegations' info of a delegator.
     *
     * @generated from protobuf field: repeated cosmos.staking.v1beta1.DelegationResponse delegation_responses = 1;
     */
    delegationResponses: DelegationResponse[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest
 */
export interface QueryDelegatorUnbondingDelegationsRequest {
    /**
     * delegator_addr defines the delegator address to query for.
     *
     * @generated from protobuf field: string delegator_addr = 1;
     */
    delegatorAddr: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse
 */
export interface QueryDelegatorUnbondingDelegationsResponse {
    /**
     * @generated from protobuf field: repeated cosmos.staking.v1beta1.UnbondingDelegation unbonding_responses = 1;
     */
    unbondingResponses: UnbondingDelegation[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryRedelegationsRequest
 */
export interface QueryRedelegationsRequest {
    /**
     * delegator_addr defines the delegator address to query for.
     *
     * @generated from protobuf field: string delegator_addr = 1;
     */
    delegatorAddr: string;
    /**
     * src_validator_addr defines the validator address to redelegate from.
     *
     * @generated from protobuf field: string src_validator_addr = 2;
     */
    srcValidatorAddr: string;
    /**
     * dst_validator_addr defines the validator address to redelegate to.
     *
     * @generated from protobuf field: string dst_validator_addr = 3;
     */
    dstValidatorAddr: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageRequest pagination = 4;
     */
    pagination?: PageRequest;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryRedelegationsResponse
 */
export interface QueryRedelegationsResponse {
    /**
     * @generated from protobuf field: repeated cosmos.staking.v1beta1.RedelegationResponse redelegation_responses = 1;
     */
    redelegationResponses: RedelegationResponse[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest
 */
export interface QueryDelegatorValidatorsRequest {
    /**
     * delegator_addr defines the delegator address to query for.
     *
     * @generated from protobuf field: string delegator_addr = 1;
     */
    delegatorAddr: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse
 */
export interface QueryDelegatorValidatorsResponse {
    /**
     * validators defines the the validators' info of a delegator.
     *
     * @generated from protobuf field: repeated cosmos.staking.v1beta1.Validator validators = 1;
     */
    validators: Validator[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryDelegatorValidatorRequest
 */
export interface QueryDelegatorValidatorRequest {
    /**
     * delegator_addr defines the delegator address to query for.
     *
     * @generated from protobuf field: string delegator_addr = 1;
     */
    delegatorAddr: string;
    /**
     * validator_addr defines the validator address to query for.
     *
     * @generated from protobuf field: string validator_addr = 2;
     */
    validatorAddr: string;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryDelegatorValidatorResponse
 */
export interface QueryDelegatorValidatorResponse {
    /**
     * validator defines the the validator info.
     *
     * @generated from protobuf field: cosmos.staking.v1beta1.Validator validator = 1;
     */
    validator?: Validator;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryHistoricalInfoRequest
 */
export interface QueryHistoricalInfoRequest {
    /**
     * height defines at which height to query the historical info.
     *
     * @generated from protobuf field: int64 height = 1;
     */
    height: string;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryHistoricalInfoResponse
 */
export interface QueryHistoricalInfoResponse {
    /**
     * hist defines the historical info at the given height.
     *
     * @generated from protobuf field: cosmos.staking.v1beta1.HistoricalInfo hist = 1;
     */
    hist?: HistoricalInfo;
}
/**
 * QueryPoolRequest is request type for the Query/Pool RPC method.
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryPoolRequest
 */
export interface QueryPoolRequest {
}
/**
 * QueryPoolResponse is response type for the Query/Pool RPC method.
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryPoolResponse
 */
export interface QueryPoolResponse {
    /**
     * pool defines the pool info.
     *
     * @generated from protobuf field: cosmos.staking.v1beta1.Pool pool = 1;
     */
    pool?: Pool;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequest {
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from protobuf message cosmos.staking.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponse {
    /**
     * params holds all the parameters of this module.
     *
     * @generated from protobuf field: cosmos.staking.v1beta1.Params params = 1;
     */
    params?: Params;
}
declare class QueryValidatorsRequest$Type extends MessageType<QueryValidatorsRequest> {
    constructor();
    create(value?: PartialMessage<QueryValidatorsRequest>): QueryValidatorsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryValidatorsRequest): QueryValidatorsRequest;
    internalBinaryWrite(message: QueryValidatorsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryValidatorsRequest
 */
export declare const QueryValidatorsRequest: QueryValidatorsRequest$Type;
declare class QueryValidatorsResponse$Type extends MessageType<QueryValidatorsResponse> {
    constructor();
    create(value?: PartialMessage<QueryValidatorsResponse>): QueryValidatorsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryValidatorsResponse): QueryValidatorsResponse;
    internalBinaryWrite(message: QueryValidatorsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryValidatorsResponse
 */
export declare const QueryValidatorsResponse: QueryValidatorsResponse$Type;
declare class QueryValidatorRequest$Type extends MessageType<QueryValidatorRequest> {
    constructor();
    create(value?: PartialMessage<QueryValidatorRequest>): QueryValidatorRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryValidatorRequest): QueryValidatorRequest;
    internalBinaryWrite(message: QueryValidatorRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryValidatorRequest
 */
export declare const QueryValidatorRequest: QueryValidatorRequest$Type;
declare class QueryValidatorResponse$Type extends MessageType<QueryValidatorResponse> {
    constructor();
    create(value?: PartialMessage<QueryValidatorResponse>): QueryValidatorResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryValidatorResponse): QueryValidatorResponse;
    internalBinaryWrite(message: QueryValidatorResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryValidatorResponse
 */
export declare const QueryValidatorResponse: QueryValidatorResponse$Type;
declare class QueryValidatorDelegationsRequest$Type extends MessageType<QueryValidatorDelegationsRequest> {
    constructor();
    create(value?: PartialMessage<QueryValidatorDelegationsRequest>): QueryValidatorDelegationsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryValidatorDelegationsRequest): QueryValidatorDelegationsRequest;
    internalBinaryWrite(message: QueryValidatorDelegationsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryValidatorDelegationsRequest
 */
export declare const QueryValidatorDelegationsRequest: QueryValidatorDelegationsRequest$Type;
declare class QueryValidatorDelegationsResponse$Type extends MessageType<QueryValidatorDelegationsResponse> {
    constructor();
    create(value?: PartialMessage<QueryValidatorDelegationsResponse>): QueryValidatorDelegationsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryValidatorDelegationsResponse): QueryValidatorDelegationsResponse;
    internalBinaryWrite(message: QueryValidatorDelegationsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryValidatorDelegationsResponse
 */
export declare const QueryValidatorDelegationsResponse: QueryValidatorDelegationsResponse$Type;
declare class QueryValidatorUnbondingDelegationsRequest$Type extends MessageType<QueryValidatorUnbondingDelegationsRequest> {
    constructor();
    create(value?: PartialMessage<QueryValidatorUnbondingDelegationsRequest>): QueryValidatorUnbondingDelegationsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryValidatorUnbondingDelegationsRequest): QueryValidatorUnbondingDelegationsRequest;
    internalBinaryWrite(message: QueryValidatorUnbondingDelegationsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest
 */
export declare const QueryValidatorUnbondingDelegationsRequest: QueryValidatorUnbondingDelegationsRequest$Type;
declare class QueryValidatorUnbondingDelegationsResponse$Type extends MessageType<QueryValidatorUnbondingDelegationsResponse> {
    constructor();
    create(value?: PartialMessage<QueryValidatorUnbondingDelegationsResponse>): QueryValidatorUnbondingDelegationsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryValidatorUnbondingDelegationsResponse): QueryValidatorUnbondingDelegationsResponse;
    internalBinaryWrite(message: QueryValidatorUnbondingDelegationsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse
 */
export declare const QueryValidatorUnbondingDelegationsResponse: QueryValidatorUnbondingDelegationsResponse$Type;
declare class QueryDelegationRequest$Type extends MessageType<QueryDelegationRequest> {
    constructor();
    create(value?: PartialMessage<QueryDelegationRequest>): QueryDelegationRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDelegationRequest): QueryDelegationRequest;
    internalBinaryWrite(message: QueryDelegationRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryDelegationRequest
 */
export declare const QueryDelegationRequest: QueryDelegationRequest$Type;
declare class QueryDelegationResponse$Type extends MessageType<QueryDelegationResponse> {
    constructor();
    create(value?: PartialMessage<QueryDelegationResponse>): QueryDelegationResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDelegationResponse): QueryDelegationResponse;
    internalBinaryWrite(message: QueryDelegationResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryDelegationResponse
 */
export declare const QueryDelegationResponse: QueryDelegationResponse$Type;
declare class QueryUnbondingDelegationRequest$Type extends MessageType<QueryUnbondingDelegationRequest> {
    constructor();
    create(value?: PartialMessage<QueryUnbondingDelegationRequest>): QueryUnbondingDelegationRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryUnbondingDelegationRequest): QueryUnbondingDelegationRequest;
    internalBinaryWrite(message: QueryUnbondingDelegationRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryUnbondingDelegationRequest
 */
export declare const QueryUnbondingDelegationRequest: QueryUnbondingDelegationRequest$Type;
declare class QueryUnbondingDelegationResponse$Type extends MessageType<QueryUnbondingDelegationResponse> {
    constructor();
    create(value?: PartialMessage<QueryUnbondingDelegationResponse>): QueryUnbondingDelegationResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryUnbondingDelegationResponse): QueryUnbondingDelegationResponse;
    internalBinaryWrite(message: QueryUnbondingDelegationResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryUnbondingDelegationResponse
 */
export declare const QueryUnbondingDelegationResponse: QueryUnbondingDelegationResponse$Type;
declare class QueryDelegatorDelegationsRequest$Type extends MessageType<QueryDelegatorDelegationsRequest> {
    constructor();
    create(value?: PartialMessage<QueryDelegatorDelegationsRequest>): QueryDelegatorDelegationsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDelegatorDelegationsRequest): QueryDelegatorDelegationsRequest;
    internalBinaryWrite(message: QueryDelegatorDelegationsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest
 */
export declare const QueryDelegatorDelegationsRequest: QueryDelegatorDelegationsRequest$Type;
declare class QueryDelegatorDelegationsResponse$Type extends MessageType<QueryDelegatorDelegationsResponse> {
    constructor();
    create(value?: PartialMessage<QueryDelegatorDelegationsResponse>): QueryDelegatorDelegationsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDelegatorDelegationsResponse): QueryDelegatorDelegationsResponse;
    internalBinaryWrite(message: QueryDelegatorDelegationsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse
 */
export declare const QueryDelegatorDelegationsResponse: QueryDelegatorDelegationsResponse$Type;
declare class QueryDelegatorUnbondingDelegationsRequest$Type extends MessageType<QueryDelegatorUnbondingDelegationsRequest> {
    constructor();
    create(value?: PartialMessage<QueryDelegatorUnbondingDelegationsRequest>): QueryDelegatorUnbondingDelegationsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDelegatorUnbondingDelegationsRequest): QueryDelegatorUnbondingDelegationsRequest;
    internalBinaryWrite(message: QueryDelegatorUnbondingDelegationsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest
 */
export declare const QueryDelegatorUnbondingDelegationsRequest: QueryDelegatorUnbondingDelegationsRequest$Type;
declare class QueryDelegatorUnbondingDelegationsResponse$Type extends MessageType<QueryDelegatorUnbondingDelegationsResponse> {
    constructor();
    create(value?: PartialMessage<QueryDelegatorUnbondingDelegationsResponse>): QueryDelegatorUnbondingDelegationsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDelegatorUnbondingDelegationsResponse): QueryDelegatorUnbondingDelegationsResponse;
    internalBinaryWrite(message: QueryDelegatorUnbondingDelegationsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse
 */
export declare const QueryDelegatorUnbondingDelegationsResponse: QueryDelegatorUnbondingDelegationsResponse$Type;
declare class QueryRedelegationsRequest$Type extends MessageType<QueryRedelegationsRequest> {
    constructor();
    create(value?: PartialMessage<QueryRedelegationsRequest>): QueryRedelegationsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryRedelegationsRequest): QueryRedelegationsRequest;
    internalBinaryWrite(message: QueryRedelegationsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryRedelegationsRequest
 */
export declare const QueryRedelegationsRequest: QueryRedelegationsRequest$Type;
declare class QueryRedelegationsResponse$Type extends MessageType<QueryRedelegationsResponse> {
    constructor();
    create(value?: PartialMessage<QueryRedelegationsResponse>): QueryRedelegationsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryRedelegationsResponse): QueryRedelegationsResponse;
    internalBinaryWrite(message: QueryRedelegationsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryRedelegationsResponse
 */
export declare const QueryRedelegationsResponse: QueryRedelegationsResponse$Type;
declare class QueryDelegatorValidatorsRequest$Type extends MessageType<QueryDelegatorValidatorsRequest> {
    constructor();
    create(value?: PartialMessage<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequest;
    internalBinaryWrite(message: QueryDelegatorValidatorsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest
 */
export declare const QueryDelegatorValidatorsRequest: QueryDelegatorValidatorsRequest$Type;
declare class QueryDelegatorValidatorsResponse$Type extends MessageType<QueryDelegatorValidatorsResponse> {
    constructor();
    create(value?: PartialMessage<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponse;
    internalBinaryWrite(message: QueryDelegatorValidatorsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse
 */
export declare const QueryDelegatorValidatorsResponse: QueryDelegatorValidatorsResponse$Type;
declare class QueryDelegatorValidatorRequest$Type extends MessageType<QueryDelegatorValidatorRequest> {
    constructor();
    create(value?: PartialMessage<QueryDelegatorValidatorRequest>): QueryDelegatorValidatorRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDelegatorValidatorRequest): QueryDelegatorValidatorRequest;
    internalBinaryWrite(message: QueryDelegatorValidatorRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryDelegatorValidatorRequest
 */
export declare const QueryDelegatorValidatorRequest: QueryDelegatorValidatorRequest$Type;
declare class QueryDelegatorValidatorResponse$Type extends MessageType<QueryDelegatorValidatorResponse> {
    constructor();
    create(value?: PartialMessage<QueryDelegatorValidatorResponse>): QueryDelegatorValidatorResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDelegatorValidatorResponse): QueryDelegatorValidatorResponse;
    internalBinaryWrite(message: QueryDelegatorValidatorResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryDelegatorValidatorResponse
 */
export declare const QueryDelegatorValidatorResponse: QueryDelegatorValidatorResponse$Type;
declare class QueryHistoricalInfoRequest$Type extends MessageType<QueryHistoricalInfoRequest> {
    constructor();
    create(value?: PartialMessage<QueryHistoricalInfoRequest>): QueryHistoricalInfoRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryHistoricalInfoRequest): QueryHistoricalInfoRequest;
    internalBinaryWrite(message: QueryHistoricalInfoRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryHistoricalInfoRequest
 */
export declare const QueryHistoricalInfoRequest: QueryHistoricalInfoRequest$Type;
declare class QueryHistoricalInfoResponse$Type extends MessageType<QueryHistoricalInfoResponse> {
    constructor();
    create(value?: PartialMessage<QueryHistoricalInfoResponse>): QueryHistoricalInfoResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryHistoricalInfoResponse): QueryHistoricalInfoResponse;
    internalBinaryWrite(message: QueryHistoricalInfoResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryHistoricalInfoResponse
 */
export declare const QueryHistoricalInfoResponse: QueryHistoricalInfoResponse$Type;
declare class QueryPoolRequest$Type extends MessageType<QueryPoolRequest> {
    constructor();
    create(value?: PartialMessage<QueryPoolRequest>): QueryPoolRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryPoolRequest): QueryPoolRequest;
    internalBinaryWrite(message: QueryPoolRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryPoolRequest
 */
export declare const QueryPoolRequest: QueryPoolRequest$Type;
declare class QueryPoolResponse$Type extends MessageType<QueryPoolResponse> {
    constructor();
    create(value?: PartialMessage<QueryPoolResponse>): QueryPoolResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryPoolResponse): QueryPoolResponse;
    internalBinaryWrite(message: QueryPoolResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryPoolResponse
 */
export declare const QueryPoolResponse: QueryPoolResponse$Type;
declare class QueryParamsRequest$Type extends MessageType<QueryParamsRequest> {
    constructor();
    create(value?: PartialMessage<QueryParamsRequest>): QueryParamsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryParamsRequest): QueryParamsRequest;
    internalBinaryWrite(message: QueryParamsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryParamsRequest
 */
export declare const QueryParamsRequest: QueryParamsRequest$Type;
declare class QueryParamsResponse$Type extends MessageType<QueryParamsResponse> {
    constructor();
    create(value?: PartialMessage<QueryParamsResponse>): QueryParamsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryParamsResponse): QueryParamsResponse;
    internalBinaryWrite(message: QueryParamsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.staking.v1beta1.QueryParamsResponse
 */
export declare const QueryParamsResponse: QueryParamsResponse$Type;
/**
 * @generated ServiceType for protobuf service cosmos.staking.v1beta1.Query
 */
export declare const Query: any;
export {};