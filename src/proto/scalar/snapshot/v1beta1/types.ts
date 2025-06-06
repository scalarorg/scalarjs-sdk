// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               v5.29.3
// source: scalar/snapshot/v1beta1/types.proto

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "scalar.snapshot.v1beta1";

export interface ProxiedValidator {
  validator: Uint8Array;
  proxy: Uint8Array;
  active: boolean;
}

function createBaseProxiedValidator(): ProxiedValidator {
  return {
    validator: new Uint8Array(0),
    proxy: new Uint8Array(0),
    active: false,
  };
}

export const ProxiedValidator = {
  encode(
    message: ProxiedValidator,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.validator.length !== 0) {
      writer.uint32(10).bytes(message.validator);
    }
    if (message.proxy.length !== 0) {
      writer.uint32(18).bytes(message.proxy);
    }
    if (message.active !== false) {
      writer.uint32(24).bool(message.active);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProxiedValidator {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProxiedValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validator = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.proxy = reader.bytes();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.active = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProxiedValidator {
    return {
      validator: isSet(object.validator)
        ? bytesFromBase64(object.validator)
        : new Uint8Array(0),
      proxy: isSet(object.proxy)
        ? bytesFromBase64(object.proxy)
        : new Uint8Array(0),
      active: isSet(object.active) ? globalThis.Boolean(object.active) : false,
    };
  },

  toJSON(message: ProxiedValidator): unknown {
    const obj: any = {};
    if (message.validator.length !== 0) {
      obj.validator = base64FromBytes(message.validator);
    }
    if (message.proxy.length !== 0) {
      obj.proxy = base64FromBytes(message.proxy);
    }
    if (message.active !== false) {
      obj.active = message.active;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProxiedValidator>, I>>(
    base?: I,
  ): ProxiedValidator {
    return ProxiedValidator.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProxiedValidator>, I>>(
    object: I,
  ): ProxiedValidator {
    const message = createBaseProxiedValidator();
    message.validator = object.validator ?? new Uint8Array(0);
    message.proxy = object.proxy ?? new Uint8Array(0);
    message.active = object.active ?? false;
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
