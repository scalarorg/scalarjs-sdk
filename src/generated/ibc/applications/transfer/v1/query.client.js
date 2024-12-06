// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "ibc/applications/transfer/v1/query.proto" (package "ibc.applications.transfer.v1", syntax proto3)
// tslint:disable
import { Query } from "./query";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * Query provides defines the gRPC querier service.
 *
 * @generated from protobuf service ibc.applications.transfer.v1.Query
 */
export class QueryClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = Query.typeName;
        this.methods = Query.methods;
        this.options = Query.options;
    }
    /**
     * DenomTraces queries all denomination traces.
     *
     * @generated from protobuf rpc: DenomTraces(ibc.applications.transfer.v1.QueryDenomTracesRequest) returns (ibc.applications.transfer.v1.QueryDenomTracesResponse);
     */
    denomTraces(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * DenomTrace queries a denomination trace information.
     *
     * @generated from protobuf rpc: DenomTrace(ibc.applications.transfer.v1.QueryDenomTraceRequest) returns (ibc.applications.transfer.v1.QueryDenomTraceResponse);
     */
    denomTrace(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * Params queries all parameters of the ibc-transfer module.
     *
     * @generated from protobuf rpc: Params(ibc.applications.transfer.v1.QueryParamsRequest) returns (ibc.applications.transfer.v1.QueryParamsResponse);
     */
    params(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * DenomHash queries a denomination hash information.
     *
     * @generated from protobuf rpc: DenomHash(ibc.applications.transfer.v1.QueryDenomHashRequest) returns (ibc.applications.transfer.v1.QueryDenomHashResponse);
     */
    denomHash(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * EscrowAddress returns the escrow address for a particular port and channel id.
     *
     * @generated from protobuf rpc: EscrowAddress(ibc.applications.transfer.v1.QueryEscrowAddressRequest) returns (ibc.applications.transfer.v1.QueryEscrowAddressResponse);
     */
    escrowAddress(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}