// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmwasm/wasm/v1/types.proto" (package "cosmwasm.wasm.v1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Any } from "../../../google/protobuf/any";
/**
 * AccessType permission types
 *
 * @generated from protobuf enum cosmwasm.wasm.v1.AccessType
 */
export var AccessType;
(function (AccessType) {
    /**
     * AccessTypeUnspecified placeholder for empty value
     *
     * @generated from protobuf enum value: ACCESS_TYPE_UNSPECIFIED = 0;
     */
    AccessType[AccessType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * AccessTypeNobody forbidden
     *
     * @generated from protobuf enum value: ACCESS_TYPE_NOBODY = 1;
     */
    AccessType[AccessType["NOBODY"] = 1] = "NOBODY";
    /**
     * AccessTypeOnlyAddress restricted to a single address
     * Deprecated: use AccessTypeAnyOfAddresses instead
     *
     * @generated from protobuf enum value: ACCESS_TYPE_ONLY_ADDRESS = 2;
     */
    AccessType[AccessType["ONLY_ADDRESS"] = 2] = "ONLY_ADDRESS";
    /**
     * AccessTypeEverybody unrestricted
     *
     * @generated from protobuf enum value: ACCESS_TYPE_EVERYBODY = 3;
     */
    AccessType[AccessType["EVERYBODY"] = 3] = "EVERYBODY";
    /**
     * AccessTypeAnyOfAddresses allow any of the addresses
     *
     * @generated from protobuf enum value: ACCESS_TYPE_ANY_OF_ADDRESSES = 4;
     */
    AccessType[AccessType["ANY_OF_ADDRESSES"] = 4] = "ANY_OF_ADDRESSES";
})(AccessType || (AccessType = {}));
/**
 * ContractCodeHistoryOperationType actions that caused a code change
 *
 * @generated from protobuf enum cosmwasm.wasm.v1.ContractCodeHistoryOperationType
 */
export var ContractCodeHistoryOperationType;
(function (ContractCodeHistoryOperationType) {
    /**
     * ContractCodeHistoryOperationTypeUnspecified placeholder for empty value
     *
     * @generated from protobuf enum value: CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED = 0;
     */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * ContractCodeHistoryOperationTypeInit on chain contract instantiation
     *
     * @generated from protobuf enum value: CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT = 1;
     */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["INIT"] = 1] = "INIT";
    /**
     * ContractCodeHistoryOperationTypeMigrate code migration
     *
     * @generated from protobuf enum value: CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE = 2;
     */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["MIGRATE"] = 2] = "MIGRATE";
    /**
     * ContractCodeHistoryOperationTypeGenesis based on genesis data
     *
     * @generated from protobuf enum value: CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS = 3;
     */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["GENESIS"] = 3] = "GENESIS";
})(ContractCodeHistoryOperationType || (ContractCodeHistoryOperationType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class AccessTypeParam$Type extends MessageType {
    constructor() {
        super("cosmwasm.wasm.v1.AccessTypeParam", [
            { no: 1, name: "value", kind: "enum", T: () => ["cosmwasm.wasm.v1.AccessType", AccessType, "ACCESS_TYPE_"], options: { "gogoproto.moretags": "yaml:\"value\"" } }
        ], { "gogoproto.goproto_stringer": true });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.value = 0;
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* cosmwasm.wasm.v1.AccessType value */ 1:
                    message.value = reader.int32();
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
        /* cosmwasm.wasm.v1.AccessType value = 1; */
        if (message.value !== 0)
            writer.tag(1, WireType.Varint).int32(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.AccessTypeParam
 */
export const AccessTypeParam = new AccessTypeParam$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AccessConfig$Type extends MessageType {
    constructor() {
        super("cosmwasm.wasm.v1.AccessConfig", [
            { no: 1, name: "permission", kind: "enum", T: () => ["cosmwasm.wasm.v1.AccessType", AccessType, "ACCESS_TYPE_"], options: { "gogoproto.moretags": "yaml:\"permission\"" } },
            { no: 2, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"address\"" } },
            { no: 3, name: "addresses", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"addresses\"" } }
        ], { "gogoproto.goproto_stringer": true });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.permission = 0;
        message.address = "";
        message.addresses = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* cosmwasm.wasm.v1.AccessType permission */ 1:
                    message.permission = reader.int32();
                    break;
                case /* string address */ 2:
                    message.address = reader.string();
                    break;
                case /* repeated string addresses */ 3:
                    message.addresses.push(reader.string());
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
        /* cosmwasm.wasm.v1.AccessType permission = 1; */
        if (message.permission !== 0)
            writer.tag(1, WireType.Varint).int32(message.permission);
        /* string address = 2; */
        if (message.address !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.address);
        /* repeated string addresses = 3; */
        for (let i = 0; i < message.addresses.length; i++)
            writer.tag(3, WireType.LengthDelimited).string(message.addresses[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.AccessConfig
 */
export const AccessConfig = new AccessConfig$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Params$Type extends MessageType {
    constructor() {
        super("cosmwasm.wasm.v1.Params", [
            { no: 1, name: "code_upload_access", kind: "message", T: () => AccessConfig, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"code_upload_access\"" } },
            { no: 2, name: "instantiate_default_permission", kind: "enum", T: () => ["cosmwasm.wasm.v1.AccessType", AccessType, "ACCESS_TYPE_"], options: { "gogoproto.moretags": "yaml:\"instantiate_default_permission\"" } }
        ], { "gogoproto.goproto_stringer": false });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.instantiateDefaultPermission = 0;
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* cosmwasm.wasm.v1.AccessConfig code_upload_access */ 1:
                    message.codeUploadAccess = AccessConfig.internalBinaryRead(reader, reader.uint32(), options, message.codeUploadAccess);
                    break;
                case /* cosmwasm.wasm.v1.AccessType instantiate_default_permission */ 2:
                    message.instantiateDefaultPermission = reader.int32();
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
        /* cosmwasm.wasm.v1.AccessConfig code_upload_access = 1; */
        if (message.codeUploadAccess)
            AccessConfig.internalBinaryWrite(message.codeUploadAccess, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* cosmwasm.wasm.v1.AccessType instantiate_default_permission = 2; */
        if (message.instantiateDefaultPermission !== 0)
            writer.tag(2, WireType.Varint).int32(message.instantiateDefaultPermission);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.Params
 */
export const Params = new Params$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CodeInfo$Type extends MessageType {
    constructor() {
        super("cosmwasm.wasm.v1.CodeInfo", [
            { no: 1, name: "code_hash", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "creator", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "instantiate_config", kind: "message", T: () => AccessConfig, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.codeHash = new Uint8Array(0);
        message.creator = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes code_hash */ 1:
                    message.codeHash = reader.bytes();
                    break;
                case /* string creator */ 2:
                    message.creator = reader.string();
                    break;
                case /* cosmwasm.wasm.v1.AccessConfig instantiate_config */ 5:
                    message.instantiateConfig = AccessConfig.internalBinaryRead(reader, reader.uint32(), options, message.instantiateConfig);
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
        /* bytes code_hash = 1; */
        if (message.codeHash.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.codeHash);
        /* string creator = 2; */
        if (message.creator !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.creator);
        /* cosmwasm.wasm.v1.AccessConfig instantiate_config = 5; */
        if (message.instantiateConfig)
            AccessConfig.internalBinaryWrite(message.instantiateConfig, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.CodeInfo
 */
export const CodeInfo = new CodeInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ContractInfo$Type extends MessageType {
    constructor() {
        super("cosmwasm.wasm.v1.ContractInfo", [
            { no: 1, name: "code_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, options: { "gogoproto.customname": "CodeID" } },
            { no: 2, name: "creator", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "admin", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "label", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "created", kind: "message", T: () => AbsoluteTxPosition },
            { no: 6, name: "ibc_port_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.customname": "IBCPortID" } },
            { no: 7, name: "extension", kind: "message", T: () => Any, options: { "cosmos_proto.accepts_interface": "cosmwasm.wasm.v1.ContractInfoExtension" } }
        ], { "gogoproto.equal": true });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.codeId = "0";
        message.creator = "";
        message.admin = "";
        message.label = "";
        message.ibcPortId = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 code_id */ 1:
                    message.codeId = reader.uint64().toString();
                    break;
                case /* string creator */ 2:
                    message.creator = reader.string();
                    break;
                case /* string admin */ 3:
                    message.admin = reader.string();
                    break;
                case /* string label */ 4:
                    message.label = reader.string();
                    break;
                case /* cosmwasm.wasm.v1.AbsoluteTxPosition created */ 5:
                    message.created = AbsoluteTxPosition.internalBinaryRead(reader, reader.uint32(), options, message.created);
                    break;
                case /* string ibc_port_id */ 6:
                    message.ibcPortId = reader.string();
                    break;
                case /* google.protobuf.Any extension */ 7:
                    message.extension = Any.internalBinaryRead(reader, reader.uint32(), options, message.extension);
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
        /* uint64 code_id = 1; */
        if (message.codeId !== "0")
            writer.tag(1, WireType.Varint).uint64(message.codeId);
        /* string creator = 2; */
        if (message.creator !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.creator);
        /* string admin = 3; */
        if (message.admin !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.admin);
        /* string label = 4; */
        if (message.label !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.label);
        /* cosmwasm.wasm.v1.AbsoluteTxPosition created = 5; */
        if (message.created)
            AbsoluteTxPosition.internalBinaryWrite(message.created, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* string ibc_port_id = 6; */
        if (message.ibcPortId !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.ibcPortId);
        /* google.protobuf.Any extension = 7; */
        if (message.extension)
            Any.internalBinaryWrite(message.extension, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.ContractInfo
 */
export const ContractInfo = new ContractInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ContractCodeHistoryEntry$Type extends MessageType {
    constructor() {
        super("cosmwasm.wasm.v1.ContractCodeHistoryEntry", [
            { no: 1, name: "operation", kind: "enum", T: () => ["cosmwasm.wasm.v1.ContractCodeHistoryOperationType", ContractCodeHistoryOperationType, "CONTRACT_CODE_HISTORY_OPERATION_TYPE_"] },
            { no: 2, name: "code_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, options: { "gogoproto.customname": "CodeID" } },
            { no: 3, name: "updated", kind: "message", T: () => AbsoluteTxPosition },
            { no: 4, name: "msg", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.casttype": "RawContractMessage" } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.operation = 0;
        message.codeId = "0";
        message.msg = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* cosmwasm.wasm.v1.ContractCodeHistoryOperationType operation */ 1:
                    message.operation = reader.int32();
                    break;
                case /* uint64 code_id */ 2:
                    message.codeId = reader.uint64().toString();
                    break;
                case /* cosmwasm.wasm.v1.AbsoluteTxPosition updated */ 3:
                    message.updated = AbsoluteTxPosition.internalBinaryRead(reader, reader.uint32(), options, message.updated);
                    break;
                case /* bytes msg */ 4:
                    message.msg = reader.bytes();
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
        /* cosmwasm.wasm.v1.ContractCodeHistoryOperationType operation = 1; */
        if (message.operation !== 0)
            writer.tag(1, WireType.Varint).int32(message.operation);
        /* uint64 code_id = 2; */
        if (message.codeId !== "0")
            writer.tag(2, WireType.Varint).uint64(message.codeId);
        /* cosmwasm.wasm.v1.AbsoluteTxPosition updated = 3; */
        if (message.updated)
            AbsoluteTxPosition.internalBinaryWrite(message.updated, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* bytes msg = 4; */
        if (message.msg.length)
            writer.tag(4, WireType.LengthDelimited).bytes(message.msg);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.ContractCodeHistoryEntry
 */
export const ContractCodeHistoryEntry = new ContractCodeHistoryEntry$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbsoluteTxPosition$Type extends MessageType {
    constructor() {
        super("cosmwasm.wasm.v1.AbsoluteTxPosition", [
            { no: 1, name: "block_height", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "tx_index", kind: "scalar", T: 4 /*ScalarType.UINT64*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.blockHeight = "0";
        message.txIndex = "0";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 block_height */ 1:
                    message.blockHeight = reader.uint64().toString();
                    break;
                case /* uint64 tx_index */ 2:
                    message.txIndex = reader.uint64().toString();
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
        /* uint64 block_height = 1; */
        if (message.blockHeight !== "0")
            writer.tag(1, WireType.Varint).uint64(message.blockHeight);
        /* uint64 tx_index = 2; */
        if (message.txIndex !== "0")
            writer.tag(2, WireType.Varint).uint64(message.txIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.AbsoluteTxPosition
 */
export const AbsoluteTxPosition = new AbsoluteTxPosition$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Model$Type extends MessageType {
    constructor() {
        super("cosmwasm.wasm.v1.Model", [
            { no: 1, name: "key", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.casttype": "github.com/tendermint/tendermint/libs/bytes.HexBytes" } },
            { no: 2, name: "value", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.key = new Uint8Array(0);
        message.value = new Uint8Array(0);
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
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmwasm.wasm.v1.Model
 */
export const Model = new Model$Type();
