// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/base/node/v1beta1/query.proto" (package "cosmos.base.node.v1beta1", syntax proto3)
// tslint:disable
import { Service } from "./query";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * Service defines the gRPC querier service for node related queries.
 *
 * @generated from protobuf service cosmos.base.node.v1beta1.Service
 */
export class ServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = Service.typeName;
        this.methods = Service.methods;
        this.options = Service.options;
    }
    /**
     * Config queries for the operator configuration.
     *
     * @generated from protobuf rpc: Config(cosmos.base.node.v1beta1.ConfigRequest) returns (cosmos.base.node.v1beta1.ConfigResponse);
     */
    config(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
