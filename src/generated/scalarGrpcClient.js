// @generated automatically
import { QueryClient as CosmwasmWasmQueryClient } from "./cosmwasm/wasm/v1/query.client";
import { MsgClient as CosmwasmWasmTxClient } from "./cosmwasm/wasm/v1/tx.client";
import { QueryClient as CosmosUpgradeQueryClient } from "./cosmos/upgrade/v1beta1/query.client";
import { QueryClient as CosmosFeegrantQueryClient } from "./cosmos/feegrant/v1beta1/query.client";
import { MsgClient as CosmosFeegrantTxClient } from "./cosmos/feegrant/v1beta1/tx.client";
import { QueryClient as CosmosMintQueryClient } from "./cosmos/mint/v1beta1/query.client";
import { QueryClient as CosmosEvidenceQueryClient } from "./cosmos/evidence/v1beta1/query.client";
import { MsgClient as CosmosEvidenceTxClient } from "./cosmos/evidence/v1beta1/tx.client";
import { QueryClient as CosmosAuthQueryClient } from "./cosmos/auth/v1beta1/query.client";
import { QueryClient as CosmosBankQueryClient } from "./cosmos/bank/v1beta1/query.client";
import { MsgClient as CosmosBankTxClient } from "./cosmos/bank/v1beta1/tx.client";
import { QueryClient as CosmosDistributionQueryClient } from "./cosmos/distribution/v1beta1/query.client";
import { MsgClient as CosmosDistributionTxClient } from "./cosmos/distribution/v1beta1/tx.client";
import { MsgClient as CosmosCrisisTxClient } from "./cosmos/crisis/v1beta1/tx.client";
import { ServiceClient as CosmosTxServiceClient } from "./cosmos/tx/v1beta1/service.client";
import { MsgClient as CosmosVestingTxClient } from "./cosmos/vesting/v1beta1/tx.client";
import { QueryClient as CosmosStakingQueryClient } from "./cosmos/staking/v1beta1/query.client";
import { MsgClient as CosmosStakingTxClient } from "./cosmos/staking/v1beta1/tx.client";
import { QueryClient as CosmosParamsQueryClient } from "./cosmos/params/v1beta1/query.client";
import { QueryClient as CosmosAuthzQueryClient } from "./cosmos/authz/v1beta1/query.client";
import { MsgClient as CosmosAuthzTxClient } from "./cosmos/authz/v1beta1/tx.client";
import { QueryClient as CosmosSlashingQueryClient } from "./cosmos/slashing/v1beta1/query.client";
import { MsgClient as CosmosSlashingTxClient } from "./cosmos/slashing/v1beta1/tx.client";
import { ServiceClient as CosmosBaseTendermintQueryClient } from "./cosmos/base/tendermint/v1beta1/query.client";
import { ServiceClient as CosmosBaseNodeQueryClient } from "./cosmos/base/node/v1beta1/query.client";
import { ReflectionServiceClient as CosmosBaseReflectionReflectionClient } from "./cosmos/base/reflection/v2alpha1/reflection.client";
import { QueryClient as CosmosGovQueryClient } from "./cosmos/gov/v1beta1/query.client";
import { MsgClient as CosmosGovTxClient } from "./cosmos/gov/v1beta1/tx.client";
import { MsgServiceClient as AxelarVoteServiceClient } from "./axelar/vote/v1beta1/service.client";
import { MsgServiceClient as AxelarSnapshotServiceClient } from "./axelar/snapshot/v1beta1/service.client";
import { MsgServiceClient as AxelarAxelarnetServiceClient } from "./axelar/axelarnet/v1beta1/service.client";
import { MsgServiceClient as AxelarMultisigServiceClient } from "./axelar/multisig/v1beta1/service.client";
import { MsgServiceClient as AxelarNexusServiceClient } from "./axelar/nexus/v1beta1/service.client";
import { MsgServiceClient as AxelarRewardServiceClient } from "./axelar/reward/v1beta1/service.client";
import { MsgServiceClient as AxelarEvmServiceClient } from "./axelar/evm/v1beta1/service.client";
import { MsgServiceClient as AxelarTssServiceClient } from "./axelar/tss/v1beta1/service.client";
import { MsgClient as AxelarPermissionServiceClient } from "./axelar/permission/v1beta1/service.client";
import { MsgServiceClient as AxelarAuxiliaryServiceClient } from "./axelar/auxiliary/v1beta1/service.client";
import { QueryClient as IbcCoreConnectionQueryClient } from "./ibc/core/connection/v1/query.client";
import { MsgClient as IbcCoreConnectionTxClient } from "./ibc/core/connection/v1/tx.client";
import { QueryClient as IbcCoreChannelQueryClient } from "./ibc/core/channel/v1/query.client";
import { MsgClient as IbcCoreChannelTxClient } from "./ibc/core/channel/v1/tx.client";
import { QueryClient as IbcCoreClientQueryClient } from "./ibc/core/client/v1/query.client";
import { MsgClient as IbcCoreClientTxClient } from "./ibc/core/client/v1/tx.client";

