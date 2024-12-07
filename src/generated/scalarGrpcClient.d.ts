// @generated automatically
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import { QueryClient as CosmwasmWasmQueryClient } from "./cosmwasm/wasm/v1/query.client";
import { MsgClient as CosmwasmWasmMsgClient } from "./cosmwasm/wasm/v1/tx.client";
import { QueryClient as CosmosUpgradeQueryClient } from "./cosmos/upgrade/v1beta1/query.client";
import { QueryClient as CosmosFeegrantQueryClient } from "./cosmos/feegrant/v1beta1/query.client";
import { MsgClient as CosmosFeegrantMsgClient } from "./cosmos/feegrant/v1beta1/tx.client";
import { QueryClient as CosmosMintQueryClient } from "./cosmos/mint/v1beta1/query.client";
import { QueryClient as CosmosEvidenceQueryClient } from "./cosmos/evidence/v1beta1/query.client";
import { MsgClient as CosmosEvidenceMsgClient } from "./cosmos/evidence/v1beta1/tx.client";
import { QueryClient as CosmosAuthQueryClient } from "./cosmos/auth/v1beta1/query.client";
import { QueryClient as CosmosBankQueryClient } from "./cosmos/bank/v1beta1/query.client";
import { MsgClient as CosmosBankMsgClient } from "./cosmos/bank/v1beta1/tx.client";
import { QueryClient as CosmosDistributionQueryClient } from "./cosmos/distribution/v1beta1/query.client";
import { MsgClient as CosmosDistributionMsgClient } from "./cosmos/distribution/v1beta1/tx.client";
import { MsgClient as CosmosCrisisMsgClient } from "./cosmos/crisis/v1beta1/tx.client";
import { ServiceClient as CosmosTxServiceClient } from "./cosmos/tx/v1beta1/service.client";
import { MsgClient as CosmosVestingMsgClient } from "./cosmos/vesting/v1beta1/tx.client";
import { QueryClient as CosmosStakingQueryClient } from "./cosmos/staking/v1beta1/query.client";
import { MsgClient as CosmosStakingMsgClient } from "./cosmos/staking/v1beta1/tx.client";
import { QueryClient as CosmosParamsQueryClient } from "./cosmos/params/v1beta1/query.client";
import { QueryClient as CosmosAuthzQueryClient } from "./cosmos/authz/v1beta1/query.client";
import { MsgClient as CosmosAuthzMsgClient } from "./cosmos/authz/v1beta1/tx.client";
import { QueryClient as CosmosSlashingQueryClient } from "./cosmos/slashing/v1beta1/query.client";
import { MsgClient as CosmosSlashingMsgClient } from "./cosmos/slashing/v1beta1/tx.client";
import { ServiceClient as CosmosBaseTendermintServiceClient } from "./cosmos/base/tendermint/v1beta1/query.client";
import { ServiceClient as CosmosBaseNodeServiceClient } from "./cosmos/base/node/v1beta1/query.client";
import { ReflectionServiceClient as CosmosBaseReflectionReflectionServiceClient } from "./cosmos/base/reflection/v2alpha1/reflection.client";
import { QueryClient as CosmosGovQueryClient } from "./cosmos/gov/v1beta1/query.client";
import { MsgClient as CosmosGovMsgClient } from "./cosmos/gov/v1beta1/tx.client";
import { MsgServiceClient as AxelarVoteMsgServiceClient } from "./axelar/vote/v1beta1/service.client";
import { MsgServiceClient as AxelarSnapshotMsgServiceClient } from "./axelar/snapshot/v1beta1/service.client";
import { MsgServiceClient as AxelarAxelarnetMsgServiceClient } from "./axelar/axelarnet/v1beta1/service.client";
import { MsgServiceClient as AxelarMultisigMsgServiceClient } from "./axelar/multisig/v1beta1/service.client";
import { MsgServiceClient as AxelarNexusMsgServiceClient } from "./axelar/nexus/v1beta1/service.client";
import { MsgServiceClient as AxelarRewardMsgServiceClient } from "./axelar/reward/v1beta1/service.client";
import { MsgServiceClient as AxelarEvmMsgServiceClient } from "./axelar/evm/v1beta1/service.client";
import { MsgServiceClient as AxelarTssMsgServiceClient } from "./axelar/tss/v1beta1/service.client";
import { MsgClient as AxelarPermissionMsgClient } from "./axelar/permission/v1beta1/service.client";
import { MsgServiceClient as AxelarAuxiliaryMsgServiceClient } from "./axelar/auxiliary/v1beta1/service.client";
import { QueryClient as IbcCoreConnectionQueryClient } from "./ibc/core/connection/v1/query.client";
import { MsgClient as IbcCoreConnectionMsgClient } from "./ibc/core/connection/v1/tx.client";
import { QueryClient as IbcCoreChannelQueryClient } from "./ibc/core/channel/v1/query.client";
import { MsgClient as IbcCoreChannelMsgClient } from "./ibc/core/channel/v1/tx.client";
import { QueryClient as IbcCoreClientQueryClient } from "./ibc/core/client/v1/query.client";
import { MsgClient as IbcCoreClientMsgClient } from "./ibc/core/client/v1/tx.client";

