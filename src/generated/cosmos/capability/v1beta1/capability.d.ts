// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/capability/v1beta1/capability.proto" (package "cosmos.capability.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 *
 * @generated from protobuf message cosmos.capability.v1beta1.Capability
 */
export interface Capability {
    /**
     * @generated from protobuf field: uint64 index = 1;
     */
    index: string;
}
/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 *
 * @generated from protobuf message cosmos.capability.v1beta1.Owner
 */
export interface Owner {
    /**
     * @generated from protobuf field: string module = 1;
     */
    module: string;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
}
/**
 * CapabilityOwners defines a set of owners of a single Capability. The set of
 * owners must be unique.
 *
 * @generated from protobuf message cosmos.capability.v1beta1.CapabilityOwners
 */
export interface CapabilityOwners {
    /**
     * @generated from protobuf field: repeated cosmos.capability.v1beta1.Owner owners = 1;
     */
    owners: Owner[];
}
declare class Capability$Type extends MessageType<Capability> {
    constructor();
    create(value?: PartialMessage<Capability>): Capability;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Capability): Capability;
    internalBinaryWrite(message: Capability, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.capability.v1beta1.Capability
 */
export declare const Capability: Capability$Type;
declare class Owner$Type extends MessageType<Owner> {
    constructor();
    create(value?: PartialMessage<Owner>): Owner;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Owner): Owner;
    internalBinaryWrite(message: Owner, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.capability.v1beta1.Owner
 */
export declare const Owner: Owner$Type;
declare class CapabilityOwners$Type extends MessageType<CapabilityOwners> {
    constructor();
    create(value?: PartialMessage<CapabilityOwners>): CapabilityOwners;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CapabilityOwners): CapabilityOwners;
    internalBinaryWrite(message: CapabilityOwners, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.capability.v1beta1.CapabilityOwners
 */
export declare const CapabilityOwners: CapabilityOwners$Type;
export {};
