// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/multisig/v1beta1/params.proto" (package "axelar.multisig.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Threshold } from "../../utils/v1beta1/threshold";
/**
 * Params represent the genesis parameters for the module
 *
 * @generated from protobuf message axelar.multisig.v1beta1.Params
 */
export interface Params {
    /**
     * @generated from protobuf field: axelar.utils.v1beta1.Threshold keygen_threshold = 1;
     */
    keygenThreshold?: Threshold;
    /**
     * @generated from protobuf field: axelar.utils.v1beta1.Threshold signing_threshold = 2;
     */
    signingThreshold?: Threshold;
    /**
     * @generated from protobuf field: int64 keygen_timeout = 3;
     */
    keygenTimeout: string;
    /**
     * @generated from protobuf field: int64 keygen_grace_period = 4;
     */
    keygenGracePeriod: string;
    /**
     * @generated from protobuf field: int64 signing_timeout = 5;
     */
    signingTimeout: string;
    /**
     * @generated from protobuf field: int64 signing_grace_period = 6;
     */
    signingGracePeriod: string;
    /**
     * @generated from protobuf field: uint64 active_epoch_count = 7;
     */
    activeEpochCount: string;
}
declare class Params$Type extends MessageType<Params> {
    constructor();
    create(value?: PartialMessage<Params>): Params;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Params): Params;
    internalBinaryWrite(message: Params, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.multisig.v1beta1.Params
 */
export declare const Params: Params$Type;
export {};
