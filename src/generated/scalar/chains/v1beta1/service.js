// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "scalar/chains/v1beta1/service.proto" (package "scalar.chains.v1beta1", syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "scalar/chains/v1beta1/service.proto" (package "scalar.chains.v1beta1", syntax proto3)
// tslint:disable
import { ParamsResponse } from "./query";
import { ParamsRequest } from "./query";
import { TokenInfoResponse } from "./query";
import { TokenInfoRequest } from "./query";
import { ERC20TokensResponse } from "./query";
import { ERC20TokensRequest } from "./query";
import { EventResponse } from "./query";
import { EventRequest } from "./query";
import { BytecodeResponse } from "./query";
import { BytecodeRequest } from "./query";
import { GatewayAddressResponse } from "./query";
import { GatewayAddressRequest } from "./query";
import { KeyAddressResponse } from "./query";
import { KeyAddressRequest } from "./query";
import { CommandResponse } from "./query";
import { CommandRequest } from "./query";
import { ChainsResponse } from "./query";
import { ChainsRequest } from "./query";
import { PendingCommandsResponse } from "./query";
import { PendingCommandsRequest } from "./query";
import { ConfirmationHeightResponse } from "./query";
import { ConfirmationHeightRequest } from "./query";
import { BurnerInfoResponse } from "./query";
import { BurnerInfoRequest } from "./query";
import { BatchedCommandsResponse } from "./query";
import { BatchedCommandsRequest } from "./query";
import { RetryFailedEventResponse } from "./tx";
import { RetryFailedEventRequest } from "./tx";
import { AddChainResponse } from "./tx";
import { AddChainRequest } from "./tx";
import { SignCommandsResponse } from "./tx";
import { SignCommandsRequest } from "./tx";
import { CreateTransferOperatorshipResponse } from "./tx";
import { CreateTransferOperatorshipRequest } from "./tx";
import { CreatePendingTransfersResponse } from "./tx";
import { CreatePendingTransfersRequest } from "./tx";
import { CreateBurnTokensResponse } from "./tx";
import { CreateBurnTokensRequest } from "./tx";
import { CreateDeployTokenResponse } from "./tx";
import { CreateDeployTokenRequest } from "./tx";
import { ConfirmTransferKeyResponse } from "./tx";
import { ConfirmTransferKeyRequest } from "./tx";
import { ConfirmDepositResponse } from "./tx";
import { ConfirmDepositRequest } from "./tx";
import { ConfirmTokenResponse } from "./tx";
import { ConfirmTokenRequest } from "./tx";
import { LinkResponse } from "./tx";
import { LinkRequest } from "./tx";
import { SetGatewayResponse } from "./tx";
import { SetGatewayRequest } from "./tx";
import { ConfirmSourceTxsResponse } from "./tx";
import { ConfirmSourceTxsRequest } from "./tx";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
/**
 * @generated ServiceType for protobuf service scalar.chains.v1beta1.MsgService
 */
