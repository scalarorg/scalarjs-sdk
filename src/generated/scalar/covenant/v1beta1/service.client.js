// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "scalar/covenant/v1beta1/service.proto" (package "scalar.covenant.v1beta1", syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "scalar/covenant/v1beta1/service.proto" (package "scalar.covenant.v1beta1", syntax proto3)
// tslint:disable
import { QueryService } from "./service";
import { MsgService } from "./service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service scalar.covenant.v1beta1.MsgService
 */
export class MsgServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = MsgService.typeName;
        this.methods = MsgService.methods;
        this.options = MsgService.options;
    }
    /**
     * Create custodian
     *
     * @generated from protobuf rpc: CreateCustodian(scalar.covenant.v1beta1.CreateCustodianRequest) returns (scalar.covenant.v1beta1.CreateCustodianResponse);
     */
    createCustodian(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * Update custodian
     *
     * @generated from protobuf rpc: UpdateCustodian(scalar.covenant.v1beta1.UpdateCustodianRequest) returns (scalar.covenant.v1beta1.UpdateCustodianResponse);
     */
    updateCustodian(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * Create custodian group
     *
     * @generated from protobuf rpc: CreateCustodianGroup(scalar.covenant.v1beta1.CreateCustodianGroupRequest) returns (scalar.covenant.v1beta1.CreateCustodianGroupResponse);
     */
    createCustodianGroup(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * Update Custodian group
     *
     * @generated from protobuf rpc: UpdateCustodianGroup(scalar.covenant.v1beta1.UpdateCustodianGroupRequest) returns (scalar.covenant.v1beta1.UpdateCustodianGroupResponse);
     */
    updateCustodianGroup(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * Add Custodian to custodian group
     * recalculate taproot pubkey when adding custodian to custodian group
     *
     * @generated from protobuf rpc: AddCustodianToGroup(scalar.covenant.v1beta1.AddCustodianToGroupRequest) returns (scalar.covenant.v1beta1.CustodianToGroupResponse);
     */
    addCustodianToGroup(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * Remove Custodian from custodian group
     * recalculate taproot address when deleting custodian from custodian group
     *
     * @generated from protobuf rpc: RemoveCustodianFromGroup(scalar.covenant.v1beta1.RemoveCustodianFromGroupRequest) returns (scalar.covenant.v1beta1.CustodianToGroupResponse);
     */
    removeCustodianFromGroup(input, options) {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: SubmitTapScriptSig(scalar.covenant.v1beta1.SubmitTapScriptSigRequest) returns (scalar.covenant.v1beta1.SubmitTapScriptSigResponse);
     */
    submitTapScriptSig(input, options) {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
/**
 * @generated from protobuf service scalar.covenant.v1beta1.QueryService
 */
export class QueryServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = QueryService.typeName;
        this.methods = QueryService.methods;
        this.options = QueryService.options;
    }
    /**
     * Get custodians
     *
     * @generated from protobuf rpc: Custodians(scalar.covenant.v1beta1.CustodiansRequest) returns (scalar.covenant.v1beta1.CustodiansResponse);
     */
    custodians(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * Get custodian groups
     *
     * @generated from protobuf rpc: CustodianGroups(scalar.covenant.v1beta1.CustodianGroupsRequest) returns (scalar.covenant.v1beta1.CustodianGroupsResponse);
     */
    custodianGroups(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Params(scalar.covenant.v1beta1.ParamsRequest) returns (scalar.covenant.v1beta1.ParamsResponse);
     */
    params(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
