// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/base/reflection/v2alpha1/reflection.proto" (package "cosmos.base.reflection.v2alpha1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * AppDescriptor describes a cosmos-sdk based application
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.AppDescriptor
 */
export interface AppDescriptor {
    /**
     * AuthnDescriptor provides information on how to authenticate transactions on the application
     * NOTE: experimental and subject to change in future releases.
     *
     * @generated from protobuf field: cosmos.base.reflection.v2alpha1.AuthnDescriptor authn = 1;
     */
    authn?: AuthnDescriptor;
    /**
     * chain provides the chain descriptor
     *
     * @generated from protobuf field: cosmos.base.reflection.v2alpha1.ChainDescriptor chain = 2;
     */
    chain?: ChainDescriptor;
    /**
     * codec provides metadata information regarding codec related types
     *
     * @generated from protobuf field: cosmos.base.reflection.v2alpha1.CodecDescriptor codec = 3;
     */
    codec?: CodecDescriptor;
    /**
     * configuration provides metadata information regarding the sdk.Config type
     *
     * @generated from protobuf field: cosmos.base.reflection.v2alpha1.ConfigurationDescriptor configuration = 4;
     */
    configuration?: ConfigurationDescriptor;
    /**
     * query_services provides metadata information regarding the available queriable endpoints
     *
     * @generated from protobuf field: cosmos.base.reflection.v2alpha1.QueryServicesDescriptor query_services = 5;
     */
    queryServices?: QueryServicesDescriptor;
    /**
     * tx provides metadata information regarding how to send transactions to the given application
     *
     * @generated from protobuf field: cosmos.base.reflection.v2alpha1.TxDescriptor tx = 6;
     */
    tx?: TxDescriptor;
}
/**
 * TxDescriptor describes the accepted transaction type
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.TxDescriptor
 */
export interface TxDescriptor {
    /**
     * fullname is the protobuf fullname of the raw transaction type (for instance the tx.Tx type)
     * it is not meant to support polymorphism of transaction types, it is supposed to be used by
     * reflection clients to understand if they can handle a specific transaction type in an application.
     *
     * @generated from protobuf field: string fullname = 1;
     */
    fullname: string;
    /**
     * msgs lists the accepted application messages (sdk.Msg)
     *
     * @generated from protobuf field: repeated cosmos.base.reflection.v2alpha1.MsgDescriptor msgs = 2;
     */
    msgs: MsgDescriptor[];
}
/**
 * AuthnDescriptor provides information on how to sign transactions without relying
 * on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.AuthnDescriptor
 */
export interface AuthnDescriptor {
    /**
     * sign_modes defines the supported signature algorithm
     *
     * @generated from protobuf field: repeated cosmos.base.reflection.v2alpha1.SigningModeDescriptor sign_modes = 1;
     */
    signModes: SigningModeDescriptor[];
}
/**
 * SigningModeDescriptor provides information on a signing flow of the application
 * NOTE(fdymylja): here we could go as far as providing an entire flow on how
 * to sign a message given a SigningModeDescriptor, but it's better to think about
 * this another time
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.SigningModeDescriptor
 */
export interface SigningModeDescriptor {
    /**
     * name defines the unique name of the signing mode
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * number is the unique int32 identifier for the sign_mode enum
     *
     * @generated from protobuf field: int32 number = 2;
     */
    number: number;
    /**
     * authn_info_provider_method_fullname defines the fullname of the method to call to get
     * the metadata required to authenticate using the provided sign_modes
     *
     * @generated from protobuf field: string authn_info_provider_method_fullname = 3;
     */
    authnInfoProviderMethodFullname: string;
}
/**
 * ChainDescriptor describes chain information of the application
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.ChainDescriptor
 */
