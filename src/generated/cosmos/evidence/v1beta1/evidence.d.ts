// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/evidence/v1beta1/evidence.proto" (package "cosmos.evidence.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "../../../google/protobuf/timestamp";
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 *
 * @generated from protobuf message cosmos.evidence.v1beta1.Equivocation
 */
export interface Equivocation {
    /**
     * @generated from protobuf field: int64 height = 1;
     */
    height: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp time = 2;
     */
    time?: Timestamp;
    /**
     * @generated from protobuf field: int64 power = 3;
     */
    power: string;
    /**
     * @generated from protobuf field: string consensus_address = 4;
     */
    consensusAddress: string;
}
declare class Equivocation$Type extends MessageType<Equivocation> {
    constructor();
    create(value?: PartialMessage<Equivocation>): Equivocation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Equivocation): Equivocation;
    internalBinaryWrite(message: Equivocation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.evidence.v1beta1.Equivocation
 */
export declare const Equivocation: Equivocation$Type;
export {};
