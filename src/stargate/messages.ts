import * as scalarnet from "../proto/scalar/scalarnet/v1beta1/tx";
import * as chains from "../proto/scalar/chains/v1beta1/tx";
import * as multisig from "../proto/scalar/multisig/v1beta1/tx";
import * as nexus from "../proto/scalar/nexus/v1beta1/tx";
import * as permission from "../proto/scalar/permission/v1beta1/tx";
import * as reward from "../proto/scalar/reward/v1beta1/tx";
import * as snapshot from "../proto/scalar/snapshot/v1beta1/tx";
import * as tss from "../proto/scalar/tss/v1beta1/tx";
import * as vote from "../proto/scalar/vote/v1beta1/tx";
import * as protocol from "../proto/scalar/protocol/v1beta1/tx";
import * as covenant from "../proto/scalar/covenant/v1beta1/tx";

import type { EncodeObject, GeneratedType } from "@cosmjs/proto-signing";

import { isTsProtoGeneratedType } from "@cosmjs/proto-signing";

import type {
  DeliverTxResponse,
  MsgDelegateEncodeObject,
  MsgDepositEncodeObject,
  MsgSendEncodeObject,
  MsgSubmitProposalEncodeObject,
  MsgTransferEncodeObject,
  MsgUndelegateEncodeObject,
  MsgVoteEncodeObject,
  MsgWithdrawDelegatorRewardEncodeObject,
  SignerData,
  SigningStargateClient,
  StdFee,
} from "@cosmjs/stargate";

