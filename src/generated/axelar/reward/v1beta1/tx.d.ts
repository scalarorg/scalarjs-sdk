// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/reward/v1beta1/tx.proto" (package "axelar.reward.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Any } from "../../../google/protobuf/any";
/**
 * @generated from protobuf message axelar.reward.v1beta1.RefundMsgRequest
 */
export interface RefundMsgRequest {
    /**
     * @generated from protobuf field: bytes sender = 1;
     */
    sender: Uint8Array;
    /**
     * @generated from protobuf field: google.protobuf.Any inner_message = 2;
     */
    innerMessage?: Any;
}
/**
 * @generated from protobuf message axelar.reward.v1beta1.RefundMsgResponse
 */
export interface RefundMsgResponse {
    /**
     * @generated from protobuf field: bytes data = 1;
     */
    data: Uint8Array;
    /**
     * @generated from protobuf field: string log = 2;
     */
    log: string;
}
declare class RefundMsgRequest$Type extends MessageType<RefundMsgRequest> {
    constructor();
    create(value?: PartialMessage<RefundMsgRequest>): RefundMsgRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RefundMsgRequest): RefundMsgRequest;
    internalBinaryWrite(message: RefundMsgRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.reward.v1beta1.RefundMsgRequest
 */
export declare const RefundMsgRequest: RefundMsgRequest$Type;
declare class RefundMsgResponse$Type extends MessageType<RefundMsgResponse> {
    constructor();
    create(value?: PartialMessage<RefundMsgResponse>): RefundMsgResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RefundMsgResponse): RefundMsgResponse;
    internalBinaryWrite(message: RefundMsgResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.reward.v1beta1.RefundMsgResponse
 */
export declare const RefundMsgResponse: RefundMsgResponse$Type;
export {};
