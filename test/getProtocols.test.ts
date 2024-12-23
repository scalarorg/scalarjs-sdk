import { describe, it, expect } from "bun:test";
import { GrpcTransport } from "@protobuf-ts/grpc-transport";
import { ChannelCredentials } from "@grpc/grpc-js";
import { QueryClient } from "../src/generated/scalar/protocol/v1beta1/service.client";
import {
  ProtocolsRequest,
  ProtocolsResponse,
} from "../src/generated/scalar/protocol/v1beta1/query";
import {
  Protocol,
  Status,
} from "../src/generated/scalar/protocol/v1beta1/types";

describe("getProtocols", () => {
  it("should be able to get the protocols", async () => {
    // variable
    const grpcUrl = "localhost:9090";

    try {
      // Create a gRPC transport (replace URL with your actual Cosmos node URL)
      const transport = new GrpcTransport({
        host: grpcUrl,
        channelCredentials: ChannelCredentials.createInsecure(),
      });
      const client = new QueryClient(transport);
      const request = ProtocolsRequest.create({
        pubkey: "",
        address: "",
        name: "",
        status: Status.ACTIVATED,
      });

      console.log("--- before response");

      const response = await client.protocols(request).response;

      console.log("--- after response");

      console.log("--- response", response);

      const protocols: Protocol[] = response.protocols;

      console.log("--- protocols", protocols);

      // Log the response and protocols
      console.log("Full Response:", JSON.stringify(response, null, 2));
      console.log("Protocols:", JSON.stringify(protocols, null, 2));

      // Add proper assertions
      expect(response).toBeDefined();
      expect(protocols).toBeInstanceOf(Array);

      // Verify each protocol has the required properties
      protocols.forEach((protocol) => {
        expect(protocol).toMatchObject({
          pubkey: expect.any(String),
          name: expect.any(String),
          tag: expect.any(String),
          attribute: expect.any(String),
          status: expect.any(Number),
          custodianGroup: expect.any(String),
          chains: expect.any(Array),
        });
      });
    } catch (error) {
      // Fail the test if there's an error
      throw error;
    }
  });
});
