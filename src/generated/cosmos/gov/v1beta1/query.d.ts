// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/gov/v1beta1/query.proto" (package "cosmos.gov.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { TallyResult } from "./gov";
import { Deposit } from "./gov";
import { TallyParams } from "./gov";
import { DepositParams } from "./gov";
import { VotingParams } from "./gov";
import { Vote } from "./gov";
import { PageResponse } from "../../base/query/v1beta1/pagination";
import { PageRequest } from "../../base/query/v1beta1/pagination";
import { ProposalStatus } from "./gov";
import { Proposal } from "./gov";
/**
 * QueryProposalRequest is the request type for the Query/Proposal RPC method.
 *
 * @generated from protobuf message cosmos.gov.v1beta1.QueryProposalRequest
 */
export interface QueryProposalRequest {
    /**
     * proposal_id defines the unique id of the proposal.
     *
     * @generated from protobuf field: uint64 proposal_id = 1;
     */
    proposalId: string;
}
/**
 * QueryProposalResponse is the response type for the Query/Proposal RPC method.
 *
 * @generated from protobuf message cosmos.gov.v1beta1.QueryProposalResponse
 */
export interface QueryProposalResponse {
    /**
     * @generated from protobuf field: cosmos.gov.v1beta1.Proposal proposal = 1;
     */
    proposal?: Proposal;
}
/**
 * QueryProposalsRequest is the request type for the Query/Proposals RPC method.
 *
 * @generated from protobuf message cosmos.gov.v1beta1.QueryProposalsRequest
 */