export declare class ScalarGrpcClient {
  private readonly queryCosmwasmWasmClient: CosmwasmWasmQueryClient;
  private readonly txCosmwasmWasmClient: CosmwasmWasmMsgClient;
  private readonly queryCosmosUpgradeClient: CosmosUpgradeQueryClient;
  private readonly queryCosmosFeegrantClient: CosmosFeegrantQueryClient;
  private readonly txCosmosFeegrantClient: CosmosFeegrantMsgClient;
  private readonly queryCosmosMintClient: CosmosMintQueryClient;
  private readonly queryCosmosEvidenceClient: CosmosEvidenceQueryClient;
  private readonly txCosmosEvidenceClient: CosmosEvidenceMsgClient;
  private readonly queryCosmosAuthClient: CosmosAuthQueryClient;
  private readonly queryCosmosBankClient: CosmosBankQueryClient;
  private readonly txCosmosBankClient: CosmosBankMsgClient;
  private readonly queryCosmosDistributionClient: CosmosDistributionQueryClient;
  private readonly txCosmosDistributionClient: CosmosDistributionMsgClient;
  private readonly txCosmosCrisisClient: CosmosCrisisMsgClient;
  private readonly serviceCosmosTxClient: CosmosTxServiceClient;
  private readonly txCosmosVestingClient: CosmosVestingMsgClient;
  private readonly queryCosmosStakingClient: CosmosStakingQueryClient;
  private readonly txCosmosStakingClient: CosmosStakingMsgClient;
  private readonly queryCosmosParamsClient: CosmosParamsQueryClient;
  private readonly queryCosmosAuthzClient: CosmosAuthzQueryClient;
  private readonly txCosmosAuthzClient: CosmosAuthzMsgClient;
  private readonly queryCosmosSlashingClient: CosmosSlashingQueryClient;
  private readonly txCosmosSlashingClient: CosmosSlashingMsgClient;
  private readonly queryCosmosBaseTendermintClient: CosmosBaseTendermintServiceClient;
  private readonly queryCosmosBaseNodeClient: CosmosBaseNodeServiceClient;
  private readonly reflectionCosmosBaseReflectionClient: CosmosBaseReflectionReflectionServiceClient;
  private readonly queryCosmosGovClient: CosmosGovQueryClient;
  private readonly txCosmosGovClient: CosmosGovMsgClient;
  private readonly serviceAxelarVoteClient: AxelarVoteMsgServiceClient;
  private readonly serviceAxelarSnapshotClient: AxelarSnapshotMsgServiceClient;
  private readonly serviceAxelarAxelarnetClient: AxelarAxelarnetMsgServiceClient;
  private readonly serviceAxelarMultisigClient: AxelarMultisigMsgServiceClient;
  private readonly serviceAxelarNexusClient: AxelarNexusMsgServiceClient;
  private readonly serviceAxelarRewardClient: AxelarRewardMsgServiceClient;
  private readonly serviceAxelarEvmClient: AxelarEvmMsgServiceClient;
  private readonly serviceAxelarTssClient: AxelarTssMsgServiceClient;
  private readonly serviceAxelarPermissionClient: AxelarPermissionMsgClient;
  private readonly serviceAxelarAuxiliaryClient: AxelarAuxiliaryMsgServiceClient;
  private readonly queryIbcCoreConnectionClient: IbcCoreConnectionQueryClient;
  private readonly txIbcCoreConnectionClient: IbcCoreConnectionMsgClient;
  private readonly queryIbcCoreChannelClient: IbcCoreChannelQueryClient;
  private readonly txIbcCoreChannelClient: IbcCoreChannelMsgClient;
  private readonly queryIbcCoreClientClient: IbcCoreClientQueryClient;
  private readonly txIbcCoreClientClient: IbcCoreClientMsgClient;
  constructor(_transport: RpcTransport);

