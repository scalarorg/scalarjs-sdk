// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/evm/v1beta1/service.proto" (package "axelar.evm.v1beta1", syntax proto3)
// tslint:disable
import type { ParamsResponse } from "./query";
import type { ParamsRequest } from "./query";
import type { TokenInfoResponse } from "./query";
import type { TokenInfoRequest } from "./query";
import type { ERC20TokensResponse } from "./query";
import type { ERC20TokensRequest } from "./query";
import type { EventResponse } from "./query";
import type { EventRequest } from "./query";
import type { BytecodeResponse } from "./query";
import type { BytecodeRequest } from "./query";
import type { GatewayAddressResponse } from "./query";
import type { GatewayAddressRequest } from "./query";
import type { KeyAddressResponse } from "./query";
import type { KeyAddressRequest } from "./query";
import type { CommandResponse } from "./query";
import type { CommandRequest } from "./query";
import type { ChainsResponse } from "./query";
import type { ChainsRequest } from "./query";
import type { PendingCommandsResponse } from "./query";
import type { PendingCommandsRequest } from "./query";
import type { DepositStateResponse } from "./query";
import type { DepositStateRequest } from "./query";
import type { ConfirmationHeightResponse } from "./query";
import type { ConfirmationHeightRequest } from "./query";
import type { BurnerInfoResponse } from "./query";
import type { BurnerInfoRequest } from "./query";
import type { BatchedCommandsResponse } from "./query";
import type { BatchedCommandsRequest } from "./query";
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { RetryFailedEventResponse } from "./tx";
import type { RetryFailedEventRequest } from "./tx";
import type { AddChainResponse } from "./tx";
import type { AddChainRequest } from "./tx";
import type { SignCommandsResponse } from "./tx";
import type { SignCommandsRequest } from "./tx";
import type { CreateTransferOperatorshipResponse } from "./tx";
import type { CreateTransferOperatorshipRequest } from "./tx";
import type { CreatePendingTransfersResponse } from "./tx";
import type { CreatePendingTransfersRequest } from "./tx";
import type { CreateBurnTokensResponse } from "./tx";
import type { CreateBurnTokensRequest } from "./tx";
import type { CreateDeployTokenResponse } from "./tx";
import type { CreateDeployTokenRequest } from "./tx";
import type { ConfirmTransferKeyResponse } from "./tx";
import type { ConfirmTransferKeyRequest } from "./tx";
import type { ConfirmDepositResponse } from "./tx";
import type { ConfirmDepositRequest } from "./tx";
import type { ConfirmTokenResponse } from "./tx";
import type { ConfirmTokenRequest } from "./tx";
import type { LinkResponse } from "./tx";
import type { LinkRequest } from "./tx";
import type { ConfirmGatewayTxsResponse } from "./tx";
import type { ConfirmGatewayTxsRequest } from "./tx";
import type { ConfirmGatewayTxResponse } from "./tx";
import type { ConfirmGatewayTxRequest } from "./tx";
import type { SetGatewayResponse } from "./tx";
import type { SetGatewayRequest } from "./tx";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Msg defines the evm Msg service.
 *
 * @generated from protobuf service axelar.evm.v1beta1.MsgService
 */