export interface QueryProposalsRequest {
    /**
     * proposal_status defines the status of the proposals.
     *
     * @generated from protobuf field: cosmos.gov.v1beta1.ProposalStatus proposal_status = 1;
     */
    proposalStatus: ProposalStatus;
    /**
     * voter defines the voter address for the proposals.
     *
     * @generated from protobuf field: string voter = 2;
     */
    voter: string;
    /**
     * depositor defines the deposit addresses from the proposals.
     *
     * @generated from protobuf field: string depositor = 3;
     */
    depositor: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageRequest pagination = 4;
     */
    pagination?: PageRequest;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 *
 * @generated from protobuf message cosmos.gov.v1beta1.QueryProposalsResponse
 */
export interface QueryProposalsResponse {
    /**
     * @generated from protobuf field: repeated cosmos.gov.v1beta1.Proposal proposals = 1;
     */
    proposals: Proposal[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
}
/**
 * QueryVoteRequest is the request type for the Query/Vote RPC method.
 *
 * @generated from protobuf message cosmos.gov.v1beta1.QueryVoteRequest
 */
export interface QueryVoteRequest {
    /**
     * proposal_id defines the unique id of the proposal.
     *
     * @generated from protobuf field: uint64 proposal_id = 1;
     */
    proposalId: string;
    /**
     * voter defines the oter address for the proposals.
     *
     * @generated from protobuf field: string voter = 2;
     */
    voter: string;
}
/**
 * QueryVoteResponse is the response type for the Query/Vote RPC method.
 *
 * @generated from protobuf message cosmos.gov.v1beta1.QueryVoteResponse
 */
export interface QueryVoteResponse {
    /**
     * vote defined the queried vote.
     *
     * @generated from protobuf field: cosmos.gov.v1beta1.Vote vote = 1;
     */
    vote?: Vote;
}
/**
 * QueryVotesRequest is the request type for the Query/Votes RPC method.
 *
 * @generated from protobuf message cosmos.gov.v1beta1.QueryVotesRequest
 */
export interface QueryVotesRequest {
    /**
     * proposal_id defines the unique id of the proposal.
     *
     * @generated from protobuf field: uint64 proposal_id = 1;
     */
    proposalId: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
}
/**
 * QueryVotesResponse is the response type for the Query/Votes RPC method.
 *
 * @generated from protobuf message cosmos.gov.v1beta1.QueryVotesResponse
 */
export interface QueryVotesResponse {
    /**
     * votes defined the queried votes.
     *
     * @generated from protobuf field: repeated cosmos.gov.v1beta1.Vote votes = 1;
     */
    votes: Vote[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from protobuf message cosmos.gov.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequest {
    /**
     * params_type defines which parameters to query for, can be one of "voting",
     * "tallying" or "deposit".
     *
     * @generated from protobuf field: string params_type = 1;
     */
    paramsType: string;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from protobuf message cosmos.gov.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponse {
    /**
     * voting_params defines the parameters related to voting.
     *
     * @generated from protobuf field: cosmos.gov.v1beta1.VotingParams voting_params = 1;
     */
    votingParams?: VotingParams;
    /**
     * deposit_params defines the parameters related to deposit.
     *
     * @generated from protobuf field: cosmos.gov.v1beta1.DepositParams deposit_params = 2;
     */
    depositParams?: DepositParams;
    /**
     * tally_params defines the parameters related to tally.
     *
     * @generated from protobuf field: cosmos.gov.v1beta1.TallyParams tally_params = 3;
     */
    tallyParams?: TallyParams;
}
/**
 * QueryDepositRequest is the request type for the Query/Deposit RPC method.
 *
 * @generated from protobuf message cosmos.gov.v1beta1.QueryDepositRequest
 */
export interface QueryDepositRequest {
    /**
     * proposal_id defines the unique id of the proposal.
     *
     * @generated from protobuf field: uint64 proposal_id = 1;
     */
    proposalId: string;
    /**
     * depositor defines the deposit addresses from the proposals.
     *
     * @generated from protobuf field: string depositor = 2;
     */
    depositor: string;
}
/**
 * QueryDepositResponse is the response type for the Query/Deposit RPC method.
 *
 * @generated from protobuf message cosmos.gov.v1beta1.QueryDepositResponse
 */
export interface QueryDepositResponse {
    /**
     * deposit defines the requested deposit.
     *
     * @generated from protobuf field: cosmos.gov.v1beta1.Deposit deposit = 1;
     */
    deposit?: Deposit;
}
/**
 * QueryDepositsRequest is the request type for the Query/Deposits RPC method.
 *
 * @generated from protobuf message cosmos.gov.v1beta1.QueryDepositsRequest
 */
export interface QueryDepositsRequest {
    /**
     * proposal_id defines the unique id of the proposal.
     *
     * @generated from protobuf field: uint64 proposal_id = 1;
     */
    proposalId: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
}
/**
 * QueryDepositsResponse is the response type for the Query/Deposits RPC method.
 *
 * @generated from protobuf message cosmos.gov.v1beta1.QueryDepositsResponse
 */
export interface QueryDepositsResponse {
    /**
     * @generated from protobuf field: repeated cosmos.gov.v1beta1.Deposit deposits = 1;
     */
    deposits: Deposit[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
}
/**
 * QueryTallyResultRequest is the request type for the Query/Tally RPC method.
 *
 * @generated from protobuf message cosmos.gov.v1beta1.QueryTallyResultRequest
 */
export interface QueryTallyResultRequest {
    /**
     * proposal_id defines the unique id of the proposal.
     *
     * @generated from protobuf field: uint64 proposal_id = 1;
     */
    proposalId: string;
}
/**
 * QueryTallyResultResponse is the response type for the Query/Tally RPC method.
 *
 * @generated from protobuf message cosmos.gov.v1beta1.QueryTallyResultResponse
 */
export interface QueryTallyResultResponse {
    /**
     * tally defines the requested tally.
     *
     * @generated from protobuf field: cosmos.gov.v1beta1.TallyResult tally = 1;
     */
    tally?: TallyResult;
}
declare class QueryProposalRequest$Type extends MessageType<QueryProposalRequest> {
    constructor();
    create(value?: PartialMessage<QueryProposalRequest>): QueryProposalRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryProposalRequest): QueryProposalRequest;
    internalBinaryWrite(message: QueryProposalRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.gov.v1beta1.QueryProposalRequest
 */
export declare const QueryProposalRequest: QueryProposalRequest$Type;
declare class QueryProposalResponse$Type extends MessageType<QueryProposalResponse> {
    constructor();
    create(value?: PartialMessage<QueryProposalResponse>): QueryProposalResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryProposalResponse): QueryProposalResponse;
    internalBinaryWrite(message: QueryProposalResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.gov.v1beta1.QueryProposalResponse
 */
export declare const QueryProposalResponse: QueryProposalResponse$Type;
declare class QueryProposalsRequest$Type extends MessageType<QueryProposalsRequest> {
    constructor();
    create(value?: PartialMessage<QueryProposalsRequest>): QueryProposalsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryProposalsRequest): QueryProposalsRequest;
    internalBinaryWrite(message: QueryProposalsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.gov.v1beta1.QueryProposalsRequest
 */
export declare const QueryProposalsRequest: QueryProposalsRequest$Type;
declare class QueryProposalsResponse$Type extends MessageType<QueryProposalsResponse> {
    constructor();
    create(value?: PartialMessage<QueryProposalsResponse>): QueryProposalsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryProposalsResponse): QueryProposalsResponse;
    internalBinaryWrite(message: QueryProposalsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.gov.v1beta1.QueryProposalsResponse
 */
export declare const QueryProposalsResponse: QueryProposalsResponse$Type;
declare class QueryVoteRequest$Type extends MessageType<QueryVoteRequest> {
    constructor();
    create(value?: PartialMessage<QueryVoteRequest>): QueryVoteRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryVoteRequest): QueryVoteRequest;
    internalBinaryWrite(message: QueryVoteRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.gov.v1beta1.QueryVoteRequest
 */
export declare const QueryVoteRequest: QueryVoteRequest$Type;
declare class QueryVoteResponse$Type extends MessageType<QueryVoteResponse> {
    constructor();
    create(value?: PartialMessage<QueryVoteResponse>): QueryVoteResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryVoteResponse): QueryVoteResponse;
    internalBinaryWrite(message: QueryVoteResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.gov.v1beta1.QueryVoteResponse
 */
export declare const QueryVoteResponse: QueryVoteResponse$Type;
declare class QueryVotesRequest$Type extends MessageType<QueryVotesRequest> {
    constructor();
    create(value?: PartialMessage<QueryVotesRequest>): QueryVotesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryVotesRequest): QueryVotesRequest;
    internalBinaryWrite(message: QueryVotesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.gov.v1beta1.QueryVotesRequest
 */
export declare const QueryVotesRequest: QueryVotesRequest$Type;
declare class QueryVotesResponse$Type extends MessageType<QueryVotesResponse> {
    constructor();
    create(value?: PartialMessage<QueryVotesResponse>): QueryVotesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryVotesResponse): QueryVotesResponse;
    internalBinaryWrite(message: QueryVotesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.gov.v1beta1.QueryVotesResponse
 */
export declare const QueryVotesResponse: QueryVotesResponse$Type;
declare class QueryParamsRequest$Type extends MessageType<QueryParamsRequest> {
    constructor();
    create(value?: PartialMessage<QueryParamsRequest>): QueryParamsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryParamsRequest): QueryParamsRequest;
    internalBinaryWrite(message: QueryParamsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.gov.v1beta1.QueryParamsRequest
 */
export declare const QueryParamsRequest: QueryParamsRequest$Type;
declare class QueryParamsResponse$Type extends MessageType<QueryParamsResponse> {
    constructor();
    create(value?: PartialMessage<QueryParamsResponse>): QueryParamsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryParamsResponse): QueryParamsResponse;
    internalBinaryWrite(message: QueryParamsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.gov.v1beta1.QueryParamsResponse
 */
export declare const QueryParamsResponse: QueryParamsResponse$Type;
declare class QueryDepositRequest$Type extends MessageType<QueryDepositRequest> {
    constructor();
    create(value?: PartialMessage<QueryDepositRequest>): QueryDepositRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDepositRequest): QueryDepositRequest;
    internalBinaryWrite(message: QueryDepositRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.gov.v1beta1.QueryDepositRequest
 */
export declare const QueryDepositRequest: QueryDepositRequest$Type;
declare class QueryDepositResponse$Type extends MessageType<QueryDepositResponse> {
    constructor();
    create(value?: PartialMessage<QueryDepositResponse>): QueryDepositResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDepositResponse): QueryDepositResponse;
    internalBinaryWrite(message: QueryDepositResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.gov.v1beta1.QueryDepositResponse
 */
export declare const QueryDepositResponse: QueryDepositResponse$Type;
declare class QueryDepositsRequest$Type extends MessageType<QueryDepositsRequest> {
    constructor();
    create(value?: PartialMessage<QueryDepositsRequest>): QueryDepositsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDepositsRequest): QueryDepositsRequest;
    internalBinaryWrite(message: QueryDepositsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.gov.v1beta1.QueryDepositsRequest
 */
export declare const QueryDepositsRequest: QueryDepositsRequest$Type;
declare class QueryDepositsResponse$Type extends MessageType<QueryDepositsResponse> {
    constructor();
    create(value?: PartialMessage<QueryDepositsResponse>): QueryDepositsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryDepositsResponse): QueryDepositsResponse;
    internalBinaryWrite(message: QueryDepositsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.gov.v1beta1.QueryDepositsResponse
 */
export declare const QueryDepositsResponse: QueryDepositsResponse$Type;
declare class QueryTallyResultRequest$Type extends MessageType<QueryTallyResultRequest> {
    constructor();
    create(value?: PartialMessage<QueryTallyResultRequest>): QueryTallyResultRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryTallyResultRequest): QueryTallyResultRequest;
    internalBinaryWrite(message: QueryTallyResultRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.gov.v1beta1.QueryTallyResultRequest
 */
export declare const QueryTallyResultRequest: QueryTallyResultRequest$Type;
declare class QueryTallyResultResponse$Type extends MessageType<QueryTallyResultResponse> {
    constructor();
    create(value?: PartialMessage<QueryTallyResultResponse>): QueryTallyResultResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryTallyResultResponse): QueryTallyResultResponse;
    internalBinaryWrite(message: QueryTallyResultResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.gov.v1beta1.QueryTallyResultResponse
 */
export declare const QueryTallyResultResponse: QueryTallyResultResponse$Type;
/**
 * @generated ServiceType for protobuf service cosmos.gov.v1beta1.Query
 */
export declare const Query: any;
export {};
