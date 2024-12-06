// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/mint/v1beta1/query.proto" (package "cosmos.mint.v1beta1", syntax proto3)
// tslint:disable
import { Query } from "./query";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * Query provides defines the gRPC querier service.
 *
 * @generated from protobuf service cosmos.mint.v1beta1.Query
 */
export class QueryClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = Query.typeName;
        this.methods = Query.methods;
        this.options = Query.options;
    }
    /**
     * Params returns the total set of minting parameters.
     *
     * @generated from protobuf rpc: Params(cosmos.mint.v1beta1.QueryParamsRequest) returns (cosmos.mint.v1beta1.QueryParamsResponse);
     */
    params(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * Inflation returns the current minting inflation value.
     *
     * @generated from protobuf rpc: Inflation(cosmos.mint.v1beta1.QueryInflationRequest) returns (cosmos.mint.v1beta1.QueryInflationResponse);
     */
    inflation(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * AnnualProvisions current minting annual provisions value.
     *
     * @generated from protobuf rpc: AnnualProvisions(cosmos.mint.v1beta1.QueryAnnualProvisionsRequest) returns (cosmos.mint.v1beta1.QueryAnnualProvisionsResponse);
     */
    annualProvisions(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}