  cosmwasmwasmqueryclient_contractInfo: CosmwasmWasmQueryClient["contractInfo"];

  cosmwasmwasmqueryclient_contractHistory: CosmwasmWasmQueryClient["contractHistory"];

  cosmwasmwasmqueryclient_contractsByCode: CosmwasmWasmQueryClient["contractsByCode"];

  cosmwasmwasmqueryclient_allContractState: CosmwasmWasmQueryClient["allContractState"];

  cosmwasmwasmqueryclient_rawContractState: CosmwasmWasmQueryClient["rawContractState"];

  cosmwasmwasmqueryclient_smartContractState: CosmwasmWasmQueryClient["smartContractState"];

  cosmwasmwasmqueryclient_code: CosmwasmWasmQueryClient["code"];

  cosmwasmwasmqueryclient_codes: CosmwasmWasmQueryClient["codes"];

  cosmwasmwasmqueryclient_pinnedCodes: CosmwasmWasmQueryClient["pinnedCodes"];

  cosmwasmwasmqueryclient_params: CosmwasmWasmQueryClient["params"];

  cosmwasmwasmqueryclient_contractsByCreator: CosmwasmWasmQueryClient["contractsByCreator"];

  cosmwasmwasmmsgclient_storeCode: CosmwasmWasmMsgClient["storeCode"];

  cosmwasmwasmmsgclient_instantiateContract: CosmwasmWasmMsgClient["instantiateContract"];

  cosmwasmwasmmsgclient_instantiateContract2: CosmwasmWasmMsgClient["instantiateContract2"];

  cosmwasmwasmmsgclient_executeContract: CosmwasmWasmMsgClient["executeContract"];

  cosmwasmwasmmsgclient_migrateContract: CosmwasmWasmMsgClient["migrateContract"];

  cosmwasmwasmmsgclient_updateAdmin: CosmwasmWasmMsgClient["updateAdmin"];

  cosmwasmwasmmsgclient_clearAdmin: CosmwasmWasmMsgClient["clearAdmin"];

  cosmwasmwasmmsgclient_updateInstantiateConfig: CosmwasmWasmMsgClient["updateInstantiateConfig"];

  cosmosupgradequeryclient_currentPlan: CosmosUpgradeQueryClient["currentPlan"];

  cosmosupgradequeryclient_appliedPlan: CosmosUpgradeQueryClient["appliedPlan"];

  cosmosupgradequeryclient_upgradedConsensusState: CosmosUpgradeQueryClient["upgradedConsensusState"];

  cosmosupgradequeryclient_moduleVersions: CosmosUpgradeQueryClient["moduleVersions"];

  cosmosfeegrantqueryclient_allowance: CosmosFeegrantQueryClient["allowance"];

  cosmosfeegrantqueryclient_allowances: CosmosFeegrantQueryClient["allowances"];

  cosmosfeegrantqueryclient_allowancesByGranter: CosmosFeegrantQueryClient["allowancesByGranter"];

  cosmosfeegrantmsgclient_grantAllowance: CosmosFeegrantMsgClient["grantAllowance"];

  cosmosfeegrantmsgclient_revokeAllowance: CosmosFeegrantMsgClient["revokeAllowance"];

  cosmosmintqueryclient_params: CosmosMintQueryClient["params"];

  cosmosmintqueryclient_inflation: CosmosMintQueryClient["inflation"];

  cosmosmintqueryclient_annualProvisions: CosmosMintQueryClient["annualProvisions"];

