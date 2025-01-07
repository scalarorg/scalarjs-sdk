// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "scalar/protocol/v1beta1/types.proto" (package "scalar.protocol.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Asset } from "../../chains/v1beta1/types";
import { CustodianGroup } from "../../covenant/v1beta1/types";
/**
 * @generated from protobuf message scalar.protocol.v1beta1.ProtocolAttribute
 */
export interface ProtocolAttribute {
    /**
     * @generated from protobuf field: scalar.protocol.v1beta1.LiquidityModel model = 1;
     */
    model: LiquidityModel;
}
/**
 * DestinationChain represents a blockchain where tokens can be sent
 *
 * @generated from protobuf message scalar.protocol.v1beta1.SupportedChain
 */
export interface SupportedChain {
    /**
     * @generated from protobuf field: string chain = 1;
     */
    chain: string;
    /**
     * @generated from protobuf field: string address = 2;
     */
    address: string;
}
/**
 * @generated from protobuf message scalar.protocol.v1beta1.Protocol
 */
export interface Protocol {
    /**
     * @generated from protobuf field: bytes pubkey = 1;
     */
    pubkey: Uint8Array;
    /**
     * @generated from protobuf field: bytes address = 2;
     */
    address: Uint8Array;
    /**
     * @generated from protobuf field: string name = 3;
     */
    name: string;
    /**
     * @generated from protobuf field: string tag = 4;
     */
    tag: string;
    /**
     * @generated from protobuf field: scalar.protocol.v1beta1.ProtocolAttribute attribute = 5;
     */
    attribute?: ProtocolAttribute;
    /**
     * @generated from protobuf field: scalar.protocol.v1beta1.Status status = 6;
     */
    status: Status;
    /**
     * @generated from protobuf field: scalar.covenant.v1beta1.CustodianGroup custodian_group = 7;
     */
    custodianGroup?: CustodianGroup;
    /**
     * @generated from protobuf field: scalar.chains.v1beta1.Asset asset = 8;
     */
    asset?: Asset;
    /**
     * @generated from protobuf field: repeated scalar.protocol.v1beta1.SupportedChain chains = 9;
     */
    chains: SupportedChain[];
}
/**
 * @generated from protobuf enum scalar.protocol.v1beta1.LiquidityModel
 */
export declare enum LiquidityModel {
    /**
     * @generated from protobuf enum value: LIQUIDITY_MODEL_POOLING = 0;
     */
    POOLING = 0,
    /**
     * @generated from protobuf enum value: LIQUIDITY_MODEL_TRANSACTIONAL = 1;
     */
    TRANSACTIONAL = 1
}
/**
 * @generated from protobuf enum scalar.protocol.v1beta1.Status
 */
export declare enum Status {
    /**
     * @generated from protobuf enum value: STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: STATUS_ACTIVATED = 1;
     */
    ACTIVATED = 1,
    /**
     * @generated from protobuf enum value: STATUS_DEACTIVATED = 2;
     */
    DEACTIVATED = 2
}
declare class ProtocolAttribute$Type extends MessageType<ProtocolAttribute> {
    constructor();
    create(value?: PartialMessage<ProtocolAttribute>): ProtocolAttribute;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProtocolAttribute): ProtocolAttribute;
    internalBinaryWrite(message: ProtocolAttribute, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.protocol.v1beta1.ProtocolAttribute
 */
export declare const ProtocolAttribute: ProtocolAttribute$Type;
declare class SupportedChain$Type extends MessageType<SupportedChain> {
    constructor();
    create(value?: PartialMessage<SupportedChain>): SupportedChain;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SupportedChain): SupportedChain;
    internalBinaryWrite(message: SupportedChain, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.protocol.v1beta1.SupportedChain
 */
export declare const SupportedChain: SupportedChain$Type;
declare class Protocol$Type extends MessageType<Protocol> {
    constructor();
    create(value?: PartialMessage<Protocol>): Protocol;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Protocol): Protocol;
    internalBinaryWrite(message: Protocol, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.protocol.v1beta1.Protocol
 */
export declare const Protocol: Protocol$Type;
export {};
