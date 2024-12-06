// @generated automatically
import { ServiceClient as NodeServiceClient } from "./cosmos/base/node/v1beta1/query.client";
import { ServiceClient as TendermintServiceClient } from "./cosmos/base/tendermint/v1beta1/query.client";
import { ReflectionServiceClient as ReflectionServiceClient } from "./cosmos/base/reflection/v2alpha1/reflection.client";

export class CombinedServiceClient {
    constructor(_transport) {
        this.nodeClient = new NodeServiceClient(_transport);
        this.tendermintClient = new TendermintServiceClient(_transport);
        this.reflectionClient = new ReflectionServiceClient(_transport);
    }

    config(...args) {
        return this.nodeClient.config(...args);
    }

    getNodeInfo(...args) {
        return this.tendermintClient.getNodeInfo(...args);
    }

    getSyncing(...args) {
        return this.tendermintClient.getSyncing(...args);
    }

    getLatestBlock(...args) {
        return this.tendermintClient.getLatestBlock(...args);
    }

    getBlockByHeight(...args) {
        return this.tendermintClient.getBlockByHeight(...args);
    }

    getLatestValidatorSet(...args) {
        return this.tendermintClient.getLatestValidatorSet(...args);
    }

    getValidatorSetByHeight(...args) {
        return this.tendermintClient.getValidatorSetByHeight(...args);
    }

    getAuthnDescriptor(...args) {
        return this.reflectionClient.getAuthnDescriptor(...args);
    }

    getChainDescriptor(...args) {
        return this.reflectionClient.getChainDescriptor(...args);
    }

    getCodecDescriptor(...args) {
        return this.reflectionClient.getCodecDescriptor(...args);
    }

    getConfigurationDescriptor(...args) {
        return this.reflectionClient.getConfigurationDescriptor(...args);
    }

    getQueryServicesDescriptor(...args) {
        return this.reflectionClient.getQueryServicesDescriptor(...args);
    }

    getTxDescriptor(...args) {
        return this.reflectionClient.getTxDescriptor(...args);
    }
}
