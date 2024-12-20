// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "ibc/core/client/v1/tx.proto" (package "ibc.core.client.v1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Any } from "../../../../google/protobuf/any";
/**
 * MsgCreateClient defines a message to create an IBC client
 *
 * @generated from protobuf message ibc.core.client.v1.MsgCreateClient
 */
export interface MsgCreateClient {
    /**
     * light client state
     *
     * @generated from protobuf field: google.protobuf.Any client_state = 1;
     */
    clientState?: Any;
    /**
     * consensus state associated with the client that corresponds to a given
     * height.
     *
     * @generated from protobuf field: google.protobuf.Any consensus_state = 2;
     */
    consensusState?: Any;
    /**
     * signer address
     *
     * @generated from protobuf field: string signer = 3;
     */
    signer: string;
}
/**
 * MsgCreateClientResponse defines the Msg/CreateClient response type.
 *
 * @generated from protobuf message ibc.core.client.v1.MsgCreateClientResponse
 */
export interface MsgCreateClientResponse {
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given header.
 *
 * @generated from protobuf message ibc.core.client.v1.MsgUpdateClient
 */
export interface MsgUpdateClient {
    /**
     * client unique identifier
     *
     * @generated from protobuf field: string client_id = 1;
     */
    clientId: string;
    /**
     * header to update the light client
     *
     * @generated from protobuf field: google.protobuf.Any header = 2;
     */
    header?: Any;
    /**
     * signer address
     *
     * @generated from protobuf field: string signer = 3;
     */
    signer: string;
}
/**
 * MsgUpdateClientResponse defines the Msg/UpdateClient response type.
 *
 * @generated from protobuf message ibc.core.client.v1.MsgUpdateClientResponse
 */
export interface MsgUpdateClientResponse {
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 *
 * @generated from protobuf message ibc.core.client.v1.MsgUpgradeClient
 */
export interface MsgUpgradeClient {
    /**
     * client unique identifier
     *
     * @generated from protobuf field: string client_id = 1;
     */
    clientId: string;
    /**
     * upgraded client state
     *
     * @generated from protobuf field: google.protobuf.Any client_state = 2;
     */
    clientState?: Any;
    /**
     * upgraded consensus state, only contains enough information to serve as a
     * basis of trust in update logic
     *
     * @generated from protobuf field: google.protobuf.Any consensus_state = 3;
     */
    consensusState?: Any;
    /**
     * proof that old chain committed to new client
     *
     * @generated from protobuf field: bytes proof_upgrade_client = 4;
     */
    proofUpgradeClient: Uint8Array;
    /**
     * proof that old chain committed to new consensus state
     *
     * @generated from protobuf field: bytes proof_upgrade_consensus_state = 5;
     */
    proofUpgradeConsensusState: Uint8Array;
    /**
     * signer address
     *
     * @generated from protobuf field: string signer = 6;
     */
    signer: string;
}
/**
 * MsgUpgradeClientResponse defines the Msg/UpgradeClient response type.
 *
 * @generated from protobuf message ibc.core.client.v1.MsgUpgradeClientResponse
 */
export interface MsgUpgradeClientResponse {
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 *
 * @generated from protobuf message ibc.core.client.v1.MsgSubmitMisbehaviour
 */
export interface MsgSubmitMisbehaviour {
    /**
     * client unique identifier
     *
     * @generated from protobuf field: string client_id = 1;
     */
    clientId: string;
    /**
     * misbehaviour used for freezing the light client
     *
     * @generated from protobuf field: google.protobuf.Any misbehaviour = 2;
     */
    misbehaviour?: Any;
    /**
     * signer address
     *
     * @generated from protobuf field: string signer = 3;
     */
    signer: string;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 *
 * @generated from protobuf message ibc.core.client.v1.MsgSubmitMisbehaviourResponse
 */
export interface MsgSubmitMisbehaviourResponse {
}
declare class MsgCreateClient$Type extends MessageType<MsgCreateClient> {
    constructor();
    create(value?: PartialMessage<MsgCreateClient>): MsgCreateClient;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgCreateClient): MsgCreateClient;
    internalBinaryWrite(message: MsgCreateClient, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.client.v1.MsgCreateClient
 */
export declare const MsgCreateClient: MsgCreateClient$Type;
declare class MsgCreateClientResponse$Type extends MessageType<MsgCreateClientResponse> {
    constructor();
    create(value?: PartialMessage<MsgCreateClientResponse>): MsgCreateClientResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgCreateClientResponse): MsgCreateClientResponse;
    internalBinaryWrite(message: MsgCreateClientResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.client.v1.MsgCreateClientResponse
 */
export declare const MsgCreateClientResponse: MsgCreateClientResponse$Type;
declare class MsgUpdateClient$Type extends MessageType<MsgUpdateClient> {
    constructor();
    create(value?: PartialMessage<MsgUpdateClient>): MsgUpdateClient;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgUpdateClient): MsgUpdateClient;
    internalBinaryWrite(message: MsgUpdateClient, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.client.v1.MsgUpdateClient
 */
export declare const MsgUpdateClient: MsgUpdateClient$Type;
declare class MsgUpdateClientResponse$Type extends MessageType<MsgUpdateClientResponse> {
    constructor();
    create(value?: PartialMessage<MsgUpdateClientResponse>): MsgUpdateClientResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgUpdateClientResponse): MsgUpdateClientResponse;
    internalBinaryWrite(message: MsgUpdateClientResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.client.v1.MsgUpdateClientResponse
 */
export declare const MsgUpdateClientResponse: MsgUpdateClientResponse$Type;
declare class MsgUpgradeClient$Type extends MessageType<MsgUpgradeClient> {
    constructor();
    create(value?: PartialMessage<MsgUpgradeClient>): MsgUpgradeClient;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgUpgradeClient): MsgUpgradeClient;
    internalBinaryWrite(message: MsgUpgradeClient, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.client.v1.MsgUpgradeClient
 */
export declare const MsgUpgradeClient: MsgUpgradeClient$Type;
declare class MsgUpgradeClientResponse$Type extends MessageType<MsgUpgradeClientResponse> {
    constructor();
    create(value?: PartialMessage<MsgUpgradeClientResponse>): MsgUpgradeClientResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgUpgradeClientResponse): MsgUpgradeClientResponse;
    internalBinaryWrite(message: MsgUpgradeClientResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.client.v1.MsgUpgradeClientResponse
 */
export declare const MsgUpgradeClientResponse: MsgUpgradeClientResponse$Type;
declare class MsgSubmitMisbehaviour$Type extends MessageType<MsgSubmitMisbehaviour> {
    constructor();
    create(value?: PartialMessage<MsgSubmitMisbehaviour>): MsgSubmitMisbehaviour;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgSubmitMisbehaviour): MsgSubmitMisbehaviour;
    internalBinaryWrite(message: MsgSubmitMisbehaviour, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.client.v1.MsgSubmitMisbehaviour
 */
export declare const MsgSubmitMisbehaviour: MsgSubmitMisbehaviour$Type;
declare class MsgSubmitMisbehaviourResponse$Type extends MessageType<MsgSubmitMisbehaviourResponse> {
    constructor();
    create(value?: PartialMessage<MsgSubmitMisbehaviourResponse>): MsgSubmitMisbehaviourResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponse;
    internalBinaryWrite(message: MsgSubmitMisbehaviourResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.client.v1.MsgSubmitMisbehaviourResponse
 */
export declare const MsgSubmitMisbehaviourResponse: MsgSubmitMisbehaviourResponse$Type;
/**
 * @generated ServiceType for protobuf service ibc.core.client.v1.Msg
 */
export declare const Msg: any;
export {};
