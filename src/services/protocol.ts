import { GrpcTransport } from "@protobuf-ts/grpc-transport";
import { ChannelCredentials } from "@grpc/grpc-js";
import { QueryClient } from "../generated/scalar/protocol/v1beta1/service.client";
import { ProtocolsRequest } from "../generated/scalar/protocol/v1beta1/query";
import { Protocol, Status } from "../generated/scalar/protocol/v1beta1/types";

export async function getProtocols(params: {
  grpcUrl: string;
  pubkey?: string;
  address?: string;
  name?: string;
  status?: Status;
}): Promise<Protocol[]> {
  const transport = new GrpcTransport({
    host: params.grpcUrl,
    channelCredentials: ChannelCredentials.createInsecure(),
  });

  const client = new QueryClient(transport);
  const request = ProtocolsRequest.create({
    pubkey: params.pubkey || "",
    address: params.address || "",
    name: params.name || "",
    status: params.status || Status.ACTIVATED,
  });

  const response = await client.protocols(request).response;
  return response.protocols;
}
