import { QueryServiceClientImpl as ScalarnetQueryClient } from "../proto/scalar/scalarnet/v1beta1/service";
import { QueryServiceClientImpl as ChainsQueryClient } from "../proto/scalar/chains/v1beta1/service";
import { QueryServiceClientImpl as MultisigQueryClient } from "../proto/scalar/multisig/v1beta1/service";
import { QueryServiceClientImpl as NexusQueryClient } from "../proto/scalar/nexus/v1beta1/service";
import { QueryClientImpl as PermissionQueryClient } from "../proto/scalar/permission/v1beta1/service";
import { QueryServiceClientImpl as RewardQueryClient } from "../proto/scalar/reward/v1beta1/service";
import { QueryServiceClientImpl as SnapshotQueryClient } from "../proto/scalar/snapshot/v1beta1/service";
import { QueryServiceClientImpl as TSSQueryClient } from "../proto/scalar/tss/v1beta1/service";
import { QueryServiceClientImpl as VoteQueryClient } from "../proto/scalar/vote/v1beta1/service";

import {
  createProtobufRpcClient,
  QueryClient,
  setupAuthExtension,
  setupBankExtension,
  setupStakingExtension,
  setupTxExtension,
} from "@cosmjs/stargate";

import { type HttpEndpoint, Tendermint37Client } from "@cosmjs/tendermint-rpc";

import type { Rpc, StringLiteral } from "./types";

const setupBareExtension =
  <TModule, TClient>(
    moduleName: StringLiteral<TModule>,
    client: { new (rpc: Rpc): TClient },
  ) =>
  (base: QueryClient) => {
    const rpc = createProtobufRpcClient(base);
    const baseClient = new client(rpc);

    const clientWithUncapitalizedMethods = Object.fromEntries(
      Object.getOwnPropertyNames(Object.getPrototypeOf(baseClient))
        .filter((x) => x !== "constructor")
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        .filter((x) => typeof (baseClient as any)[x] === "function")
        .map((x) => [
          x[0]?.toLowerCase() + x.slice(1),
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          ((baseClient as any)[x] as (...args: any[]) => unknown).bind(
            baseClient,
          ),
        ]),
    ) as {
      [P in keyof TClient as P extends string
        ? Uncapitalize<P>
        : P]: TClient[P];
    };

    return {
      [moduleName]: clientWithUncapitalizedMethods,
    } as {
      [P in StringLiteral<TModule>]: typeof clientWithUncapitalizedMethods;
    };
  };

const createQueryClientFromTmClient = (tmClient: Tendermint37Client) =>
  QueryClient.withExtensions(
    tmClient,
    setupAuthExtension,
    setupBankExtension,
    setupStakingExtension,
    setupTxExtension,
    setupBareExtension("scalarnet", ScalarnetQueryClient),
    setupBareExtension("chains", ChainsQueryClient),
    setupBareExtension("multisig", MultisigQueryClient),
    setupBareExtension("permission", PermissionQueryClient),
    setupBareExtension("nexus", NexusQueryClient),
    setupBareExtension("reward", RewardQueryClient),
    setupBareExtension("snapshot", SnapshotQueryClient),
    setupBareExtension("tss", TSSQueryClient),
    setupBareExtension("vote", VoteQueryClient),
  );

const createQueryClientFromEndpoint = async (endpoint: string | HttpEndpoint) =>
  createQueryClientFromTmClient(await Tendermint37Client.connect(endpoint));

export type ScalarQueryClient = ReturnType<
  typeof createQueryClientFromTmClient
>;

export function createQueryClient(
  endpoint: string | HttpEndpoint,
): Promise<ScalarQueryClient>;
export function createQueryClient(
  tmClient: Tendermint37Client,
): ScalarQueryClient;
export function createQueryClient(
  endpointOrTmClient: string | HttpEndpoint | Tendermint37Client,
) {
  return endpointOrTmClient instanceof Tendermint37Client
    ? createQueryClientFromTmClient(endpointOrTmClient)
    : createQueryClientFromEndpoint(endpointOrTmClient);
}
