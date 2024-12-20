// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "tendermint/abci/types.proto" (package "tendermint.abci", syntax proto3)
// tslint:disable
import { ABCIApplication } from "./types";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
// ----------------------------------------
// Service Definition
/**
 * @generated from protobuf service tendermint.abci.ABCIApplication
 */
export class ABCIApplicationClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = ABCIApplication.typeName;
        this.methods = ABCIApplication.methods;
        this.options = ABCIApplication.options;
    }
    /**
     * @generated from protobuf rpc: Echo(tendermint.abci.RequestEcho) returns (tendermint.abci.ResponseEcho);
     */
    echo(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Flush(tendermint.abci.RequestFlush) returns (tendermint.abci.ResponseFlush);
     */
    flush(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Info(tendermint.abci.RequestInfo) returns (tendermint.abci.ResponseInfo);
     */
    info(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: SetOption(tendermint.abci.RequestSetOption) returns (tendermint.abci.ResponseSetOption);
     */
    setOption(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DeliverTx(tendermint.abci.RequestDeliverTx) returns (tendermint.abci.ResponseDeliverTx);
     */
    deliverTx(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: CheckTx(tendermint.abci.RequestCheckTx) returns (tendermint.abci.ResponseCheckTx);
     */
    checkTx(input, options) {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Query(tendermint.abci.RequestQuery) returns (tendermint.abci.ResponseQuery);
     */
    query(input, options) {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Commit(tendermint.abci.RequestCommit) returns (tendermint.abci.ResponseCommit);
     */
    commit(input, options) {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: InitChain(tendermint.abci.RequestInitChain) returns (tendermint.abci.ResponseInitChain);
     */
    initChain(input, options) {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: BeginBlock(tendermint.abci.RequestBeginBlock) returns (tendermint.abci.ResponseBeginBlock);
     */
    beginBlock(input, options) {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: EndBlock(tendermint.abci.RequestEndBlock) returns (tendermint.abci.ResponseEndBlock);
     */
    endBlock(input, options) {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ListSnapshots(tendermint.abci.RequestListSnapshots) returns (tendermint.abci.ResponseListSnapshots);
     */
    listSnapshots(input, options) {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: OfferSnapshot(tendermint.abci.RequestOfferSnapshot) returns (tendermint.abci.ResponseOfferSnapshot);
     */
    offerSnapshot(input, options) {
        const method = this.methods[12], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: LoadSnapshotChunk(tendermint.abci.RequestLoadSnapshotChunk) returns (tendermint.abci.ResponseLoadSnapshotChunk);
     */
    loadSnapshotChunk(input, options) {
        const method = this.methods[13], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ApplySnapshotChunk(tendermint.abci.RequestApplySnapshotChunk) returns (tendermint.abci.ResponseApplySnapshotChunk);
     */
    applySnapshotChunk(input, options) {
        const method = this.methods[14], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
