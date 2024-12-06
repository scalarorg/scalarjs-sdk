// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/snapshot/v1beta1/types.proto" (package "axelar.snapshot.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message axelar.snapshot.v1beta1.ProxiedValidator
 */
export interface ProxiedValidator {
    /**
     * @generated from protobuf field: bytes validator = 1;
     */
    validator: Uint8Array;
    /**
     * @generated from protobuf field: bytes proxy = 2;
     */
    proxy: Uint8Array;
    /**
     * @generated from protobuf field: bool active = 3;
     */
    active: boolean;
}
declare class ProxiedValidator$Type extends MessageType<ProxiedValidator> {
    constructor();
    create(value?: PartialMessage<ProxiedValidator>): ProxiedValidator;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProxiedValidator): ProxiedValidator;
    internalBinaryWrite(message: ProxiedValidator, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.snapshot.v1beta1.ProxiedValidator
 */
export declare const ProxiedValidator: ProxiedValidator$Type;
export {};