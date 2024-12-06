import { ServiceClient } from "../generated/cosmos/base/tendermint/v1beta1/query.client";
import { GetLatestBlockRequest } from "../generated/cosmos/base/tendermint/v1beta1/query";
import { RpcTransport } from "@protobuf-ts/runtime-rpc";

export async function getLatestBlock(transport: RpcTransport) {
  // Create a new ServiceClient instance
  const client = new ServiceClient(transport);

  // Create the request
  const request = GetLatestBlockRequest.create();

  try {
    // Make the call
    const response = await client.getLatestBlock(request).response;

    // Response will contain:
    // - blockId?: BlockID
    // - block?: Block
    return response;
  } catch (error) {
    console.error("Failed to get latest block:", error);
    throw error;
  }
}