export class ScalarGrpcClient {
    constructor(_transport) {
        this.queryCosmwasmWasmClient = new CosmwasmWasmQueryClient(_transport);
        this.txCosmwasmWasmClient = new CosmwasmWasmTxClient(_transport);
        this.queryCosmosUpgradeClient = new CosmosUpgradeQueryClient(_transport);
        this.queryCosmosFeegrantClient = new CosmosFeegrantQueryClient(_transport);
        this.txCosmosFeegrantClient = new CosmosFeegrantTxClient(_transport);
        this.queryCosmosMintClient = new CosmosMintQueryClient(_transport);
        this.queryCosmosEvidenceClient = new CosmosEvidenceQueryClient(_transport);
        this.txCosmosEvidenceClient = new CosmosEvidenceTxClient(_transport);
        this.queryCosmosAuthClient = new CosmosAuthQueryClient(_transport);
        this.queryCosmosBankClient = new CosmosBankQueryClient(_transport);
        this.txCosmosBankClient = new CosmosBankTxClient(_transport);
        this.queryCosmosDistributionClient = new CosmosDistributionQueryClient(_transport);
        this.txCosmosDistributionClient = new CosmosDistributionTxClient(_transport);
        this.txCosmosCrisisClient = new CosmosCrisisTxClient(_transport);
        this.serviceCosmosTxClient = new CosmosTxServiceClient(_transport);
        this.txCosmosVestingClient = new CosmosVestingTxClient(_transport);
        this.queryCosmosStakingClient = new CosmosStakingQueryClient(_transport);
        this.txCosmosStakingClient = new CosmosStakingTxClient(_transport);
        this.queryCosmosParamsClient = new CosmosParamsQueryClient(_transport);
        this.queryCosmosAuthzClient = new CosmosAuthzQueryClient(_transport);
        this.txCosmosAuthzClient = new CosmosAuthzTxClient(_transport);
        this.queryCosmosSlashingClient = new CosmosSlashingQueryClient(_transport);
        this.txCosmosSlashingClient = new CosmosSlashingTxClient(_transport);
        this.queryCosmosBaseTendermintClient = new CosmosBaseTendermintQueryClient(_transport);
        this.queryCosmosBaseNodeClient = new CosmosBaseNodeQueryClient(_transport);
        this.reflectionCosmosBaseReflectionClient = new CosmosBaseReflectionReflectionClient(_transport);
        this.queryCosmosGovClient = new CosmosGovQueryClient(_transport);
        this.txCosmosGovClient = new CosmosGovTxClient(_transport);
        this.serviceAxelarVoteClient = new AxelarVoteServiceClient(_transport);
        this.serviceAxelarSnapshotClient = new AxelarSnapshotServiceClient(_transport);
        this.serviceAxelarAxelarnetClient = new AxelarAxelarnetServiceClient(_transport);
        this.serviceAxelarMultisigClient = new AxelarMultisigServiceClient(_transport);
        this.serviceAxelarNexusClient = new AxelarNexusServiceClient(_transport);
        this.serviceAxelarRewardClient = new AxelarRewardServiceClient(_transport);
        this.serviceAxelarEvmClient = new AxelarEvmServiceClient(_transport);
        this.serviceAxelarTssClient = new AxelarTssServiceClient(_transport);
        this.serviceAxelarPermissionClient = new AxelarPermissionServiceClient(_transport);
        this.serviceAxelarAuxiliaryClient = new AxelarAuxiliaryServiceClient(_transport);
        this.queryIbcCoreConnectionClient = new IbcCoreConnectionQueryClient(_transport);
        this.txIbcCoreConnectionClient = new IbcCoreConnectionTxClient(_transport);
        this.queryIbcCoreChannelClient = new IbcCoreChannelQueryClient(_transport);
        this.txIbcCoreChannelClient = new IbcCoreChannelTxClient(_transport);
        this.queryIbcCoreClientClient = new IbcCoreClientQueryClient(_transport);
        this.txIbcCoreClientClient = new IbcCoreClientTxClient(_transport);
    }

    cosmwasmwasmqueryclient_contractInfo(...args) {
        return this.queryCosmwasmWasmClient.contractInfo(...args);
    }

    cosmwasmwasmqueryclient_contractHistory(...args) {
        return this.queryCosmwasmWasmClient.contractHistory(...args);
    }

    cosmwasmwasmqueryclient_contractsByCode(...args) {
        return this.queryCosmwasmWasmClient.contractsByCode(...args);
    }

    cosmwasmwasmqueryclient_allContractState(...args) {
        return this.queryCosmwasmWasmClient.allContractState(...args);
    }

    cosmwasmwasmqueryclient_rawContractState(...args) {
        return this.queryCosmwasmWasmClient.rawContractState(...args);
    }

    cosmwasmwasmqueryclient_smartContractState(...args) {
        return this.queryCosmwasmWasmClient.smartContractState(...args);
    }

