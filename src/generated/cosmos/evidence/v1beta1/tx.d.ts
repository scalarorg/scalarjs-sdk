// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/evidence/v1beta1/tx.proto" (package "cosmos.evidence.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Any } from "../../../google/protobuf/any";
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 *
 * @generated from protobuf message cosmos.evidence.v1beta1.MsgSubmitEvidence
 */
export interface MsgSubmitEvidence {
    /**
     * @generated from protobuf field: string submitter = 1;
     */
    submitter: string;
    /**
     * @generated from protobuf field: google.protobuf.Any evidence = 2;
     */
    evidence?: Any;
}
/**
 * MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type.
 *
 * @generated from protobuf message cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse
 */
export interface MsgSubmitEvidenceResponse {
    /**
     * hash defines the hash of the evidence.
     *
     * @generated from protobuf field: bytes hash = 4;
     */
    hash: Uint8Array;
}
declare class MsgSubmitEvidence$Type extends MessageType<MsgSubmitEvidence> {
    constructor();
    create(value?: PartialMessage<MsgSubmitEvidence>): MsgSubmitEvidence;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgSubmitEvidence): MsgSubmitEvidence;
    internalBinaryWrite(message: MsgSubmitEvidence, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.evidence.v1beta1.MsgSubmitEvidence
 */
export declare const MsgSubmitEvidence: MsgSubmitEvidence$Type;
declare class MsgSubmitEvidenceResponse$Type extends MessageType<MsgSubmitEvidenceResponse> {
    constructor();
    create(value?: PartialMessage<MsgSubmitEvidenceResponse>): MsgSubmitEvidenceResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgSubmitEvidenceResponse): MsgSubmitEvidenceResponse;
    internalBinaryWrite(message: MsgSubmitEvidenceResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse
 */
export declare const MsgSubmitEvidenceResponse: MsgSubmitEvidenceResponse$Type;
/**
 * @generated ServiceType for protobuf service cosmos.evidence.v1beta1.Msg
 */
export declare const Msg: any;
export {};
