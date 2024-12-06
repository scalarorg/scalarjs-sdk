// @generated automatically
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import { ServiceClient as NodeServiceClient } from "./node/v1beta1/query.client";
import type { ConfigResponse } from "./cosmos/base/node/v1beta1/query";
import type { ConfigRequest } from "./cosmos/base/node/v1beta1/query";
import { ServiceClient as TendermintServiceClient } from "./tendermint/v1beta1/query.client";
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

export declare class CombinedServiceClient {
    private readonly nodeClient: NodeServiceClient;
    private readonly tendermintClient: TendermintServiceClient;
    constructor(_transport: RpcTransport);

    config(input: ConfigRequest, options?: RpcOptions): UnaryCall<ConfigRequest, ConfigResponse>;

    getNodeInfo(input: GetNodeInfoRequest, options?: RpcOptions): UnaryCall<GetNodeInfoRequest, GetNodeInfoResponse>;

    getSyncing(input: GetSyncingRequest, options?: RpcOptions): UnaryCall<GetSyncingRequest, GetSyncingResponse>;

    getLatestBlock(input: GetLatestBlockRequest, options?: RpcOptions): UnaryCall<GetLatestBlockRequest, GetLatestBlockResponse>;

    getBlockByHeight(input: GetBlockByHeightRequest, options?: RpcOptions): UnaryCall<GetBlockByHeightRequest, GetBlockByHeightResponse>;

    getLatestValidatorSet(input: GetLatestValidatorSetRequest, options?: RpcOptions): UnaryCall<GetLatestValidatorSetRequest, GetLatestValidatorSetResponse>;

    getValidatorSetByHeight(input: GetValidatorSetByHeightRequest, options?: RpcOptions): UnaryCall<GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse>;
}
