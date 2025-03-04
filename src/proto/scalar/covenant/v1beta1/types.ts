// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               v5.29.3
// source: scalar/covenant/v1beta1/types.proto

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Key } from "../../multisig/v1beta1/types";
import {
  ListOfTapScriptSigsMap,
  PsbtState,
  psbtStateFromJSON,
  psbtStateToJSON,
} from "../exported/v1beta1/types";

export const protobufPackage = "scalar.covenant.v1beta1";

export enum Status {
  STATUS_UNSPECIFIED = 0,
  STATUS_ACTIVATED = 1,
  STATUS_DEACTIVATED = 2,
  STATUS_PENDING = 3,
  UNRECOGNIZED = -1,
}

export function statusFromJSON(object: any): Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Status.STATUS_UNSPECIFIED;
    case 1:
    case "STATUS_ACTIVATED":
      return Status.STATUS_ACTIVATED;
    case 2:
    case "STATUS_DEACTIVATED":
      return Status.STATUS_DEACTIVATED;
    case 3:
    case "STATUS_PENDING":
      return Status.STATUS_PENDING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Status.UNRECOGNIZED;
  }
}

export function statusToJSON(object: Status): string {
  switch (object) {
    case Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Status.STATUS_ACTIVATED:
      return "STATUS_ACTIVATED";
    case Status.STATUS_DEACTIVATED:
      return "STATUS_DEACTIVATED";
    case Status.STATUS_PENDING:
      return "STATUS_PENDING";
    case Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Custodian represents an individual custodian configuration */
export interface Custodian {
  /** e.g., "Custodian1" */
  name: string;
  /** e.g., "scalarvaloper1..." */
  valAddress: string;
  /** e.g., */
  bitcoinPubkey: Uint8Array;
  /** "0215da913b3e87b4932b1e1b87d9667c28e7250aa0ed60b3a31095f541e1641488" */
  status: Status;
  description: string;
}

/**
 * CustodianGroup represents a group of custodians with their configuration
 * uid is used as identity of the group, btc_pubkey is change by list of
 * custodians
 */
export interface CustodianGroup {
  /** the UID is unique, to distinguish between custodian groups */
  uid: string;
  /** e.g., "All" */
  name: string;
  /** e.g., */
  bitcoinPubkey: Uint8Array;
  /** "tb1p07q440mdl4uyywns325dk8pvjphwety3psp4zvkngtjf3z3hhr2sfar3hv" */
  quorum: number;
  /** Whether the custodian is active */
  status: Status;
  description: string;
  custodians: Custodian[];
}

export interface PsbtMultiSig {
  keyId: string;
  multiPsbt: Uint8Array[];
  participantListTapScriptSigs: { [key: string]: ListOfTapScriptSigsMap };
  finalizedTxs: Uint8Array[];
}

export interface PsbtMultiSig_ParticipantListTapScriptSigsEntry {
  key: string;
  value?: ListOfTapScriptSigsMap | undefined;
}

export interface SigningSession {
  id: Long;
  psbtMultiSig?: PsbtMultiSig | undefined;
  state: PsbtState;
  key?: Key | undefined;
  expiresAt: Long;
  completedAt: Long;
  gracePeriod: Long;
  module: string;
  moduleMetadata?: Any | undefined;
}

function createBaseCustodian(): Custodian {
  return {
    name: "",
    valAddress: "",
    bitcoinPubkey: new Uint8Array(0),
    status: 0,
    description: "",
  };
}

export const Custodian = {
  encode(
    message: Custodian,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.valAddress !== "") {
      writer.uint32(18).string(message.valAddress);
    }
    if (message.bitcoinPubkey.length !== 0) {
      writer.uint32(26).bytes(message.bitcoinPubkey);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Custodian {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustodian();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.valAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.bitcoinPubkey = reader.bytes();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Custodian {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      valAddress: isSet(object.valAddress)
        ? globalThis.String(object.valAddress)
        : "",
      bitcoinPubkey: isSet(object.bitcoinPubkey)
        ? bytesFromBase64(object.bitcoinPubkey)
        : new Uint8Array(0),
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
    };
  },

  toJSON(message: Custodian): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.valAddress !== "") {
      obj.valAddress = message.valAddress;
    }
    if (message.bitcoinPubkey.length !== 0) {
      obj.bitcoinPubkey = base64FromBytes(message.bitcoinPubkey);
    }
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Custodian>, I>>(base?: I): Custodian {
    return Custodian.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Custodian>, I>>(
    object: I,
  ): Custodian {
    const message = createBaseCustodian();
    message.name = object.name ?? "";
    message.valAddress = object.valAddress ?? "";
    message.bitcoinPubkey = object.bitcoinPubkey ?? new Uint8Array(0);
    message.status = object.status ?? 0;
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseCustodianGroup(): CustodianGroup {
  return {
    uid: "",
    name: "",
    bitcoinPubkey: new Uint8Array(0),
    quorum: 0,
    status: 0,
    description: "",
    custodians: [],
  };
}

export const CustodianGroup = {
  encode(
    message: CustodianGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.bitcoinPubkey.length !== 0) {
      writer.uint32(26).bytes(message.bitcoinPubkey);
    }
    if (message.quorum !== 0) {
      writer.uint32(32).uint32(message.quorum);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    for (const v of message.custodians) {
      Custodian.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustodianGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustodianGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.bitcoinPubkey = reader.bytes();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.quorum = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.custodians.push(Custodian.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CustodianGroup {
    return {
      uid: isSet(object.uid) ? globalThis.String(object.uid) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      bitcoinPubkey: isSet(object.bitcoinPubkey)
        ? bytesFromBase64(object.bitcoinPubkey)
        : new Uint8Array(0),
      quorum: isSet(object.quorum) ? globalThis.Number(object.quorum) : 0,
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
      custodians: globalThis.Array.isArray(object?.custodians)
        ? object.custodians.map((e: any) => Custodian.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CustodianGroup): unknown {
    const obj: any = {};
    if (message.uid !== "") {
      obj.uid = message.uid;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.bitcoinPubkey.length !== 0) {
      obj.bitcoinPubkey = base64FromBytes(message.bitcoinPubkey);
    }
    if (message.quorum !== 0) {
      obj.quorum = Math.round(message.quorum);
    }
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.custodians?.length) {
      obj.custodians = message.custodians.map((e) => Custodian.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CustodianGroup>, I>>(
    base?: I,
  ): CustodianGroup {
    return CustodianGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CustodianGroup>, I>>(
    object: I,
  ): CustodianGroup {
    const message = createBaseCustodianGroup();
    message.uid = object.uid ?? "";
    message.name = object.name ?? "";
    message.bitcoinPubkey = object.bitcoinPubkey ?? new Uint8Array(0);
    message.quorum = object.quorum ?? 0;
    message.status = object.status ?? 0;
    message.description = object.description ?? "";
    message.custodians =
      object.custodians?.map((e) => Custodian.fromPartial(e)) || [];
    return message;
  },
};

function createBasePsbtMultiSig(): PsbtMultiSig {
  return {
    keyId: "",
    multiPsbt: [],
    participantListTapScriptSigs: {},
    finalizedTxs: [],
  };
}

export const PsbtMultiSig = {
  encode(
    message: PsbtMultiSig,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.keyId !== "") {
      writer.uint32(10).string(message.keyId);
    }
    for (const v of message.multiPsbt) {
      writer.uint32(18).bytes(v!);
    }
    Object.entries(message.participantListTapScriptSigs).forEach(
      ([key, value]) => {
        PsbtMultiSig_ParticipantListTapScriptSigsEntry.encode(
          { key: key as any, value },
          writer.uint32(26).fork(),
        ).ldelim();
      },
    );
    for (const v of message.finalizedTxs) {
      writer.uint32(34).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PsbtMultiSig {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePsbtMultiSig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.multiPsbt.push(reader.bytes());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = PsbtMultiSig_ParticipantListTapScriptSigsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry3.value !== undefined) {
            message.participantListTapScriptSigs[entry3.key] = entry3.value;
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.finalizedTxs.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PsbtMultiSig {
    return {
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      multiPsbt: globalThis.Array.isArray(object?.multiPsbt)
        ? object.multiPsbt.map((e: any) => bytesFromBase64(e))
        : [],
      participantListTapScriptSigs: isObject(
        object.participantListTapScriptSigs,
      )
        ? Object.entries(object.participantListTapScriptSigs).reduce<{
            [key: string]: ListOfTapScriptSigsMap;
          }>((acc, [key, value]) => {
            acc[key] = ListOfTapScriptSigsMap.fromJSON(value);
            return acc;
          }, {})
        : {},
      finalizedTxs: globalThis.Array.isArray(object?.finalizedTxs)
        ? object.finalizedTxs.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: PsbtMultiSig): unknown {
    const obj: any = {};
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.multiPsbt?.length) {
      obj.multiPsbt = message.multiPsbt.map((e) => base64FromBytes(e));
    }
    if (message.participantListTapScriptSigs) {
      const entries = Object.entries(message.participantListTapScriptSigs);
      if (entries.length > 0) {
        obj.participantListTapScriptSigs = {};
        entries.forEach(([k, v]) => {
          obj.participantListTapScriptSigs[k] =
            ListOfTapScriptSigsMap.toJSON(v);
        });
      }
    }
    if (message.finalizedTxs?.length) {
      obj.finalizedTxs = message.finalizedTxs.map((e) => base64FromBytes(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PsbtMultiSig>, I>>(
    base?: I,
  ): PsbtMultiSig {
    return PsbtMultiSig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PsbtMultiSig>, I>>(
    object: I,
  ): PsbtMultiSig {
    const message = createBasePsbtMultiSig();
    message.keyId = object.keyId ?? "";
    message.multiPsbt = object.multiPsbt?.map((e) => e) || [];
    message.participantListTapScriptSigs = Object.entries(
      object.participantListTapScriptSigs ?? {},
    ).reduce<{ [key: string]: ListOfTapScriptSigsMap }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ListOfTapScriptSigsMap.fromPartial(value);
      }
      return acc;
    }, {});
    message.finalizedTxs = object.finalizedTxs?.map((e) => e) || [];
    return message;
  },
};

function createBasePsbtMultiSig_ParticipantListTapScriptSigsEntry(): PsbtMultiSig_ParticipantListTapScriptSigsEntry {
  return { key: "", value: undefined };
}

export const PsbtMultiSig_ParticipantListTapScriptSigsEntry = {
  encode(
    message: PsbtMultiSig_ParticipantListTapScriptSigsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ListOfTapScriptSigsMap.encode(
        message.value,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PsbtMultiSig_ParticipantListTapScriptSigsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePsbtMultiSig_ParticipantListTapScriptSigsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = ListOfTapScriptSigsMap.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PsbtMultiSig_ParticipantListTapScriptSigsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value)
        ? ListOfTapScriptSigsMap.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: PsbtMultiSig_ParticipantListTapScriptSigsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = ListOfTapScriptSigsMap.toJSON(message.value);
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<PsbtMultiSig_ParticipantListTapScriptSigsEntry>,
      I
    >,
  >(base?: I): PsbtMultiSig_ParticipantListTapScriptSigsEntry {
    return PsbtMultiSig_ParticipantListTapScriptSigsEntry.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<PsbtMultiSig_ParticipantListTapScriptSigsEntry>,
      I
    >,
  >(object: I): PsbtMultiSig_ParticipantListTapScriptSigsEntry {
    const message = createBasePsbtMultiSig_ParticipantListTapScriptSigsEntry();
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? ListOfTapScriptSigsMap.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseSigningSession(): SigningSession {
  return {
    id: Long.UZERO,
    psbtMultiSig: undefined,
    state: 0,
    key: undefined,
    expiresAt: Long.ZERO,
    completedAt: Long.ZERO,
    gracePeriod: Long.ZERO,
    module: "",
    moduleMetadata: undefined,
  };
}

export const SigningSession = {
  encode(
    message: SigningSession,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.id.equals(Long.UZERO)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.psbtMultiSig !== undefined) {
      PsbtMultiSig.encode(
        message.psbtMultiSig,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.key !== undefined) {
      Key.encode(message.key, writer.uint32(34).fork()).ldelim();
    }
    if (!message.expiresAt.equals(Long.ZERO)) {
      writer.uint32(40).int64(message.expiresAt);
    }
    if (!message.completedAt.equals(Long.ZERO)) {
      writer.uint32(48).int64(message.completedAt);
    }
    if (!message.gracePeriod.equals(Long.ZERO)) {
      writer.uint32(56).int64(message.gracePeriod);
    }
    if (message.module !== "") {
      writer.uint32(66).string(message.module);
    }
    if (message.moduleMetadata !== undefined) {
      Any.encode(message.moduleMetadata, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SigningSession {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.psbtMultiSig = PsbtMultiSig.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.key = Key.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.expiresAt = reader.int64() as Long;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.completedAt = reader.int64() as Long;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.gracePeriod = reader.int64() as Long;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.module = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.moduleMetadata = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SigningSession {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      psbtMultiSig: isSet(object.psbtMultiSig)
        ? PsbtMultiSig.fromJSON(object.psbtMultiSig)
        : undefined,
      state: isSet(object.state) ? psbtStateFromJSON(object.state) : 0,
      key: isSet(object.key) ? Key.fromJSON(object.key) : undefined,
      expiresAt: isSet(object.expiresAt)
        ? Long.fromValue(object.expiresAt)
        : Long.ZERO,
      completedAt: isSet(object.completedAt)
        ? Long.fromValue(object.completedAt)
        : Long.ZERO,
      gracePeriod: isSet(object.gracePeriod)
        ? Long.fromValue(object.gracePeriod)
        : Long.ZERO,
      module: isSet(object.module) ? globalThis.String(object.module) : "",
      moduleMetadata: isSet(object.moduleMetadata)
        ? Any.fromJSON(object.moduleMetadata)
        : undefined,
    };
  },

  toJSON(message: SigningSession): unknown {
    const obj: any = {};
    if (!message.id.equals(Long.UZERO)) {
      obj.id = (message.id || Long.UZERO).toString();
    }
    if (message.psbtMultiSig !== undefined) {
      obj.psbtMultiSig = PsbtMultiSig.toJSON(message.psbtMultiSig);
    }
    if (message.state !== 0) {
      obj.state = psbtStateToJSON(message.state);
    }
    if (message.key !== undefined) {
      obj.key = Key.toJSON(message.key);
    }
    if (!message.expiresAt.equals(Long.ZERO)) {
      obj.expiresAt = (message.expiresAt || Long.ZERO).toString();
    }
    if (!message.completedAt.equals(Long.ZERO)) {
      obj.completedAt = (message.completedAt || Long.ZERO).toString();
    }
    if (!message.gracePeriod.equals(Long.ZERO)) {
      obj.gracePeriod = (message.gracePeriod || Long.ZERO).toString();
    }
    if (message.module !== "") {
      obj.module = message.module;
    }
    if (message.moduleMetadata !== undefined) {
      obj.moduleMetadata = Any.toJSON(message.moduleMetadata);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SigningSession>, I>>(
    base?: I,
  ): SigningSession {
    return SigningSession.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SigningSession>, I>>(
    object: I,
  ): SigningSession {
    const message = createBaseSigningSession();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.psbtMultiSig =
      object.psbtMultiSig !== undefined && object.psbtMultiSig !== null
        ? PsbtMultiSig.fromPartial(object.psbtMultiSig)
        : undefined;
    message.state = object.state ?? 0;
    message.key =
      object.key !== undefined && object.key !== null
        ? Key.fromPartial(object.key)
        : undefined;
    message.expiresAt =
      object.expiresAt !== undefined && object.expiresAt !== null
        ? Long.fromValue(object.expiresAt)
        : Long.ZERO;
    message.completedAt =
      object.completedAt !== undefined && object.completedAt !== null
        ? Long.fromValue(object.completedAt)
        : Long.ZERO;
    message.gracePeriod =
      object.gracePeriod !== undefined && object.gracePeriod !== null
        ? Long.fromValue(object.gracePeriod)
        : Long.ZERO;
    message.module = object.module ?? "";
    message.moduleMetadata =
      object.moduleMetadata !== undefined && object.moduleMetadata !== null
        ? Any.fromPartial(object.moduleMetadata)
        : undefined;
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
    ? string | number | Long
    : T extends globalThis.Array<infer U>
      ? globalThis.Array<DeepPartial<U>>
      : T extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : T extends {}
          ? { [K in keyof T]?: DeepPartial<T[K]> }
          : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
