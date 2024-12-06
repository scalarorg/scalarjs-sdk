// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "ibc/lightclients/localhost/v1/localhost.proto" (package "ibc.lightclients.localhost.v1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Height } from "../../../core/client/v1/client";
/**
 * ClientState defines a loopback (localhost) client. It requires (read-only)
 * access to keys outside the client prefix.
 *
 * @generated from protobuf message ibc.lightclients.localhost.v1.ClientState
 */
export interface ClientState {
    /**
     * self chain ID
     *
     * @generated from protobuf field: string chain_id = 1;
     */
    chainId: string;
    /**
     * self latest block height
     *
     * @generated from protobuf field: ibc.core.client.v1.Height height = 2;
     */
    height?: Height;
}
declare class ClientState$Type extends MessageType<ClientState> {
    constructor();
    create(value?: PartialMessage<ClientState>): ClientState;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ClientState): ClientState;
    internalBinaryWrite(message: ClientState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ibc.lightclients.localhost.v1.ClientState
 */
export declare const ClientState: ClientState$Type;
export {};