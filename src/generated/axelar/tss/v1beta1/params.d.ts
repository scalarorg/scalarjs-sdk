// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/tss/v1beta1/params.proto" (package "axelar.tss.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Threshold } from "../../utils/v1beta1/threshold";
import { KeyRequirement } from "../exported/v1beta1/types";
/**
 * Params is the parameter set for this module
 *
 * @generated from protobuf message axelar.tss.v1beta1.Params
 */
export interface Params {
    /**
     * KeyRequirements defines the requirement for each key role
     *
     * @generated from protobuf field: repeated axelar.tss.exported.v1beta1.KeyRequirement key_requirements = 1;
     */
    keyRequirements: KeyRequirement[];
    /**
     * SuspendDurationInBlocks defines the number of blocks a
     * validator is disallowed to participate in any TSS ceremony after
     * committing a malicious behaviour during signing
     *
     * @generated from protobuf field: int64 suspend_duration_in_blocks = 2;
     */
    suspendDurationInBlocks: string;
    /**
     * HeartBeatPeriodInBlocks defines the time period in blocks for tss to
     * emit the event asking validators to send their heartbeats
     *
     * @generated from protobuf field: int64 heartbeat_period_in_blocks = 3;
     */
    heartbeatPeriodInBlocks: string;
    /**
     * @generated from protobuf field: axelar.utils.v1beta1.Threshold max_missed_blocks_per_window = 4;
     */
    maxMissedBlocksPerWindow?: Threshold;
    /**
     * @generated from protobuf field: int64 unbonding_locking_key_rotation_count = 5;
     */
    unbondingLockingKeyRotationCount: string;
    /**
     * @generated from protobuf field: axelar.utils.v1beta1.Threshold external_multisig_threshold = 6;
     */
    externalMultisigThreshold?: Threshold;
    /**
     * @generated from protobuf field: int64 max_sign_queue_size = 7;
     */
    maxSignQueueSize: string;
    /**
     * @generated from protobuf field: int64 max_simultaneous_sign_shares = 8;
     */
    maxSimultaneousSignShares: string;
    /**
     * @generated from protobuf field: int64 tss_signed_blocks_window = 9;
     */
    tssSignedBlocksWindow: string;
}
declare class Params$Type extends MessageType<Params> {
    constructor();
    create(value?: PartialMessage<Params>): Params;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Params): Params;
    internalBinaryWrite(message: Params, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.tss.v1beta1.Params
 */
export declare const Params: Params$Type;
export {};