// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/authz/v1beta1/authz.proto" (package "cosmos.authz.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Any } from "../../../google/protobuf/any";
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 *
 * @generated from protobuf message cosmos.authz.v1beta1.GenericAuthorization
 */
export interface GenericAuthorization {
    /**
     * Msg, identified by it's type URL, to grant unrestricted permissions to execute
     *
     * @generated from protobuf field: string msg = 1;
     */
    msg: string;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 *
 * @generated from protobuf message cosmos.authz.v1beta1.Grant
 */
export interface Grant {
    /**
     * @generated from protobuf field: google.protobuf.Any authorization = 1;
     */
    authorization?: Any;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp expiration = 2;
     */
    expiration?: Timestamp;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 *
 * Since: cosmos-sdk 0.45.2
 *
 * @generated from protobuf message cosmos.authz.v1beta1.GrantAuthorization
 */
export interface GrantAuthorization {
    /**
     * @generated from protobuf field: string granter = 1;
     */
    granter: string;
    /**
     * @generated from protobuf field: string grantee = 2;
     */
    grantee: string;
    /**
     * @generated from protobuf field: google.protobuf.Any authorization = 3;
     */
    authorization?: Any;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp expiration = 4;
     */
    expiration?: Timestamp;
}
declare class GenericAuthorization$Type extends MessageType<GenericAuthorization> {
    constructor();
    create(value?: PartialMessage<GenericAuthorization>): GenericAuthorization;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GenericAuthorization): GenericAuthorization;
    internalBinaryWrite(message: GenericAuthorization, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.authz.v1beta1.GenericAuthorization
 */
export declare const GenericAuthorization: GenericAuthorization$Type;
declare class Grant$Type extends MessageType<Grant> {
    constructor();
    create(value?: PartialMessage<Grant>): Grant;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Grant): Grant;
    internalBinaryWrite(message: Grant, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.authz.v1beta1.Grant
 */
export declare const Grant: Grant$Type;
declare class GrantAuthorization$Type extends MessageType<GrantAuthorization> {
    constructor();
    create(value?: PartialMessage<GrantAuthorization>): GrantAuthorization;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GrantAuthorization): GrantAuthorization;
    internalBinaryWrite(message: GrantAuthorization, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.authz.v1beta1.GrantAuthorization
 */
export declare const GrantAuthorization: GrantAuthorization$Type;
export {};