  cosmosevidencequeryclient_evidence: CosmosEvidenceQueryClient["evidence"];

  cosmosevidencequeryclient_allEvidence: CosmosEvidenceQueryClient["allEvidence"];

  cosmosevidencemsgclient_submitEvidence: CosmosEvidenceMsgClient["submitEvidence"];

  cosmosauthqueryclient_accounts: CosmosAuthQueryClient["accounts"];

  cosmosauthqueryclient_account: CosmosAuthQueryClient["account"];

  cosmosauthqueryclient_params: CosmosAuthQueryClient["params"];

  cosmosauthqueryclient_moduleAccountByName: CosmosAuthQueryClient["moduleAccountByName"];

  cosmosbankqueryclient_balance: CosmosBankQueryClient["balance"];

  cosmosbankqueryclient_allBalances: CosmosBankQueryClient["allBalances"];

  cosmosbankqueryclient_spendableBalances: CosmosBankQueryClient["spendableBalances"];

  cosmosbankqueryclient_totalSupply: CosmosBankQueryClient["totalSupply"];

  cosmosbankqueryclient_supplyOf: CosmosBankQueryClient["supplyOf"];

  cosmosbankqueryclient_params: CosmosBankQueryClient["params"];

  cosmosbankqueryclient_denomMetadata: CosmosBankQueryClient["denomMetadata"];

  cosmosbankqueryclient_denomsMetadata: CosmosBankQueryClient["denomsMetadata"];

  cosmosbankmsgclient_send: CosmosBankMsgClient["send"];

  cosmosbankmsgclient_multiSend: CosmosBankMsgClient["multiSend"];

  cosmosdistributionqueryclient_params: CosmosDistributionQueryClient["params"];

  cosmosdistributionqueryclient_validatorOutstandingRewards: CosmosDistributionQueryClient["validatorOutstandingRewards"];

  cosmosdistributionqueryclient_validatorCommission: CosmosDistributionQueryClient["validatorCommission"];

  cosmosdistributionqueryclient_validatorSlashes: CosmosDistributionQueryClient["validatorSlashes"];

  cosmosdistributionqueryclient_delegationRewards: CosmosDistributionQueryClient["delegationRewards"];

  cosmosdistributionqueryclient_delegationTotalRewards: CosmosDistributionQueryClient["delegationTotalRewards"];

  cosmosdistributionqueryclient_delegatorValidators: CosmosDistributionQueryClient["delegatorValidators"];

  cosmosdistributionqueryclient_delegatorWithdrawAddress: CosmosDistributionQueryClient["delegatorWithdrawAddress"];

  cosmosdistributionqueryclient_communityPool: CosmosDistributionQueryClient["communityPool"];

  cosmosdistributionmsgclient_setWithdrawAddress: CosmosDistributionMsgClient["setWithdrawAddress"];

  cosmosdistributionmsgclient_withdrawDelegatorReward: CosmosDistributionMsgClient["withdrawDelegatorReward"];

  cosmosdistributionmsgclient_withdrawValidatorCommission: CosmosDistributionMsgClient["withdrawValidatorCommission"];

  cosmosdistributionmsgclient_fundCommunityPool: CosmosDistributionMsgClient["fundCommunityPool"];

  cosmoscrisismsgclient_verifyInvariant: CosmosCrisisMsgClient["verifyInvariant"];

  cosmostxserviceclient_simulate: CosmosTxServiceClient["simulate"];

  cosmostxserviceclient_getTx: CosmosTxServiceClient["getTx"];

  cosmostxserviceclient_broadcastTx: CosmosTxServiceClient["broadcastTx"];

  cosmostxserviceclient_getTxsEvent: CosmosTxServiceClient["getTxsEvent"];

  cosmostxserviceclient_getBlockWithTxs: CosmosTxServiceClient["getBlockWithTxs"];

  cosmosvestingmsgclient_createVestingAccount: CosmosVestingMsgClient["createVestingAccount"];

  cosmosstakingqueryclient_validators: CosmosStakingQueryClient["validators"];

  cosmosstakingqueryclient_validator: CosmosStakingQueryClient["validator"];

