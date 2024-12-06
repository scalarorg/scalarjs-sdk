// @generated automatically
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import { ServiceClient as NodeServiceClient } from "./cosmos/base/node/v1beta1/query.client";
import type { ConfigResponse } from "./cosmos/base/node/v1beta1/query";
import type { ConfigRequest } from "./cosmos/base/node/v1beta1/query";
import { ServiceClient as TendermintServiceClient } from "./cosmos/base/tendermint/v1beta1/query.client";
import type { GetValidatorSetByHeightResponse } from "./cosmos/base/tendermint/v1beta1/query";
import type { GetValidatorSetByHeightRequest } from "./cosmos/base/tendermint/v1beta1/query";
import type { GetLatestValidatorSetResponse } from "./cosmos/base/tendermint/v1beta1/query";
import type { GetLatestValidatorSetRequest } from "./cosmos/base/tendermint/v1beta1/query";
import type { GetBlockByHeightResponse } from "./cosmos/base/tendermint/v1beta1/query";
import type { GetBlockByHeightRequest } from "./cosmos/base/tendermint/v1beta1/query";
import type { GetLatestBlockResponse } from "./cosmos/base/tendermint/v1beta1/query";
import type { GetLatestBlockRequest } from "./cosmos/base/tendermint/v1beta1/query";
import type { GetSyncingResponse } from "./cosmos/base/tendermint/v1beta1/query";
import type { GetSyncingRequest } from "./cosmos/base/tendermint/v1beta1/query";
import type { GetNodeInfoResponse } from "./cosmos/base/tendermint/v1beta1/query";
import type { GetNodeInfoRequest } from "./cosmos/base/tendermint/v1beta1/query";
import { ReflectionServiceClient as ReflectionServiceClient } from "./cosmos/base/reflection/v2alpha1/reflection.client";
import type { GetTxDescriptorResponse } from "./cosmos/base/reflection/v2alpha1/reflection";
import type { GetTxDescriptorRequest } from "./cosmos/base/reflection/v2alpha1/reflection";
import type { GetQueryServicesDescriptorResponse } from "./cosmos/base/reflection/v2alpha1/reflection";
import type { GetQueryServicesDescriptorRequest } from "./cosmos/base/reflection/v2alpha1/reflection";
import type { GetConfigurationDescriptorResponse } from "./cosmos/base/reflection/v2alpha1/reflection";
import type { GetConfigurationDescriptorRequest } from "./cosmos/base/reflection/v2alpha1/reflection";
import type { GetCodecDescriptorResponse } from "./cosmos/base/reflection/v2alpha1/reflection";
import type { GetCodecDescriptorRequest } from "./cosmos/base/reflection/v2alpha1/reflection";
import type { GetChainDescriptorResponse } from "./cosmos/base/reflection/v2alpha1/reflection";
import type { GetChainDescriptorRequest } from "./cosmos/base/reflection/v2alpha1/reflection";
import type { GetAuthnDescriptorResponse } from "./cosmos/base/reflection/v2alpha1/reflection";
import type { GetAuthnDescriptorRequest } from "./cosmos/base/reflection/v2alpha1/reflection";

export declare class CombinedServiceClient {
    private readonly nodeClient: NodeServiceClient;
    private readonly tendermintClient: TendermintServiceClient;
    private readonly reflectionClient: ReflectionServiceClient;
    constructor(_transport: RpcTransport);

    config(input: ConfigRequest, options?: RpcOptions): UnaryCall<ConfigRequest, ConfigResponse>;

    getNodeInfo(input: GetNodeInfoRequest, options?: RpcOptions): UnaryCall<GetNodeInfoRequest, GetNodeInfoResponse>;

    getSyncing(input: GetSyncingRequest, options?: RpcOptions): UnaryCall<GetSyncingRequest, GetSyncingResponse>;

    getLatestBlock(input: GetLatestBlockRequest, options?: RpcOptions): UnaryCall<GetLatestBlockRequest, GetLatestBlockResponse>;

    getBlockByHeight(input: GetBlockByHeightRequest, options?: RpcOptions): UnaryCall<GetBlockByHeightRequest, GetBlockByHeightResponse>;

    getLatestValidatorSet(input: GetLatestValidatorSetRequest, options?: RpcOptions): UnaryCall<GetLatestValidatorSetRequest, GetLatestValidatorSetResponse>;

    getValidatorSetByHeight(input: GetValidatorSetByHeightRequest, options?: RpcOptions): UnaryCall<GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse>;

    getAuthnDescriptor(input: GetAuthnDescriptorRequest, options?: RpcOptions): UnaryCall<GetAuthnDescriptorRequest, GetAuthnDescriptorResponse>;

    getChainDescriptor(input: GetChainDescriptorRequest, options?: RpcOptions): UnaryCall<GetChainDescriptorRequest, GetChainDescriptorResponse>;

    getCodecDescriptor(input: GetCodecDescriptorRequest, options?: RpcOptions): UnaryCall<GetCodecDescriptorRequest, GetCodecDescriptorResponse>;

    getConfigurationDescriptor(input: GetConfigurationDescriptorRequest, options?: RpcOptions): UnaryCall<GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse>;

    getQueryServicesDescriptor(input: GetQueryServicesDescriptorRequest, options?: RpcOptions): UnaryCall<GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse>;

    getTxDescriptor(input: GetTxDescriptorRequest, options?: RpcOptions): UnaryCall<GetTxDescriptorRequest, GetTxDescriptorResponse>;
}
