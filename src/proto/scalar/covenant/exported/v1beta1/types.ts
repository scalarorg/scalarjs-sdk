// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               v5.29.3
// source: scalar/covenant/exported/v1beta1/types.proto

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "scalar.covenant.exported.v1beta1";

export enum PsbtState {
  PSBT_STATE_UNSPECIFIED = 0,
  PSBT_STATE_PENDING = 1,
  PSBT_STATE_CREATING = 2,
  PSBT_STATE_SIGNING = 3,
  PSBT_STATE_COMPLETED = 4,
  UNRECOGNIZED = -1,
}

export function psbtStateFromJSON(object: any): PsbtState {
  switch (object) {
    case 0:
    case "PSBT_STATE_UNSPECIFIED":
      return PsbtState.PSBT_STATE_UNSPECIFIED;
    case 1:
    case "PSBT_STATE_PENDING":
      return PsbtState.PSBT_STATE_PENDING;
    case 2:
    case "PSBT_STATE_CREATING":
      return PsbtState.PSBT_STATE_CREATING;
    case 3:
    case "PSBT_STATE_SIGNING":
      return PsbtState.PSBT_STATE_SIGNING;
    case 4:
    case "PSBT_STATE_COMPLETED":
      return PsbtState.PSBT_STATE_COMPLETED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PsbtState.UNRECOGNIZED;
  }
}