  cosmosstakingqueryclient_validatorDelegations: CosmosStakingQueryClient["validatorDelegations"];

  cosmosstakingqueryclient_validatorUnbondingDelegations: CosmosStakingQueryClient["validatorUnbondingDelegations"];

  cosmosstakingqueryclient_delegation: CosmosStakingQueryClient["delegation"];

  cosmosstakingqueryclient_unbondingDelegation: CosmosStakingQueryClient["unbondingDelegation"];

  cosmosstakingqueryclient_delegatorDelegations: CosmosStakingQueryClient["delegatorDelegations"];

  cosmosstakingqueryclient_delegatorUnbondingDelegations: CosmosStakingQueryClient["delegatorUnbondingDelegations"];

  cosmosstakingqueryclient_redelegations: CosmosStakingQueryClient["redelegations"];

  cosmosstakingqueryclient_delegatorValidators: CosmosStakingQueryClient["delegatorValidators"];

  cosmosstakingqueryclient_delegatorValidator: CosmosStakingQueryClient["delegatorValidator"];

  cosmosstakingqueryclient_historicalInfo: CosmosStakingQueryClient["historicalInfo"];

  cosmosstakingqueryclient_pool: CosmosStakingQueryClient["pool"];

  cosmosstakingqueryclient_params: CosmosStakingQueryClient["params"];

  cosmosstakingmsgclient_createValidator: CosmosStakingMsgClient["createValidator"];

  cosmosstakingmsgclient_editValidator: CosmosStakingMsgClient["editValidator"];

  cosmosstakingmsgclient_delegate: CosmosStakingMsgClient["delegate"];

  cosmosstakingmsgclient_beginRedelegate: CosmosStakingMsgClient["beginRedelegate"];

  cosmosstakingmsgclient_undelegate: CosmosStakingMsgClient["undelegate"];

  cosmosparamsqueryclient_params: CosmosParamsQueryClient["params"];

  cosmosauthzqueryclient_grants: CosmosAuthzQueryClient["grants"];

  cosmosauthzqueryclient_granterGrants: CosmosAuthzQueryClient["granterGrants"];

  cosmosauthzqueryclient_granteeGrants: CosmosAuthzQueryClient["granteeGrants"];

  cosmosauthzmsgclient_grant: CosmosAuthzMsgClient["grant"];

  cosmosauthzmsgclient_exec: CosmosAuthzMsgClient["exec"];

  cosmosauthzmsgclient_revoke: CosmosAuthzMsgClient["revoke"];

  cosmosslashingqueryclient_params: CosmosSlashingQueryClient["params"];

  cosmosslashingqueryclient_signingInfo: CosmosSlashingQueryClient["signingInfo"];

  cosmosslashingqueryclient_signingInfos: CosmosSlashingQueryClient["signingInfos"];

  cosmosslashingmsgclient_unjail: CosmosSlashingMsgClient["unjail"];

  cosmosbasetendermintserviceclient_getNodeInfo: CosmosBaseTendermintServiceClient["getNodeInfo"];

  cosmosbasetendermintserviceclient_getSyncing: CosmosBaseTendermintServiceClient["getSyncing"];

  cosmosbasetendermintserviceclient_getLatestBlock: CosmosBaseTendermintServiceClient["getLatestBlock"];

  cosmosbasetendermintserviceclient_getBlockByHeight: CosmosBaseTendermintServiceClient["getBlockByHeight"];

  cosmosbasetendermintserviceclient_getLatestValidatorSet: CosmosBaseTendermintServiceClient["getLatestValidatorSet"];

  cosmosbasetendermintserviceclient_getValidatorSetByHeight: CosmosBaseTendermintServiceClient["getValidatorSetByHeight"];

  cosmosbasenodeserviceclient_config: CosmosBaseNodeServiceClient["config"];

  cosmosbasereflectionreflectionserviceclient_getAuthnDescriptor: CosmosBaseReflectionReflectionServiceClient["getAuthnDescriptor"];

  cosmosbasereflectionreflectionserviceclient_getChainDescriptor: CosmosBaseReflectionReflectionServiceClient["getChainDescriptor"];

