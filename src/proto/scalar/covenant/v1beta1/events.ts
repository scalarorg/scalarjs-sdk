// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               v5.29.3
// source: scalar/covenant/v1beta1/events.proto

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { TapScriptSigsMap } from "../exported/v1beta1/types";

export const protobufPackage = "scalar.covenant.v1beta1";

export interface SigningPsbtStarted {
  module: string;
  chain: string;
  sigId: Long;
  keyId: string;
  pubKeys: { [key: string]: Uint8Array };
  requestingModule: string;
  multiPsbt: Uint8Array[];
}

export interface SigningPsbtStarted_PubKeysEntry {
  key: string;
  value: Uint8Array;
}

export interface SigningPsbtCompleted {
  module: string;
  sigId: Long;
}

export interface SigningPsbtExpired {
  module: string;
  sigId: Long;
}

export interface TapScriptSigsSubmitted {
  module: string;
  sigId: Long;
  participant: Uint8Array;
  listOfTapScriptSigsMap: TapScriptSigsMap[];
}

export interface KeyRotated {
  module: string;
  chain: string;
  keyId: string;
}

function createBaseSigningPsbtStarted(): SigningPsbtStarted {
  return {
    module: "",
    chain: "",
    sigId: Long.UZERO,
    keyId: "",
    pubKeys: {},
    requestingModule: "",
    multiPsbt: [],
  };
}

