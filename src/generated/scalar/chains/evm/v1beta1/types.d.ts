// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "scalar/chains/evm/v1beta1/types.proto" (package "scalar.chains.evm.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * ERC20Deposit contains information for an ERC20 deposit
 *
 * @generated from protobuf message scalar.chains.evm.v1beta1.ERC20Deposit
 */
export interface ERC20Deposit {
    /**
     * @generated from protobuf field: bytes tx_id = 1;
     */
    txId: Uint8Array;
    /**
     * @generated from protobuf field: bytes amount = 2;
     */
    amount: Uint8Array;
    /**
     * @generated from protobuf field: string asset = 3;
     */
    asset: string;
    /**
     * @generated from protobuf field: string destination_chain = 4;
     */
    destinationChain: string;
    /**
     * @generated from protobuf field: bytes burner_address = 5;
     */
    burnerAddress: Uint8Array;
    /**
     * @generated from protobuf field: uint64 log_index = 6;
     */
    logIndex: string;
}
/**
 * ERC20TokenMetadata describes information about an ERC20 token
 *
 * @generated from protobuf message scalar.chains.evm.v1beta1.ERC20TokenMetadata
 */
export interface ERC20TokenMetadata {
    /**
     * @generated from protobuf field: string asset = 1;
     */
    asset: string;
    /**
     * @generated from protobuf field: bytes chain_id = 2;
     */
    chainId: Uint8Array;
    /**
     * @generated from protobuf field: scalar.chains.evm.v1beta1.TokenDetails details = 3;
     */
    details?: TokenDetails;
    /**
     * @generated from protobuf field: string token_address = 4;
     */
    tokenAddress: string;
    /**
     * @generated from protobuf field: string tx_hash = 5;
     */
    txHash: string;
    /**
     * @generated from protobuf field: scalar.chains.evm.v1beta1.Status status = 7;
     */
    status: Status;
    /**
     * @generated from protobuf field: bool is_external = 8;
     */
    isExternal: boolean;
    /**
     * @generated from protobuf field: bytes burner_code = 9;
     */
    burnerCode: Uint8Array;
}
/**
 * @generated from protobuf message scalar.chains.evm.v1beta1.TokenDetails
 */
export interface TokenDetails {
    /**
     * @generated from protobuf field: string token_name = 1;
     */
    tokenName: string;
    /**
     * @generated from protobuf field: string symbol = 2;
     */
    symbol: string;
    /**
     * @generated from protobuf field: uint32 decimals = 3;
     */
    decimals: number;
    /**
     * @generated from protobuf field: bytes capacity = 4;
     */
    capacity: Uint8Array;
}
/**
 * @generated from protobuf enum scalar.chains.evm.v1beta1.Status
 */
export declare enum Status {
    /**
     * these enum values are used for bitwise operations, therefore they need to
     * be powers of 2
     *
     * @generated from protobuf enum value: STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: STATUS_INITIALIZED = 1;
     */
    INITIALIZED = 1,
    /**
     * @generated from protobuf enum value: STATUS_PENDING = 2;
     */
    PENDING = 2,
    /**
     * @generated from protobuf enum value: STATUS_CONFIRMED = 4;
     */
    CONFIRMED = 4
}
declare class ERC20Deposit$Type extends MessageType<ERC20Deposit> {
    constructor();
    create(value?: PartialMessage<ERC20Deposit>): ERC20Deposit;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ERC20Deposit): ERC20Deposit;
    internalBinaryWrite(message: ERC20Deposit, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.chains.evm.v1beta1.ERC20Deposit
 */
export declare const ERC20Deposit: ERC20Deposit$Type;
declare class ERC20TokenMetadata$Type extends MessageType<ERC20TokenMetadata> {
    constructor();
    create(value?: PartialMessage<ERC20TokenMetadata>): ERC20TokenMetadata;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ERC20TokenMetadata): ERC20TokenMetadata;
    internalBinaryWrite(message: ERC20TokenMetadata, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.chains.evm.v1beta1.ERC20TokenMetadata
 */
export declare const ERC20TokenMetadata: ERC20TokenMetadata$Type;
declare class TokenDetails$Type extends MessageType<TokenDetails> {
    constructor();
    create(value?: PartialMessage<TokenDetails>): TokenDetails;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TokenDetails): TokenDetails;
    internalBinaryWrite(message: TokenDetails, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message scalar.chains.evm.v1beta1.TokenDetails
 */
export declare const TokenDetails: TokenDetails$Type;
export {};