  cosmosbasereflectionreflectionserviceclient_getCodecDescriptor: CosmosBaseReflectionReflectionServiceClient["getCodecDescriptor"];

  cosmosbasereflectionreflectionserviceclient_getConfigurationDescriptor: CosmosBaseReflectionReflectionServiceClient["getConfigurationDescriptor"];

  cosmosbasereflectionreflectionserviceclient_getQueryServicesDescriptor: CosmosBaseReflectionReflectionServiceClient["getQueryServicesDescriptor"];

  cosmosbasereflectionreflectionserviceclient_getTxDescriptor: CosmosBaseReflectionReflectionServiceClient["getTxDescriptor"];

  cosmosgovqueryclient_proposal: CosmosGovQueryClient["proposal"];

  cosmosgovqueryclient_proposals: CosmosGovQueryClient["proposals"];

  cosmosgovqueryclient_vote: CosmosGovQueryClient["vote"];

  cosmosgovqueryclient_votes: CosmosGovQueryClient["votes"];

  cosmosgovqueryclient_params: CosmosGovQueryClient["params"];

  cosmosgovqueryclient_deposit: CosmosGovQueryClient["deposit"];

  cosmosgovqueryclient_deposits: CosmosGovQueryClient["deposits"];

  cosmosgovqueryclient_tallyResult: CosmosGovQueryClient["tallyResult"];

  cosmosgovmsgclient_submitProposal: CosmosGovMsgClient["submitProposal"];

  cosmosgovmsgclient_vote: CosmosGovMsgClient["vote"];

  cosmosgovmsgclient_voteWeighted: CosmosGovMsgClient["voteWeighted"];

  cosmosgovmsgclient_deposit: CosmosGovMsgClient["deposit"];

  axelarvotemsgserviceclient_vote: AxelarVoteMsgServiceClient["vote"];

  axelarsnapshotmsgserviceclient_registerProxy: AxelarSnapshotMsgServiceClient["registerProxy"];

  axelarsnapshotmsgserviceclient_deactivateProxy: AxelarSnapshotMsgServiceClient["deactivateProxy"];

  axelaraxelarnetmsgserviceclient_link: AxelarAxelarnetMsgServiceClient["link"];

  axelaraxelarnetmsgserviceclient_confirmDeposit: AxelarAxelarnetMsgServiceClient["confirmDeposit"];

  axelaraxelarnetmsgserviceclient_executePendingTransfers: AxelarAxelarnetMsgServiceClient["executePendingTransfers"];

  axelaraxelarnetmsgserviceclient_addCosmosBasedChain: AxelarAxelarnetMsgServiceClient["addCosmosBasedChain"];

  axelaraxelarnetmsgserviceclient_registerAsset: AxelarAxelarnetMsgServiceClient["registerAsset"];

  axelaraxelarnetmsgserviceclient_routeIBCTransfers: AxelarAxelarnetMsgServiceClient["routeIBCTransfers"];

  axelaraxelarnetmsgserviceclient_registerFeeCollector: AxelarAxelarnetMsgServiceClient["registerFeeCollector"];

  axelaraxelarnetmsgserviceclient_retryIBCTransfer: AxelarAxelarnetMsgServiceClient["retryIBCTransfer"];

  axelaraxelarnetmsgserviceclient_routeMessage: AxelarAxelarnetMsgServiceClient["routeMessage"];

  axelaraxelarnetmsgserviceclient_callContract: AxelarAxelarnetMsgServiceClient["callContract"];

  axelarmultisigmsgserviceclient_startKeygen: AxelarMultisigMsgServiceClient["startKeygen"];

  axelarmultisigmsgserviceclient_submitPubKey: AxelarMultisigMsgServiceClient["submitPubKey"];

  axelarmultisigmsgserviceclient_submitSignature: AxelarMultisigMsgServiceClient["submitSignature"];

  axelarmultisigmsgserviceclient_rotateKey: AxelarMultisigMsgServiceClient["rotateKey"];

  axelarmultisigmsgserviceclient_keygenOptOut: AxelarMultisigMsgServiceClient["keygenOptOut"];

  axelarmultisigmsgserviceclient_keygenOptIn: AxelarMultisigMsgServiceClient["keygenOptIn"];

