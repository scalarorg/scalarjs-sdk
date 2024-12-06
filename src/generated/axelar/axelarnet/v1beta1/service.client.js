// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/axelarnet/v1beta1/service.proto" (package "axelar.axelarnet.v1beta1", syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/axelarnet/v1beta1/service.proto" (package "axelar.axelarnet.v1beta1", syntax proto3)
// tslint:disable
import { QueryService } from "./service";
import { MsgService } from "./service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * Msg defines the axelarnet Msg service.
 *
 * @generated from protobuf service axelar.axelarnet.v1beta1.MsgService
 */
export class MsgServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = MsgService.typeName;
        this.methods = MsgService.methods;
        this.options = MsgService.options;
    }
    /**
     * @generated from protobuf rpc: Link(axelar.axelarnet.v1beta1.LinkRequest) returns (axelar.axelarnet.v1beta1.LinkResponse);
     */
    link(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ConfirmDeposit(axelar.axelarnet.v1beta1.ConfirmDepositRequest) returns (axelar.axelarnet.v1beta1.ConfirmDepositResponse);
     */
    confirmDeposit(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ExecutePendingTransfers(axelar.axelarnet.v1beta1.ExecutePendingTransfersRequest) returns (axelar.axelarnet.v1beta1.ExecutePendingTransfersResponse);
     */
    executePendingTransfers(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: AddCosmosBasedChain(axelar.axelarnet.v1beta1.AddCosmosBasedChainRequest) returns (axelar.axelarnet.v1beta1.AddCosmosBasedChainResponse);
     */
    addCosmosBasedChain(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: RegisterAsset(axelar.axelarnet.v1beta1.RegisterAssetRequest) returns (axelar.axelarnet.v1beta1.RegisterAssetResponse);
     */
    registerAsset(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: RouteIBCTransfers(axelar.axelarnet.v1beta1.RouteIBCTransfersRequest) returns (axelar.axelarnet.v1beta1.RouteIBCTransfersResponse);
     */
    routeIBCTransfers(input, options) {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: RegisterFeeCollector(axelar.axelarnet.v1beta1.RegisterFeeCollectorRequest) returns (axelar.axelarnet.v1beta1.RegisterFeeCollectorResponse);
     */
    registerFeeCollector(input, options) {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: RetryIBCTransfer(axelar.axelarnet.v1beta1.RetryIBCTransferRequest) returns (axelar.axelarnet.v1beta1.RetryIBCTransferResponse);
     */
    retryIBCTransfer(input, options) {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: RouteMessage(axelar.axelarnet.v1beta1.RouteMessageRequest) returns (axelar.axelarnet.v1beta1.RouteMessageResponse);
     */
    routeMessage(input, options) {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: CallContract(axelar.axelarnet.v1beta1.CallContractRequest) returns (axelar.axelarnet.v1beta1.CallContractResponse);
     */
    callContract(input, options) {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
/**
 * QueryService defines the gRPC querier service.
 *
 * @generated from protobuf service axelar.axelarnet.v1beta1.QueryService
 */
export class QueryServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = QueryService.typeName;
        this.methods = QueryService.methods;
        this.options = QueryService.options;
    }
    /**
     * PendingIBCTransferCount queries the pending ibc transfers for all chains
     *
     * @generated from protobuf rpc: PendingIBCTransferCount(axelar.axelarnet.v1beta1.PendingIBCTransferCountRequest) returns (axelar.axelarnet.v1beta1.PendingIBCTransferCountResponse);
     */
    pendingIBCTransferCount(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Params(axelar.axelarnet.v1beta1.ParamsRequest) returns (axelar.axelarnet.v1beta1.ParamsResponse);
     */
    params(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: IBCPath(axelar.axelarnet.v1beta1.IBCPathRequest) returns (axelar.axelarnet.v1beta1.IBCPathResponse);
     */
    iBCPath(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ChainByIBCPath(axelar.axelarnet.v1beta1.ChainByIBCPathRequest) returns (axelar.axelarnet.v1beta1.ChainByIBCPathResponse);
     */
    chainByIBCPath(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}