// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmwasm/wasm/v1/tx.proto" (package "cosmwasm.wasm.v1", syntax proto3)
// tslint:disable
import { Msg } from "./tx";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * Msg defines the wasm Msg service.
 *
 * @generated from protobuf service cosmwasm.wasm.v1.Msg
 */
export class MsgClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = Msg.typeName;
        this.methods = Msg.methods;
        this.options = Msg.options;
    }
    /**
     * StoreCode to submit Wasm code to the system
     *
     * @generated from protobuf rpc: StoreCode(cosmwasm.wasm.v1.MsgStoreCode) returns (cosmwasm.wasm.v1.MsgStoreCodeResponse);
     */
    storeCode(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     *  InstantiateContract creates a new smart contract instance for the given
     *  code id.
     *
     * @generated from protobuf rpc: InstantiateContract(cosmwasm.wasm.v1.MsgInstantiateContract) returns (cosmwasm.wasm.v1.MsgInstantiateContractResponse);
     */
    instantiateContract(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     *  InstantiateContract2 creates a new smart contract instance for the given
     *  code id with a predictable address
     *
     * @generated from protobuf rpc: InstantiateContract2(cosmwasm.wasm.v1.MsgInstantiateContract2) returns (cosmwasm.wasm.v1.MsgInstantiateContract2Response);
     */
    instantiateContract2(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * Execute submits the given message data to a smart contract
     *
     * @generated from protobuf rpc: ExecuteContract(cosmwasm.wasm.v1.MsgExecuteContract) returns (cosmwasm.wasm.v1.MsgExecuteContractResponse);
     */
    executeContract(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * Migrate runs a code upgrade/ downgrade for a smart contract
     *
     * @generated from protobuf rpc: MigrateContract(cosmwasm.wasm.v1.MsgMigrateContract) returns (cosmwasm.wasm.v1.MsgMigrateContractResponse);
     */
    migrateContract(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * UpdateAdmin sets a new   admin for a smart contract
     *
     * @generated from protobuf rpc: UpdateAdmin(cosmwasm.wasm.v1.MsgUpdateAdmin) returns (cosmwasm.wasm.v1.MsgUpdateAdminResponse);
     */
    updateAdmin(input, options) {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * ClearAdmin removes any admin stored for a smart contract
     *
     * @generated from protobuf rpc: ClearAdmin(cosmwasm.wasm.v1.MsgClearAdmin) returns (cosmwasm.wasm.v1.MsgClearAdminResponse);
     */
    clearAdmin(input, options) {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * UpdateInstantiateConfig updates instantiate config for a smart contract
     *
     * @generated from protobuf rpc: UpdateInstantiateConfig(cosmwasm.wasm.v1.MsgUpdateInstantiateConfig) returns (cosmwasm.wasm.v1.MsgUpdateInstantiateConfigResponse);
     */
    updateInstantiateConfig(input, options) {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