export interface IMsgServiceClient {
    /**
     * @generated from protobuf rpc: SetGateway(axelar.evm.v1beta1.SetGatewayRequest) returns (axelar.evm.v1beta1.SetGatewayResponse);
     */
    setGateway(input: SetGatewayRequest, options?: RpcOptions): UnaryCall<SetGatewayRequest, SetGatewayResponse>;
    /**
     * Deprecated: use ConfirmGatewayTxs instead
     *
     * @generated from protobuf rpc: ConfirmGatewayTx(axelar.evm.v1beta1.ConfirmGatewayTxRequest) returns (axelar.evm.v1beta1.ConfirmGatewayTxResponse);
     */
    confirmGatewayTx(input: ConfirmGatewayTxRequest, options?: RpcOptions): UnaryCall<ConfirmGatewayTxRequest, ConfirmGatewayTxResponse>;
    /**
     * @generated from protobuf rpc: ConfirmGatewayTxs(axelar.evm.v1beta1.ConfirmGatewayTxsRequest) returns (axelar.evm.v1beta1.ConfirmGatewayTxsResponse);
     */
    confirmGatewayTxs(input: ConfirmGatewayTxsRequest, options?: RpcOptions): UnaryCall<ConfirmGatewayTxsRequest, ConfirmGatewayTxsResponse>;
    /**
     * @generated from protobuf rpc: Link(axelar.evm.v1beta1.LinkRequest) returns (axelar.evm.v1beta1.LinkResponse);
     */
    link(input: LinkRequest, options?: RpcOptions): UnaryCall<LinkRequest, LinkResponse>;
    /**
     * @generated from protobuf rpc: ConfirmToken(axelar.evm.v1beta1.ConfirmTokenRequest) returns (axelar.evm.v1beta1.ConfirmTokenResponse);
     */
    confirmToken(input: ConfirmTokenRequest, options?: RpcOptions): UnaryCall<ConfirmTokenRequest, ConfirmTokenResponse>;
    /**
     * @generated from protobuf rpc: ConfirmDeposit(axelar.evm.v1beta1.ConfirmDepositRequest) returns (axelar.evm.v1beta1.ConfirmDepositResponse);
     */
    confirmDeposit(input: ConfirmDepositRequest, options?: RpcOptions): UnaryCall<ConfirmDepositRequest, ConfirmDepositResponse>;
    /**
     * @generated from protobuf rpc: ConfirmTransferKey(axelar.evm.v1beta1.ConfirmTransferKeyRequest) returns (axelar.evm.v1beta1.ConfirmTransferKeyResponse);
     */
    confirmTransferKey(input: ConfirmTransferKeyRequest, options?: RpcOptions): UnaryCall<ConfirmTransferKeyRequest, ConfirmTransferKeyResponse>;
    /**
     * @generated from protobuf rpc: CreateDeployToken(axelar.evm.v1beta1.CreateDeployTokenRequest) returns (axelar.evm.v1beta1.CreateDeployTokenResponse);
     */
    createDeployToken(input: CreateDeployTokenRequest, options?: RpcOptions): UnaryCall<CreateDeployTokenRequest, CreateDeployTokenResponse>;
    /**
     * @generated from protobuf rpc: CreateBurnTokens(axelar.evm.v1beta1.CreateBurnTokensRequest) returns (axelar.evm.v1beta1.CreateBurnTokensResponse);
     */
    createBurnTokens(input: CreateBurnTokensRequest, options?: RpcOptions): UnaryCall<CreateBurnTokensRequest, CreateBurnTokensResponse>;
    /**
     * @generated from protobuf rpc: CreatePendingTransfers(axelar.evm.v1beta1.CreatePendingTransfersRequest) returns (axelar.evm.v1beta1.CreatePendingTransfersResponse);
     */
    createPendingTransfers(input: CreatePendingTransfersRequest, options?: RpcOptions): UnaryCall<CreatePendingTransfersRequest, CreatePendingTransfersResponse>;
    /**
     * @generated from protobuf rpc: CreateTransferOperatorship(axelar.evm.v1beta1.CreateTransferOperatorshipRequest) returns (axelar.evm.v1beta1.CreateTransferOperatorshipResponse);
     */
    createTransferOperatorship(input: CreateTransferOperatorshipRequest, options?: RpcOptions): UnaryCall<CreateTransferOperatorshipRequest, CreateTransferOperatorshipResponse>;
    /**
     * @generated from protobuf rpc: SignCommands(axelar.evm.v1beta1.SignCommandsRequest) returns (axelar.evm.v1beta1.SignCommandsResponse);
     */
    signCommands(input: SignCommandsRequest, options?: RpcOptions): UnaryCall<SignCommandsRequest, SignCommandsResponse>;
    /**
     * @generated from protobuf rpc: AddChain(axelar.evm.v1beta1.AddChainRequest) returns (axelar.evm.v1beta1.AddChainResponse);
     */
    addChain(input: AddChainRequest, options?: RpcOptions): UnaryCall<AddChainRequest, AddChainResponse>;
    /**
     * @generated from protobuf rpc: RetryFailedEvent(axelar.evm.v1beta1.RetryFailedEventRequest) returns (axelar.evm.v1beta1.RetryFailedEventResponse);
     */
    retryFailedEvent(input: RetryFailedEventRequest, options?: RpcOptions): UnaryCall<RetryFailedEventRequest, RetryFailedEventResponse>;
}
/**
 * Msg defines the evm Msg service.
 *
 * @generated from protobuf service axelar.evm.v1beta1.MsgService
 */
