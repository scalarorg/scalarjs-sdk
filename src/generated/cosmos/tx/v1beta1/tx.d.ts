// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/tx/v1beta1/tx.proto" (package "cosmos.tx.v1beta1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Coin } from "../../base/v1beta1/coin";
import { CompactBitArray } from "../../crypto/multisig/v1beta1/multisig";
import { SignMode } from "../signing/v1beta1/signing";
import { Any } from "../../../google/protobuf/any";
/**
 * Tx is the standard type used for broadcasting transactions.
 *
 * @generated from protobuf message cosmos.tx.v1beta1.Tx
 */
export interface Tx {
    /**
     * body is the processable content of the transaction
     *
     * @generated from protobuf field: cosmos.tx.v1beta1.TxBody body = 1;
     */
    body?: TxBody;
    /**
     * auth_info is the authorization related content of the transaction,
     * specifically signers, signer modes and fee
     *
     * @generated from protobuf field: cosmos.tx.v1beta1.AuthInfo auth_info = 2;
     */
    authInfo?: AuthInfo;
    /**
     * signatures is a list of signatures that matches the length and order of
     * AuthInfo's signer_infos to allow connecting signature meta information like
     * public key and signing mode by position.
     *
     * @generated from protobuf field: repeated bytes signatures = 3;
     */
    signatures: Uint8Array[];
}
/**
 * TxRaw is a variant of Tx that pins the signer's exact binary representation
 * of body and auth_info. This is used for signing, broadcasting and
 * verification. The binary `serialize(tx: TxRaw)` is stored in Tendermint and
 * the hash `sha256(serialize(tx: TxRaw))` becomes the "txhash", commonly used
 * as the transaction ID.
 *
 * @generated from protobuf message cosmos.tx.v1beta1.TxRaw
 */
export interface TxRaw {
    /**
     * body_bytes is a protobuf serialization of a TxBody that matches the
     * representation in SignDoc.
     *
     * @generated from protobuf field: bytes body_bytes = 1;
     */
    bodyBytes: Uint8Array;
    /**
     * auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
     * representation in SignDoc.
     *
     * @generated from protobuf field: bytes auth_info_bytes = 2;
     */
    authInfoBytes: Uint8Array;
    /**
     * signatures is a list of signatures that matches the length and order of
     * AuthInfo's signer_infos to allow connecting signature meta information like
     * public key and signing mode by position.
     *
     * @generated from protobuf field: repeated bytes signatures = 3;
     */
    signatures: Uint8Array[];
}
/**
 * SignDoc is the type used for generating sign bytes for SIGN_MODE_DIRECT.
 *
 * @generated from protobuf message cosmos.tx.v1beta1.SignDoc
 */
export interface SignDoc {
    /**
     * body_bytes is protobuf serialization of a TxBody that matches the
     * representation in TxRaw.
     *
     * @generated from protobuf field: bytes body_bytes = 1;
     */
    bodyBytes: Uint8Array;
    /**
     * auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
     * representation in TxRaw.
     *
     * @generated from protobuf field: bytes auth_info_bytes = 2;
     */
    authInfoBytes: Uint8Array;
    /**
     * chain_id is the unique identifier of the chain this transaction targets.
     * It prevents signed transactions from being used on another chain by an
     * attacker
     *
     * @generated from protobuf field: string chain_id = 3;
     */
    chainId: string;
    /**
     * account_number is the account number of the account in state
     *
     * @generated from protobuf field: uint64 account_number = 4;
     */
    accountNumber: string;
}
/**
 * TxBody is the body of a transaction that all signers sign over.
 *
 * @generated from protobuf message cosmos.tx.v1beta1.TxBody
 */
export interface TxBody {
    /**
     * messages is a list of messages to be executed. The required signers of
     * those messages define the number and order of elements in AuthInfo's
     * signer_infos and Tx's signatures. Each required signer address is added to
     * the list only the first time it occurs.
     * By convention, the first required signer (usually from the first message)
     * is referred to as the primary signer and pays the fee for the whole
     * transaction.
     *
     * @generated from protobuf field: repeated google.protobuf.Any messages = 1;
     */
    messages: Any[];
    /**
     * memo is any arbitrary note/comment to be added to the transaction.
     * WARNING: in clients, any publicly exposed text should not be called memo,
     * but should be called `note` instead (see https://github.com/cosmos/cosmos-sdk/issues/9122).
     *
     * @generated from protobuf field: string memo = 2;
     */
    memo: string;
    /**
     * timeout is the block height after which this transaction will not
     * be processed by the chain
     *
     * @generated from protobuf field: uint64 timeout_height = 3;
     */
    timeoutHeight: string;
    /**
     * extension_options are arbitrary options that can be added by chains
     * when the default options are not sufficient. If any of these are present
     * and can't be handled, the transaction will be rejected
     *
     * @generated from protobuf field: repeated google.protobuf.Any extension_options = 1023;
     */
    extensionOptions: Any[];
    /**
     * extension_options are arbitrary options that can be added by chains
     * when the default options are not sufficient. If any of these are present
     * and can't be handled, they will be ignored
     *
     * @generated from protobuf field: repeated google.protobuf.Any non_critical_extension_options = 2047;
     */
    nonCriticalExtensionOptions: Any[];
}
/**
 * AuthInfo describes the fee and signer modes that are used to sign a
 * transaction.
 *
 * @generated from protobuf message cosmos.tx.v1beta1.AuthInfo
 */