    cosmwasmwasmqueryclient_code(...args) {
        return this.queryCosmwasmWasmClient.code(...args);
    }

    cosmwasmwasmqueryclient_codes(...args) {
        return this.queryCosmwasmWasmClient.codes(...args);
    }

    cosmwasmwasmqueryclient_pinnedCodes(...args) {
        return this.queryCosmwasmWasmClient.pinnedCodes(...args);
    }

    cosmwasmwasmqueryclient_params(...args) {
        return this.queryCosmwasmWasmClient.params(...args);
    }

    cosmwasmwasmqueryclient_contractsByCreator(...args) {
        return this.queryCosmwasmWasmClient.contractsByCreator(...args);
    }

    cosmwasmwasmmsgclient_storeCode(...args) {
        return this.txCosmwasmWasmClient.storeCode(...args);
    }

    cosmwasmwasmmsgclient_instantiateContract(...args) {
        return this.txCosmwasmWasmClient.instantiateContract(...args);
    }

    cosmwasmwasmmsgclient_instantiateContract2(...args) {
        return this.txCosmwasmWasmClient.instantiateContract2(...args);
    }

    cosmwasmwasmmsgclient_executeContract(...args) {
        return this.txCosmwasmWasmClient.executeContract(...args);
    }

    cosmwasmwasmmsgclient_migrateContract(...args) {
        return this.txCosmwasmWasmClient.migrateContract(...args);
    }

    cosmwasmwasmmsgclient_updateAdmin(...args) {
        return this.txCosmwasmWasmClient.updateAdmin(...args);
    }

    cosmwasmwasmmsgclient_clearAdmin(...args) {
        return this.txCosmwasmWasmClient.clearAdmin(...args);
    }

    cosmwasmwasmmsgclient_updateInstantiateConfig(...args) {
        return this.txCosmwasmWasmClient.updateInstantiateConfig(...args);
    }

    cosmosupgradequeryclient_currentPlan(...args) {
        return this.queryCosmosUpgradeClient.currentPlan(...args);
    }

    cosmosupgradequeryclient_appliedPlan(...args) {
        return this.queryCosmosUpgradeClient.appliedPlan(...args);
    }

    cosmosupgradequeryclient_upgradedConsensusState(...args) {
        return this.queryCosmosUpgradeClient.upgradedConsensusState(...args);
    }

    cosmosupgradequeryclient_moduleVersions(...args) {
        return this.queryCosmosUpgradeClient.moduleVersions(...args);
    }

    cosmosfeegrantqueryclient_allowance(...args) {
        return this.queryCosmosFeegrantClient.allowance(...args);
    }

    cosmosfeegrantqueryclient_allowances(...args) {
        return this.queryCosmosFeegrantClient.allowances(...args);
    }

    cosmosfeegrantqueryclient_allowancesByGranter(...args) {
        return this.queryCosmosFeegrantClient.allowancesByGranter(...args);
    }

    cosmosfeegrantmsgclient_grantAllowance(...args) {
        return this.txCosmosFeegrantClient.grantAllowance(...args);
    }

    cosmosfeegrantmsgclient_revokeAllowance(...args) {
        return this.txCosmosFeegrantClient.revokeAllowance(...args);
    }

    cosmosmintqueryclient_params(...args) {
        return this.queryCosmosMintClient.params(...args);
    }

    cosmosmintqueryclient_inflation(...args) {
        return this.queryCosmosMintClient.inflation(...args);
    }

    cosmosmintqueryclient_annualProvisions(...args) {
        return this.queryCosmosMintClient.annualProvisions(...args);
    }

    cosmosevidencequeryclient_evidence(...args) {
        return this.queryCosmosEvidenceClient.evidence(...args);
    }

    cosmosevidencequeryclient_allEvidence(...args) {
        return this.queryCosmosEvidenceClient.allEvidence(...args);
    }

    cosmosevidencemsgclient_submitEvidence(...args) {
        return this.txCosmosEvidenceClient.submitEvidence(...args);
    }

    cosmosauthqueryclient_accounts(...args) {
        return this.queryCosmosAuthClient.accounts(...args);
    }

    cosmosauthqueryclient_account(...args) {
        return this.queryCosmosAuthClient.account(...args);
    }

    cosmosauthqueryclient_params(...args) {
        return this.queryCosmosAuthClient.params(...args);
    }

    cosmosauthqueryclient_moduleAccountByName(...args) {
        return this.queryCosmosAuthClient.moduleAccountByName(...args);
    }

    cosmosbankqueryclient_balance(...args) {
        return this.queryCosmosBankClient.balance(...args);
    }

    cosmosbankqueryclient_allBalances(...args) {
        return this.queryCosmosBankClient.allBalances(...args);
    }

    cosmosbankqueryclient_spendableBalances(...args) {
        return this.queryCosmosBankClient.spendableBalances(...args);
    }

    cosmosbankqueryclient_totalSupply(...args) {
        return this.queryCosmosBankClient.totalSupply(...args);
    }

