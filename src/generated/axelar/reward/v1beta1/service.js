// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/reward/v1beta1/service.proto" (package "axelar.reward.v1beta1", syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/reward/v1beta1/service.proto" (package "axelar.reward.v1beta1", syntax proto3)
// tslint:disable
import { ParamsResponse } from "./query";
import { ParamsRequest } from "./query";
import { InflationRateResponse } from "./query";
import { InflationRateRequest } from "./query";
import { RefundMsgResponse } from "./tx";
import { RefundMsgRequest } from "./tx";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
/**
 * @generated ServiceType for protobuf service axelar.reward.v1beta1.MsgService
 */
export const MsgService = new ServiceType("axelar.reward.v1beta1.MsgService", [
    { name: "RefundMsg", options: { "google.api.http": { post: "/axelar/reward/refund_message", body: "*" } }, I: RefundMsgRequest, O: RefundMsgResponse }
]);
/**
 * @generated ServiceType for protobuf service axelar.reward.v1beta1.QueryService
 */
export const QueryService = new ServiceType("axelar.reward.v1beta1.QueryService", [
    { name: "InflationRate", options: { "google.api.http": { get: "/axelar/reward/v1beta1/inflation_rate/{validator}", additionalBindings: [{ get: "/axelar/reward/v1beta1/inflation_rate" }] } }, I: InflationRateRequest, O: InflationRateResponse },
    { name: "Params", options: { "google.api.http": { get: "/axelar/reward/v1beta1/params" } }, I: ParamsRequest, O: ParamsResponse }
]);