import type { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import * as ibcFee from "cosmjs-types/ibc/applications/fee/v1/tx";
import * as ibcTransfer from "cosmjs-types/ibc/applications/transfer/v1/tx";
import { camelize } from "inflection";

import type {
  EncodedProtoPackage,
  KeepOnlySimplifiedRequestMethods,
} from "./types";

export const TRACKED_MODULES = {
  chains,
  scalarnet,
  multisig,
  nexus,
  permission,
  reward,
  snapshot,
  tss,
  vote,
  protocol,
  covenant,
  // cosmos messages
  ibcFee,
  ibcTransfer,
};

export type TrackedModules = typeof TRACKED_MODULES;

export type ModuleNames = keyof TrackedModules;

export const MODULES = Object.values(TRACKED_MODULES);

export type ModuleMethodApi<T> = T extends GeneratedType
  ? {
      signAndBroadcast(
        senderAddress: string,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        message: ReturnType<T["fromPartial"]>,
        fee: StdFee,
      ): Promise<DeliverTxResponse>;
      sign(
        signerAddress: string,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        message: ReturnType<T["fromPartial"]>,
        fee: StdFee,
        memo: string,
        explicitSignerData?: SignerData,
      ): Promise<TxRaw>;
      simulate(
        signerAddress: string,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        message: ReturnType<T["fromPartial"]>,
        memo?: string,
      ): Promise<number>;
    }
  : never;

export type EncodedModule<M extends ModuleNames> = {
  [P in keyof TrackedModules[M]]: ModuleMethodApi<TrackedModules[M][P]>;
};

export type ScalarMsgClient = {
  [M in ModuleNames]: KeepOnlySimplifiedRequestMethods<EncodedModule<M>>;
};

const normalizeMethodName = (method: string) =>
  camelize(method.replace(/Request$/, "").replace(/^Msg/, ""), true);

const createModuleMethodApi = (
  client: SigningStargateClient,
  module: { protobufPackage: string },
  method: string,
) => ({
  /**
   * Sign and broadcast a message.
   *
   * @param senderAddress
   * @param message
   * @param fee
   * @returns broadcast response
   */
  signAndBroadcast: (
    senderAddress: string,
    message: EncodeObject["value"],
    fee: StdFee,
  ) =>
    client.signAndBroadcast(
      senderAddress,
      [
        {
          typeUrl: `/${module.protobufPackage}.${method}`,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          value: message,
        },
      ],
      fee,
    ),
  /**
   * Sign a message.
   *
   * @param signerAddress
   * @param message
   * @param fee
   * @param memo
   * @param explicitSignerData
   *
   * @returns signed transaction
   */
  sign: (
    signerAddress: string,
    message: EncodeObject["value"],
    fee: StdFee,
    memo: string,
    explicitSignerData?: SignerData,
  ) =>
    client.sign(
      signerAddress,
      [
        {
          typeUrl: `/${module.protobufPackage}.${method}`,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          value: message,
        },
      ],
      fee,
      memo,
      explicitSignerData,
    ),
  /**
   * Simulate a message.
   * @param signerAddress
   * @param message
   * @param memo
   * @returns gas estimate
   */
  simulate: (
    signerAddress: string,
    message: EncodeObject["value"],
    memo: string | undefined,
  ) =>
    client.simulate(
      signerAddress,
      [
        {
          typeUrl: `/${module.protobufPackage}.${method}`,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          value: message,
        },
      ],
      memo,
    ),
});

const createMsgMethodClient =
  (client: SigningStargateClient, module: { protobufPackage: string }) =>
  <T extends Record<string, unknown>>(acc: T, [method]: [string, string]) => ({
    ...acc,
    [normalizeMethodName(method)]: createModuleMethodApi(
      client,
      module,
      method,
    ),
  });

export const createMsgClient = (baseClient: SigningStargateClient) =>
  Object.entries(TRACKED_MODULES).reduce((acc, [moduleName, module]) => {
    const moduleNameKey = moduleName as keyof ScalarMsgClient;

    acc[moduleNameKey] = Object.entries(module)
      .filter(
        ([method, value]) =>
          isTsProtoGeneratedType(value as GeneratedType) &&
          (method.endsWith("Request") ||
            (method.startsWith("Msg") &&
              !method.endsWith("Response") &&
              !method.endsWith("Impl"))),
      )
      .reduce(
        createMsgMethodClient(baseClient, module),
        {} as KeepOnlySimplifiedRequestMethods<EncodedModule<"chains">> &
          KeepOnlySimplifiedRequestMethods<EncodedModule<"scalarnet">> &
          KeepOnlySimplifiedRequestMethods<EncodedModule<"multisig">> &
          KeepOnlySimplifiedRequestMethods<EncodedModule<"nexus">> &
          KeepOnlySimplifiedRequestMethods<EncodedModule<"permission">> &
          KeepOnlySimplifiedRequestMethods<EncodedModule<"reward">> &
          KeepOnlySimplifiedRequestMethods<EncodedModule<"snapshot">> &
          KeepOnlySimplifiedRequestMethods<EncodedModule<"tss">> &
          KeepOnlySimplifiedRequestMethods<EncodedModule<"vote">> &
          KeepOnlySimplifiedRequestMethods<EncodedModule<"protocol">> &
          KeepOnlySimplifiedRequestMethods<EncodedModule<"covenant">> &
          KeepOnlySimplifiedRequestMethods<EncodedModule<"ibcFee">> &
          KeepOnlySimplifiedRequestMethods<EncodedModule<"ibcTransfer">>,
      );
    return acc;
  }, {} as ScalarMsgClient);

export type ScalarEncodeObjectRecord = EncodedProtoPackage<typeof scalarnet> &
  EncodedProtoPackage<typeof chains> &
  EncodedProtoPackage<typeof multisig> &
  EncodedProtoPackage<typeof nexus> &
  EncodedProtoPackage<typeof permission> &
  EncodedProtoPackage<typeof reward> &
  EncodedProtoPackage<typeof snapshot> &
  EncodedProtoPackage<typeof tss> &
  EncodedProtoPackage<typeof vote> &
  EncodedProtoPackage<typeof protocol> &
  EncodedProtoPackage<typeof covenant>;

export type ScalarEncodeObject =
  ScalarEncodeObjectRecord[keyof ScalarEncodeObjectRecord];

export type CosmosEncodeObject =
  | MsgDelegateEncodeObject
  | MsgDepositEncodeObject
  | MsgSendEncodeObject
  | MsgSubmitProposalEncodeObject
  | MsgTransferEncodeObject
  | MsgUndelegateEncodeObject
  | MsgVoteEncodeObject
  | MsgWithdrawDelegatorRewardEncodeObject;
