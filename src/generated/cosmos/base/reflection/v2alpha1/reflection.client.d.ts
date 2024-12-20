// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/base/reflection/v2alpha1/reflection.proto" (package "cosmos.base.reflection.v2alpha1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { GetTxDescriptorResponse } from "./reflection";
import type { GetTxDescriptorRequest } from "./reflection";
import type { GetQueryServicesDescriptorResponse } from "./reflection";
import type { GetQueryServicesDescriptorRequest } from "./reflection";
import type { GetConfigurationDescriptorResponse } from "./reflection";
import type { GetConfigurationDescriptorRequest } from "./reflection";
import type { GetCodecDescriptorResponse } from "./reflection";
import type { GetCodecDescriptorRequest } from "./reflection";
import type { GetChainDescriptorResponse } from "./reflection";
import type { GetChainDescriptorRequest } from "./reflection";
import type { GetAuthnDescriptorResponse } from "./reflection";
import type { GetAuthnDescriptorRequest } from "./reflection";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * ReflectionService defines a service for application reflection.
 *
 * @generated from protobuf service cosmos.base.reflection.v2alpha1.ReflectionService
 */
export interface IReflectionServiceClient {
    /**
     * GetAuthnDescriptor returns information on how to authenticate transactions in the application
     * NOTE: this RPC is still experimental and might be subject to breaking changes or removal in
     * future releases of the cosmos-sdk.
     *
     * @generated from protobuf rpc: GetAuthnDescriptor(cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest) returns (cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse);
     */
    getAuthnDescriptor(input: GetAuthnDescriptorRequest, options?: RpcOptions): UnaryCall<GetAuthnDescriptorRequest, GetAuthnDescriptorResponse>;
    /**
     * GetChainDescriptor returns the description of the chain
     *
     * @generated from protobuf rpc: GetChainDescriptor(cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest) returns (cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse);
     */
    getChainDescriptor(input: GetChainDescriptorRequest, options?: RpcOptions): UnaryCall<GetChainDescriptorRequest, GetChainDescriptorResponse>;
    /**
     * GetCodecDescriptor returns the descriptor of the codec of the application
     *
     * @generated from protobuf rpc: GetCodecDescriptor(cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest) returns (cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse);
     */
    getCodecDescriptor(input: GetCodecDescriptorRequest, options?: RpcOptions): UnaryCall<GetCodecDescriptorRequest, GetCodecDescriptorResponse>;
    /**
     * GetConfigurationDescriptor returns the descriptor for the sdk.Config of the application
     *
     * @generated from protobuf rpc: GetConfigurationDescriptor(cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest) returns (cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse);
     */
    getConfigurationDescriptor(input: GetConfigurationDescriptorRequest, options?: RpcOptions): UnaryCall<GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse>;
    /**
     * GetQueryServicesDescriptor returns the available gRPC queryable services of the application
     *
     * @generated from protobuf rpc: GetQueryServicesDescriptor(cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest) returns (cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse);
     */
    getQueryServicesDescriptor(input: GetQueryServicesDescriptorRequest, options?: RpcOptions): UnaryCall<GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse>;
    /**
     * GetTxDescriptor returns information on the used transaction object and available msgs that can be used
     *
     * @generated from protobuf rpc: GetTxDescriptor(cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest) returns (cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse);
     */
    getTxDescriptor(input: GetTxDescriptorRequest, options?: RpcOptions): UnaryCall<GetTxDescriptorRequest, GetTxDescriptorResponse>;
}
/**
 * ReflectionService defines a service for application reflection.
 *
 * @generated from protobuf service cosmos.base.reflection.v2alpha1.ReflectionService
 */
export declare class ReflectionServiceClient implements IReflectionServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: any;
    methods: any;
    options: any;
    constructor(_transport: RpcTransport);
    /**
     * GetAuthnDescriptor returns information on how to authenticate transactions in the application
     * NOTE: this RPC is still experimental and might be subject to breaking changes or removal in
     * future releases of the cosmos-sdk.
     *
     * @generated from protobuf rpc: GetAuthnDescriptor(cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest) returns (cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse);
     */
    getAuthnDescriptor(input: GetAuthnDescriptorRequest, options?: RpcOptions): UnaryCall<GetAuthnDescriptorRequest, GetAuthnDescriptorResponse>;
    /**
     * GetChainDescriptor returns the description of the chain
     *
     * @generated from protobuf rpc: GetChainDescriptor(cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest) returns (cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse);
     */
    getChainDescriptor(input: GetChainDescriptorRequest, options?: RpcOptions): UnaryCall<GetChainDescriptorRequest, GetChainDescriptorResponse>;
    /**
     * GetCodecDescriptor returns the descriptor of the codec of the application
     *
     * @generated from protobuf rpc: GetCodecDescriptor(cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest) returns (cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse);
     */
    getCodecDescriptor(input: GetCodecDescriptorRequest, options?: RpcOptions): UnaryCall<GetCodecDescriptorRequest, GetCodecDescriptorResponse>;
    /**
     * GetConfigurationDescriptor returns the descriptor for the sdk.Config of the application
     *
     * @generated from protobuf rpc: GetConfigurationDescriptor(cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest) returns (cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse);
     */
    getConfigurationDescriptor(input: GetConfigurationDescriptorRequest, options?: RpcOptions): UnaryCall<GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse>;
    /**
     * GetQueryServicesDescriptor returns the available gRPC queryable services of the application
     *
     * @generated from protobuf rpc: GetQueryServicesDescriptor(cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest) returns (cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse);
     */
    getQueryServicesDescriptor(input: GetQueryServicesDescriptorRequest, options?: RpcOptions): UnaryCall<GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse>;
    /**
     * GetTxDescriptor returns information on the used transaction object and available msgs that can be used
     *
     * @generated from protobuf rpc: GetTxDescriptor(cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest) returns (cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse);
     */
    getTxDescriptor(input: GetTxDescriptorRequest, options?: RpcOptions): UnaryCall<GetTxDescriptorRequest, GetTxDescriptorResponse>;
}
