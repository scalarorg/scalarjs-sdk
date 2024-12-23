// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "scalar/vote/v1beta1/types.proto" (package "scalar.vote.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Any } from "../../../google/protobuf/any";
/**
 * TalliedVote represents a vote for a poll with the accumulated stake of all
 * validators voting for the same data
 *
 * @generated from protobuf message scalar.vote.v1beta1.TalliedVote
 */
export interface TalliedVote {
    /**
     * @generated from protobuf field: bytes tally = 1;
     */
    tally: Uint8Array;
    /**
     * @generated from protobuf field: google.protobuf.Any data = 3;
     */
    data?: Any;
    /**
     * @generated from protobuf field: uint64 poll_id = 4;
     */
    pollId: string;
    /**
     * @generated from protobuf field: map<string, bool> is_voter_late = 5;
     */
    isVoterLate: {
        [key: string]: boolean;
    };
}
declare class TalliedVote$Type extends MessageType<TalliedVote> {
    constructor();
    create(value?: PartialMessage<TalliedVote>): TalliedVote;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TalliedVote): TalliedVote;
    private binaryReadMap5;
    internalBinaryWrite(message: TalliedVote, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.vote.v1beta1.TalliedVote
 */
export declare const TalliedVote: TalliedVote$Type;
export {};
