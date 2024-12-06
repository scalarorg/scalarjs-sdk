// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "ibc/core/client/v1/client.proto" (package "ibc.core.client.v1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Plan } from "../../../../cosmos/upgrade/v1beta1/upgrade";
import { Any } from "../../../../google/protobuf/any";
/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 *
 * @generated from protobuf message ibc.core.client.v1.IdentifiedClientState
 */
export interface IdentifiedClientState {
    /**
     * client identifier
     *
     * @generated from protobuf field: string client_id = 1;
     */
    clientId: string;
    /**
     * client state
     *
     * @generated from protobuf field: google.protobuf.Any client_state = 2;
     */
    clientState?: Any;
}
/**
 * ConsensusStateWithHeight defines a consensus state with an additional height
 * field.
 *
 * @generated from protobuf message ibc.core.client.v1.ConsensusStateWithHeight
 */
export interface ConsensusStateWithHeight {
    /**
     * consensus state height
     *
     * @generated from protobuf field: ibc.core.client.v1.Height height = 1;
     */
    height?: Height;
    /**
     * consensus state
     *
     * @generated from protobuf field: google.protobuf.Any consensus_state = 2;
     */
    consensusState?: Any;
}
/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 *
 * @generated from protobuf message ibc.core.client.v1.ClientConsensusStates
 */
export interface ClientConsensusStates {
    /**
     * client identifier
     *
     * @generated from protobuf field: string client_id = 1;
     */
    clientId: string;
    /**
     * consensus states and their heights associated with the client
     *
     * @generated from protobuf field: repeated ibc.core.client.v1.ConsensusStateWithHeight consensus_states = 2;
     */
    consensusStates: ConsensusStateWithHeight[];
}
/**
 * ClientUpdateProposal is a governance proposal. If it passes, the substitute
 * client's latest consensus state is copied over to the subject client. The proposal
 * handler may fail if the subject and the substitute do not match in client and
 * chain parameters (with exception to latest height, frozen height, and chain-id).
 *
 * @generated from protobuf message ibc.core.client.v1.ClientUpdateProposal
 */
export interface ClientUpdateProposal {
    /**
     * the title of the update proposal
     *
     * @generated from protobuf field: string title = 1;
     */
    title: string;
    /**
     * the description of the proposal
     *
     * @generated from protobuf field: string description = 2;
     */
    description: string;
    /**
     * the client identifier for the client to be updated if the proposal passes
     *
     * @generated from protobuf field: string subject_client_id = 3;
     */
    subjectClientId: string;
    /**
     * the substitute client identifier for the client standing in for the subject
     * client
     *
     * @generated from protobuf field: string substitute_client_id = 4;
     */
    substituteClientId: string;
}
/**
 * UpgradeProposal is a gov Content type for initiating an IBC breaking
 * upgrade.
 *
 * @generated from protobuf message ibc.core.client.v1.UpgradeProposal
 */
export interface UpgradeProposal {
    /**
     * @generated from protobuf field: string title = 1;
     */
    title: string;
    /**
     * @generated from protobuf field: string description = 2;
     */
    description: string;
    /**
     * @generated from protobuf field: cosmos.upgrade.v1beta1.Plan plan = 3;
     */
    plan?: Plan;
    /**
     * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
     * This will make the chain commit to the correct upgraded (self) client state
     * before the upgrade occurs, so that connecting chains can verify that the
     * new upgraded client is valid by verifying a proof on the previous version
     * of the chain. This will allow IBC connections to persist smoothly across
     * planned chain upgrades
     *
     * @generated from protobuf field: google.protobuf.Any upgraded_client_state = 4;
     */
    upgradedClientState?: Any;
}
/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 *
 * Normally the RevisionHeight is incremented at each height while keeping
 * RevisionNumber the same. However some consensus algorithms may choose to
 * reset the height in certain conditions e.g. hard forks, state-machine
 * breaking changes In these cases, the RevisionNumber is incremented so that
 * height continues to be monitonically increasing even as the RevisionHeight
 * gets reset
 *
 * @generated from protobuf message ibc.core.client.v1.Height
 */
export interface Height {
    /**
     * the revision that the client is currently on
     *
     * @generated from protobuf field: uint64 revision_number = 1;
     */
    revisionNumber: string;
    /**
     * the height within the given revision
     *
     * @generated from protobuf field: uint64 revision_height = 2;
     */
    revisionHeight: string;
}
/**
 * Params defines the set of IBC light client parameters.
 *
 * @generated from protobuf message ibc.core.client.v1.Params
 */
export interface Params {
    /**
     * allowed_clients defines the list of allowed client state types.
     *
     * @generated from protobuf field: repeated string allowed_clients = 1;
     */
    allowedClients: string[];
}
declare class IdentifiedClientState$Type extends MessageType<IdentifiedClientState> {
    constructor();
    create(value?: PartialMessage<IdentifiedClientState>): IdentifiedClientState;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IdentifiedClientState): IdentifiedClientState;
    internalBinaryWrite(message: IdentifiedClientState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.client.v1.IdentifiedClientState
 */
export declare const IdentifiedClientState: IdentifiedClientState$Type;
declare class ConsensusStateWithHeight$Type extends MessageType<ConsensusStateWithHeight> {
    constructor();
    create(value?: PartialMessage<ConsensusStateWithHeight>): ConsensusStateWithHeight;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConsensusStateWithHeight): ConsensusStateWithHeight;
    internalBinaryWrite(message: ConsensusStateWithHeight, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.client.v1.ConsensusStateWithHeight
 */
export declare const ConsensusStateWithHeight: ConsensusStateWithHeight$Type;
declare class ClientConsensusStates$Type extends MessageType<ClientConsensusStates> {
    constructor();
    create(value?: PartialMessage<ClientConsensusStates>): ClientConsensusStates;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ClientConsensusStates): ClientConsensusStates;
    internalBinaryWrite(message: ClientConsensusStates, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.client.v1.ClientConsensusStates
 */
export declare const ClientConsensusStates: ClientConsensusStates$Type;
declare class ClientUpdateProposal$Type extends MessageType<ClientUpdateProposal> {
    constructor();
    create(value?: PartialMessage<ClientUpdateProposal>): ClientUpdateProposal;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ClientUpdateProposal): ClientUpdateProposal;
    internalBinaryWrite(message: ClientUpdateProposal, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.client.v1.ClientUpdateProposal
 */
export declare const ClientUpdateProposal: ClientUpdateProposal$Type;
declare class UpgradeProposal$Type extends MessageType<UpgradeProposal> {
    constructor();
    create(value?: PartialMessage<UpgradeProposal>): UpgradeProposal;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpgradeProposal): UpgradeProposal;
    internalBinaryWrite(message: UpgradeProposal, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.client.v1.UpgradeProposal
 */
export declare const UpgradeProposal: UpgradeProposal$Type;
declare class Height$Type extends MessageType<Height> {
    constructor();
    create(value?: PartialMessage<Height>): Height;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Height): Height;
    internalBinaryWrite(message: Height, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.client.v1.Height
 */
export declare const Height: Height$Type;
declare class Params$Type extends MessageType<Params> {
    constructor();
    create(value?: PartialMessage<Params>): Params;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Params): Params;
    internalBinaryWrite(message: Params, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.core.client.v1.Params
 */
export declare const Params: Params$Type;
export {};