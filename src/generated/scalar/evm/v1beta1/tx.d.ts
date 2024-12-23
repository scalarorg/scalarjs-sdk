// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "scalar/evm/v1beta1/tx.proto" (package "scalar.evm.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { KeyType } from "../../tss/exported/v1beta1/types";
import { TokenDetails } from "./types";
import { Asset } from "./types";
/**
 * @generated from protobuf message scalar.evm.v1beta1.SetGatewayRequest
 */
export interface SetGatewayRequest {
    /**
     * @generated from protobuf field: bytes sender = 1;
     */
    sender: Uint8Array;
    /**
     * @generated from protobuf field: string chain = 2;
     */
    chain: string;
    /**
     * @generated from protobuf field: bytes address = 3;
     */
    address: Uint8Array;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.SetGatewayResponse
 */
export interface SetGatewayResponse {
}
/**
 * @deprecated
 * @generated from protobuf message scalar.evm.v1beta1.ConfirmGatewayTxRequest
 */
export interface ConfirmGatewayTxRequest {
    /**
     * @generated from protobuf field: bytes sender = 1;
     */
    sender: Uint8Array;
    /**
     * @generated from protobuf field: string chain = 2;
     */
    chain: string;
    /**
     * @generated from protobuf field: bytes tx_id = 3;
     */
    txId: Uint8Array;
}
/**
 * @deprecated
 * @generated from protobuf message scalar.evm.v1beta1.ConfirmGatewayTxResponse
 */
export interface ConfirmGatewayTxResponse {
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.ConfirmGatewayTxsRequest
 */
export interface ConfirmGatewayTxsRequest {
    /**
     * @generated from protobuf field: bytes sender = 1;
     */
    sender: Uint8Array;
    /**
     * @generated from protobuf field: string chain = 2;
     */
    chain: string;
    /**
     * @generated from protobuf field: repeated bytes tx_ids = 3;
     */
    txIds: Uint8Array[];
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.ConfirmGatewayTxsResponse
 */
export interface ConfirmGatewayTxsResponse {
}
/**
 * MsgConfirmDeposit represents an erc20 deposit confirmation message
 *
 * @generated from protobuf message scalar.evm.v1beta1.ConfirmDepositRequest
 */
export interface ConfirmDepositRequest {
    /**
     * @generated from protobuf field: bytes sender = 1;
     */
    sender: Uint8Array;
    /**
     * @generated from protobuf field: string chain = 2;
     */
    chain: string;
    /**
     * @generated from protobuf field: bytes tx_id = 3;
     */
    txId: Uint8Array;
    /**
     * @deprecated
     * @generated from protobuf field: bytes amount = 4 [deprecated = true];
     */
    amount: Uint8Array;
    /**
     * @generated from protobuf field: bytes burner_address = 5;
     */
    burnerAddress: Uint8Array;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.ConfirmDepositResponse
 */
export interface ConfirmDepositResponse {
}
/**
 * MsgConfirmToken represents a token deploy confirmation message
 *
 * @generated from protobuf message scalar.evm.v1beta1.ConfirmTokenRequest
 */
export interface ConfirmTokenRequest {
    /**
     * @generated from protobuf field: bytes sender = 1;
     */
    sender: Uint8Array;
    /**
     * @generated from protobuf field: string chain = 2;
     */
    chain: string;
    /**
     * @generated from protobuf field: bytes tx_id = 3;
     */
    txId: Uint8Array;
    /**
     * @generated from protobuf field: scalar.evm.v1beta1.Asset asset = 4;
     */
    asset?: Asset;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.ConfirmTokenResponse
 */
export interface ConfirmTokenResponse {
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.ConfirmTransferKeyRequest
 */
export interface ConfirmTransferKeyRequest {
    /**
     * @generated from protobuf field: bytes sender = 1;
     */
    sender: Uint8Array;
    /**
     * @generated from protobuf field: string chain = 2;
     */
    chain: string;
    /**
     * @generated from protobuf field: bytes tx_id = 3;
     */
    txId: Uint8Array;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.ConfirmTransferKeyResponse
 */
export interface ConfirmTransferKeyResponse {
}
/**
 * MsgLink represents the message that links a cross chain address to a burner
 * address
 *
 * @generated from protobuf message scalar.evm.v1beta1.LinkRequest
 */
export interface LinkRequest {
    /**
     * @generated from protobuf field: bytes sender = 1;
     */
    sender: Uint8Array;
    /**
     * @generated from protobuf field: string chain = 2;
     */
    chain: string;
    /**
     * @generated from protobuf field: string recipient_addr = 3;
     */
    recipientAddr: string;
    /**
     * @generated from protobuf field: string asset = 4;
     */
    asset: string;
    /**
     * @generated from protobuf field: string recipient_chain = 5;
     */
    recipientChain: string;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.LinkResponse
 */
export interface LinkResponse {
    /**
     * @generated from protobuf field: string deposit_addr = 1;
     */
    depositAddr: string;
}
/**
 * CreateBurnTokensRequest represents the message to create commands to burn
 * tokens with scalarGateway
 *
 * @generated from protobuf message scalar.evm.v1beta1.CreateBurnTokensRequest
 */
export interface CreateBurnTokensRequest {
    /**
     * @generated from protobuf field: bytes sender = 1;
     */
    sender: Uint8Array;
    /**
     * @generated from protobuf field: string chain = 2;
     */
    chain: string;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.CreateBurnTokensResponse
 */
export interface CreateBurnTokensResponse {
}
/**
 * CreateDeployTokenRequest represents the message to create a deploy token
 * command for scalarGateway
 *
 * @generated from protobuf message scalar.evm.v1beta1.CreateDeployTokenRequest
 */
export interface CreateDeployTokenRequest {
    /**
     * @generated from protobuf field: bytes sender = 1;
     */
    sender: Uint8Array;
    /**
     * @generated from protobuf field: string chain = 2;
     */
    chain: string;
    /**
     * @generated from protobuf field: scalar.evm.v1beta1.Asset asset = 3;
     */
    asset?: Asset;
    /**
     * @generated from protobuf field: scalar.evm.v1beta1.TokenDetails token_details = 4;
     */
    tokenDetails?: TokenDetails;
    /**
     * @generated from protobuf field: bytes address = 6;
     */
    address: Uint8Array;
    /**
     * @generated from protobuf field: string daily_mint_limit = 7;
     */
    dailyMintLimit: string;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.CreateDeployTokenResponse
 */
export interface CreateDeployTokenResponse {
}
/**
 * CreatePendingTransfersRequest represents a message to trigger the creation of
 * commands handling all pending transfers
 *
 * @generated from protobuf message scalar.evm.v1beta1.CreatePendingTransfersRequest
 */
export interface CreatePendingTransfersRequest {
    /**
     * @generated from protobuf field: bytes sender = 1;
     */
    sender: Uint8Array;
    /**
     * @generated from protobuf field: string chain = 2;
     */
    chain: string;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.CreatePendingTransfersResponse
 */
export interface CreatePendingTransfersResponse {
}
/**
 * @deprecated
 * @generated from protobuf message scalar.evm.v1beta1.CreateTransferOwnershipRequest
 */
export interface CreateTransferOwnershipRequest {
    /**
     * @generated from protobuf field: bytes sender = 1;
     */
    sender: Uint8Array;
    /**
     * @generated from protobuf field: string chain = 2;
     */
    chain: string;
    /**
     * @generated from protobuf field: string key_id = 3;
     */
    keyId: string;
}
/**
 * @deprecated
 * @generated from protobuf message scalar.evm.v1beta1.CreateTransferOwnershipResponse
 */
export interface CreateTransferOwnershipResponse {
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.CreateTransferOperatorshipRequest
 */
export interface CreateTransferOperatorshipRequest {
    /**
     * @generated from protobuf field: bytes sender = 1;
     */
    sender: Uint8Array;
    /**
     * @generated from protobuf field: string chain = 2;
     */
    chain: string;
    /**
     * @generated from protobuf field: string key_id = 3;
     */
    keyId: string;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.CreateTransferOperatorshipResponse
 */
export interface CreateTransferOperatorshipResponse {
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.SignCommandsRequest
 */
export interface SignCommandsRequest {
    /**
     * @generated from protobuf field: bytes sender = 1;
     */
    sender: Uint8Array;
    /**
     * @generated from protobuf field: string chain = 2;
     */
    chain: string;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.SignCommandsResponse
 */
export interface SignCommandsResponse {
    /**
     * @generated from protobuf field: bytes batched_commands_id = 1;
     */
    batchedCommandsId: Uint8Array;
    /**
     * @generated from protobuf field: uint32 command_count = 2;
     */
    commandCount: number;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.AddChainRequest
 */
export interface AddChainRequest {
    /**
     * @generated from protobuf field: bytes sender = 1;
     */
    sender: Uint8Array;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @deprecated
     * @generated from protobuf field: scalar.tss.exported.v1beta1.KeyType key_type = 4 [deprecated = true];
     */
    keyType: KeyType;
    /**
     * @generated from protobuf field: bytes params = 5;
     */
    params: Uint8Array;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.AddChainResponse
 */
export interface AddChainResponse {
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.RetryFailedEventRequest
 */
export interface RetryFailedEventRequest {
    /**
     * @generated from protobuf field: bytes sender = 1;
     */
    sender: Uint8Array;
    /**
     * @generated from protobuf field: string chain = 2;
     */
    chain: string;
    /**
     * @generated from protobuf field: string event_id = 3;
     */
    eventId: string;
}
/**
 * @generated from protobuf message scalar.evm.v1beta1.RetryFailedEventResponse
 */
export interface RetryFailedEventResponse {
}
declare class SetGatewayRequest$Type extends MessageType<SetGatewayRequest> {
    constructor();
    create(value?: PartialMessage<SetGatewayRequest>): SetGatewayRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetGatewayRequest): SetGatewayRequest;
    internalBinaryWrite(message: SetGatewayRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.SetGatewayRequest
 */
export declare const SetGatewayRequest: SetGatewayRequest$Type;
declare class SetGatewayResponse$Type extends MessageType<SetGatewayResponse> {
    constructor();
    create(value?: PartialMessage<SetGatewayResponse>): SetGatewayResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetGatewayResponse): SetGatewayResponse;
    internalBinaryWrite(message: SetGatewayResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.SetGatewayResponse
 */
export declare const SetGatewayResponse: SetGatewayResponse$Type;
declare class ConfirmGatewayTxRequest$Type extends MessageType<ConfirmGatewayTxRequest> {
    constructor();
    create(value?: PartialMessage<ConfirmGatewayTxRequest>): ConfirmGatewayTxRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConfirmGatewayTxRequest): ConfirmGatewayTxRequest;
    internalBinaryWrite(message: ConfirmGatewayTxRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @deprecated
 * @generated MessageType for protobuf message scalar.evm.v1beta1.ConfirmGatewayTxRequest
 */
export declare const ConfirmGatewayTxRequest: ConfirmGatewayTxRequest$Type;
declare class ConfirmGatewayTxResponse$Type extends MessageType<ConfirmGatewayTxResponse> {
    constructor();
    create(value?: PartialMessage<ConfirmGatewayTxResponse>): ConfirmGatewayTxResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConfirmGatewayTxResponse): ConfirmGatewayTxResponse;
    internalBinaryWrite(message: ConfirmGatewayTxResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @deprecated
 * @generated MessageType for protobuf message scalar.evm.v1beta1.ConfirmGatewayTxResponse
 */
export declare const ConfirmGatewayTxResponse: ConfirmGatewayTxResponse$Type;
declare class ConfirmGatewayTxsRequest$Type extends MessageType<ConfirmGatewayTxsRequest> {
    constructor();
    create(value?: PartialMessage<ConfirmGatewayTxsRequest>): ConfirmGatewayTxsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConfirmGatewayTxsRequest): ConfirmGatewayTxsRequest;
    internalBinaryWrite(message: ConfirmGatewayTxsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.ConfirmGatewayTxsRequest
 */
export declare const ConfirmGatewayTxsRequest: ConfirmGatewayTxsRequest$Type;
declare class ConfirmGatewayTxsResponse$Type extends MessageType<ConfirmGatewayTxsResponse> {
    constructor();
    create(value?: PartialMessage<ConfirmGatewayTxsResponse>): ConfirmGatewayTxsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConfirmGatewayTxsResponse): ConfirmGatewayTxsResponse;
    internalBinaryWrite(message: ConfirmGatewayTxsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.ConfirmGatewayTxsResponse
 */
export declare const ConfirmGatewayTxsResponse: ConfirmGatewayTxsResponse$Type;
declare class ConfirmDepositRequest$Type extends MessageType<ConfirmDepositRequest> {
    constructor();
    create(value?: PartialMessage<ConfirmDepositRequest>): ConfirmDepositRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConfirmDepositRequest): ConfirmDepositRequest;
    internalBinaryWrite(message: ConfirmDepositRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.ConfirmDepositRequest
 */
export declare const ConfirmDepositRequest: ConfirmDepositRequest$Type;
declare class ConfirmDepositResponse$Type extends MessageType<ConfirmDepositResponse> {
    constructor();
    create(value?: PartialMessage<ConfirmDepositResponse>): ConfirmDepositResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConfirmDepositResponse): ConfirmDepositResponse;
    internalBinaryWrite(message: ConfirmDepositResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.ConfirmDepositResponse
 */
export declare const ConfirmDepositResponse: ConfirmDepositResponse$Type;
declare class ConfirmTokenRequest$Type extends MessageType<ConfirmTokenRequest> {
    constructor();
    create(value?: PartialMessage<ConfirmTokenRequest>): ConfirmTokenRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConfirmTokenRequest): ConfirmTokenRequest;
    internalBinaryWrite(message: ConfirmTokenRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.ConfirmTokenRequest
 */
export declare const ConfirmTokenRequest: ConfirmTokenRequest$Type;
declare class ConfirmTokenResponse$Type extends MessageType<ConfirmTokenResponse> {
    constructor();
    create(value?: PartialMessage<ConfirmTokenResponse>): ConfirmTokenResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConfirmTokenResponse): ConfirmTokenResponse;
    internalBinaryWrite(message: ConfirmTokenResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.ConfirmTokenResponse
 */
export declare const ConfirmTokenResponse: ConfirmTokenResponse$Type;
declare class ConfirmTransferKeyRequest$Type extends MessageType<ConfirmTransferKeyRequest> {
    constructor();
    create(value?: PartialMessage<ConfirmTransferKeyRequest>): ConfirmTransferKeyRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConfirmTransferKeyRequest): ConfirmTransferKeyRequest;
    internalBinaryWrite(message: ConfirmTransferKeyRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.ConfirmTransferKeyRequest
 */
export declare const ConfirmTransferKeyRequest: ConfirmTransferKeyRequest$Type;
declare class ConfirmTransferKeyResponse$Type extends MessageType<ConfirmTransferKeyResponse> {
    constructor();
    create(value?: PartialMessage<ConfirmTransferKeyResponse>): ConfirmTransferKeyResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConfirmTransferKeyResponse): ConfirmTransferKeyResponse;
    internalBinaryWrite(message: ConfirmTransferKeyResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.ConfirmTransferKeyResponse
 */
export declare const ConfirmTransferKeyResponse: ConfirmTransferKeyResponse$Type;
declare class LinkRequest$Type extends MessageType<LinkRequest> {
    constructor();
    create(value?: PartialMessage<LinkRequest>): LinkRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LinkRequest): LinkRequest;
    internalBinaryWrite(message: LinkRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.LinkRequest
 */
export declare const LinkRequest: LinkRequest$Type;
declare class LinkResponse$Type extends MessageType<LinkResponse> {
    constructor();
    create(value?: PartialMessage<LinkResponse>): LinkResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LinkResponse): LinkResponse;
    internalBinaryWrite(message: LinkResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.LinkResponse
 */
export declare const LinkResponse: LinkResponse$Type;
declare class CreateBurnTokensRequest$Type extends MessageType<CreateBurnTokensRequest> {
    constructor();
    create(value?: PartialMessage<CreateBurnTokensRequest>): CreateBurnTokensRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateBurnTokensRequest): CreateBurnTokensRequest;
    internalBinaryWrite(message: CreateBurnTokensRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.CreateBurnTokensRequest
 */
export declare const CreateBurnTokensRequest: CreateBurnTokensRequest$Type;
declare class CreateBurnTokensResponse$Type extends MessageType<CreateBurnTokensResponse> {
    constructor();
    create(value?: PartialMessage<CreateBurnTokensResponse>): CreateBurnTokensResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateBurnTokensResponse): CreateBurnTokensResponse;
    internalBinaryWrite(message: CreateBurnTokensResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.CreateBurnTokensResponse
 */
export declare const CreateBurnTokensResponse: CreateBurnTokensResponse$Type;
declare class CreateDeployTokenRequest$Type extends MessageType<CreateDeployTokenRequest> {
    constructor();
    create(value?: PartialMessage<CreateDeployTokenRequest>): CreateDeployTokenRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateDeployTokenRequest): CreateDeployTokenRequest;
    internalBinaryWrite(message: CreateDeployTokenRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.CreateDeployTokenRequest
 */
export declare const CreateDeployTokenRequest: CreateDeployTokenRequest$Type;
declare class CreateDeployTokenResponse$Type extends MessageType<CreateDeployTokenResponse> {
    constructor();
    create(value?: PartialMessage<CreateDeployTokenResponse>): CreateDeployTokenResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateDeployTokenResponse): CreateDeployTokenResponse;
    internalBinaryWrite(message: CreateDeployTokenResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.CreateDeployTokenResponse
 */
export declare const CreateDeployTokenResponse: CreateDeployTokenResponse$Type;
declare class CreatePendingTransfersRequest$Type extends MessageType<CreatePendingTransfersRequest> {
    constructor();
    create(value?: PartialMessage<CreatePendingTransfersRequest>): CreatePendingTransfersRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreatePendingTransfersRequest): CreatePendingTransfersRequest;
    internalBinaryWrite(message: CreatePendingTransfersRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.CreatePendingTransfersRequest
 */
export declare const CreatePendingTransfersRequest: CreatePendingTransfersRequest$Type;
declare class CreatePendingTransfersResponse$Type extends MessageType<CreatePendingTransfersResponse> {
    constructor();
    create(value?: PartialMessage<CreatePendingTransfersResponse>): CreatePendingTransfersResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreatePendingTransfersResponse): CreatePendingTransfersResponse;
    internalBinaryWrite(message: CreatePendingTransfersResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.CreatePendingTransfersResponse
 */
export declare const CreatePendingTransfersResponse: CreatePendingTransfersResponse$Type;
declare class CreateTransferOwnershipRequest$Type extends MessageType<CreateTransferOwnershipRequest> {
    constructor();
    create(value?: PartialMessage<CreateTransferOwnershipRequest>): CreateTransferOwnershipRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateTransferOwnershipRequest): CreateTransferOwnershipRequest;
    internalBinaryWrite(message: CreateTransferOwnershipRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @deprecated
 * @generated MessageType for protobuf message scalar.evm.v1beta1.CreateTransferOwnershipRequest
 */
export declare const CreateTransferOwnershipRequest: CreateTransferOwnershipRequest$Type;
declare class CreateTransferOwnershipResponse$Type extends MessageType<CreateTransferOwnershipResponse> {
    constructor();
    create(value?: PartialMessage<CreateTransferOwnershipResponse>): CreateTransferOwnershipResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateTransferOwnershipResponse): CreateTransferOwnershipResponse;
    internalBinaryWrite(message: CreateTransferOwnershipResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @deprecated
 * @generated MessageType for protobuf message scalar.evm.v1beta1.CreateTransferOwnershipResponse
 */
export declare const CreateTransferOwnershipResponse: CreateTransferOwnershipResponse$Type;
declare class CreateTransferOperatorshipRequest$Type extends MessageType<CreateTransferOperatorshipRequest> {
    constructor();
    create(value?: PartialMessage<CreateTransferOperatorshipRequest>): CreateTransferOperatorshipRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateTransferOperatorshipRequest): CreateTransferOperatorshipRequest;
    internalBinaryWrite(message: CreateTransferOperatorshipRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.CreateTransferOperatorshipRequest
 */
export declare const CreateTransferOperatorshipRequest: CreateTransferOperatorshipRequest$Type;
declare class CreateTransferOperatorshipResponse$Type extends MessageType<CreateTransferOperatorshipResponse> {
    constructor();
    create(value?: PartialMessage<CreateTransferOperatorshipResponse>): CreateTransferOperatorshipResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateTransferOperatorshipResponse): CreateTransferOperatorshipResponse;
    internalBinaryWrite(message: CreateTransferOperatorshipResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.CreateTransferOperatorshipResponse
 */
export declare const CreateTransferOperatorshipResponse: CreateTransferOperatorshipResponse$Type;
declare class SignCommandsRequest$Type extends MessageType<SignCommandsRequest> {
    constructor();
    create(value?: PartialMessage<SignCommandsRequest>): SignCommandsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SignCommandsRequest): SignCommandsRequest;
    internalBinaryWrite(message: SignCommandsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.SignCommandsRequest
 */
export declare const SignCommandsRequest: SignCommandsRequest$Type;
declare class SignCommandsResponse$Type extends MessageType<SignCommandsResponse> {
    constructor();
    create(value?: PartialMessage<SignCommandsResponse>): SignCommandsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SignCommandsResponse): SignCommandsResponse;
    internalBinaryWrite(message: SignCommandsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.SignCommandsResponse
 */
export declare const SignCommandsResponse: SignCommandsResponse$Type;
declare class AddChainRequest$Type extends MessageType<AddChainRequest> {
    constructor();
    create(value?: PartialMessage<AddChainRequest>): AddChainRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AddChainRequest): AddChainRequest;
    internalBinaryWrite(message: AddChainRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.AddChainRequest
 */
export declare const AddChainRequest: AddChainRequest$Type;
declare class AddChainResponse$Type extends MessageType<AddChainResponse> {
    constructor();
    create(value?: PartialMessage<AddChainResponse>): AddChainResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AddChainResponse): AddChainResponse;
    internalBinaryWrite(message: AddChainResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.AddChainResponse
 */
export declare const AddChainResponse: AddChainResponse$Type;
declare class RetryFailedEventRequest$Type extends MessageType<RetryFailedEventRequest> {
    constructor();
    create(value?: PartialMessage<RetryFailedEventRequest>): RetryFailedEventRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RetryFailedEventRequest): RetryFailedEventRequest;
    internalBinaryWrite(message: RetryFailedEventRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.RetryFailedEventRequest
 */
export declare const RetryFailedEventRequest: RetryFailedEventRequest$Type;
declare class RetryFailedEventResponse$Type extends MessageType<RetryFailedEventResponse> {
    constructor();
    create(value?: PartialMessage<RetryFailedEventResponse>): RetryFailedEventResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RetryFailedEventResponse): RetryFailedEventResponse;
    internalBinaryWrite(message: RetryFailedEventResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.evm.v1beta1.RetryFailedEventResponse
 */
export declare const RetryFailedEventResponse: RetryFailedEventResponse$Type;
export {};