    cosmosbankqueryclient_supplyOf(...args) {
        return this.queryCosmosBankClient.supplyOf(...args);
    }

    cosmosbankqueryclient_params(...args) {
        return this.queryCosmosBankClient.params(...args);
    }

    cosmosbankqueryclient_denomMetadata(...args) {
        return this.queryCosmosBankClient.denomMetadata(...args);
    }

    cosmosbankqueryclient_denomsMetadata(...args) {
        return this.queryCosmosBankClient.denomsMetadata(...args);
    }

    cosmosbankmsgclient_send(...args) {
        return this.txCosmosBankClient.send(...args);
    }

    cosmosbankmsgclient_multiSend(...args) {
        return this.txCosmosBankClient.multiSend(...args);
    }

    cosmosdistributionqueryclient_params(...args) {
        return this.queryCosmosDistributionClient.params(...args);
    }

    cosmosdistributionqueryclient_validatorOutstandingRewards(...args) {
        return this.queryCosmosDistributionClient.validatorOutstandingRewards(...args);
    }

    cosmosdistributionqueryclient_validatorCommission(...args) {
        return this.queryCosmosDistributionClient.validatorCommission(...args);
    }

    cosmosdistributionqueryclient_validatorSlashes(...args) {
        return this.queryCosmosDistributionClient.validatorSlashes(...args);
    }

    cosmosdistributionqueryclient_delegationRewards(...args) {
        return this.queryCosmosDistributionClient.delegationRewards(...args);
    }

    cosmosdistributionqueryclient_delegationTotalRewards(...args) {
        return this.queryCosmosDistributionClient.delegationTotalRewards(...args);
    }

    cosmosdistributionqueryclient_delegatorValidators(...args) {
        return this.queryCosmosDistributionClient.delegatorValidators(...args);
    }

    cosmosdistributionqueryclient_delegatorWithdrawAddress(...args) {
        return this.queryCosmosDistributionClient.delegatorWithdrawAddress(...args);
    }

    cosmosdistributionqueryclient_communityPool(...args) {
        return this.queryCosmosDistributionClient.communityPool(...args);
    }

    cosmosdistributionmsgclient_setWithdrawAddress(...args) {
        return this.txCosmosDistributionClient.setWithdrawAddress(...args);
    }

    cosmosdistributionmsgclient_withdrawDelegatorReward(...args) {
        return this.txCosmosDistributionClient.withdrawDelegatorReward(...args);
    }

    cosmosdistributionmsgclient_withdrawValidatorCommission(...args) {
        return this.txCosmosDistributionClient.withdrawValidatorCommission(...args);
    }

    cosmosdistributionmsgclient_fundCommunityPool(...args) {
        return this.txCosmosDistributionClient.fundCommunityPool(...args);
    }

    cosmoscrisismsgclient_verifyInvariant(...args) {
        return this.txCosmosCrisisClient.verifyInvariant(...args);
    }

    cosmostxserviceclient_simulate(...args) {
        return this.serviceCosmosTxClient.simulate(...args);
    }

    cosmostxserviceclient_getTx(...args) {
        return this.serviceCosmosTxClient.getTx(...args);
    }

    cosmostxserviceclient_broadcastTx(...args) {
        return this.serviceCosmosTxClient.broadcastTx(...args);
    }

    cosmostxserviceclient_getTxsEvent(...args) {
        return this.serviceCosmosTxClient.getTxsEvent(...args);
    }

    cosmostxserviceclient_getBlockWithTxs(...args) {
        return this.serviceCosmosTxClient.getBlockWithTxs(...args);
    }

    cosmosvestingmsgclient_createVestingAccount(...args) {
        return this.txCosmosVestingClient.createVestingAccount(...args);
    }

    cosmosstakingqueryclient_validators(...args) {
        return this.queryCosmosStakingClient.validators(...args);
    }

    cosmosstakingqueryclient_validator(...args) {
        return this.queryCosmosStakingClient.validator(...args);
    }

    cosmosstakingqueryclient_validatorDelegations(...args) {
        return this.queryCosmosStakingClient.validatorDelegations(...args);
    }

    cosmosstakingqueryclient_validatorUnbondingDelegations(...args) {
        return this.queryCosmosStakingClient.validatorUnbondingDelegations(...args);
    }

    cosmosstakingqueryclient_delegation(...args) {
        return this.queryCosmosStakingClient.delegation(...args);
    }

    cosmosstakingqueryclient_unbondingDelegation(...args) {
        return this.queryCosmosStakingClient.unbondingDelegation(...args);
    }

    cosmosstakingqueryclient_delegatorDelegations(...args) {
        return this.queryCosmosStakingClient.delegatorDelegations(...args);
    }

    cosmosstakingqueryclient_delegatorUnbondingDelegations(...args) {
        return this.queryCosmosStakingClient.delegatorUnbondingDelegations(...args);
    }

    cosmosstakingqueryclient_redelegations(...args) {
        return this.queryCosmosStakingClient.redelegations(...args);
    }

