// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/tss/v1beta1/service.proto" (package "axelar.tss.v1beta1", syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/tss/v1beta1/service.proto" (package "axelar.tss.v1beta1", syntax proto3)
// tslint:disable
import { ParamsResponse } from "./query";
import { ParamsRequest } from "./query";
import { HeartBeatResponse } from "./tx";
import { HeartBeatRequest } from "./tx";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
/**
 * @generated ServiceType for protobuf service axelar.tss.v1beta1.MsgService
 */
export const MsgService = new ServiceType("axelar.tss.v1beta1.MsgService", [
    { name: "HeartBeat", options: { "google.api.http": { post: "/axelar/tss/heartbeat", body: "*" } }, I: HeartBeatRequest, O: HeartBeatResponse }
]);
/**
 * @generated ServiceType for protobuf service axelar.tss.v1beta1.QueryService
 */
export const QueryService = new ServiceType("axelar.tss.v1beta1.QueryService", [
    { name: "Params", options: { "google.api.http": { get: "/axelar/tss/v1beta1/params" } }, I: ParamsRequest, O: ParamsResponse }
]);
