// @generated automatically
import { ServiceClient as NodeServiceClient } from "./node/v1beta1/query.client";
import { ServiceClient as TendermintServiceClient } from "./tendermint/v1beta1/query.client";

export class CombinedServiceClient {
    constructor(_transport) {
        this.nodeClient = new NodeServiceClient(_transport);
        this.tendermintClient = new TendermintServiceClient(_transport);
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
}
