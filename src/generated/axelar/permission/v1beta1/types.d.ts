// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/permission/v1beta1/types.proto" (package "axelar.permission.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Role } from "../exported/v1beta1/types";
/**
 * @generated from protobuf message axelar.permission.v1beta1.GovAccount
 */
export interface GovAccount {
    /**
     * @generated from protobuf field: bytes address = 1;
     */
    address: Uint8Array;
    /**
     * @generated from protobuf field: axelar.permission.exported.v1beta1.Role role = 2;
     */
    role: Role;
}
declare class GovAccount$Type extends MessageType<GovAccount> {
    constructor();
    create(value?: PartialMessage<GovAccount>): GovAccount;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GovAccount): GovAccount;
    internalBinaryWrite(message: GovAccount, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.permission.v1beta1.GovAccount
 */
export declare const GovAccount: GovAccount$Type;
export {};