export declare class MsgServiceClient implements IMsgServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: any;
    methods: any;
    options: any;
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: SetGateway(axelar.evm.v1beta1.SetGatewayRequest) returns (axelar.evm.v1beta1.SetGatewayResponse);
     */
    setGateway(input: SetGatewayRequest, options?: RpcOptions): UnaryCall<SetGatewayRequest, SetGatewayResponse>;
    /**
     * Deprecated: use ConfirmGatewayTxs instead
     *
     * @generated from protobuf rpc: ConfirmGatewayTx(axelar.evm.v1beta1.ConfirmGatewayTxRequest) returns (axelar.evm.v1beta1.ConfirmGatewayTxResponse);
     */
    confirmGatewayTx(input: ConfirmGatewayTxRequest, options?: RpcOptions): UnaryCall<ConfirmGatewayTxRequest, ConfirmGatewayTxResponse>;
    /**
     * @generated from protobuf rpc: ConfirmGatewayTxs(axelar.evm.v1beta1.ConfirmGatewayTxsRequest) returns (axelar.evm.v1beta1.ConfirmGatewayTxsResponse);
     */
    confirmGatewayTxs(input: ConfirmGatewayTxsRequest, options?: RpcOptions): UnaryCall<ConfirmGatewayTxsRequest, ConfirmGatewayTxsResponse>;
    /**
     * @generated from protobuf rpc: Link(axelar.evm.v1beta1.LinkRequest) returns (axelar.evm.v1beta1.LinkResponse);
     */
    link(input: LinkRequest, options?: RpcOptions): UnaryCall<LinkRequest, LinkResponse>;
    /**
     * @generated from protobuf rpc: ConfirmToken(axelar.evm.v1beta1.ConfirmTokenRequest) returns (axelar.evm.v1beta1.ConfirmTokenResponse);
     */
    confirmToken(input: ConfirmTokenRequest, options?: RpcOptions): UnaryCall<ConfirmTokenRequest, ConfirmTokenResponse>;
    /**
     * @generated from protobuf rpc: ConfirmDeposit(axelar.evm.v1beta1.ConfirmDepositRequest) returns (axelar.evm.v1beta1.ConfirmDepositResponse);
     */
    confirmDeposit(input: ConfirmDepositRequest, options?: RpcOptions): UnaryCall<ConfirmDepositRequest, ConfirmDepositResponse>;
    /**
     * @generated from protobuf rpc: ConfirmTransferKey(axelar.evm.v1beta1.ConfirmTransferKeyRequest) returns (axelar.evm.v1beta1.ConfirmTransferKeyResponse);
     */
    confirmTransferKey(input: ConfirmTransferKeyRequest, options?: RpcOptions): UnaryCall<ConfirmTransferKeyRequest, ConfirmTransferKeyResponse>;
    /**
     * @generated from protobuf rpc: CreateDeployToken(axelar.evm.v1beta1.CreateDeployTokenRequest) returns (axelar.evm.v1beta1.CreateDeployTokenResponse);
     */
    createDeployToken(input: CreateDeployTokenRequest, options?: RpcOptions): UnaryCall<CreateDeployTokenRequest, CreateDeployTokenResponse>;
    /**
     * @generated from protobuf rpc: CreateBurnTokens(axelar.evm.v1beta1.CreateBurnTokensRequest) returns (axelar.evm.v1beta1.CreateBurnTokensResponse);
     */
    createBurnTokens(input: CreateBurnTokensRequest, options?: RpcOptions): UnaryCall<CreateBurnTokensRequest, CreateBurnTokensResponse>;
    /**
     * @generated from protobuf rpc: CreatePendingTransfers(axelar.evm.v1beta1.CreatePendingTransfersRequest) returns (axelar.evm.v1beta1.CreatePendingTransfersResponse);
     */
    createPendingTransfers(input: CreatePendingTransfersRequest, options?: RpcOptions): UnaryCall<CreatePendingTransfersRequest, CreatePendingTransfersResponse>;
    /**
     * @generated from protobuf rpc: CreateTransferOperatorship(axelar.evm.v1beta1.CreateTransferOperatorshipRequest) returns (axelar.evm.v1beta1.CreateTransferOperatorshipResponse);
     */
    createTransferOperatorship(input: CreateTransferOperatorshipRequest, options?: RpcOptions): UnaryCall<CreateTransferOperatorshipRequest, CreateTransferOperatorshipResponse>;
    /**
     * @generated from protobuf rpc: SignCommands(axelar.evm.v1beta1.SignCommandsRequest) returns (axelar.evm.v1beta1.SignCommandsResponse);
     */
    signCommands(input: SignCommandsRequest, options?: RpcOptions): UnaryCall<SignCommandsRequest, SignCommandsResponse>;
    /**
     * @generated from protobuf rpc: AddChain(axelar.evm.v1beta1.AddChainRequest) returns (axelar.evm.v1beta1.AddChainResponse);
     */
    addChain(input: AddChainRequest, options?: RpcOptions): UnaryCall<AddChainRequest, AddChainResponse>;
    /**
     * @generated from protobuf rpc: RetryFailedEvent(axelar.evm.v1beta1.RetryFailedEventRequest) returns (axelar.evm.v1beta1.RetryFailedEventResponse);
     */
    retryFailedEvent(input: RetryFailedEventRequest, options?: RpcOptions): UnaryCall<RetryFailedEventRequest, RetryFailedEventResponse>;
}
/**
 * QueryService defines the gRPC querier service.
 *
 * @generated from protobuf service axelar.evm.v1beta1.QueryService
 */