    cosmosstakingqueryclient_delegatorValidators(...args) {
        return this.queryCosmosStakingClient.delegatorValidators(...args);
    }

    cosmosstakingqueryclient_delegatorValidator(...args) {
        return this.queryCosmosStakingClient.delegatorValidator(...args);
    }

    cosmosstakingqueryclient_historicalInfo(...args) {
        return this.queryCosmosStakingClient.historicalInfo(...args);
    }

    cosmosstakingqueryclient_pool(...args) {
        return this.queryCosmosStakingClient.pool(...args);
    }

    cosmosstakingqueryclient_params(...args) {
        return this.queryCosmosStakingClient.params(...args);
    }

    cosmosstakingmsgclient_createValidator(...args) {
        return this.txCosmosStakingClient.createValidator(...args);
    }

    cosmosstakingmsgclient_editValidator(...args) {
        return this.txCosmosStakingClient.editValidator(...args);
    }

    cosmosstakingmsgclient_delegate(...args) {
        return this.txCosmosStakingClient.delegate(...args);
    }

    cosmosstakingmsgclient_beginRedelegate(...args) {
        return this.txCosmosStakingClient.beginRedelegate(...args);
    }

    cosmosstakingmsgclient_undelegate(...args) {
        return this.txCosmosStakingClient.undelegate(...args);
    }

    cosmosparamsqueryclient_params(...args) {
        return this.queryCosmosParamsClient.params(...args);
    }

    cosmosauthzqueryclient_grants(...args) {
        return this.queryCosmosAuthzClient.grants(...args);
    }

    cosmosauthzqueryclient_granterGrants(...args) {
        return this.queryCosmosAuthzClient.granterGrants(...args);
    }

    cosmosauthzqueryclient_granteeGrants(...args) {
        return this.queryCosmosAuthzClient.granteeGrants(...args);
    }

    cosmosauthzmsgclient_grant(...args) {
        return this.txCosmosAuthzClient.grant(...args);
    }

    cosmosauthzmsgclient_exec(...args) {
        return this.txCosmosAuthzClient.exec(...args);
    }

    cosmosauthzmsgclient_revoke(...args) {
        return this.txCosmosAuthzClient.revoke(...args);
    }

    cosmosslashingqueryclient_params(...args) {
        return this.queryCosmosSlashingClient.params(...args);
    }

    cosmosslashingqueryclient_signingInfo(...args) {
        return this.queryCosmosSlashingClient.signingInfo(...args);
    }

    cosmosslashingqueryclient_signingInfos(...args) {
        return this.queryCosmosSlashingClient.signingInfos(...args);
    }

    cosmosslashingmsgclient_unjail(...args) {
        return this.txCosmosSlashingClient.unjail(...args);
    }

    cosmosbasetendermintserviceclient_getNodeInfo(...args) {
        return this.queryCosmosBaseTendermintClient.getNodeInfo(...args);
    }

    cosmosbasetendermintserviceclient_getSyncing(...args) {
        return this.queryCosmosBaseTendermintClient.getSyncing(...args);
    }

    cosmosbasetendermintserviceclient_getLatestBlock(...args) {
        return this.queryCosmosBaseTendermintClient.getLatestBlock(...args);
    }

    cosmosbasetendermintserviceclient_getBlockByHeight(...args) {
        return this.queryCosmosBaseTendermintClient.getBlockByHeight(...args);
    }

    cosmosbasetendermintserviceclient_getLatestValidatorSet(...args) {
        return this.queryCosmosBaseTendermintClient.getLatestValidatorSet(...args);
    }

    cosmosbasetendermintserviceclient_getValidatorSetByHeight(...args) {
        return this.queryCosmosBaseTendermintClient.getValidatorSetByHeight(...args);
    }

    cosmosbasenodeserviceclient_config(...args) {
        return this.queryCosmosBaseNodeClient.config(...args);
    }

    cosmosbasereflectionreflectionserviceclient_getAuthnDescriptor(...args) {
        return this.reflectionCosmosBaseReflectionClient.getAuthnDescriptor(...args);
    }

    cosmosbasereflectionreflectionserviceclient_getChainDescriptor(...args) {
        return this.reflectionCosmosBaseReflectionClient.getChainDescriptor(...args);
    }

    cosmosbasereflectionreflectionserviceclient_getCodecDescriptor(...args) {
        return this.reflectionCosmosBaseReflectionClient.getCodecDescriptor(...args);
    }

    cosmosbasereflectionreflectionserviceclient_getConfigurationDescriptor(...args) {
        return this.reflectionCosmosBaseReflectionClient.getConfigurationDescriptor(...args);
    }

    cosmosbasereflectionreflectionserviceclient_getQueryServicesDescriptor(...args) {
        return this.reflectionCosmosBaseReflectionClient.getQueryServicesDescriptor(...args);
    }

    cosmosbasereflectionreflectionserviceclient_getTxDescriptor(...args) {
        return this.reflectionCosmosBaseReflectionClient.getTxDescriptor(...args);
    }

