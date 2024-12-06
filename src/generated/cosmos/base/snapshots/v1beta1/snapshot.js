// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/base/snapshots/v1beta1/snapshot.proto" (package "cosmos.base.snapshots.v1beta1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class Snapshot$Type extends MessageType {
    constructor() {
        super("cosmos.base.snapshots.v1beta1.Snapshot", [
            { no: 1, name: "height", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "format", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "chunks", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "hash", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 5, name: "metadata", kind: "message", T: () => Metadata, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.height = "0";
        message.format = 0;
        message.chunks = 0;
        message.hash = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 height */ 1:
                    message.height = reader.uint64().toString();
                    break;
                case /* uint32 format */ 2:
                    message.format = reader.uint32();
                    break;
                case /* uint32 chunks */ 3:
                    message.chunks = reader.uint32();
                    break;
                case /* bytes hash */ 4:
                    message.hash = reader.bytes();
                    break;
                case /* cosmos.base.snapshots.v1beta1.Metadata metadata */ 5:
                    message.metadata = Metadata.internalBinaryRead(reader, reader.uint32(), options, message.metadata);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint64 height = 1; */
        if (message.height !== "0")
            writer.tag(1, WireType.Varint).uint64(message.height);
        /* uint32 format = 2; */
        if (message.format !== 0)
            writer.tag(2, WireType.Varint).uint32(message.format);
        /* uint32 chunks = 3; */
        if (message.chunks !== 0)
            writer.tag(3, WireType.Varint).uint32(message.chunks);
        /* bytes hash = 4; */
        if (message.hash.length)
            writer.tag(4, WireType.LengthDelimited).bytes(message.hash);
        /* cosmos.base.snapshots.v1beta1.Metadata metadata = 5; */
        if (message.metadata)
            Metadata.internalBinaryWrite(message.metadata, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.base.snapshots.v1beta1.Snapshot
 */
export const Snapshot = new Snapshot$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Metadata$Type extends MessageType {
    constructor() {
        super("cosmos.base.snapshots.v1beta1.Metadata", [
            { no: 1, name: "chunk_hashes", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.chunkHashes = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated bytes chunk_hashes */ 1:
                    message.chunkHashes.push(reader.bytes());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated bytes chunk_hashes = 1; */
        for (let i = 0; i < message.chunkHashes.length; i++)
            writer.tag(1, WireType.LengthDelimited).bytes(message.chunkHashes[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.base.snapshots.v1beta1.Metadata
 */
export const Metadata = new Metadata$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SnapshotItem$Type extends MessageType {
    constructor() {
        super("cosmos.base.snapshots.v1beta1.SnapshotItem", [
            { no: 1, name: "store", kind: "message", oneof: "item", T: () => SnapshotStoreItem },
            { no: 2, name: "iavl", kind: "message", oneof: "item", T: () => SnapshotIAVLItem, options: { "gogoproto.customname": "IAVL" } },
            { no: 3, name: "extension", kind: "message", oneof: "item", T: () => SnapshotExtensionMeta },
            { no: 4, name: "extension_payload", kind: "message", oneof: "item", T: () => SnapshotExtensionPayload }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.item = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* cosmos.base.snapshots.v1beta1.SnapshotStoreItem store */ 1:
                    message.item = {
                        oneofKind: "store",
                        store: SnapshotStoreItem.internalBinaryRead(reader, reader.uint32(), options, message.item.store)
                    };
                    break;
                case /* cosmos.base.snapshots.v1beta1.SnapshotIAVLItem iavl */ 2:
                    message.item = {
                        oneofKind: "iavl",
                        iavl: SnapshotIAVLItem.internalBinaryRead(reader, reader.uint32(), options, message.item.iavl)
                    };
                    break;
                case /* cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta extension */ 3:
                    message.item = {
                        oneofKind: "extension",
                        extension: SnapshotExtensionMeta.internalBinaryRead(reader, reader.uint32(), options, message.item.extension)
                    };
                    break;
                case /* cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload extension_payload */ 4:
                    message.item = {
                        oneofKind: "extensionPayload",
                        extensionPayload: SnapshotExtensionPayload.internalBinaryRead(reader, reader.uint32(), options, message.item.extensionPayload)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* cosmos.base.snapshots.v1beta1.SnapshotStoreItem store = 1; */
        if (message.item.oneofKind === "store")
            SnapshotStoreItem.internalBinaryWrite(message.item.store, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* cosmos.base.snapshots.v1beta1.SnapshotIAVLItem iavl = 2; */
        if (message.item.oneofKind === "iavl")
            SnapshotIAVLItem.internalBinaryWrite(message.item.iavl, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta extension = 3; */
        if (message.item.oneofKind === "extension")
            SnapshotExtensionMeta.internalBinaryWrite(message.item.extension, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload extension_payload = 4; */
        if (message.item.oneofKind === "extensionPayload")
            SnapshotExtensionPayload.internalBinaryWrite(message.item.extensionPayload, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.base.snapshots.v1beta1.SnapshotItem
 */
export const SnapshotItem = new SnapshotItem$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SnapshotStoreItem$Type extends MessageType {
    constructor() {
        super("cosmos.base.snapshots.v1beta1.SnapshotStoreItem", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.name = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.base.snapshots.v1beta1.SnapshotStoreItem
 */
export const SnapshotStoreItem = new SnapshotStoreItem$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SnapshotIAVLItem$Type extends MessageType {
    constructor() {
        super("cosmos.base.snapshots.v1beta1.SnapshotIAVLItem", [
            { no: 1, name: "key", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "value", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 3, name: "version", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 4, name: "height", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.key = new Uint8Array(0);
        message.value = new Uint8Array(0);
        message.version = "0";
        message.height = 0;
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes key */ 1:
                    message.key = reader.bytes();
                    break;
                case /* bytes value */ 2:
                    message.value = reader.bytes();
                    break;
                case /* int64 version */ 3:
                    message.version = reader.int64().toString();
                    break;
                case /* int32 height */ 4:
                    message.height = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* bytes key = 1; */
        if (message.key.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.key);
        /* bytes value = 2; */
        if (message.value.length)
            writer.tag(2, WireType.LengthDelimited).bytes(message.value);
        /* int64 version = 3; */
        if (message.version !== "0")
            writer.tag(3, WireType.Varint).int64(message.version);
        /* int32 height = 4; */
        if (message.height !== 0)
            writer.tag(4, WireType.Varint).int32(message.height);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.base.snapshots.v1beta1.SnapshotIAVLItem
 */
export const SnapshotIAVLItem = new SnapshotIAVLItem$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SnapshotExtensionMeta$Type extends MessageType {
    constructor() {
        super("cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "format", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.name = "";
        message.format = 0;
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* uint32 format */ 2:
                    message.format = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* uint32 format = 2; */
        if (message.format !== 0)
            writer.tag(2, WireType.Varint).uint32(message.format);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta
 */
export const SnapshotExtensionMeta = new SnapshotExtensionMeta$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SnapshotExtensionPayload$Type extends MessageType {
    constructor() {
        super("cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload", [
            { no: 1, name: "payload", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.payload = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes payload */ 1:
                    message.payload = reader.bytes();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* bytes payload = 1; */
        if (message.payload.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.payload);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload
 */
export const SnapshotExtensionPayload = new SnapshotExtensionPayload$Type();