export const MsgService = new ServiceType("scalar.chains.v1beta1.MsgService", [
    { name: "ConfirmSourceTxs", options: { "google.api.http": { post: "/scalar/chains/v1beta1/confirm_source_txs", body: "*" } }, I: ConfirmSourceTxsRequest, O: ConfirmSourceTxsResponse },
    { name: "SetGateway", options: { "google.api.http": { post: "/scalar/chains/v1beta1/set_gateway", body: "*" } }, I: SetGatewayRequest, O: SetGatewayResponse },
    { name: "Link", options: { "google.api.http": { post: "/scalar/chains/v1beta1/link", body: "*" } }, I: LinkRequest, O: LinkResponse },
    { name: "ConfirmToken", options: { "google.api.http": { post: "/scalar/chains/v1beta1/confirm_token", body: "*" } }, I: ConfirmTokenRequest, O: ConfirmTokenResponse },
    { name: "ConfirmDeposit", options: { "google.api.http": { post: "/scalar/chains/v1beta1/confirm_deposit", body: "*" } }, I: ConfirmDepositRequest, O: ConfirmDepositResponse },
    { name: "ConfirmTransferKey", options: { "google.api.http": { post: "/scalar/chains/confirm_transfer_key", body: "*" } }, I: ConfirmTransferKeyRequest, O: ConfirmTransferKeyResponse },
    { name: "CreateDeployToken", options: { "google.api.http": { post: "/scalar/chains/v1beta1/create_deploy_token", body: "*" } }, I: CreateDeployTokenRequest, O: CreateDeployTokenResponse },
    { name: "CreateBurnTokens", options: { "google.api.http": { post: "/scalar/chains/v1beta1/create_burn_tokens", body: "*" } }, I: CreateBurnTokensRequest, O: CreateBurnTokensResponse },
    { name: "CreatePendingTransfers", options: { "google.api.http": { post: "/scalar/chains/v1beta1/create_pending_transfers", body: "*" } }, I: CreatePendingTransfersRequest, O: CreatePendingTransfersResponse },
    { name: "CreateTransferOperatorship", options: { "google.api.http": { post: "/scalar/chains/v1beta1/create_transfer_operatorship", body: "*" } }, I: CreateTransferOperatorshipRequest, O: CreateTransferOperatorshipResponse },
    { name: "SignCommands", options: { "google.api.http": { post: "/scalar/chains/v1beta1/sign_commands", body: "*" } }, I: SignCommandsRequest, O: SignCommandsResponse },
    { name: "AddChain", options: { "google.api.http": { post: "/scalar/chains/v1beta1/add_chain", body: "*" } }, I: AddChainRequest, O: AddChainResponse },
    { name: "RetryFailedEvent", options: { "google.api.http": { post: "/scalar/chains/v1beta1/retry-failed-event", body: "*" } }, I: RetryFailedEventRequest, O: RetryFailedEventResponse }
]);
/**
 * @generated ServiceType for protobuf service scalar.chains.v1beta1.QueryService
 */
export const QueryService = new ServiceType("scalar.chains.v1beta1.QueryService", [
    { name: "BatchedCommands", options: { "google.api.http": { get: "/scalar/chains/v1beta1/batched_commands/{chain}/{id}" } }, I: BatchedCommandsRequest, O: BatchedCommandsResponse },
    { name: "BurnerInfo", options: { "google.api.http": { get: "/scalar/chains/v1beta1/burner_info" } }, I: BurnerInfoRequest, O: BurnerInfoResponse },
    { name: "ConfirmationHeight", options: { "google.api.http": { get: "/scalar/chains/v1beta1/confirmation_height/{chain}" } }, I: ConfirmationHeightRequest, O: ConfirmationHeightResponse },
    { name: "PendingCommands", options: { "google.api.http": { get: "/scalar/chains/v1beta1/pending_commands/{chain}" } }, I: PendingCommandsRequest, O: PendingCommandsResponse },
    { name: "Chains", options: { "google.api.http": { get: "/scalar/chains/v1beta1/chains" } }, I: ChainsRequest, O: ChainsResponse },
    { name: "Command", options: { "google.api.http": { get: "/scalar/chains/v1beta1/command_request" } }, I: CommandRequest, O: CommandResponse },
    { name: "KeyAddress", options: { "google.api.http": { get: "/scalar/chains/v1beta1/key_address/{chain}" } }, I: KeyAddressRequest, O: KeyAddressResponse },
    { name: "GatewayAddress", options: { "google.api.http": { get: "/scalar/chains/v1beta1/gateway_address/{chain}" } }, I: GatewayAddressRequest, O: GatewayAddressResponse },
    { name: "Bytecode", options: { "google.api.http": { get: "/scalar/chains/v1beta1/bytecode/{chain}/{contract}" } }, I: BytecodeRequest, O: BytecodeResponse },
    { name: "Event", options: { "google.api.http": { get: "/scalar/chains/v1beta1/event/{chain}/{event_id}" } }, I: EventRequest, O: EventResponse },
    { name: "ERC20Tokens", options: { "google.api.http": { get: "/scalar/chains/v1beta1/erc20_tokens/{chain}" } }, I: ERC20TokensRequest, O: ERC20TokensResponse },
    { name: "TokenInfo", options: { "google.api.http": { get: "/scalar/chains/v1beta1/token_info/{chain}" } }, I: TokenInfoRequest, O: TokenInfoResponse },
    { name: "Params", options: { "google.api.http": { get: "/scalar/chains/v1beta1/params/{chain}" } }, I: ParamsRequest, O: ParamsResponse }
]);