export interface IQueryServiceClient {
    /**
     * BatchedCommands queries the batched commands for a specified chain and
     * BatchedCommandsID if no BatchedCommandsID is specified, then it returns the
     * latest batched commands
     *
     * @generated from protobuf rpc: BatchedCommands(axelar.evm.v1beta1.BatchedCommandsRequest) returns (axelar.evm.v1beta1.BatchedCommandsResponse);
     */
    batchedCommands(input: BatchedCommandsRequest, options?: RpcOptions): UnaryCall<BatchedCommandsRequest, BatchedCommandsResponse>;
    /**
     * BurnerInfo queries the burner info for the specified address
     *
     * @generated from protobuf rpc: BurnerInfo(axelar.evm.v1beta1.BurnerInfoRequest) returns (axelar.evm.v1beta1.BurnerInfoResponse);
     */
    burnerInfo(input: BurnerInfoRequest, options?: RpcOptions): UnaryCall<BurnerInfoRequest, BurnerInfoResponse>;
    /**
     * ConfirmationHeight queries the confirmation height for the specified chain
     *
     * @generated from protobuf rpc: ConfirmationHeight(axelar.evm.v1beta1.ConfirmationHeightRequest) returns (axelar.evm.v1beta1.ConfirmationHeightResponse);
     */
    confirmationHeight(input: ConfirmationHeightRequest, options?: RpcOptions): UnaryCall<ConfirmationHeightRequest, ConfirmationHeightResponse>;
    /**
     * DepositState queries the state of the specified deposit
     *
     * @deprecated
     * @generated from protobuf rpc: DepositState(axelar.evm.v1beta1.DepositStateRequest) returns (axelar.evm.v1beta1.DepositStateResponse);
     */
    depositState(input: DepositStateRequest, options?: RpcOptions): UnaryCall<DepositStateRequest, DepositStateResponse>;
    /**
     * PendingCommands queries the pending commands for the specified chain
     *
     * @generated from protobuf rpc: PendingCommands(axelar.evm.v1beta1.PendingCommandsRequest) returns (axelar.evm.v1beta1.PendingCommandsResponse);
     */
    pendingCommands(input: PendingCommandsRequest, options?: RpcOptions): UnaryCall<PendingCommandsRequest, PendingCommandsResponse>;
    /**
     * Chains queries the available evm chains
     *
     * @generated from protobuf rpc: Chains(axelar.evm.v1beta1.ChainsRequest) returns (axelar.evm.v1beta1.ChainsResponse);
     */
    chains(input: ChainsRequest, options?: RpcOptions): UnaryCall<ChainsRequest, ChainsResponse>;
    /**
     * Command queries the command of a chain provided the command id
     *
     * @generated from protobuf rpc: Command(axelar.evm.v1beta1.CommandRequest) returns (axelar.evm.v1beta1.CommandResponse);
     */
    command(input: CommandRequest, options?: RpcOptions): UnaryCall<CommandRequest, CommandResponse>;
    /**
     * KeyAddress queries the address of key of a chain
     *
     * @generated from protobuf rpc: KeyAddress(axelar.evm.v1beta1.KeyAddressRequest) returns (axelar.evm.v1beta1.KeyAddressResponse);
     */
    keyAddress(input: KeyAddressRequest, options?: RpcOptions): UnaryCall<KeyAddressRequest, KeyAddressResponse>;
    /**
     * GatewayAddress queries the address of axelar gateway at the specified
     * chain
     *
     * @generated from protobuf rpc: GatewayAddress(axelar.evm.v1beta1.GatewayAddressRequest) returns (axelar.evm.v1beta1.GatewayAddressResponse);
     */
    gatewayAddress(input: GatewayAddressRequest, options?: RpcOptions): UnaryCall<GatewayAddressRequest, GatewayAddressResponse>;
    /**
     * Bytecode queries the bytecode of a specified gateway at the specified
     * chain
     *
     * @generated from protobuf rpc: Bytecode(axelar.evm.v1beta1.BytecodeRequest) returns (axelar.evm.v1beta1.BytecodeResponse);
     */
    bytecode(input: BytecodeRequest, options?: RpcOptions): UnaryCall<BytecodeRequest, BytecodeResponse>;
    /**
     * Event queries an event at the specified chain
     *
     * @generated from protobuf rpc: Event(axelar.evm.v1beta1.EventRequest) returns (axelar.evm.v1beta1.EventResponse);
     */
    event(input: EventRequest, options?: RpcOptions): UnaryCall<EventRequest, EventResponse>;
    /**
     * ERC20Tokens queries the ERC20 tokens registered for a chain
     *
     * @generated from protobuf rpc: ERC20Tokens(axelar.evm.v1beta1.ERC20TokensRequest) returns (axelar.evm.v1beta1.ERC20TokensResponse);
     */
    eRC20Tokens(input: ERC20TokensRequest, options?: RpcOptions): UnaryCall<ERC20TokensRequest, ERC20TokensResponse>;
    /**
     * TokenInfo queries the token info for a registered ERC20 Token
     *
     * @generated from protobuf rpc: TokenInfo(axelar.evm.v1beta1.TokenInfoRequest) returns (axelar.evm.v1beta1.TokenInfoResponse);
     */
    tokenInfo(input: TokenInfoRequest, options?: RpcOptions): UnaryCall<TokenInfoRequest, TokenInfoResponse>;
    /**
     * @generated from protobuf rpc: Params(axelar.evm.v1beta1.ParamsRequest) returns (axelar.evm.v1beta1.ParamsResponse);
     */
    params(input: ParamsRequest, options?: RpcOptions): UnaryCall<ParamsRequest, ParamsResponse>;
}
/**
 * QueryService defines the gRPC querier service.
 *
 * @generated from protobuf service axelar.evm.v1beta1.QueryService
 */