export function psbtStateToJSON(object: PsbtState): string {
  switch (object) {
    case PsbtState.PSBT_STATE_UNSPECIFIED:
      return "PSBT_STATE_UNSPECIFIED";
    case PsbtState.PSBT_STATE_PENDING:
      return "PSBT_STATE_PENDING";
    case PsbtState.PSBT_STATE_CREATING:
      return "PSBT_STATE_CREATING";
    case PsbtState.PSBT_STATE_SIGNING:
      return "PSBT_STATE_SIGNING";
    case PsbtState.PSBT_STATE_COMPLETED:
      return "PSBT_STATE_COMPLETED";
    case PsbtState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum KeyState {
  KEY_STATE_UNSPECIFIED = 0,
  KEY_STATE_ASSIGNED = 1,
  KEY_STATE_ACTIVE = 2,
  UNRECOGNIZED = -1,
}

export function keyStateFromJSON(object: any): KeyState {
  switch (object) {
    case 0:
    case "KEY_STATE_UNSPECIFIED":
      return KeyState.KEY_STATE_UNSPECIFIED;
    case 1:
    case "KEY_STATE_ASSIGNED":
      return KeyState.KEY_STATE_ASSIGNED;
    case 2:
    case "KEY_STATE_ACTIVE":
      return KeyState.KEY_STATE_ACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return KeyState.UNRECOGNIZED;
  }
}

export function keyStateToJSON(object: KeyState): string {
  switch (object) {
    case KeyState.KEY_STATE_UNSPECIFIED:
      return "KEY_STATE_UNSPECIFIED";
    case KeyState.KEY_STATE_ASSIGNED:
      return "KEY_STATE_ASSIGNED";
    case KeyState.KEY_STATE_ACTIVE:
      return "KEY_STATE_ACTIVE";
    case KeyState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface TapScriptSig {
  keyXOnly: Uint8Array;
  leafHash: Uint8Array;
  signature: Uint8Array;
}

export interface TapScriptSigsList {
  list: TapScriptSig[];
}

export interface TapScriptSigsEntry {
  index: Long;
  sigs?: TapScriptSigsList | undefined;
}

/**
 * The reason we use a list instead of a map is because the map is not ensured
 * the deterministic order of the entries
 */
export interface TapScriptSigsMap {
  inner: TapScriptSigsEntry[];
}

export interface ListOfTapScriptSigsMap {
  inner: TapScriptSigsMap[];
}

function createBaseTapScriptSig(): TapScriptSig {
  return {
    keyXOnly: new Uint8Array(0),
    leafHash: new Uint8Array(0),
    signature: new Uint8Array(0),
  };
}

export const TapScriptSig = {
  encode(
    message: TapScriptSig,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.keyXOnly.length !== 0) {
      writer.uint32(10).bytes(message.keyXOnly);
    }
    if (message.leafHash.length !== 0) {
      writer.uint32(18).bytes(message.leafHash);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TapScriptSig {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTapScriptSig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyXOnly = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.leafHash = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.signature = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TapScriptSig {
    return {
      keyXOnly: isSet(object.keyXOnly)
        ? bytesFromBase64(object.keyXOnly)
        : new Uint8Array(0),
      leafHash: isSet(object.leafHash)
        ? bytesFromBase64(object.leafHash)
        : new Uint8Array(0),
      signature: isSet(object.signature)
        ? bytesFromBase64(object.signature)
        : new Uint8Array(0),
    };
  },

  toJSON(message: TapScriptSig): unknown {
    const obj: any = {};
    if (message.keyXOnly.length !== 0) {
      obj.keyXOnly = base64FromBytes(message.keyXOnly);
    }
    if (message.leafHash.length !== 0) {
      obj.leafHash = base64FromBytes(message.leafHash);
    }
    if (message.signature.length !== 0) {
      obj.signature = base64FromBytes(message.signature);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TapScriptSig>, I>>(
    base?: I,
  ): TapScriptSig {
    return TapScriptSig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TapScriptSig>, I>>(
    object: I,
  ): TapScriptSig {
    const message = createBaseTapScriptSig();
    message.keyXOnly = object.keyXOnly ?? new Uint8Array(0);
    message.leafHash = object.leafHash ?? new Uint8Array(0);
    message.signature = object.signature ?? new Uint8Array(0);
    return message;
  },
};

function createBaseTapScriptSigsList(): TapScriptSigsList {
  return { list: [] };
}

export const TapScriptSigsList = {
  encode(
    message: TapScriptSigsList,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.list) {
      TapScriptSig.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TapScriptSigsList {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTapScriptSigsList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.list.push(TapScriptSig.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TapScriptSigsList {
    return {
      list: globalThis.Array.isArray(object?.list)
        ? object.list.map((e: any) => TapScriptSig.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TapScriptSigsList): unknown {
    const obj: any = {};
    if (message.list?.length) {
      obj.list = message.list.map((e) => TapScriptSig.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TapScriptSigsList>, I>>(
    base?: I,
  ): TapScriptSigsList {
    return TapScriptSigsList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TapScriptSigsList>, I>>(
    object: I,
  ): TapScriptSigsList {
    const message = createBaseTapScriptSigsList();
    message.list = object.list?.map((e) => TapScriptSig.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTapScriptSigsEntry(): TapScriptSigsEntry {
  return { index: Long.UZERO, sigs: undefined };
}

export const TapScriptSigsEntry = {
  encode(
    message: TapScriptSigsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.index.equals(Long.UZERO)) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.sigs !== undefined) {
      TapScriptSigsList.encode(message.sigs, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TapScriptSigsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTapScriptSigsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sigs = TapScriptSigsList.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TapScriptSigsEntry {
    return {
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO,
      sigs: isSet(object.sigs)
        ? TapScriptSigsList.fromJSON(object.sigs)
        : undefined,
    };
  },

  toJSON(message: TapScriptSigsEntry): unknown {
    const obj: any = {};
    if (!message.index.equals(Long.UZERO)) {
      obj.index = (message.index || Long.UZERO).toString();
    }
    if (message.sigs !== undefined) {
      obj.sigs = TapScriptSigsList.toJSON(message.sigs);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TapScriptSigsEntry>, I>>(
    base?: I,
  ): TapScriptSigsEntry {
    return TapScriptSigsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TapScriptSigsEntry>, I>>(
    object: I,
  ): TapScriptSigsEntry {
    const message = createBaseTapScriptSigsEntry();
    message.index =
      object.index !== undefined && object.index !== null
        ? Long.fromValue(object.index)
        : Long.UZERO;
    message.sigs =
      object.sigs !== undefined && object.sigs !== null
        ? TapScriptSigsList.fromPartial(object.sigs)
        : undefined;
    return message;
  },
};

function createBaseTapScriptSigsMap(): TapScriptSigsMap {
  return { inner: [] };
}

export const TapScriptSigsMap = {
  encode(
    message: TapScriptSigsMap,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.inner) {
      TapScriptSigsEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TapScriptSigsMap {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTapScriptSigsMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inner.push(
            TapScriptSigsEntry.decode(reader, reader.uint32()),
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

  fromJSON(object: any): TapScriptSigsMap {
    return {
      inner: globalThis.Array.isArray(object?.inner)
        ? object.inner.map((e: any) => TapScriptSigsEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TapScriptSigsMap): unknown {
    const obj: any = {};
    if (message.inner?.length) {
      obj.inner = message.inner.map((e) => TapScriptSigsEntry.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TapScriptSigsMap>, I>>(
    base?: I,
  ): TapScriptSigsMap {
    return TapScriptSigsMap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TapScriptSigsMap>, I>>(
    object: I,
  ): TapScriptSigsMap {
    const message = createBaseTapScriptSigsMap();
    message.inner =
      object.inner?.map((e) => TapScriptSigsEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListOfTapScriptSigsMap(): ListOfTapScriptSigsMap {
  return { inner: [] };
}

export const ListOfTapScriptSigsMap = {
  encode(
    message: ListOfTapScriptSigsMap,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.inner) {
      TapScriptSigsMap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ListOfTapScriptSigsMap {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOfTapScriptSigsMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inner.push(TapScriptSigsMap.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListOfTapScriptSigsMap {
    return {
      inner: globalThis.Array.isArray(object?.inner)
        ? object.inner.map((e: any) => TapScriptSigsMap.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListOfTapScriptSigsMap): unknown {
    const obj: any = {};
    if (message.inner?.length) {
      obj.inner = message.inner.map((e) => TapScriptSigsMap.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListOfTapScriptSigsMap>, I>>(
    base?: I,
  ): ListOfTapScriptSigsMap {
    return ListOfTapScriptSigsMap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListOfTapScriptSigsMap>, I>>(
    object: I,
  ): ListOfTapScriptSigsMap {
    const message = createBaseListOfTapScriptSigsMap();
    message.inner =
      object.inner?.map((e) => TapScriptSigsMap.fromPartial(e)) || [];
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
