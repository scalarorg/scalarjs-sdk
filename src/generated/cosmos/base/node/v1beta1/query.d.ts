// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/base/node/v1beta1/query.proto" (package "cosmos.base.node.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * ConfigRequest defines the request structure for the Config gRPC query.
 *
 * @generated from protobuf message cosmos.base.node.v1beta1.ConfigRequest
 */
export interface ConfigRequest {
}
/**
 * ConfigResponse defines the response structure for the Config gRPC query.
 *
 * @generated from protobuf message cosmos.base.node.v1beta1.ConfigResponse
 */
export interface ConfigResponse {
    /**
     * @generated from protobuf field: string minimum_gas_price = 1;
     */
    minimumGasPrice: string;
}
declare class ConfigRequest$Type extends MessageType<ConfigRequest> {
    constructor();
    create(value?: PartialMessage<ConfigRequest>): ConfigRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConfigRequest): ConfigRequest;
    internalBinaryWrite(message: ConfigRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.node.v1beta1.ConfigRequest
 */
export declare const ConfigRequest: ConfigRequest$Type;
declare class ConfigResponse$Type extends MessageType<ConfigResponse> {
    constructor();
    create(value?: PartialMessage<ConfigResponse>): ConfigResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConfigResponse): ConfigResponse;
    internalBinaryWrite(message: ConfigResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.node.v1beta1.ConfigResponse
 */
export declare const ConfigResponse: ConfigResponse$Type;
/**
 * @generated ServiceType for protobuf service cosmos.base.node.v1beta1.Service
 */
export declare const Service: any;
export {};