    cosmosgovqueryclient_proposal(...args) {
        return this.queryCosmosGovClient.proposal(...args);
    }

    cosmosgovqueryclient_proposals(...args) {
        return this.queryCosmosGovClient.proposals(...args);
    }

    cosmosgovqueryclient_vote(...args) {
        return this.queryCosmosGovClient.vote(...args);
    }

    cosmosgovqueryclient_votes(...args) {
        return this.queryCosmosGovClient.votes(...args);
    }

    cosmosgovqueryclient_params(...args) {
        return this.queryCosmosGovClient.params(...args);
    }

    cosmosgovqueryclient_deposit(...args) {
        return this.queryCosmosGovClient.deposit(...args);
    }

    cosmosgovqueryclient_deposits(...args) {
        return this.queryCosmosGovClient.deposits(...args);
    }

    cosmosgovqueryclient_tallyResult(...args) {
        return this.queryCosmosGovClient.tallyResult(...args);
    }

    cosmosgovmsgclient_submitProposal(...args) {
        return this.txCosmosGovClient.submitProposal(...args);
    }

    cosmosgovmsgclient_vote(...args) {
        return this.txCosmosGovClient.vote(...args);
    }

    cosmosgovmsgclient_voteWeighted(...args) {
        return this.txCosmosGovClient.voteWeighted(...args);
    }

    cosmosgovmsgclient_deposit(...args) {
        return this.txCosmosGovClient.deposit(...args);
    }

    axelarvotemsgserviceclient_vote(...args) {
        return this.serviceAxelarVoteClient.vote(...args);
    }

    axelarsnapshotmsgserviceclient_registerProxy(...args) {
        return this.serviceAxelarSnapshotClient.registerProxy(...args);
    }

    axelarsnapshotmsgserviceclient_deactivateProxy(...args) {
        return this.serviceAxelarSnapshotClient.deactivateProxy(...args);
    }

    axelaraxelarnetmsgserviceclient_link(...args) {
        return this.serviceAxelarAxelarnetClient.link(...args);
    }

    axelaraxelarnetmsgserviceclient_confirmDeposit(...args) {
        return this.serviceAxelarAxelarnetClient.confirmDeposit(...args);
    }

    axelaraxelarnetmsgserviceclient_executePendingTransfers(...args) {
        return this.serviceAxelarAxelarnetClient.executePendingTransfers(...args);
    }

    axelaraxelarnetmsgserviceclient_addCosmosBasedChain(...args) {
        return this.serviceAxelarAxelarnetClient.addCosmosBasedChain(...args);
    }

    axelaraxelarnetmsgserviceclient_registerAsset(...args) {
        return this.serviceAxelarAxelarnetClient.registerAsset(...args);
    }

    axelaraxelarnetmsgserviceclient_routeIBCTransfers(...args) {
        return this.serviceAxelarAxelarnetClient.routeIBCTransfers(...args);
    }

    axelaraxelarnetmsgserviceclient_registerFeeCollector(...args) {
        return this.serviceAxelarAxelarnetClient.registerFeeCollector(...args);
    }

    axelaraxelarnetmsgserviceclient_retryIBCTransfer(...args) {
        return this.serviceAxelarAxelarnetClient.retryIBCTransfer(...args);
    }

    axelaraxelarnetmsgserviceclient_routeMessage(...args) {
        return this.serviceAxelarAxelarnetClient.routeMessage(...args);
    }

    axelaraxelarnetmsgserviceclient_callContract(...args) {
        return this.serviceAxelarAxelarnetClient.callContract(...args);
    }

    axelarmultisigmsgserviceclient_startKeygen(...args) {
        return this.serviceAxelarMultisigClient.startKeygen(...args);
    }

    axelarmultisigmsgserviceclient_submitPubKey(...args) {
        return this.serviceAxelarMultisigClient.submitPubKey(...args);
    }

    axelarmultisigmsgserviceclient_submitSignature(...args) {
        return this.serviceAxelarMultisigClient.submitSignature(...args);
    }

    axelarmultisigmsgserviceclient_rotateKey(...args) {
        return this.serviceAxelarMultisigClient.rotateKey(...args);
    }

    axelarmultisigmsgserviceclient_keygenOptOut(...args) {
        return this.serviceAxelarMultisigClient.keygenOptOut(...args);
    }

    axelarmultisigmsgserviceclient_keygenOptIn(...args) {
        return this.serviceAxelarMultisigClient.keygenOptIn(...args);
    }

    axelarnexusmsgserviceclient_registerChainMaintainer(...args) {
        return this.serviceAxelarNexusClient.registerChainMaintainer(...args);
    }

    axelarnexusmsgserviceclient_deregisterChainMaintainer(...args) {
        return this.serviceAxelarNexusClient.deregisterChainMaintainer(...args);
    }

    axelarnexusmsgserviceclient_activateChain(...args) {
        return this.serviceAxelarNexusClient.activateChain(...args);
    }

