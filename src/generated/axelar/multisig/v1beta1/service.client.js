// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/multisig/v1beta1/service.proto" (package "axelar.multisig.v1beta1", syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/multisig/v1beta1/service.proto" (package "axelar.multisig.v1beta1", syntax proto3)
// tslint:disable
import { QueryService } from "./service";
import { MsgService } from "./service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * Msg defines the multisig Msg service.
 *
 * @generated from protobuf service axelar.multisig.v1beta1.MsgService
 */
export class MsgServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = MsgService.typeName;
        this.methods = MsgService.methods;
        this.options = MsgService.options;
    }
    /**
     * @generated from protobuf rpc: StartKeygen(axelar.multisig.v1beta1.StartKeygenRequest) returns (axelar.multisig.v1beta1.StartKeygenResponse);
     */
    startKeygen(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: SubmitPubKey(axelar.multisig.v1beta1.SubmitPubKeyRequest) returns (axelar.multisig.v1beta1.SubmitPubKeyResponse);
     */
    submitPubKey(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: SubmitSignature(axelar.multisig.v1beta1.SubmitSignatureRequest) returns (axelar.multisig.v1beta1.SubmitSignatureResponse);
     */
    submitSignature(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: RotateKey(axelar.multisig.v1beta1.RotateKeyRequest) returns (axelar.multisig.v1beta1.RotateKeyResponse);
     */
    rotateKey(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: KeygenOptOut(axelar.multisig.v1beta1.KeygenOptOutRequest) returns (axelar.multisig.v1beta1.KeygenOptOutResponse);
     */
    keygenOptOut(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: KeygenOptIn(axelar.multisig.v1beta1.KeygenOptInRequest) returns (axelar.multisig.v1beta1.KeygenOptInResponse);
     */
    keygenOptIn(input, options) {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
/**
 * Query defines the gRPC querier service.
 *
 * @generated from protobuf service axelar.multisig.v1beta1.QueryService
 */
export class QueryServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = QueryService.typeName;
        this.methods = QueryService.methods;
        this.options = QueryService.options;
    }
    /**
     * KeyID returns the key ID of a key assigned to a given chain.
     * If no key is assigned, it returns the grpc NOT_FOUND error.
     *
     * @generated from protobuf rpc: KeyID(axelar.multisig.v1beta1.KeyIDRequest) returns (axelar.multisig.v1beta1.KeyIDResponse);
     */
    keyID(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * NextKeyID returns the key ID assigned for the next rotation on a given
     * chain. If no key rotation is in progress, it returns the grpc NOT_FOUND
     * error.
     *
     * @generated from protobuf rpc: NextKeyID(axelar.multisig.v1beta1.NextKeyIDRequest) returns (axelar.multisig.v1beta1.NextKeyIDResponse);
     */
    nextKeyID(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * Key returns the key corresponding to a given key ID.
     * If no key is found, it returns the grpc NOT_FOUND error.
     *
     * @generated from protobuf rpc: Key(axelar.multisig.v1beta1.KeyRequest) returns (axelar.multisig.v1beta1.KeyResponse);
     */
    key(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * KeygenSession returns the keygen session info for a given key ID.
     * If no key is found, it returns the grpc NOT_FOUND error.
     *
     * @generated from protobuf rpc: KeygenSession(axelar.multisig.v1beta1.KeygenSessionRequest) returns (axelar.multisig.v1beta1.KeygenSessionResponse);
     */
    keygenSession(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Params(axelar.multisig.v1beta1.ParamsRequest) returns (axelar.multisig.v1beta1.ParamsResponse);
     */
    params(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
