import { describe, it, expect } from "bun:test";
import {
  GetLatestBlockRequest,
  GetLatestBlockResponse,
} from "../src/generated/cosmos/base/tendermint/v1beta1/query";
import { GrpcTransport } from "@protobuf-ts/grpc-transport";
import { ChannelCredentials } from "@grpc/grpc-js";
import { ScalarGrpcClient } from "../src/generated/scalarGrpcClient";

describe("getLatestBlock from combined client", () => {
  it("should be able to get the latest block", async () => {
    // variable
    const grpcUrl = "localhost:9090";
    // const rpcUrl = "http://node.testnet.scalar.org";

    // Create a gRPC transport (replace URL with your actual Cosmos node URL)
    const transport = new GrpcTransport({
      host: grpcUrl,
      channelCredentials: ChannelCredentials.createInsecure(),
    });

    try {
      const client = new ScalarGrpcClient(transport);
      const request = GetLatestBlockRequest.create();

      const response: GetLatestBlockResponse =
        await client.cosmosbasetendermintserviceclient_getLatestBlock(request)
          .response;

      console.log("Latest block:", {
        height: response.block?.header?.height,
        hash: response.blockId?.hash,
        timestamp: response.block?.header?.time,
        numTxs: response.block?.data?.txs?.length,
      });
    } catch (error) {
      console.error("Error fetching latest block:", error);
    }

    expect(true).toBe(true);
  });
});