  axelarnexusmsgserviceclient_registerChainMaintainer: AxelarNexusMsgServiceClient["registerChainMaintainer"];

  axelarnexusmsgserviceclient_deregisterChainMaintainer: AxelarNexusMsgServiceClient["deregisterChainMaintainer"];

  axelarnexusmsgserviceclient_activateChain: AxelarNexusMsgServiceClient["activateChain"];

  axelarnexusmsgserviceclient_deactivateChain: AxelarNexusMsgServiceClient["deactivateChain"];

  axelarnexusmsgserviceclient_registerAssetFee: AxelarNexusMsgServiceClient["registerAssetFee"];

  axelarnexusmsgserviceclient_setTransferRateLimit: AxelarNexusMsgServiceClient["setTransferRateLimit"];

  axelarrewardmsgserviceclient_refundMsg: AxelarRewardMsgServiceClient["refundMsg"];

  axelarevmmsgserviceclient_setGateway: AxelarEvmMsgServiceClient["setGateway"];

  axelarevmmsgserviceclient_confirmGatewayTx: AxelarEvmMsgServiceClient["confirmGatewayTx"];

  axelarevmmsgserviceclient_confirmGatewayTxs: AxelarEvmMsgServiceClient["confirmGatewayTxs"];

  axelarevmmsgserviceclient_link: AxelarEvmMsgServiceClient["link"];

  axelarevmmsgserviceclient_confirmToken: AxelarEvmMsgServiceClient["confirmToken"];

  axelarevmmsgserviceclient_confirmDeposit: AxelarEvmMsgServiceClient["confirmDeposit"];

  axelarevmmsgserviceclient_confirmTransferKey: AxelarEvmMsgServiceClient["confirmTransferKey"];

  axelarevmmsgserviceclient_createDeployToken: AxelarEvmMsgServiceClient["createDeployToken"];

  axelarevmmsgserviceclient_createBurnTokens: AxelarEvmMsgServiceClient["createBurnTokens"];

  axelarevmmsgserviceclient_createPendingTransfers: AxelarEvmMsgServiceClient["createPendingTransfers"];

  axelarevmmsgserviceclient_createTransferOperatorship: AxelarEvmMsgServiceClient["createTransferOperatorship"];

  axelarevmmsgserviceclient_signCommands: AxelarEvmMsgServiceClient["signCommands"];

  axelarevmmsgserviceclient_addChain: AxelarEvmMsgServiceClient["addChain"];

  axelarevmmsgserviceclient_retryFailedEvent: AxelarEvmMsgServiceClient["retryFailedEvent"];

  axelartssmsgserviceclient_heartBeat: AxelarTssMsgServiceClient["heartBeat"];

  axelarpermissionmsgclient_registerController: AxelarPermissionMsgClient["registerController"];

  axelarpermissionmsgclient_deregisterController: AxelarPermissionMsgClient["deregisterController"];

  axelarpermissionmsgclient_updateGovernanceKey: AxelarPermissionMsgClient["updateGovernanceKey"];

  axelarauxiliarymsgserviceclient_batch: AxelarAuxiliaryMsgServiceClient["batch"];

  ibccoreconnectionqueryclient_connection: IbcCoreConnectionQueryClient["connection"];

  ibccoreconnectionqueryclient_connections: IbcCoreConnectionQueryClient["connections"];

  ibccoreconnectionqueryclient_clientConnections: IbcCoreConnectionQueryClient["clientConnections"];

  ibccoreconnectionqueryclient_connectionClientState: IbcCoreConnectionQueryClient["connectionClientState"];

  ibccoreconnectionqueryclient_connectionConsensusState: IbcCoreConnectionQueryClient["connectionConsensusState"];

  ibccoreconnectionmsgclient_connectionOpenInit: IbcCoreConnectionMsgClient["connectionOpenInit"];

  ibccoreconnectionmsgclient_connectionOpenTry: IbcCoreConnectionMsgClient["connectionOpenTry"];

  ibccoreconnectionmsgclient_connectionOpenAck: IbcCoreConnectionMsgClient["connectionOpenAck"];

