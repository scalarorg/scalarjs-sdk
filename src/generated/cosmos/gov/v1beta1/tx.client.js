// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/gov/v1beta1/tx.proto" (package "cosmos.gov.v1beta1", syntax proto3)
// tslint:disable
import { Msg } from "./tx";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * Msg defines the bank Msg service.
 *
 * @generated from protobuf service cosmos.gov.v1beta1.Msg
 */
export class MsgClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = Msg.typeName;
        this.methods = Msg.methods;
        this.options = Msg.options;
    }
    /**
     * SubmitProposal defines a method to create new proposal given a content.
     *
     * @generated from protobuf rpc: SubmitProposal(cosmos.gov.v1beta1.MsgSubmitProposal) returns (cosmos.gov.v1beta1.MsgSubmitProposalResponse);
     */
    submitProposal(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * Vote defines a method to add a vote on a specific proposal.
     *
     * @generated from protobuf rpc: Vote(cosmos.gov.v1beta1.MsgVote) returns (cosmos.gov.v1beta1.MsgVoteResponse);
     */
    vote(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * VoteWeighted defines a method to add a weighted vote on a specific proposal.
     *
     * Since: cosmos-sdk 0.43
     *
     * @generated from protobuf rpc: VoteWeighted(cosmos.gov.v1beta1.MsgVoteWeighted) returns (cosmos.gov.v1beta1.MsgVoteWeightedResponse);
     */
    voteWeighted(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * Deposit defines a method to add deposit on a specific proposal.
     *
     * @generated from protobuf rpc: Deposit(cosmos.gov.v1beta1.MsgDeposit) returns (cosmos.gov.v1beta1.MsgDepositResponse);
     */
    deposit(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}