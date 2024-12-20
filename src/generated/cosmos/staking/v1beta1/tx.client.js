// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/staking/v1beta1/tx.proto" (package "cosmos.staking.v1beta1", syntax proto3)
// tslint:disable
import { Msg } from "./tx";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * Msg defines the staking Msg service.
 *
 * @generated from protobuf service cosmos.staking.v1beta1.Msg
 */
export class MsgClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = Msg.typeName;
        this.methods = Msg.methods;
        this.options = Msg.options;
    }
    /**
     * CreateValidator defines a method for creating a new validator.
     *
     * @generated from protobuf rpc: CreateValidator(cosmos.staking.v1beta1.MsgCreateValidator) returns (cosmos.staking.v1beta1.MsgCreateValidatorResponse);
     */
    createValidator(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * EditValidator defines a method for editing an existing validator.
     *
     * @generated from protobuf rpc: EditValidator(cosmos.staking.v1beta1.MsgEditValidator) returns (cosmos.staking.v1beta1.MsgEditValidatorResponse);
     */
    editValidator(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * Delegate defines a method for performing a delegation of coins
     * from a delegator to a validator.
     *
     * @generated from protobuf rpc: Delegate(cosmos.staking.v1beta1.MsgDelegate) returns (cosmos.staking.v1beta1.MsgDelegateResponse);
     */
    delegate(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * BeginRedelegate defines a method for performing a redelegation
     * of coins from a delegator and source validator to a destination validator.
     *
     * @generated from protobuf rpc: BeginRedelegate(cosmos.staking.v1beta1.MsgBeginRedelegate) returns (cosmos.staking.v1beta1.MsgBeginRedelegateResponse);
     */
    beginRedelegate(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * Undelegate defines a method for performing an undelegation from a
     * delegate and a validator.
     *
     * @generated from protobuf rpc: Undelegate(cosmos.staking.v1beta1.MsgUndelegate) returns (cosmos.staking.v1beta1.MsgUndelegateResponse);
     */
    undelegate(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
