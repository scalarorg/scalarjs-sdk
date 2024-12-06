// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/feegrant/v1beta1/tx.proto" (package "cosmos.feegrant.v1beta1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { MsgRevokeAllowanceResponse } from "./tx";
import type { MsgRevokeAllowance } from "./tx";
import type { MsgGrantAllowanceResponse } from "./tx";
import type { MsgGrantAllowance } from "./tx";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Msg defines the feegrant msg service.
 *
 * @generated from protobuf service cosmos.feegrant.v1beta1.Msg
 */
export interface IMsgClient {
    /**
     * GrantAllowance grants fee allowance to the grantee on the granter's
     * account with the provided expiration time.
     *
     * @generated from protobuf rpc: GrantAllowance(cosmos.feegrant.v1beta1.MsgGrantAllowance) returns (cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse);
     */
    grantAllowance(input: MsgGrantAllowance, options?: RpcOptions): UnaryCall<MsgGrantAllowance, MsgGrantAllowanceResponse>;
    /**
     * RevokeAllowance revokes any fee allowance of granter's account that
     * has been granted to the grantee.
     *
     * @generated from protobuf rpc: RevokeAllowance(cosmos.feegrant.v1beta1.MsgRevokeAllowance) returns (cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse);
     */
    revokeAllowance(input: MsgRevokeAllowance, options?: RpcOptions): UnaryCall<MsgRevokeAllowance, MsgRevokeAllowanceResponse>;
}
/**
 * Msg defines the feegrant msg service.
 *
 * @generated from protobuf service cosmos.feegrant.v1beta1.Msg
 */
export declare class MsgClient implements IMsgClient, ServiceInfo {
    private readonly _transport;
    typeName: any;
    methods: any;
    options: any;
    constructor(_transport: RpcTransport);
    /**
     * GrantAllowance grants fee allowance to the grantee on the granter's
     * account with the provided expiration time.
     *
     * @generated from protobuf rpc: GrantAllowance(cosmos.feegrant.v1beta1.MsgGrantAllowance) returns (cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse);
     */
    grantAllowance(input: MsgGrantAllowance, options?: RpcOptions): UnaryCall<MsgGrantAllowance, MsgGrantAllowanceResponse>;
    /**
     * RevokeAllowance revokes any fee allowance of granter's account that
     * has been granted to the grantee.
     *
     * @generated from protobuf rpc: RevokeAllowance(cosmos.feegrant.v1beta1.MsgRevokeAllowance) returns (cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse);
     */
    revokeAllowance(input: MsgRevokeAllowance, options?: RpcOptions): UnaryCall<MsgRevokeAllowance, MsgRevokeAllowanceResponse>;
}