export const SigningPsbtStarted = {
  encode(
    message: SigningPsbtStarted,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (!message.sigId.equals(Long.UZERO)) {
      writer.uint32(24).uint64(message.sigId);
    }
    if (message.keyId !== "") {
      writer.uint32(34).string(message.keyId);
    }
    Object.entries(message.pubKeys).forEach(([key, value]) => {
      SigningPsbtStarted_PubKeysEntry.encode(
        { key: key as any, value },
        writer.uint32(42).fork(),
      ).ldelim();
    });
    if (message.requestingModule !== "") {
      writer.uint32(50).string(message.requestingModule);
    }
    for (const v of message.multiPsbt) {
      writer.uint32(58).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SigningPsbtStarted {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningPsbtStarted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.module = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.chain = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.sigId = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.keyId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = SigningPsbtStarted_PubKeysEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry5.value !== undefined) {
            message.pubKeys[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.requestingModule = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.multiPsbt.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SigningPsbtStarted {
    return {
      module: isSet(object.module) ? globalThis.String(object.module) : "",
      chain: isSet(object.chain) ? globalThis.String(object.chain) : "",
      sigId: isSet(object.sigId) ? Long.fromValue(object.sigId) : Long.UZERO,
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      pubKeys: isObject(object.pubKeys)
        ? Object.entries(object.pubKeys).reduce<{ [key: string]: Uint8Array }>(
            (acc, [key, value]) => {
              acc[key] = bytesFromBase64(value as string);
              return acc;
            },
            {},
          )
        : {},
      requestingModule: isSet(object.requestingModule)
        ? globalThis.String(object.requestingModule)
        : "",
      multiPsbt: globalThis.Array.isArray(object?.multiPsbt)
        ? object.multiPsbt.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: SigningPsbtStarted): unknown {
    const obj: any = {};
    if (message.module !== "") {
      obj.module = message.module;
    }
    if (message.chain !== "") {
      obj.chain = message.chain;
    }
    if (!message.sigId.equals(Long.UZERO)) {
      obj.sigId = (message.sigId || Long.UZERO).toString();
    }
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.pubKeys) {
      const entries = Object.entries(message.pubKeys);
      if (entries.length > 0) {
        obj.pubKeys = {};
        entries.forEach(([k, v]) => {
          obj.pubKeys[k] = base64FromBytes(v);
        });
      }
    }
    if (message.requestingModule !== "") {
      obj.requestingModule = message.requestingModule;
    }
    if (message.multiPsbt?.length) {
      obj.multiPsbt = message.multiPsbt.map((e) => base64FromBytes(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SigningPsbtStarted>, I>>(
    base?: I,
  ): SigningPsbtStarted {
    return SigningPsbtStarted.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SigningPsbtStarted>, I>>(
    object: I,
  ): SigningPsbtStarted {
    const message = createBaseSigningPsbtStarted();
    message.module = object.module ?? "";
    message.chain = object.chain ?? "";
    message.sigId =
      object.sigId !== undefined && object.sigId !== null
        ? Long.fromValue(object.sigId)
        : Long.UZERO;
    message.keyId = object.keyId ?? "";
    message.pubKeys = Object.entries(object.pubKeys ?? {}).reduce<{
      [key: string]: Uint8Array;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    message.requestingModule = object.requestingModule ?? "";
    message.multiPsbt = object.multiPsbt?.map((e) => e) || [];
    return message;
  },
};

function createBaseSigningPsbtStarted_PubKeysEntry(): SigningPsbtStarted_PubKeysEntry {
  return { key: "", value: new Uint8Array(0) };
}

export const SigningPsbtStarted_PubKeysEntry = {
  encode(
    message: SigningPsbtStarted_PubKeysEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SigningPsbtStarted_PubKeysEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningPsbtStarted_PubKeysEntry();
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

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SigningPsbtStarted_PubKeysEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value)
        ? bytesFromBase64(object.value)
        : new Uint8Array(0),
    };
  },

  toJSON(message: SigningPsbtStarted_PubKeysEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SigningPsbtStarted_PubKeysEntry>, I>>(
    base?: I,
  ): SigningPsbtStarted_PubKeysEntry {
    return SigningPsbtStarted_PubKeysEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SigningPsbtStarted_PubKeysEntry>, I>>(
    object: I,
  ): SigningPsbtStarted_PubKeysEntry {
    const message = createBaseSigningPsbtStarted_PubKeysEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseSigningPsbtCompleted(): SigningPsbtCompleted {
  return { module: "", sigId: Long.UZERO };
}

export const SigningPsbtCompleted = {
  encode(
    message: SigningPsbtCompleted,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (!message.sigId.equals(Long.UZERO)) {
      writer.uint32(16).uint64(message.sigId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SigningPsbtCompleted {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningPsbtCompleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.module = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.sigId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SigningPsbtCompleted {
    return {
      module: isSet(object.module) ? globalThis.String(object.module) : "",
      sigId: isSet(object.sigId) ? Long.fromValue(object.sigId) : Long.UZERO,
    };
  },

  toJSON(message: SigningPsbtCompleted): unknown {
    const obj: any = {};
    if (message.module !== "") {
      obj.module = message.module;
    }
    if (!message.sigId.equals(Long.UZERO)) {
      obj.sigId = (message.sigId || Long.UZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SigningPsbtCompleted>, I>>(
    base?: I,
  ): SigningPsbtCompleted {
    return SigningPsbtCompleted.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SigningPsbtCompleted>, I>>(
    object: I,
  ): SigningPsbtCompleted {
    const message = createBaseSigningPsbtCompleted();
    message.module = object.module ?? "";
    message.sigId =
      object.sigId !== undefined && object.sigId !== null
        ? Long.fromValue(object.sigId)
        : Long.UZERO;
    return message;
  },
};

function createBaseSigningPsbtExpired(): SigningPsbtExpired {
  return { module: "", sigId: Long.UZERO };
}

export const SigningPsbtExpired = {
  encode(
    message: SigningPsbtExpired,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (!message.sigId.equals(Long.UZERO)) {
      writer.uint32(16).uint64(message.sigId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SigningPsbtExpired {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningPsbtExpired();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.module = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.sigId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SigningPsbtExpired {
    return {
      module: isSet(object.module) ? globalThis.String(object.module) : "",
      sigId: isSet(object.sigId) ? Long.fromValue(object.sigId) : Long.UZERO,
    };
  },

  toJSON(message: SigningPsbtExpired): unknown {
    const obj: any = {};
    if (message.module !== "") {
      obj.module = message.module;
    }
    if (!message.sigId.equals(Long.UZERO)) {
      obj.sigId = (message.sigId || Long.UZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SigningPsbtExpired>, I>>(
    base?: I,
  ): SigningPsbtExpired {
    return SigningPsbtExpired.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SigningPsbtExpired>, I>>(
    object: I,
  ): SigningPsbtExpired {
    const message = createBaseSigningPsbtExpired();
    message.module = object.module ?? "";
    message.sigId =
      object.sigId !== undefined && object.sigId !== null
        ? Long.fromValue(object.sigId)
        : Long.UZERO;
    return message;
  },
};

function createBaseTapScriptSigsSubmitted(): TapScriptSigsSubmitted {
  return {
    module: "",
    sigId: Long.UZERO,
    participant: new Uint8Array(0),
    listOfTapScriptSigsMap: [],
  };
}

export const TapScriptSigsSubmitted = {
  encode(
    message: TapScriptSigsSubmitted,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (!message.sigId.equals(Long.UZERO)) {
      writer.uint32(16).uint64(message.sigId);
    }
    if (message.participant.length !== 0) {
      writer.uint32(26).bytes(message.participant);
    }
    for (const v of message.listOfTapScriptSigsMap) {
      TapScriptSigsMap.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TapScriptSigsSubmitted {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTapScriptSigsSubmitted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.module = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.sigId = reader.uint64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.participant = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.listOfTapScriptSigsMap.push(
            TapScriptSigsMap.decode(reader, reader.uint32()),
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

  fromJSON(object: any): TapScriptSigsSubmitted {
    return {
      module: isSet(object.module) ? globalThis.String(object.module) : "",
      sigId: isSet(object.sigId) ? Long.fromValue(object.sigId) : Long.UZERO,
      participant: isSet(object.participant)
        ? bytesFromBase64(object.participant)
        : new Uint8Array(0),
      listOfTapScriptSigsMap: globalThis.Array.isArray(
        object?.listOfTapScriptSigsMap,
      )
        ? object.listOfTapScriptSigsMap.map((e: any) =>
            TapScriptSigsMap.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: TapScriptSigsSubmitted): unknown {
    const obj: any = {};
    if (message.module !== "") {
      obj.module = message.module;
    }
    if (!message.sigId.equals(Long.UZERO)) {
      obj.sigId = (message.sigId || Long.UZERO).toString();
    }
    if (message.participant.length !== 0) {
      obj.participant = base64FromBytes(message.participant);
    }
    if (message.listOfTapScriptSigsMap?.length) {
      obj.listOfTapScriptSigsMap = message.listOfTapScriptSigsMap.map((e) =>
        TapScriptSigsMap.toJSON(e),
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TapScriptSigsSubmitted>, I>>(
    base?: I,
  ): TapScriptSigsSubmitted {
    return TapScriptSigsSubmitted.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TapScriptSigsSubmitted>, I>>(
    object: I,
  ): TapScriptSigsSubmitted {
    const message = createBaseTapScriptSigsSubmitted();
    message.module = object.module ?? "";
    message.sigId =
      object.sigId !== undefined && object.sigId !== null
        ? Long.fromValue(object.sigId)
        : Long.UZERO;
    message.participant = object.participant ?? new Uint8Array(0);
    message.listOfTapScriptSigsMap =
      object.listOfTapScriptSigsMap?.map((e) =>
        TapScriptSigsMap.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseKeyRotated(): KeyRotated {
  return { module: "", chain: "", keyId: "" };
}

export const KeyRotated = {
  encode(
    message: KeyRotated,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.keyId !== "") {
      writer.uint32(26).string(message.keyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyRotated {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyRotated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.module = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.chain = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.keyId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KeyRotated {
    return {
      module: isSet(object.module) ? globalThis.String(object.module) : "",
      chain: isSet(object.chain) ? globalThis.String(object.chain) : "",
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
    };
  },

  toJSON(message: KeyRotated): unknown {
    const obj: any = {};
    if (message.module !== "") {
      obj.module = message.module;
    }
    if (message.chain !== "") {
      obj.chain = message.chain;
    }
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KeyRotated>, I>>(base?: I): KeyRotated {
    return KeyRotated.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<KeyRotated>, I>>(
    object: I,
  ): KeyRotated {
    const message = createBaseKeyRotated();
    message.module = object.module ?? "";
    message.chain = object.chain ?? "";
    message.keyId = object.keyId ?? "";
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
