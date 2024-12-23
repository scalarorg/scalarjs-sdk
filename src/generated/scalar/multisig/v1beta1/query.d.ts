// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "scalar/multisig/v1beta1/query.proto" (package "scalar.multisig.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Params } from "./params";
import { MultisigState } from "../exported/v1beta1/types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { KeyState } from "../exported/v1beta1/types";
/**
 * @generated from protobuf message scalar.multisig.v1beta1.KeyIDRequest
 */
export interface KeyIDRequest {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
}
/**
 * KeyIDResponse contains the key ID of the key assigned to a given chain.
 *
 * @generated from protobuf message scalar.multisig.v1beta1.KeyIDResponse
 */
export interface KeyIDResponse {
    /**
     * @generated from protobuf field: string key_id = 1;
     */
    keyId: string;
}
/**
 * @generated from protobuf message scalar.multisig.v1beta1.NextKeyIDRequest
 */
export interface NextKeyIDRequest {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
}
/**
 * NextKeyIDResponse contains the key ID for the next rotation on the given
 * chain
 *
 * @generated from protobuf message scalar.multisig.v1beta1.NextKeyIDResponse
 */
export interface NextKeyIDResponse {
    /**
     * @generated from protobuf field: string key_id = 1;
     */
    keyId: string;
}
/**
 * @generated from protobuf message scalar.multisig.v1beta1.KeyRequest
 */
export interface KeyRequest {
    /**
     * @generated from protobuf field: string key_id = 1;
     */
    keyId: string;
}
/**
 * @generated from protobuf message scalar.multisig.v1beta1.KeygenParticipant
 */
export interface KeygenParticipant {
    /**
     * @generated from protobuf field: string address = 1;
     */
    address: string;
    /**
     * @generated from protobuf field: bytes weight = 2;
     */
    weight: Uint8Array;
    /**
     * @generated from protobuf field: string pub_key = 3;
     */
    pubKey: string;
}
/**
 * KeyResponse contains the key corresponding to a given key id.
 *
 * @generated from protobuf message scalar.multisig.v1beta1.KeyResponse
 */
export interface KeyResponse {
    /**
     * @generated from protobuf field: string key_id = 1;
     */
    keyId: string;
    /**
     * @generated from protobuf field: scalar.multisig.exported.v1beta1.KeyState state = 2;
     */
    state: KeyState;
    /**
     * @generated from protobuf field: int64 started_at = 3;
     */
    startedAt: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp started_at_timestamp = 4;
     */
    startedAtTimestamp?: Timestamp;
    /**
     * @generated from protobuf field: bytes threshold_weight = 5;
     */
    thresholdWeight: Uint8Array;
    /**
     * @generated from protobuf field: bytes bonded_weight = 6;
     */
    bondedWeight: Uint8Array;
    /**
     * Keygen participants in descending order by weight
     *
     * @generated from protobuf field: repeated scalar.multisig.v1beta1.KeygenParticipant participants = 7;
     */
    participants: KeygenParticipant[];
}
/**
 * @generated from protobuf message scalar.multisig.v1beta1.KeygenSessionRequest
 */
export interface KeygenSessionRequest {
    /**
     * @generated from protobuf field: string key_id = 1;
     */
    keyId: string;
}
/**
 * KeygenSessionResponse contains the keygen session info for a given key ID.
 *
 * @generated from protobuf message scalar.multisig.v1beta1.KeygenSessionResponse
 */
export interface KeygenSessionResponse {
    /**
     * @generated from protobuf field: int64 started_at = 1;
     */
    startedAt: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp started_at_timestamp = 2;
     */
    startedAtTimestamp?: Timestamp;
    /**
     * @generated from protobuf field: int64 expires_at = 3;
     */
    expiresAt: string;
    /**
     * @generated from protobuf field: int64 completed_at = 4;
     */
    completedAt: string;
    /**
     * @generated from protobuf field: int64 grace_period = 5;
     */
    gracePeriod: string;
    /**
     * @generated from protobuf field: scalar.multisig.exported.v1beta1.MultisigState state = 6;
     */
    state: MultisigState;
    /**
     * @generated from protobuf field: bytes keygen_threshold_weight = 7;
     */
    keygenThresholdWeight: Uint8Array;
    /**
     * @generated from protobuf field: bytes signing_threshold_weight = 8;
     */
    signingThresholdWeight: Uint8Array;
    /**
     * @generated from protobuf field: bytes bonded_weight = 9;
     */
    bondedWeight: Uint8Array;
    /**
     * Keygen candidates in descending order by weight
     *
     * @generated from protobuf field: repeated scalar.multisig.v1beta1.KeygenParticipant participants = 10;
     */
    participants: KeygenParticipant[];
}
/**
 * ParamsRequest represents a message that queries the params
 *
 * @generated from protobuf message scalar.multisig.v1beta1.ParamsRequest
 */
