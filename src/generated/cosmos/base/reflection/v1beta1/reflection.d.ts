// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/base/reflection/v1beta1/reflection.proto" (package "cosmos.base.reflection.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC.
 *
 * @generated from protobuf message cosmos.base.reflection.v1beta1.ListAllInterfacesRequest
 */
export interface ListAllInterfacesRequest {
}
/**
 * ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC.
 *
 * @generated from protobuf message cosmos.base.reflection.v1beta1.ListAllInterfacesResponse
 */
export interface ListAllInterfacesResponse {
    /**
     * interface_names is an array of all the registered interfaces.
     *
     * @generated from protobuf field: repeated string interface_names = 1;
     */
    interfaceNames: string[];
}
/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 *
 * @generated from protobuf message cosmos.base.reflection.v1beta1.ListImplementationsRequest
 */
export interface ListImplementationsRequest {
    /**
     * interface_name defines the interface to query the implementations for.
     *
     * @generated from protobuf field: string interface_name = 1;
     */
    interfaceName: string;
}
/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 *
 * @generated from protobuf message cosmos.base.reflection.v1beta1.ListImplementationsResponse
 */
export interface ListImplementationsResponse {
    /**
     * @generated from protobuf field: repeated string implementation_message_names = 1;
     */
    implementationMessageNames: string[];
}
declare class ListAllInterfacesRequest$Type extends MessageType<ListAllInterfacesRequest> {
    constructor();
    create(value?: PartialMessage<ListAllInterfacesRequest>): ListAllInterfacesRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListAllInterfacesRequest): ListAllInterfacesRequest;
    internalBinaryWrite(message: ListAllInterfacesRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v1beta1.ListAllInterfacesRequest
 */
export declare const ListAllInterfacesRequest: ListAllInterfacesRequest$Type;
declare class ListAllInterfacesResponse$Type extends MessageType<ListAllInterfacesResponse> {
    constructor();
    create(value?: PartialMessage<ListAllInterfacesResponse>): ListAllInterfacesResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListAllInterfacesResponse): ListAllInterfacesResponse;
    internalBinaryWrite(message: ListAllInterfacesResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v1beta1.ListAllInterfacesResponse
 */
export declare const ListAllInterfacesResponse: ListAllInterfacesResponse$Type;
declare class ListImplementationsRequest$Type extends MessageType<ListImplementationsRequest> {
    constructor();
    create(value?: PartialMessage<ListImplementationsRequest>): ListImplementationsRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListImplementationsRequest): ListImplementationsRequest;
    internalBinaryWrite(message: ListImplementationsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v1beta1.ListImplementationsRequest
 */
export declare const ListImplementationsRequest: ListImplementationsRequest$Type;
declare class ListImplementationsResponse$Type extends MessageType<ListImplementationsResponse> {
    constructor();
    create(value?: PartialMessage<ListImplementationsResponse>): ListImplementationsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListImplementationsResponse): ListImplementationsResponse;
    internalBinaryWrite(message: ListImplementationsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v1beta1.ListImplementationsResponse
 */
export declare const ListImplementationsResponse: ListImplementationsResponse$Type;
/**
 * @generated ServiceType for protobuf service cosmos.base.reflection.v1beta1.ReflectionService
 */
export declare const ReflectionService: any;
export {};
