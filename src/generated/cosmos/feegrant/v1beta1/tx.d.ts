// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/feegrant/v1beta1/tx.proto" (package "cosmos.feegrant.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Any } from "../../../google/protobuf/any";
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 *
 * @generated from protobuf message cosmos.feegrant.v1beta1.MsgGrantAllowance
 */
export interface MsgGrantAllowance {
    /**
     * granter is the address of the user granting an allowance of their funds.
     *
     * @generated from protobuf field: string granter = 1;
     */
    granter: string;
    /**
     * grantee is the address of the user being granted an allowance of another user's funds.
     *
     * @generated from protobuf field: string grantee = 2;
     */
    grantee: string;
    /**
     * allowance can be any of basic and filtered fee allowance.
     *
     * @generated from protobuf field: google.protobuf.Any allowance = 3;
     */
    allowance?: Any;
}
/**
 * MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type.
 *
 * @generated from protobuf message cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse
 */
export interface MsgGrantAllowanceResponse {
}
/**
 * MsgRevokeAllowance removes any existing Allowance from Granter to Grantee.
 *
 * @generated from protobuf message cosmos.feegrant.v1beta1.MsgRevokeAllowance
 */
export interface MsgRevokeAllowance {
    /**
     * granter is the address of the user granting an allowance of their funds.
     *
     * @generated from protobuf field: string granter = 1;
     */
    granter: string;
    /**
     * grantee is the address of the user being granted an allowance of another user's funds.
     *
     * @generated from protobuf field: string grantee = 2;
     */
    grantee: string;
}
/**
 * MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type.
 *
 * @generated from protobuf message cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse
 */
export interface MsgRevokeAllowanceResponse {
}
declare class MsgGrantAllowance$Type extends MessageType<MsgGrantAllowance> {
    constructor();
    create(value?: PartialMessage<MsgGrantAllowance>): MsgGrantAllowance;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgGrantAllowance): MsgGrantAllowance;
    internalBinaryWrite(message: MsgGrantAllowance, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.feegrant.v1beta1.MsgGrantAllowance
 */
export declare const MsgGrantAllowance: MsgGrantAllowance$Type;
declare class MsgGrantAllowanceResponse$Type extends MessageType<MsgGrantAllowanceResponse> {
    constructor();
    create(value?: PartialMessage<MsgGrantAllowanceResponse>): MsgGrantAllowanceResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgGrantAllowanceResponse): MsgGrantAllowanceResponse;
    internalBinaryWrite(message: MsgGrantAllowanceResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse
 */
export declare const MsgGrantAllowanceResponse: MsgGrantAllowanceResponse$Type;
declare class MsgRevokeAllowance$Type extends MessageType<MsgRevokeAllowance> {
    constructor();
    create(value?: PartialMessage<MsgRevokeAllowance>): MsgRevokeAllowance;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgRevokeAllowance): MsgRevokeAllowance;
    internalBinaryWrite(message: MsgRevokeAllowance, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.feegrant.v1beta1.MsgRevokeAllowance
 */
export declare const MsgRevokeAllowance: MsgRevokeAllowance$Type;
declare class MsgRevokeAllowanceResponse$Type extends MessageType<MsgRevokeAllowanceResponse> {
    constructor();
    create(value?: PartialMessage<MsgRevokeAllowanceResponse>): MsgRevokeAllowanceResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponse;
    internalBinaryWrite(message: MsgRevokeAllowanceResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse
 */
export declare const MsgRevokeAllowanceResponse: MsgRevokeAllowanceResponse$Type;
/**
 * @generated ServiceType for protobuf service cosmos.feegrant.v1beta1.Msg
 */
export declare const Msg: any;
export {};