export interface ParamsRequest {
}
/**
 * @generated from protobuf message scalar.multisig.v1beta1.ParamsResponse
 */
export interface ParamsResponse {
    /**
     * @generated from protobuf field: scalar.multisig.v1beta1.Params params = 1;
     */
    params?: Params;
}
declare class KeyIDRequest$Type extends MessageType<KeyIDRequest> {
    constructor();
    create(value?: PartialMessage<KeyIDRequest>): KeyIDRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: KeyIDRequest): KeyIDRequest;
    internalBinaryWrite(message: KeyIDRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.multisig.v1beta1.KeyIDRequest
 */
export declare const KeyIDRequest: KeyIDRequest$Type;
declare class KeyIDResponse$Type extends MessageType<KeyIDResponse> {
    constructor();
    create(value?: PartialMessage<KeyIDResponse>): KeyIDResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: KeyIDResponse): KeyIDResponse;
    internalBinaryWrite(message: KeyIDResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.multisig.v1beta1.KeyIDResponse
 */
export declare const KeyIDResponse: KeyIDResponse$Type;
declare class NextKeyIDRequest$Type extends MessageType<NextKeyIDRequest> {
    constructor();
    create(value?: PartialMessage<NextKeyIDRequest>): NextKeyIDRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: NextKeyIDRequest): NextKeyIDRequest;
    internalBinaryWrite(message: NextKeyIDRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.multisig.v1beta1.NextKeyIDRequest
 */
export declare const NextKeyIDRequest: NextKeyIDRequest$Type;
declare class NextKeyIDResponse$Type extends MessageType<NextKeyIDResponse> {
    constructor();
    create(value?: PartialMessage<NextKeyIDResponse>): NextKeyIDResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: NextKeyIDResponse): NextKeyIDResponse;
    internalBinaryWrite(message: NextKeyIDResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.multisig.v1beta1.NextKeyIDResponse
 */
export declare const NextKeyIDResponse: NextKeyIDResponse$Type;
declare class KeyRequest$Type extends MessageType<KeyRequest> {
    constructor();
    create(value?: PartialMessage<KeyRequest>): KeyRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: KeyRequest): KeyRequest;
    internalBinaryWrite(message: KeyRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.multisig.v1beta1.KeyRequest
 */
export declare const KeyRequest: KeyRequest$Type;
declare class KeygenParticipant$Type extends MessageType<KeygenParticipant> {
    constructor();
    create(value?: PartialMessage<KeygenParticipant>): KeygenParticipant;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: KeygenParticipant): KeygenParticipant;
    internalBinaryWrite(message: KeygenParticipant, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.multisig.v1beta1.KeygenParticipant
 */
export declare const KeygenParticipant: KeygenParticipant$Type;
declare class KeyResponse$Type extends MessageType<KeyResponse> {
    constructor();
    create(value?: PartialMessage<KeyResponse>): KeyResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: KeyResponse): KeyResponse;
    internalBinaryWrite(message: KeyResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.multisig.v1beta1.KeyResponse
 */
export declare const KeyResponse: KeyResponse$Type;
declare class KeygenSessionRequest$Type extends MessageType<KeygenSessionRequest> {
    constructor();
    create(value?: PartialMessage<KeygenSessionRequest>): KeygenSessionRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: KeygenSessionRequest): KeygenSessionRequest;
    internalBinaryWrite(message: KeygenSessionRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.multisig.v1beta1.KeygenSessionRequest
 */
export declare const KeygenSessionRequest: KeygenSessionRequest$Type;
declare class KeygenSessionResponse$Type extends MessageType<KeygenSessionResponse> {
    constructor();
    create(value?: PartialMessage<KeygenSessionResponse>): KeygenSessionResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: KeygenSessionResponse): KeygenSessionResponse;
    internalBinaryWrite(message: KeygenSessionResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.multisig.v1beta1.KeygenSessionResponse
 */
export declare const KeygenSessionResponse: KeygenSessionResponse$Type;
declare class ParamsRequest$Type extends MessageType<ParamsRequest> {
    constructor();
    create(value?: PartialMessage<ParamsRequest>): ParamsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ParamsRequest): ParamsRequest;
    internalBinaryWrite(message: ParamsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.multisig.v1beta1.ParamsRequest
 */
export declare const ParamsRequest: ParamsRequest$Type;
declare class ParamsResponse$Type extends MessageType<ParamsResponse> {
    constructor();
    create(value?: PartialMessage<ParamsResponse>): ParamsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ParamsResponse): ParamsResponse;
    internalBinaryWrite(message: ParamsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.multisig.v1beta1.ParamsResponse
 */
export declare const ParamsResponse: ParamsResponse$Type;
export {};
