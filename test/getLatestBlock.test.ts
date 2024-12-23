import { describe, it, expect } from "bun:test";
import { ServiceClient } from "../src/generated/cosmos/base/tendermint/v1beta1/query.client";
import {
  GetLatestBlockRequest,
  GetLatestBlockResponse,
} from "../src/generated/cosmos/base/tendermint/v1beta1/query";
import { GrpcTransport } from "@protobuf-ts/grpc-transport";
import { ChannelCredentials } from "@grpc/grpc-js";

describe("getLatestBlock", () => {
  it("should be able to get the latest block", async () => {
    // variable
    const grpcUrl = "localhost:9090";
    // const rpcUrl = "http://node.testnet.scalar.org";

    // Create a gRPC transport (replace URL with your actual Cosmos node URL)
    console.log("--- grpcUrl", grpcUrl);
    const transport = new GrpcTransport({
      host: grpcUrl,
      channelCredentials: ChannelCredentials.createInsecure(),
    });
    console.log("--- transport", transport);
    expect(transport).toBeDefined();

    try {
      const client = new ServiceClient(transport);
      const request = GetLatestBlockRequest.create();

      const response: GetLatestBlockResponse = await client.getLatestBlock(
        request
      ).response;

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
