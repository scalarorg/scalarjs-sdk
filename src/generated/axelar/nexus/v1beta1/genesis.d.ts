// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "axelar/nexus/v1beta1/genesis.proto" (package "axelar.nexus.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { GeneralMessage } from "../exported/v1beta1/types";
import { TransferEpoch } from "./types";
import { RateLimit } from "./types";
import { FeeInfo } from "../exported/v1beta1/types";
import { TransferFee } from "../exported/v1beta1/types";
import { CrossChainTransfer } from "../exported/v1beta1/types";
import { LinkedAddresses } from "./types";
import { ChainState } from "./types";
import { Chain } from "../exported/v1beta1/types";
import { Params } from "./params";
/**
 * GenesisState represents the genesis state
 *
 * @generated from protobuf message axelar.nexus.v1beta1.GenesisState
 */
export interface GenesisState {
    /**
     * @generated from protobuf field: axelar.nexus.v1beta1.Params params = 1;
     */
    params?: Params;
    /**
     * @generated from protobuf field: uint64 nonce = 2;
     */
    nonce: string;
    /**
     * @generated from protobuf field: repeated axelar.nexus.exported.v1beta1.Chain chains = 3;
     */
    chains: Chain[];
    /**
     * @generated from protobuf field: repeated axelar.nexus.v1beta1.ChainState chain_states = 4;
     */
    chainStates: ChainState[];
    /**
     * @generated from protobuf field: repeated axelar.nexus.v1beta1.LinkedAddresses linked_addresses = 5;
     */
    linkedAddresses: LinkedAddresses[];
    /**
     * @generated from protobuf field: repeated axelar.nexus.exported.v1beta1.CrossChainTransfer transfers = 6;
     */
    transfers: CrossChainTransfer[];
    /**
     * @generated from protobuf field: axelar.nexus.exported.v1beta1.TransferFee fee = 7;
     */
    fee?: TransferFee;
    /**
     * @generated from protobuf field: repeated axelar.nexus.exported.v1beta1.FeeInfo fee_infos = 8;
     */
    feeInfos: FeeInfo[];
    /**
     * @generated from protobuf field: repeated axelar.nexus.v1beta1.RateLimit rate_limits = 9;
     */
    rateLimits: RateLimit[];
    /**
     * @generated from protobuf field: repeated axelar.nexus.v1beta1.TransferEpoch transfer_epochs = 10;
     */
    transferEpochs: TransferEpoch[];
    /**
     * @generated from protobuf field: repeated axelar.nexus.exported.v1beta1.GeneralMessage messages = 11;
     */
    messages: GeneralMessage[];
    /**
     * @generated from protobuf field: uint64 message_nonce = 12;
     */
    messageNonce: string;
}
declare class GenesisState$Type extends MessageType<GenesisState> {
    constructor();
    create(value?: PartialMessage<GenesisState>): GenesisState;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GenesisState): GenesisState;
    internalBinaryWrite(message: GenesisState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message axelar.nexus.v1beta1.GenesisState
 */
export declare const GenesisState: GenesisState$Type;
export {};
