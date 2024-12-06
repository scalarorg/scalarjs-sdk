import { describe, it, expect } from "bun:test";
import { AxelarSigningClient, Environment } from "@axelar-network/axelarjs-sdk";
import { Registry } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";
import { StargateClient } from "@cosmjs/stargate";

describe("AxelarSigningClient", async () => {
  // variable
  let CHAIN_ENV = "testnet";
  const rpcUrl = "http://localhost:26657/";
  const gasPrice = "0.0125";
  const denom = "uaxl";
  const environment =
    CHAIN_ENV === "testnet" ? Environment.TESTNET : Environment.DEVNET;
  const registry = new Registry();
  // init
  const sdk = await AxelarSigningClient.initOrGetAxelarSigningClient({
    environment,
    axelarRpcUrl: rpcUrl,
    cosmosBasedWalletDetails: {
      mnemonic:
        "ring start still sentence gas kid shy design ahead device adult movie appear rack provide scissors bag flat there sort soccer juice depend size",
    },
    options: {
      registry,
      gasPrice: GasPrice.fromString(`${gasPrice}${denom}`),
    },
  });

  it("should be able to request from a Scalar Network Node", async () => {
    // test
    console.log("--- signerAddress", sdk.signerAddress);
    expect(sdk.signerAddress).toBeDefined();
    expect(sdk.signerAddress).toBe(
      "axelar1dqt3s82vts6m6q5auv7w5k07feaerc6r33htg3"
    );
  });

  it("should be able to request a block from a Scalar Network Node", async () => {
    // variable
    const blockHeight = 3;

    // test
    const block = await sdk.getBlock(blockHeight);
    console.log("--- block", block);
    expect(block).toBeDefined();
  });

  it("should be able to request balance of an address", async () => {
    // variable
    const address = "axelar1dqt3s82vts6m6q5auv7w5k07feaerc6r33htg3";

    // test
    const balance = await sdk.getBalance(address, denom);
    console.log("--- balance", balance);
    expect(balance).toBeDefined();
  });

  // it("should be able to use  from a Scalar Network Node", async () => {
  //   // variable
  //   const txHash = "0x1234567890abcdef";

  //   // test
  //   const stargateClient = sdk as StargateClient;
  //   const response = await stargateClient.getTmClient().block(3);
  //   console.log("--- response", response);
  //   expect(response).toBeDefined();
  // });
});