    axelarnexusmsgserviceclient_deactivateChain(...args) {
        return this.serviceAxelarNexusClient.deactivateChain(...args);
    }

    axelarnexusmsgserviceclient_registerAssetFee(...args) {
        return this.serviceAxelarNexusClient.registerAssetFee(...args);
    }

    axelarnexusmsgserviceclient_setTransferRateLimit(...args) {
        return this.serviceAxelarNexusClient.setTransferRateLimit(...args);
    }

    axelarrewardmsgserviceclient_refundMsg(...args) {
        return this.serviceAxelarRewardClient.refundMsg(...args);
    }

    axelarevmmsgserviceclient_setGateway(...args) {
        return this.serviceAxelarEvmClient.setGateway(...args);
    }

    axelarevmmsgserviceclient_confirmGatewayTx(...args) {
        return this.serviceAxelarEvmClient.confirmGatewayTx(...args);
    }

    axelarevmmsgserviceclient_confirmGatewayTxs(...args) {
        return this.serviceAxelarEvmClient.confirmGatewayTxs(...args);
    }

    axelarevmmsgserviceclient_link(...args) {
        return this.serviceAxelarEvmClient.link(...args);
    }

    axelarevmmsgserviceclient_confirmToken(...args) {
        return this.serviceAxelarEvmClient.confirmToken(...args);
    }

    axelarevmmsgserviceclient_confirmDeposit(...args) {
        return this.serviceAxelarEvmClient.confirmDeposit(...args);
    }

    axelarevmmsgserviceclient_confirmTransferKey(...args) {
        return this.serviceAxelarEvmClient.confirmTransferKey(...args);
    }

    axelarevmmsgserviceclient_createDeployToken(...args) {
        return this.serviceAxelarEvmClient.createDeployToken(...args);
    }

    axelarevmmsgserviceclient_createBurnTokens(...args) {
        return this.serviceAxelarEvmClient.createBurnTokens(...args);
    }

    axelarevmmsgserviceclient_createPendingTransfers(...args) {
        return this.serviceAxelarEvmClient.createPendingTransfers(...args);
    }

    axelarevmmsgserviceclient_createTransferOperatorship(...args) {
        return this.serviceAxelarEvmClient.createTransferOperatorship(...args);
    }

    axelarevmmsgserviceclient_signCommands(...args) {
        return this.serviceAxelarEvmClient.signCommands(...args);
    }

    axelarevmmsgserviceclient_addChain(...args) {
        return this.serviceAxelarEvmClient.addChain(...args);
    }

    axelarevmmsgserviceclient_retryFailedEvent(...args) {
        return this.serviceAxelarEvmClient.retryFailedEvent(...args);
    }

    axelartssmsgserviceclient_heartBeat(...args) {
        return this.serviceAxelarTssClient.heartBeat(...args);
    }

    axelarpermissionmsgclient_registerController(...args) {
        return this.serviceAxelarPermissionClient.registerController(...args);
    }

    axelarpermissionmsgclient_deregisterController(...args) {
        return this.serviceAxelarPermissionClient.deregisterController(...args);
    }

    axelarpermissionmsgclient_updateGovernanceKey(...args) {
        return this.serviceAxelarPermissionClient.updateGovernanceKey(...args);
    }

    axelarauxiliarymsgserviceclient_batch(...args) {
        return this.serviceAxelarAuxiliaryClient.batch(...args);
    }

    ibccoreconnectionqueryclient_connection(...args) {
        return this.queryIbcCoreConnectionClient.connection(...args);
    }

    ibccoreconnectionqueryclient_connections(...args) {
        return this.queryIbcCoreConnectionClient.connections(...args);
    }

    ibccoreconnectionqueryclient_clientConnections(...args) {
        return this.queryIbcCoreConnectionClient.clientConnections(...args);
    }

    ibccoreconnectionqueryclient_connectionClientState(...args) {
        return this.queryIbcCoreConnectionClient.connectionClientState(...args);
    }

    ibccoreconnectionqueryclient_connectionConsensusState(...args) {
        return this.queryIbcCoreConnectionClient.connectionConsensusState(...args);
    }

    ibccoreconnectionmsgclient_connectionOpenInit(...args) {
        return this.txIbcCoreConnectionClient.connectionOpenInit(...args);
    }

    ibccoreconnectionmsgclient_connectionOpenTry(...args) {
        return this.txIbcCoreConnectionClient.connectionOpenTry(...args);
    }

    ibccoreconnectionmsgclient_connectionOpenAck(...args) {
        return this.txIbcCoreConnectionClient.connectionOpenAck(...args);
    }

    ibccoreconnectionmsgclient_connectionOpenConfirm(...args) {
        return this.txIbcCoreConnectionClient.connectionOpenConfirm(...args);
    }

    ibccorechannelqueryclient_channel(...args) {
        return this.queryIbcCoreChannelClient.channel(...args);
    }

    ibccorechannelqueryclient_channels(...args) {
        return this.queryIbcCoreChannelClient.channels(...args);
    }