export interface AuthInfo {
    /**
     * signer_infos defines the signing modes for the required signers. The number
     * and order of elements must match the required signers from TxBody's
     * messages. The first element is the primary signer and the one which pays
     * the fee.
     *
     * @generated from protobuf field: repeated cosmos.tx.v1beta1.SignerInfo signer_infos = 1;
     */
    signerInfos: SignerInfo[];
    /**
     * Fee is the fee and gas limit for the transaction. The first signer is the
     * primary signer and the one which pays the fee. The fee can be calculated
     * based on the cost of evaluating the body and doing signature verification
     * of the signers. This can be estimated via simulation.
     *
     * @generated from protobuf field: cosmos.tx.v1beta1.Fee fee = 2;
     */
    fee?: Fee;
}
/**
 * SignerInfo describes the public key and signing mode of a single top-level
 * signer.
 *
 * @generated from protobuf message cosmos.tx.v1beta1.SignerInfo
 */
export interface SignerInfo {
    /**
     * public_key is the public key of the signer. It is optional for accounts
     * that already exist in state. If unset, the verifier can use the required \
     * signer address for this position and lookup the public key.
     *
     * @generated from protobuf field: google.protobuf.Any public_key = 1;
     */
    publicKey?: Any;
    /**
     * mode_info describes the signing mode of the signer and is a nested
     * structure to support nested multisig pubkey's
     *
     * @generated from protobuf field: cosmos.tx.v1beta1.ModeInfo mode_info = 2;
     */
    modeInfo?: ModeInfo;
    /**
     * sequence is the sequence of the account, which describes the
     * number of committed transactions signed by a given address. It is used to
     * prevent replay attacks.
     *
     * @generated from protobuf field: uint64 sequence = 3;
     */
    sequence: string;
}
/**
 * ModeInfo describes the signing mode of a single or nested multisig signer.
 *
 * @generated from protobuf message cosmos.tx.v1beta1.ModeInfo
 */