  ibccoreconnectionmsgclient_connectionOpenConfirm: IbcCoreConnectionMsgClient["connectionOpenConfirm"];

  ibccorechannelqueryclient_channel: IbcCoreChannelQueryClient["channel"];

  ibccorechannelqueryclient_channels: IbcCoreChannelQueryClient["channels"];

  ibccorechannelqueryclient_connectionChannels: IbcCoreChannelQueryClient["connectionChannels"];

  ibccorechannelqueryclient_channelClientState: IbcCoreChannelQueryClient["channelClientState"];

  ibccorechannelqueryclient_channelConsensusState: IbcCoreChannelQueryClient["channelConsensusState"];

  ibccorechannelqueryclient_packetCommitment: IbcCoreChannelQueryClient["packetCommitment"];

  ibccorechannelqueryclient_packetCommitments: IbcCoreChannelQueryClient["packetCommitments"];

  ibccorechannelqueryclient_packetReceipt: IbcCoreChannelQueryClient["packetReceipt"];

  ibccorechannelqueryclient_packetAcknowledgement: IbcCoreChannelQueryClient["packetAcknowledgement"];

  ibccorechannelqueryclient_packetAcknowledgements: IbcCoreChannelQueryClient["packetAcknowledgements"];

  ibccorechannelqueryclient_unreceivedPackets: IbcCoreChannelQueryClient["unreceivedPackets"];

  ibccorechannelqueryclient_unreceivedAcks: IbcCoreChannelQueryClient["unreceivedAcks"];

  ibccorechannelqueryclient_nextSequenceReceive: IbcCoreChannelQueryClient["nextSequenceReceive"];

  ibccorechannelmsgclient_channelOpenInit: IbcCoreChannelMsgClient["channelOpenInit"];

  ibccorechannelmsgclient_channelOpenTry: IbcCoreChannelMsgClient["channelOpenTry"];

  ibccorechannelmsgclient_channelOpenAck: IbcCoreChannelMsgClient["channelOpenAck"];

  ibccorechannelmsgclient_channelOpenConfirm: IbcCoreChannelMsgClient["channelOpenConfirm"];

  ibccorechannelmsgclient_channelCloseInit: IbcCoreChannelMsgClient["channelCloseInit"];

  ibccorechannelmsgclient_channelCloseConfirm: IbcCoreChannelMsgClient["channelCloseConfirm"];

  ibccorechannelmsgclient_recvPacket: IbcCoreChannelMsgClient["recvPacket"];

  ibccorechannelmsgclient_timeout: IbcCoreChannelMsgClient["timeout"];

  ibccorechannelmsgclient_timeoutOnClose: IbcCoreChannelMsgClient["timeoutOnClose"];

  ibccorechannelmsgclient_acknowledgement: IbcCoreChannelMsgClient["acknowledgement"];

  ibccoreclientqueryclient_clientState: IbcCoreClientQueryClient["clientState"];

  ibccoreclientqueryclient_clientStates: IbcCoreClientQueryClient["clientStates"];

  ibccoreclientqueryclient_consensusState: IbcCoreClientQueryClient["consensusState"];

  ibccoreclientqueryclient_consensusStates: IbcCoreClientQueryClient["consensusStates"];

  ibccoreclientqueryclient_consensusStateHeights: IbcCoreClientQueryClient["consensusStateHeights"];

  ibccoreclientqueryclient_clientStatus: IbcCoreClientQueryClient["clientStatus"];

  ibccoreclientqueryclient_clientParams: IbcCoreClientQueryClient["clientParams"];

  ibccoreclientqueryclient_upgradedClientState: IbcCoreClientQueryClient["upgradedClientState"];

  ibccoreclientqueryclient_upgradedConsensusState: IbcCoreClientQueryClient["upgradedConsensusState"];

  ibccoreclientmsgclient_createClient: IbcCoreClientMsgClient["createClient"];

  ibccoreclientmsgclient_updateClient: IbcCoreClientMsgClient["updateClient"];

  ibccoreclientmsgclient_upgradeClient: IbcCoreClientMsgClient["upgradeClient"];

  ibccoreclientmsgclient_submitMisbehaviour: IbcCoreClientMsgClient["submitMisbehaviour"];
}