export declare class QueryServiceClient implements IQueryServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: any;
    methods: any;
    options: any;
    constructor(_transport: RpcTransport);
    /**
     * BatchedCommands queries the batched commands for a specified chain and
     * BatchedCommandsID if no BatchedCommandsID is specified, then it returns the
     * latest batched commands
     *
     * @generated from protobuf rpc: BatchedCommands(axelar.evm.v1beta1.BatchedCommandsRequest) returns (axelar.evm.v1beta1.BatchedCommandsResponse);
     */
    batchedCommands(input: BatchedCommandsRequest, options?: RpcOptions): UnaryCall<BatchedCommandsRequest, BatchedCommandsResponse>;
    /**
     * BurnerInfo queries the burner info for the specified address
     *
     * @generated from protobuf rpc: BurnerInfo(axelar.evm.v1beta1.BurnerInfoRequest) returns (axelar.evm.v1beta1.BurnerInfoResponse);
     */
    burnerInfo(input: BurnerInfoRequest, options?: RpcOptions): UnaryCall<BurnerInfoRequest, BurnerInfoResponse>;
    /**
     * ConfirmationHeight queries the confirmation height for the specified chain
     *
     * @generated from protobuf rpc: ConfirmationHeight(axelar.evm.v1beta1.ConfirmationHeightRequest) returns (axelar.evm.v1beta1.ConfirmationHeightResponse);
     */
    confirmationHeight(input: ConfirmationHeightRequest, options?: RpcOptions): UnaryCall<ConfirmationHeightRequest, ConfirmationHeightResponse>;
    /**
     * DepositState queries the state of the specified deposit
     *
     * @deprecated
     * @generated from protobuf rpc: DepositState(axelar.evm.v1beta1.DepositStateRequest) returns (axelar.evm.v1beta1.DepositStateResponse);
     */
    depositState(input: DepositStateRequest, options?: RpcOptions): UnaryCall<DepositStateRequest, DepositStateResponse>;
    /**
     * PendingCommands queries the pending commands for the specified chain
     *
     * @generated from protobuf rpc: PendingCommands(axelar.evm.v1beta1.PendingCommandsRequest) returns (axelar.evm.v1beta1.PendingCommandsResponse);
     */
    pendingCommands(input: PendingCommandsRequest, options?: RpcOptions): UnaryCall<PendingCommandsRequest, PendingCommandsResponse>;
    /**
     * Chains queries the available evm chains
     *
     * @generated from protobuf rpc: Chains(axelar.evm.v1beta1.ChainsRequest) returns (axelar.evm.v1beta1.ChainsResponse);
     */
    chains(input: ChainsRequest, options?: RpcOptions): UnaryCall<ChainsRequest, ChainsResponse>;
    /**
     * Command queries the command of a chain provided the command id
     *
     * @generated from protobuf rpc: Command(axelar.evm.v1beta1.CommandRequest) returns (axelar.evm.v1beta1.CommandResponse);
     */
    command(input: CommandRequest, options?: RpcOptions): UnaryCall<CommandRequest, CommandResponse>;
    /**
     * KeyAddress queries the address of key of a chain
     *
     * @generated from protobuf rpc: KeyAddress(axelar.evm.v1beta1.KeyAddressRequest) returns (axelar.evm.v1beta1.KeyAddressResponse);
     */
    keyAddress(input: KeyAddressRequest, options?: RpcOptions): UnaryCall<KeyAddressRequest, KeyAddressResponse>;
    /**
     * GatewayAddress queries the address of axelar gateway at the specified
     * chain
     *
     * @generated from protobuf rpc: GatewayAddress(axelar.evm.v1beta1.GatewayAddressRequest) returns (axelar.evm.v1beta1.GatewayAddressResponse);
     */
    gatewayAddress(input: GatewayAddressRequest, options?: RpcOptions): UnaryCall<GatewayAddressRequest, GatewayAddressResponse>;
    /**
     * Bytecode queries the bytecode of a specified gateway at the specified
     * chain
     *
     * @generated from protobuf rpc: Bytecode(axelar.evm.v1beta1.BytecodeRequest) returns (axelar.evm.v1beta1.BytecodeResponse);
     */
    bytecode(input: BytecodeRequest, options?: RpcOptions): UnaryCall<BytecodeRequest, BytecodeResponse>;
    /**
     * Event queries an event at the specified chain
     *
     * @generated from protobuf rpc: Event(axelar.evm.v1beta1.EventRequest) returns (axelar.evm.v1beta1.EventResponse);
     */
    event(input: EventRequest, options?: RpcOptions): UnaryCall<EventRequest, EventResponse>;
    /**
     * ERC20Tokens queries the ERC20 tokens registered for a chain
     *
     * @generated from protobuf rpc: ERC20Tokens(axelar.evm.v1beta1.ERC20TokensRequest) returns (axelar.evm.v1beta1.ERC20TokensResponse);
     */
    eRC20Tokens(input: ERC20TokensRequest, options?: RpcOptions): UnaryCall<ERC20TokensRequest, ERC20TokensResponse>;
    /**
     * TokenInfo queries the token info for a registered ERC20 Token
     *
     * @generated from protobuf rpc: TokenInfo(axelar.evm.v1beta1.TokenInfoRequest) returns (axelar.evm.v1beta1.TokenInfoResponse);
     */
    tokenInfo(input: TokenInfoRequest, options?: RpcOptions): UnaryCall<TokenInfoRequest, TokenInfoResponse>;
    /**
     * @generated from protobuf rpc: Params(axelar.evm.v1beta1.ParamsRequest) returns (axelar.evm.v1beta1.ParamsResponse);
     */
    params(input: ParamsRequest, options?: RpcOptions): UnaryCall<ParamsRequest, ParamsResponse>;
}