export interface ModeInfo {
    /**
     * @generated from protobuf oneof: sum
     */
    sum: {
        oneofKind: "single";
        /**
         * single represents a single signer
         *
         * @generated from protobuf field: cosmos.tx.v1beta1.ModeInfo.Single single = 1;
         */
        single: ModeInfo_Single;
    } | {
        oneofKind: "multi";
        /**
         * multi represents a nested multisig signer
         *
         * @generated from protobuf field: cosmos.tx.v1beta1.ModeInfo.Multi multi = 2;
         */
        multi: ModeInfo_Multi;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Single is the mode info for a single signer. It is structured as a message
 * to allow for additional fields such as locale for SIGN_MODE_TEXTUAL in the
 * future
 *
 * @generated from protobuf message cosmos.tx.v1beta1.ModeInfo.Single
 */
export interface ModeInfo_Single {
    /**
     * mode is the signing mode of the single signer
     *
     * @generated from protobuf field: cosmos.tx.signing.v1beta1.SignMode mode = 1;
     */
    mode: SignMode;
}
/**
 * Multi is the mode info for a multisig public key
 *
 * @generated from protobuf message cosmos.tx.v1beta1.ModeInfo.Multi
 */
export interface ModeInfo_Multi {
    /**
     * bitarray specifies which keys within the multisig are signing
     *
     * @generated from protobuf field: cosmos.crypto.multisig.v1beta1.CompactBitArray bitarray = 1;
     */
    bitarray?: CompactBitArray;
    /**
     * mode_infos is the corresponding modes of the signers of the multisig
     * which could include nested multisig public keys
     *
     * @generated from protobuf field: repeated cosmos.tx.v1beta1.ModeInfo mode_infos = 2;
     */
    modeInfos: ModeInfo[];
}
/**
 * Fee includes the amount of coins paid in fees and the maximum
 * gas to be used by the transaction. The ratio yields an effective "gasprice",
 * which must be above some miminum to be accepted into the mempool.
 *
 * @generated from protobuf message cosmos.tx.v1beta1.Fee
 */
export interface Fee {
    /**
     * amount is the amount of coins to be paid as a fee
     *
     * @generated from protobuf field: repeated cosmos.base.v1beta1.Coin amount = 1;
     */
    amount: Coin[];
    /**
     * gas_limit is the maximum gas that can be used in transaction processing
     * before an out of gas error occurs
     *
     * @generated from protobuf field: uint64 gas_limit = 2;
     */
    gasLimit: string;
    /**
     * if unset, the first signer is responsible for paying the fees. If set, the specified account must pay the fees.
     * the payer must be a tx signer (and thus have signed this field in AuthInfo).
     * setting this field does *not* change the ordering of required signers for the transaction.
     *
     * @generated from protobuf field: string payer = 3;
     */
    payer: string;
    /**
     * if set, the fee payer (either the first signer or the value of the payer field) requests that a fee grant be used
     * to pay fees instead of the fee payer's own balance. If an appropriate fee grant does not exist or the chain does
     * not support fee grants, this will fail
     *
     * @generated from protobuf field: string granter = 4;
     */
    granter: string;
}
declare class Tx$Type extends MessageType<Tx> {
    constructor();
    create(value?: PartialMessage<Tx>): Tx;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Tx): Tx;
    internalBinaryWrite(message: Tx, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.tx.v1beta1.Tx
 */
export declare const Tx: Tx$Type;
declare class TxRaw$Type extends MessageType<TxRaw> {
    constructor();
    create(value?: PartialMessage<TxRaw>): TxRaw;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TxRaw): TxRaw;
    internalBinaryWrite(message: TxRaw, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.tx.v1beta1.TxRaw
 */
export declare const TxRaw: TxRaw$Type;
declare class SignDoc$Type extends MessageType<SignDoc> {
    constructor();
    create(value?: PartialMessage<SignDoc>): SignDoc;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SignDoc): SignDoc;
    internalBinaryWrite(message: SignDoc, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.tx.v1beta1.SignDoc
 */
export declare const SignDoc: SignDoc$Type;
declare class TxBody$Type extends MessageType<TxBody> {
    constructor();
    create(value?: PartialMessage<TxBody>): TxBody;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TxBody): TxBody;
    internalBinaryWrite(message: TxBody, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.tx.v1beta1.TxBody
 */
export declare const TxBody: TxBody$Type;
declare class AuthInfo$Type extends MessageType<AuthInfo> {
    constructor();
    create(value?: PartialMessage<AuthInfo>): AuthInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AuthInfo): AuthInfo;
    internalBinaryWrite(message: AuthInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.tx.v1beta1.AuthInfo
 */
export declare const AuthInfo: AuthInfo$Type;
declare class SignerInfo$Type extends MessageType<SignerInfo> {
    constructor();
    create(value?: PartialMessage<SignerInfo>): SignerInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SignerInfo): SignerInfo;
    internalBinaryWrite(message: SignerInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.tx.v1beta1.SignerInfo
 */
export declare const SignerInfo: SignerInfo$Type;
declare class ModeInfo$Type extends MessageType<ModeInfo> {
    constructor();
    create(value?: PartialMessage<ModeInfo>): ModeInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ModeInfo): ModeInfo;
    internalBinaryWrite(message: ModeInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.tx.v1beta1.ModeInfo
 */
export declare const ModeInfo: ModeInfo$Type;
declare class ModeInfo_Single$Type extends MessageType<ModeInfo_Single> {
    constructor();
    create(value?: PartialMessage<ModeInfo_Single>): ModeInfo_Single;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ModeInfo_Single): ModeInfo_Single;
    internalBinaryWrite(message: ModeInfo_Single, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.tx.v1beta1.ModeInfo.Single
 */
export declare const ModeInfo_Single: ModeInfo_Single$Type;
declare class ModeInfo_Multi$Type extends MessageType<ModeInfo_Multi> {
    constructor();
    create(value?: PartialMessage<ModeInfo_Multi>): ModeInfo_Multi;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ModeInfo_Multi): ModeInfo_Multi;
    internalBinaryWrite(message: ModeInfo_Multi, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.tx.v1beta1.ModeInfo.Multi
 */
export declare const ModeInfo_Multi: ModeInfo_Multi$Type;
declare class Fee$Type extends MessageType<Fee> {
    constructor();
    create(value?: PartialMessage<Fee>): Fee;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Fee): Fee;
    internalBinaryWrite(message: Fee, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message cosmos.tx.v1beta1.Fee
 */
export declare const Fee: Fee$Type;
export {};