export interface ChainDescriptor {
    /**
     * id is the chain id
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * CodecDescriptor describes the registered interfaces and provides metadata information on the types
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.CodecDescriptor
 */
export interface CodecDescriptor {
    /**
     * interfaces is a list of the registerted interfaces descriptors
     *
     * @generated from protobuf field: repeated cosmos.base.reflection.v2alpha1.InterfaceDescriptor interfaces = 1;
     */
    interfaces: InterfaceDescriptor[];
}
/**
 * InterfaceDescriptor describes the implementation of an interface
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.InterfaceDescriptor
 */
export interface InterfaceDescriptor {
    /**
     * fullname is the name of the interface
     *
     * @generated from protobuf field: string fullname = 1;
     */
    fullname: string;
    /**
     * interface_accepting_messages contains information regarding the proto messages which contain the interface as
     * google.protobuf.Any field
     *
     * @generated from protobuf field: repeated cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor interface_accepting_messages = 2;
     */
    interfaceAcceptingMessages: InterfaceAcceptingMessageDescriptor[];
    /**
     * interface_implementers is a list of the descriptors of the interface implementers
     *
     * @generated from protobuf field: repeated cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor interface_implementers = 3;
     */
    interfaceImplementers: InterfaceImplementerDescriptor[];
}
/**
 * InterfaceImplementerDescriptor describes an interface implementer
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor
 */
export interface InterfaceImplementerDescriptor {
    /**
     * fullname is the protobuf queryable name of the interface implementer
     *
     * @generated from protobuf field: string fullname = 1;
     */
    fullname: string;
    /**
     * type_url defines the type URL used when marshalling the type as any
     * this is required so we can provide type safe google.protobuf.Any marshalling and
     * unmarshalling, making sure that we don't accept just 'any' type
     * in our interface fields
     *
     * @generated from protobuf field: string type_url = 2;
     */
    typeUrl: string;
}
/**
 * InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
 * an interface represented as a google.protobuf.Any
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor
 */
export interface InterfaceAcceptingMessageDescriptor {
    /**
     * fullname is the protobuf fullname of the type containing the interface
     *
     * @generated from protobuf field: string fullname = 1;
     */
    fullname: string;
    /**
     * field_descriptor_names is a list of the protobuf name (not fullname) of the field
     * which contains the interface as google.protobuf.Any (the interface is the same, but
     * it can be in multiple fields of the same proto message)
     *
     * @generated from protobuf field: repeated string field_descriptor_names = 2;
     */
    fieldDescriptorNames: string[];
}
/**
 * ConfigurationDescriptor contains metadata information on the sdk.Config
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.ConfigurationDescriptor
 */
export interface ConfigurationDescriptor {
    /**
     * bech32_account_address_prefix is the account address prefix
     *
     * @generated from protobuf field: string bech32_account_address_prefix = 1;
     */
    bech32AccountAddressPrefix: string;
}
/**
 * MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.MsgDescriptor
 */
export interface MsgDescriptor {
    /**
     * msg_type_url contains the TypeURL of a sdk.Msg.
     *
     * @generated from protobuf field: string msg_type_url = 1;
     */
    msgTypeUrl: string;
}
/**
 * GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest
 */
export interface GetAuthnDescriptorRequest {
}
/**
 * GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse
 */
export interface GetAuthnDescriptorResponse {
    /**
     * authn describes how to authenticate to the application when sending transactions
     *
     * @generated from protobuf field: cosmos.base.reflection.v2alpha1.AuthnDescriptor authn = 1;
     */
    authn?: AuthnDescriptor;
}
/**
 * GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest
 */
export interface GetChainDescriptorRequest {
}
/**
 * GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse
 */
export interface GetChainDescriptorResponse {
    /**
     * chain describes application chain information
     *
     * @generated from protobuf field: cosmos.base.reflection.v2alpha1.ChainDescriptor chain = 1;
     */
    chain?: ChainDescriptor;
}
/**
 * GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest
 */
export interface GetCodecDescriptorRequest {
}
/**
 * GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse
 */
export interface GetCodecDescriptorResponse {
    /**
     * codec describes the application codec such as registered interfaces and implementations
     *
     * @generated from protobuf field: cosmos.base.reflection.v2alpha1.CodecDescriptor codec = 1;
     */
    codec?: CodecDescriptor;
}
/**
 * GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest
 */
export interface GetConfigurationDescriptorRequest {
}
/**
 * GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse
 */
export interface GetConfigurationDescriptorResponse {
    /**
     * config describes the application's sdk.Config
     *
     * @generated from protobuf field: cosmos.base.reflection.v2alpha1.ConfigurationDescriptor config = 1;
     */
    config?: ConfigurationDescriptor;
}
/**
 * GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest
 */
export interface GetQueryServicesDescriptorRequest {
}
/**
 * GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse
 */
export interface GetQueryServicesDescriptorResponse {
    /**
     * queries provides information on the available queryable services
     *
     * @generated from protobuf field: cosmos.base.reflection.v2alpha1.QueryServicesDescriptor queries = 1;
     */
    queries?: QueryServicesDescriptor;
}
/**
 * GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest
 */
export interface GetTxDescriptorRequest {
}
/**
 * GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse
 */
export interface GetTxDescriptorResponse {
    /**
     * tx provides information on msgs that can be forwarded to the application
     * alongside the accepted transaction protobuf type
     *
     * @generated from protobuf field: cosmos.base.reflection.v2alpha1.TxDescriptor tx = 1;
     */
    tx?: TxDescriptor;
}
/**
 * QueryServicesDescriptor contains the list of cosmos-sdk queriable services
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.QueryServicesDescriptor
 */
export interface QueryServicesDescriptor {
    /**
     * query_services is a list of cosmos-sdk QueryServiceDescriptor
     *
     * @generated from protobuf field: repeated cosmos.base.reflection.v2alpha1.QueryServiceDescriptor query_services = 1;
     */
    queryServices: QueryServiceDescriptor[];
}
/**
 * QueryServiceDescriptor describes a cosmos-sdk queryable service
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.QueryServiceDescriptor
 */
export interface QueryServiceDescriptor {
    /**
     * fullname is the protobuf fullname of the service descriptor
     *
     * @generated from protobuf field: string fullname = 1;
     */
    fullname: string;
    /**
     * is_module describes if this service is actually exposed by an application's module
     *
     * @generated from protobuf field: bool is_module = 2;
     */
    isModule: boolean;
    /**
     * methods provides a list of query service methods
     *
     * @generated from protobuf field: repeated cosmos.base.reflection.v2alpha1.QueryMethodDescriptor methods = 3;
     */
    methods: QueryMethodDescriptor[];
}
/**
 * QueryMethodDescriptor describes a queryable method of a query service
 * no other info is provided beside method name and tendermint queryable path
 * because it would be redundant with the grpc reflection service
 *
 * @generated from protobuf message cosmos.base.reflection.v2alpha1.QueryMethodDescriptor
 */
export interface QueryMethodDescriptor {
    /**
     * name is the protobuf name (not fullname) of the method
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * full_query_path is the path that can be used to query
     * this method via tendermint abci.Query
     *
     * @generated from protobuf field: string full_query_path = 2;
     */
    fullQueryPath: string;
}
declare class AppDescriptor$Type extends MessageType<AppDescriptor> {
    constructor();
    create(value?: PartialMessage<AppDescriptor>): AppDescriptor;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AppDescriptor): AppDescriptor;
    internalBinaryWrite(message: AppDescriptor, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.AppDescriptor
 */
export declare const AppDescriptor: AppDescriptor$Type;
declare class TxDescriptor$Type extends MessageType<TxDescriptor> {
    constructor();
    create(value?: PartialMessage<TxDescriptor>): TxDescriptor;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TxDescriptor): TxDescriptor;
    internalBinaryWrite(message: TxDescriptor, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.TxDescriptor
 */
export declare const TxDescriptor: TxDescriptor$Type;
declare class AuthnDescriptor$Type extends MessageType<AuthnDescriptor> {
    constructor();
    create(value?: PartialMessage<AuthnDescriptor>): AuthnDescriptor;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AuthnDescriptor): AuthnDescriptor;
    internalBinaryWrite(message: AuthnDescriptor, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.AuthnDescriptor
 */
export declare const AuthnDescriptor: AuthnDescriptor$Type;
declare class SigningModeDescriptor$Type extends MessageType<SigningModeDescriptor> {
    constructor();
    create(value?: PartialMessage<SigningModeDescriptor>): SigningModeDescriptor;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SigningModeDescriptor): SigningModeDescriptor;
    internalBinaryWrite(message: SigningModeDescriptor, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.SigningModeDescriptor
 */
export declare const SigningModeDescriptor: SigningModeDescriptor$Type;
declare class ChainDescriptor$Type extends MessageType<ChainDescriptor> {
    constructor();
    create(value?: PartialMessage<ChainDescriptor>): ChainDescriptor;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ChainDescriptor): ChainDescriptor;
    internalBinaryWrite(message: ChainDescriptor, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.ChainDescriptor
 */
export declare const ChainDescriptor: ChainDescriptor$Type;
declare class CodecDescriptor$Type extends MessageType<CodecDescriptor> {
    constructor();
    create(value?: PartialMessage<CodecDescriptor>): CodecDescriptor;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CodecDescriptor): CodecDescriptor;
    internalBinaryWrite(message: CodecDescriptor, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.CodecDescriptor
 */
export declare const CodecDescriptor: CodecDescriptor$Type;
declare class InterfaceDescriptor$Type extends MessageType<InterfaceDescriptor> {
    constructor();
    create(value?: PartialMessage<InterfaceDescriptor>): InterfaceDescriptor;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InterfaceDescriptor): InterfaceDescriptor;
    internalBinaryWrite(message: InterfaceDescriptor, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.InterfaceDescriptor
 */
export declare const InterfaceDescriptor: InterfaceDescriptor$Type;
declare class InterfaceImplementerDescriptor$Type extends MessageType<InterfaceImplementerDescriptor> {
    constructor();
    create(value?: PartialMessage<InterfaceImplementerDescriptor>): InterfaceImplementerDescriptor;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InterfaceImplementerDescriptor): InterfaceImplementerDescriptor;
    internalBinaryWrite(message: InterfaceImplementerDescriptor, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor
 */
export declare const InterfaceImplementerDescriptor: InterfaceImplementerDescriptor$Type;
declare class InterfaceAcceptingMessageDescriptor$Type extends MessageType<InterfaceAcceptingMessageDescriptor> {
    constructor();
    create(value?: PartialMessage<InterfaceAcceptingMessageDescriptor>): InterfaceAcceptingMessageDescriptor;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InterfaceAcceptingMessageDescriptor): InterfaceAcceptingMessageDescriptor;
    internalBinaryWrite(message: InterfaceAcceptingMessageDescriptor, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor
 */
export declare const InterfaceAcceptingMessageDescriptor: InterfaceAcceptingMessageDescriptor$Type;
declare class ConfigurationDescriptor$Type extends MessageType<ConfigurationDescriptor> {
    constructor();
    create(value?: PartialMessage<ConfigurationDescriptor>): ConfigurationDescriptor;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConfigurationDescriptor): ConfigurationDescriptor;
    internalBinaryWrite(message: ConfigurationDescriptor, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.ConfigurationDescriptor
 */
export declare const ConfigurationDescriptor: ConfigurationDescriptor$Type;
declare class MsgDescriptor$Type extends MessageType<MsgDescriptor> {
    constructor();
    create(value?: PartialMessage<MsgDescriptor>): MsgDescriptor;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgDescriptor): MsgDescriptor;
    internalBinaryWrite(message: MsgDescriptor, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.MsgDescriptor
 */
export declare const MsgDescriptor: MsgDescriptor$Type;
declare class GetAuthnDescriptorRequest$Type extends MessageType<GetAuthnDescriptorRequest> {
    constructor();
    create(value?: PartialMessage<GetAuthnDescriptorRequest>): GetAuthnDescriptorRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAuthnDescriptorRequest): GetAuthnDescriptorRequest;
    internalBinaryWrite(message: GetAuthnDescriptorRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest
 */
export declare const GetAuthnDescriptorRequest: GetAuthnDescriptorRequest$Type;
declare class GetAuthnDescriptorResponse$Type extends MessageType<GetAuthnDescriptorResponse> {
    constructor();
    create(value?: PartialMessage<GetAuthnDescriptorResponse>): GetAuthnDescriptorResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAuthnDescriptorResponse): GetAuthnDescriptorResponse;
    internalBinaryWrite(message: GetAuthnDescriptorResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse
 */
export declare const GetAuthnDescriptorResponse: GetAuthnDescriptorResponse$Type;
declare class GetChainDescriptorRequest$Type extends MessageType<GetChainDescriptorRequest> {
    constructor();
    create(value?: PartialMessage<GetChainDescriptorRequest>): GetChainDescriptorRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetChainDescriptorRequest): GetChainDescriptorRequest;
    internalBinaryWrite(message: GetChainDescriptorRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest
 */
export declare const GetChainDescriptorRequest: GetChainDescriptorRequest$Type;
declare class GetChainDescriptorResponse$Type extends MessageType<GetChainDescriptorResponse> {
    constructor();
    create(value?: PartialMessage<GetChainDescriptorResponse>): GetChainDescriptorResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetChainDescriptorResponse): GetChainDescriptorResponse;
    internalBinaryWrite(message: GetChainDescriptorResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse
 */
export declare const GetChainDescriptorResponse: GetChainDescriptorResponse$Type;
declare class GetCodecDescriptorRequest$Type extends MessageType<GetCodecDescriptorRequest> {
    constructor();
    create(value?: PartialMessage<GetCodecDescriptorRequest>): GetCodecDescriptorRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCodecDescriptorRequest): GetCodecDescriptorRequest;
    internalBinaryWrite(message: GetCodecDescriptorRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest
 */
export declare const GetCodecDescriptorRequest: GetCodecDescriptorRequest$Type;
declare class GetCodecDescriptorResponse$Type extends MessageType<GetCodecDescriptorResponse> {
    constructor();
    create(value?: PartialMessage<GetCodecDescriptorResponse>): GetCodecDescriptorResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCodecDescriptorResponse): GetCodecDescriptorResponse;
    internalBinaryWrite(message: GetCodecDescriptorResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse
 */
export declare const GetCodecDescriptorResponse: GetCodecDescriptorResponse$Type;
declare class GetConfigurationDescriptorRequest$Type extends MessageType<GetConfigurationDescriptorRequest> {
    constructor();
    create(value?: PartialMessage<GetConfigurationDescriptorRequest>): GetConfigurationDescriptorRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetConfigurationDescriptorRequest): GetConfigurationDescriptorRequest;
    internalBinaryWrite(message: GetConfigurationDescriptorRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest
 */
export declare const GetConfigurationDescriptorRequest: GetConfigurationDescriptorRequest$Type;
declare class GetConfigurationDescriptorResponse$Type extends MessageType<GetConfigurationDescriptorResponse> {
    constructor();
    create(value?: PartialMessage<GetConfigurationDescriptorResponse>): GetConfigurationDescriptorResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetConfigurationDescriptorResponse): GetConfigurationDescriptorResponse;
    internalBinaryWrite(message: GetConfigurationDescriptorResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse
 */
export declare const GetConfigurationDescriptorResponse: GetConfigurationDescriptorResponse$Type;
declare class GetQueryServicesDescriptorRequest$Type extends MessageType<GetQueryServicesDescriptorRequest> {
    constructor();
    create(value?: PartialMessage<GetQueryServicesDescriptorRequest>): GetQueryServicesDescriptorRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetQueryServicesDescriptorRequest): GetQueryServicesDescriptorRequest;
    internalBinaryWrite(message: GetQueryServicesDescriptorRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest
 */
export declare const GetQueryServicesDescriptorRequest: GetQueryServicesDescriptorRequest$Type;
declare class GetQueryServicesDescriptorResponse$Type extends MessageType<GetQueryServicesDescriptorResponse> {
    constructor();
    create(value?: PartialMessage<GetQueryServicesDescriptorResponse>): GetQueryServicesDescriptorResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetQueryServicesDescriptorResponse): GetQueryServicesDescriptorResponse;
    internalBinaryWrite(message: GetQueryServicesDescriptorResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse
 */
export declare const GetQueryServicesDescriptorResponse: GetQueryServicesDescriptorResponse$Type;
declare class GetTxDescriptorRequest$Type extends MessageType<GetTxDescriptorRequest> {
    constructor();
    create(value?: PartialMessage<GetTxDescriptorRequest>): GetTxDescriptorRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetTxDescriptorRequest): GetTxDescriptorRequest;
    internalBinaryWrite(message: GetTxDescriptorRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest
 */
export declare const GetTxDescriptorRequest: GetTxDescriptorRequest$Type;
declare class GetTxDescriptorResponse$Type extends MessageType<GetTxDescriptorResponse> {
    constructor();
    create(value?: PartialMessage<GetTxDescriptorResponse>): GetTxDescriptorResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetTxDescriptorResponse): GetTxDescriptorResponse;
    internalBinaryWrite(message: GetTxDescriptorResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse
 */
export declare const GetTxDescriptorResponse: GetTxDescriptorResponse$Type;
declare class QueryServicesDescriptor$Type extends MessageType<QueryServicesDescriptor> {
    constructor();
    create(value?: PartialMessage<QueryServicesDescriptor>): QueryServicesDescriptor;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryServicesDescriptor): QueryServicesDescriptor;
    internalBinaryWrite(message: QueryServicesDescriptor, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.QueryServicesDescriptor
 */
export declare const QueryServicesDescriptor: QueryServicesDescriptor$Type;
declare class QueryServiceDescriptor$Type extends MessageType<QueryServiceDescriptor> {
    constructor();
    create(value?: PartialMessage<QueryServiceDescriptor>): QueryServiceDescriptor;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryServiceDescriptor): QueryServiceDescriptor;
    internalBinaryWrite(message: QueryServiceDescriptor, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.QueryServiceDescriptor
 */
export declare const QueryServiceDescriptor: QueryServiceDescriptor$Type;
declare class QueryMethodDescriptor$Type extends MessageType<QueryMethodDescriptor> {
    constructor();
    create(value?: PartialMessage<QueryMethodDescriptor>): QueryMethodDescriptor;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryMethodDescriptor): QueryMethodDescriptor;
    internalBinaryWrite(message: QueryMethodDescriptor, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.base.reflection.v2alpha1.QueryMethodDescriptor
 */
export declare const QueryMethodDescriptor: QueryMethodDescriptor$Type;
/**
 * @generated ServiceType for protobuf service cosmos.base.reflection.v2alpha1.ReflectionService
 */
export declare const ReflectionService: any;
export {};