    ibccorechannelqueryclient_connectionChannels(...args) {
        return this.queryIbcCoreChannelClient.connectionChannels(...args);
    }

    ibccorechannelqueryclient_channelClientState(...args) {
        return this.queryIbcCoreChannelClient.channelClientState(...args);
    }

    ibccorechannelqueryclient_channelConsensusState(...args) {
        return this.queryIbcCoreChannelClient.channelConsensusState(...args);
    }

    ibccorechannelqueryclient_packetCommitment(...args) {
        return this.queryIbcCoreChannelClient.packetCommitment(...args);
    }

    ibccorechannelqueryclient_packetCommitments(...args) {
        return this.queryIbcCoreChannelClient.packetCommitments(...args);
    }

    ibccorechannelqueryclient_packetReceipt(...args) {
        return this.queryIbcCoreChannelClient.packetReceipt(...args);
    }

    ibccorechannelqueryclient_packetAcknowledgement(...args) {
        return this.queryIbcCoreChannelClient.packetAcknowledgement(...args);
    }

    ibccorechannelqueryclient_packetAcknowledgements(...args) {
        return this.queryIbcCoreChannelClient.packetAcknowledgements(...args);
    }

    ibccorechannelqueryclient_unreceivedPackets(...args) {
        return this.queryIbcCoreChannelClient.unreceivedPackets(...args);
    }

    ibccorechannelqueryclient_unreceivedAcks(...args) {
        return this.queryIbcCoreChannelClient.unreceivedAcks(...args);
    }

    ibccorechannelqueryclient_nextSequenceReceive(...args) {
        return this.queryIbcCoreChannelClient.nextSequenceReceive(...args);
    }

    ibccorechannelmsgclient_channelOpenInit(...args) {
        return this.txIbcCoreChannelClient.channelOpenInit(...args);
    }

    ibccorechannelmsgclient_channelOpenTry(...args) {
        return this.txIbcCoreChannelClient.channelOpenTry(...args);
    }

    ibccorechannelmsgclient_channelOpenAck(...args) {
        return this.txIbcCoreChannelClient.channelOpenAck(...args);
    }

    ibccorechannelmsgclient_channelOpenConfirm(...args) {
        return this.txIbcCoreChannelClient.channelOpenConfirm(...args);
    }

    ibccorechannelmsgclient_channelCloseInit(...args) {
        return this.txIbcCoreChannelClient.channelCloseInit(...args);
    }

    ibccorechannelmsgclient_channelCloseConfirm(...args) {
        return this.txIbcCoreChannelClient.channelCloseConfirm(...args);
    }

    ibccorechannelmsgclient_recvPacket(...args) {
        return this.txIbcCoreChannelClient.recvPacket(...args);
    }

    ibccorechannelmsgclient_timeout(...args) {
        return this.txIbcCoreChannelClient.timeout(...args);
    }

    ibccorechannelmsgclient_timeoutOnClose(...args) {
        return this.txIbcCoreChannelClient.timeoutOnClose(...args);
    }

    ibccorechannelmsgclient_acknowledgement(...args) {
        return this.txIbcCoreChannelClient.acknowledgement(...args);
    }

    ibccoreclientqueryclient_clientState(...args) {
        return this.queryIbcCoreClientClient.clientState(...args);
    }

    ibccoreclientqueryclient_clientStates(...args) {
        return this.queryIbcCoreClientClient.clientStates(...args);
    }

    ibccoreclientqueryclient_consensusState(...args) {
        return this.queryIbcCoreClientClient.consensusState(...args);
    }

    ibccoreclientqueryclient_consensusStates(...args) {
        return this.queryIbcCoreClientClient.consensusStates(...args);
    }

    ibccoreclientqueryclient_consensusStateHeights(...args) {
        return this.queryIbcCoreClientClient.consensusStateHeights(...args);
    }

    ibccoreclientqueryclient_clientStatus(...args) {
        return this.queryIbcCoreClientClient.clientStatus(...args);
    }

    ibccoreclientqueryclient_clientParams(...args) {
        return this.queryIbcCoreClientClient.clientParams(...args);
    }

    ibccoreclientqueryclient_upgradedClientState(...args) {
        return this.queryIbcCoreClientClient.upgradedClientState(...args);
    }

    ibccoreclientqueryclient_upgradedConsensusState(...args) {
        return this.queryIbcCoreClientClient.upgradedConsensusState(...args);
    }

    ibccoreclientmsgclient_createClient(...args) {
        return this.txIbcCoreClientClient.createClient(...args);
    }

    ibccoreclientmsgclient_updateClient(...args) {
        return this.txIbcCoreClientClient.updateClient(...args);
    }

    ibccoreclientmsgclient_upgradeClient(...args) {
        return this.txIbcCoreClientClient.upgradeClient(...args);
    }

    ibccoreclientmsgclient_submitMisbehaviour(...args) {
        return this.txIbcCoreClientClient.submitMisbehaviour(...args);
    }
}
