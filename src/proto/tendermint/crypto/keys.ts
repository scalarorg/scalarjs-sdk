// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               v5.29.3
// source: tendermint/crypto/keys.proto

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "tendermint.crypto";

/** PublicKey defines the keys available for use with Validators */
export interface PublicKey {
  ed25519?: Uint8Array | undefined;
  secp256k1?: Uint8Array | undefined;
}

function createBasePublicKey(): PublicKey {
  return { ed25519: undefined, secp256k1: undefined };
}

export const PublicKey = {
  encode(
    message: PublicKey,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.ed25519 !== undefined) {
      writer.uint32(10).bytes(message.ed25519);
    }
    if (message.secp256k1 !== undefined) {
      writer.uint32(18).bytes(message.secp256k1);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublicKey {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublicKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ed25519 = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.secp256k1 = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PublicKey {
    return {
      ed25519: isSet(object.ed25519)
        ? bytesFromBase64(object.ed25519)
        : undefined,
      secp256k1: isSet(object.secp256k1)
        ? bytesFromBase64(object.secp256k1)
        : undefined,
    };
  },

  toJSON(message: PublicKey): unknown {
    const obj: any = {};
    if (message.ed25519 !== undefined) {
      obj.ed25519 = base64FromBytes(message.ed25519);
    }
    if (message.secp256k1 !== undefined) {
      obj.secp256k1 = base64FromBytes(message.secp256k1);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PublicKey>, I>>(base?: I): PublicKey {
    return PublicKey.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PublicKey>, I>>(
    object: I,
  ): PublicKey {
    const message = createBasePublicKey();
    message.ed25519 = object.ed25519 ?? undefined;
    message.secp256k1 = object.secp256k1 ?? undefined;
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
