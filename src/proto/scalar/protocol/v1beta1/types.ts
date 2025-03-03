// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               v5.29.3
// source: scalar/protocol/v1beta1/types.proto

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Asset } from "../../chains/v1beta1/types";
import { CustodianGroup } from "../../covenant/v1beta1/types";
import {
  ProtocolAttributes,
  Status,
  statusFromJSON,
  statusToJSON,
  SupportedChain,
} from "../exported/v1beta1/types";

export const protobufPackage = "scalar.protocol.v1beta1";

export interface Protocol {
  /** BTC's pubkey */
  bitcoinPubkey: Uint8Array;
  /** Scalar's address */
  scalarAddress: Uint8Array;
  name: string;
  tag: Uint8Array;
  attributes?: ProtocolAttributes | undefined;
  status: Status;
  /** scalar.covenant.v1beta1.CustodianGroup custodian_group = 8; */
  custodianGroupUid: string;
  /** External asset */
  asset?: Asset | undefined;
  /** Other chains with internal asset */
  chains: SupportedChain[];
  /** Avatar of the protocol, base64 encoded */
  avatar: Uint8Array;
}

export interface ProtocolDetails {
  /** BTC's pubkey */
  bitcoinPubkey: Uint8Array;
  /** Scalar's pubkey */
  scalarPubkey: Uint8Array;
  /** Scalar's address */
  scalarAddress: Uint8Array;
  name: string;
  tag: Uint8Array;
  attributes?: ProtocolAttributes | undefined;
  status: Status;
  custodianGroupUid: string;
  /** External asset */
  asset?: Asset | undefined;
  /** Other chains with internal asset */
  chains: SupportedChain[];
  /** Avatar of the protocol, base64 encoded */
  avatar: Uint8Array;
  custodianGroup?: CustodianGroup | undefined;
}

function createBaseProtocol(): Protocol {
  return {
    bitcoinPubkey: new Uint8Array(0),
    scalarAddress: new Uint8Array(0),
    name: "",
    tag: new Uint8Array(0),
    attributes: undefined,
    status: 0,
    custodianGroupUid: "",
    asset: undefined,
    chains: [],
    avatar: new Uint8Array(0),
  };
}

export const Protocol = {
  encode(
    message: Protocol,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bitcoinPubkey.length !== 0) {
      writer.uint32(10).bytes(message.bitcoinPubkey);
    }
    if (message.scalarAddress.length !== 0) {
      writer.uint32(18).bytes(message.scalarAddress);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.tag.length !== 0) {
      writer.uint32(34).bytes(message.tag);
    }
    if (message.attributes !== undefined) {
      ProtocolAttributes.encode(
        message.attributes,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.custodianGroupUid !== "") {
      writer.uint32(58).string(message.custodianGroupUid);
    }
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.chains) {
      SupportedChain.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.avatar.length !== 0) {
      writer.uint32(82).bytes(message.avatar);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Protocol {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtocol();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bitcoinPubkey = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.scalarAddress = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.tag = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.attributes = ProtocolAttributes.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.custodianGroupUid = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.asset = Asset.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.chains.push(SupportedChain.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.avatar = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Protocol {
    return {
      bitcoinPubkey: isSet(object.bitcoinPubkey)
        ? bytesFromBase64(object.bitcoinPubkey)
        : new Uint8Array(0),
      scalarAddress: isSet(object.scalarAddress)
        ? bytesFromBase64(object.scalarAddress)
        : new Uint8Array(0),
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      tag: isSet(object.tag) ? bytesFromBase64(object.tag) : new Uint8Array(0),
      attributes: isSet(object.attributes)
        ? ProtocolAttributes.fromJSON(object.attributes)
        : undefined,
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      custodianGroupUid: isSet(object.custodianGroupUid)
        ? globalThis.String(object.custodianGroupUid)
        : "",
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      chains: globalThis.Array.isArray(object?.chains)
        ? object.chains.map((e: any) => SupportedChain.fromJSON(e))
        : [],
      avatar: isSet(object.avatar)
        ? bytesFromBase64(object.avatar)
        : new Uint8Array(0),
    };
  },

  toJSON(message: Protocol): unknown {
    const obj: any = {};
    if (message.bitcoinPubkey.length !== 0) {
      obj.bitcoinPubkey = base64FromBytes(message.bitcoinPubkey);
    }
    if (message.scalarAddress.length !== 0) {
      obj.scalarAddress = base64FromBytes(message.scalarAddress);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.tag.length !== 0) {
      obj.tag = base64FromBytes(message.tag);
    }
    if (message.attributes !== undefined) {
      obj.attributes = ProtocolAttributes.toJSON(message.attributes);
    }
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.custodianGroupUid !== "") {
      obj.custodianGroupUid = message.custodianGroupUid;
    }
    if (message.asset !== undefined) {
      obj.asset = Asset.toJSON(message.asset);
    }
    if (message.chains?.length) {
      obj.chains = message.chains.map((e) => SupportedChain.toJSON(e));
    }
    if (message.avatar.length !== 0) {
      obj.avatar = base64FromBytes(message.avatar);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Protocol>, I>>(base?: I): Protocol {
    return Protocol.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Protocol>, I>>(object: I): Protocol {
    const message = createBaseProtocol();
    message.bitcoinPubkey = object.bitcoinPubkey ?? new Uint8Array(0);
    message.scalarAddress = object.scalarAddress ?? new Uint8Array(0);
    message.name = object.name ?? "";
    message.tag = object.tag ?? new Uint8Array(0);
    message.attributes =
      object.attributes !== undefined && object.attributes !== null
        ? ProtocolAttributes.fromPartial(object.attributes)
        : undefined;
    message.status = object.status ?? 0;
    message.custodianGroupUid = object.custodianGroupUid ?? "";
    message.asset =
      object.asset !== undefined && object.asset !== null
        ? Asset.fromPartial(object.asset)
        : undefined;
    message.chains =
      object.chains?.map((e) => SupportedChain.fromPartial(e)) || [];
    message.avatar = object.avatar ?? new Uint8Array(0);
    return message;
  },
};

function createBaseProtocolDetails(): ProtocolDetails {
  return {
    bitcoinPubkey: new Uint8Array(0),
    scalarPubkey: new Uint8Array(0),
    scalarAddress: new Uint8Array(0),
    name: "",
    tag: new Uint8Array(0),
    attributes: undefined,
    status: 0,
    custodianGroupUid: "",
    asset: undefined,
    chains: [],
    avatar: new Uint8Array(0),
    custodianGroup: undefined,
  };
}

export const ProtocolDetails = {
  encode(
    message: ProtocolDetails,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bitcoinPubkey.length !== 0) {
      writer.uint32(10).bytes(message.bitcoinPubkey);
    }
    if (message.scalarPubkey.length !== 0) {
      writer.uint32(18).bytes(message.scalarPubkey);
    }
    if (message.scalarAddress.length !== 0) {
      writer.uint32(26).bytes(message.scalarAddress);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.tag.length !== 0) {
      writer.uint32(42).bytes(message.tag);
    }
    if (message.attributes !== undefined) {
      ProtocolAttributes.encode(
        message.attributes,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.custodianGroupUid !== "") {
      writer.uint32(66).string(message.custodianGroupUid);
    }
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.chains) {
      SupportedChain.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.avatar.length !== 0) {
      writer.uint32(90).bytes(message.avatar);
    }
    if (message.custodianGroup !== undefined) {
      CustodianGroup.encode(
        message.custodianGroup,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtocolDetails {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtocolDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bitcoinPubkey = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.scalarPubkey = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.scalarAddress = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.tag = reader.bytes();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.attributes = ProtocolAttributes.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.custodianGroupUid = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.asset = Asset.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.chains.push(SupportedChain.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.avatar = reader.bytes();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.custodianGroup = CustodianGroup.decode(
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

  fromJSON(object: any): ProtocolDetails {
    return {
      bitcoinPubkey: isSet(object.bitcoinPubkey)
        ? bytesFromBase64(object.bitcoinPubkey)
        : new Uint8Array(0),
      scalarPubkey: isSet(object.scalarPubkey)
        ? bytesFromBase64(object.scalarPubkey)
        : new Uint8Array(0),
      scalarAddress: isSet(object.scalarAddress)
        ? bytesFromBase64(object.scalarAddress)
        : new Uint8Array(0),
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      tag: isSet(object.tag) ? bytesFromBase64(object.tag) : new Uint8Array(0),
      attributes: isSet(object.attributes)
        ? ProtocolAttributes.fromJSON(object.attributes)
        : undefined,
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      custodianGroupUid: isSet(object.custodianGroupUid)
        ? globalThis.String(object.custodianGroupUid)
        : "",
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      chains: globalThis.Array.isArray(object?.chains)
        ? object.chains.map((e: any) => SupportedChain.fromJSON(e))
        : [],
      avatar: isSet(object.avatar)
        ? bytesFromBase64(object.avatar)
        : new Uint8Array(0),
      custodianGroup: isSet(object.custodianGroup)
        ? CustodianGroup.fromJSON(object.custodianGroup)
        : undefined,
    };
  },

  toJSON(message: ProtocolDetails): unknown {
    const obj: any = {};
    if (message.bitcoinPubkey.length !== 0) {
      obj.bitcoinPubkey = base64FromBytes(message.bitcoinPubkey);
    }
    if (message.scalarPubkey.length !== 0) {
      obj.scalarPubkey = base64FromBytes(message.scalarPubkey);
    }
    if (message.scalarAddress.length !== 0) {
      obj.scalarAddress = base64FromBytes(message.scalarAddress);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.tag.length !== 0) {
      obj.tag = base64FromBytes(message.tag);
    }
    if (message.attributes !== undefined) {
      obj.attributes = ProtocolAttributes.toJSON(message.attributes);
    }
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.custodianGroupUid !== "") {
      obj.custodianGroupUid = message.custodianGroupUid;
    }
    if (message.asset !== undefined) {
      obj.asset = Asset.toJSON(message.asset);
    }
    if (message.chains?.length) {
      obj.chains = message.chains.map((e) => SupportedChain.toJSON(e));
    }
    if (message.avatar.length !== 0) {
      obj.avatar = base64FromBytes(message.avatar);
    }
    if (message.custodianGroup !== undefined) {
      obj.custodianGroup = CustodianGroup.toJSON(message.custodianGroup);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProtocolDetails>, I>>(
    base?: I,
  ): ProtocolDetails {
    return ProtocolDetails.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProtocolDetails>, I>>(
    object: I,
  ): ProtocolDetails {
    const message = createBaseProtocolDetails();
    message.bitcoinPubkey = object.bitcoinPubkey ?? new Uint8Array(0);
    message.scalarPubkey = object.scalarPubkey ?? new Uint8Array(0);
    message.scalarAddress = object.scalarAddress ?? new Uint8Array(0);
    message.name = object.name ?? "";
    message.tag = object.tag ?? new Uint8Array(0);
    message.attributes =
      object.attributes !== undefined && object.attributes !== null
        ? ProtocolAttributes.fromPartial(object.attributes)
        : undefined;
    message.status = object.status ?? 0;
    message.custodianGroupUid = object.custodianGroupUid ?? "";
    message.asset =
      object.asset !== undefined && object.asset !== null
        ? Asset.fromPartial(object.asset)
        : undefined;
    message.chains =
      object.chains?.map((e) => SupportedChain.fromPartial(e)) || [];
    message.avatar = object.avatar ?? new Uint8Array(0);
    message.custodianGroup =
      object.custodianGroup !== undefined && object.custodianGroup !== null
        ? CustodianGroup.fromPartial(object.custodianGroup)
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
