// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "ibc/core/connection/v1/connection.proto" (package "ibc.core.connection.v1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { MerklePrefix } from "../../commitment/v1/commitment";
/**
 * State defines if a connection is in one of the following states:
 * INIT, TRYOPEN, OPEN or UNINITIALIZED.
 *
 * @generated from protobuf enum ibc.core.connection.v1.State
 */
export var State;
(function (State) {
    /**
     * Default State
     *
     * @generated from protobuf enum value: STATE_UNINITIALIZED_UNSPECIFIED = 0;
     */
    State[State["UNINITIALIZED_UNSPECIFIED"] = 0] = "UNINITIALIZED_UNSPECIFIED";
    /**
     * A connection end has just started the opening handshake.
     *
     * @generated from protobuf enum value: STATE_INIT = 1;
     */
    State[State["INIT"] = 1] = "INIT";
    /**
     * A connection end has acknowledged the handshake step on the counterparty
     * chain.
     *
     * @generated from protobuf enum value: STATE_TRYOPEN = 2;
     */
    State[State["TRYOPEN"] = 2] = "TRYOPEN";
    /**
     * A connection end has completed the handshake.
     *
     * @generated from protobuf enum value: STATE_OPEN = 3;
     */
    State[State["OPEN"] = 3] = "OPEN";
})(State || (State = {}));
// @generated message type with reflection information, may provide speed optimized methods
class ConnectionEnd$Type extends MessageType {
    constructor() {
        super("ibc.core.connection.v1.ConnectionEnd", [
            { no: 1, name: "client_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"client_id\"" } },
            { no: 2, name: "versions", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Version },
            { no: 3, name: "state", kind: "enum", T: () => ["ibc.core.connection.v1.State", State, "STATE_"] },
            { no: 4, name: "counterparty", kind: "message", T: () => Counterparty, options: { "gogoproto.nullable": false } },
            { no: 5, name: "delay_period", kind: "scalar", T: 4 /*ScalarType.UINT64*/, options: { "gogoproto.moretags": "yaml:\"delay_period\"" } }
        ], { "gogoproto.goproto_getters": false });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.clientId = "";
        message.versions = [];
        message.state = 0;
        message.delayPeriod = "0";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string client_id */ 1:
                    message.clientId = reader.string();
                    break;
                case /* repeated ibc.core.connection.v1.Version versions */ 2:
                    message.versions.push(Version.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* ibc.core.connection.v1.State state */ 3:
                    message.state = reader.int32();
                    break;
                case /* ibc.core.connection.v1.Counterparty counterparty */ 4:
                    message.counterparty = Counterparty.internalBinaryRead(reader, reader.uint32(), options, message.counterparty);
                    break;
                case /* uint64 delay_period */ 5:
                    message.delayPeriod = reader.uint64().toString();
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
        /* string client_id = 1; */
        if (message.clientId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.clientId);
        /* repeated ibc.core.connection.v1.Version versions = 2; */
        for (let i = 0; i < message.versions.length; i++)
            Version.internalBinaryWrite(message.versions[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* ibc.core.connection.v1.State state = 3; */
        if (message.state !== 0)
            writer.tag(3, WireType.Varint).int32(message.state);
        /* ibc.core.connection.v1.Counterparty counterparty = 4; */
        if (message.counterparty)
            Counterparty.internalBinaryWrite(message.counterparty, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* uint64 delay_period = 5; */
        if (message.delayPeriod !== "0")
            writer.tag(5, WireType.Varint).uint64(message.delayPeriod);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.core.connection.v1.ConnectionEnd
 */
export const ConnectionEnd = new ConnectionEnd$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IdentifiedConnection$Type extends MessageType {
    constructor() {
        super("ibc.core.connection.v1.IdentifiedConnection", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"id\"" } },
            { no: 2, name: "client_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"client_id\"" } },
            { no: 3, name: "versions", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Version },
            { no: 4, name: "state", kind: "enum", T: () => ["ibc.core.connection.v1.State", State, "STATE_"] },
            { no: 5, name: "counterparty", kind: "message", T: () => Counterparty, options: { "gogoproto.nullable": false } },
            { no: 6, name: "delay_period", kind: "scalar", T: 4 /*ScalarType.UINT64*/, options: { "gogoproto.moretags": "yaml:\"delay_period\"" } }
        ], { "gogoproto.goproto_getters": false });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.id = "";
        message.clientId = "";
        message.versions = [];
        message.state = 0;
        message.delayPeriod = "0";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* string client_id */ 2:
                    message.clientId = reader.string();
                    break;
                case /* repeated ibc.core.connection.v1.Version versions */ 3:
                    message.versions.push(Version.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* ibc.core.connection.v1.State state */ 4:
                    message.state = reader.int32();
                    break;
                case /* ibc.core.connection.v1.Counterparty counterparty */ 5:
                    message.counterparty = Counterparty.internalBinaryRead(reader, reader.uint32(), options, message.counterparty);
                    break;
                case /* uint64 delay_period */ 6:
                    message.delayPeriod = reader.uint64().toString();
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
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* string client_id = 2; */
        if (message.clientId !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.clientId);
        /* repeated ibc.core.connection.v1.Version versions = 3; */
        for (let i = 0; i < message.versions.length; i++)
            Version.internalBinaryWrite(message.versions[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* ibc.core.connection.v1.State state = 4; */
        if (message.state !== 0)
            writer.tag(4, WireType.Varint).int32(message.state);
        /* ibc.core.connection.v1.Counterparty counterparty = 5; */
        if (message.counterparty)
            Counterparty.internalBinaryWrite(message.counterparty, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* uint64 delay_period = 6; */
        if (message.delayPeriod !== "0")
            writer.tag(6, WireType.Varint).uint64(message.delayPeriod);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.core.connection.v1.IdentifiedConnection
 */
export const IdentifiedConnection = new IdentifiedConnection$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Counterparty$Type extends MessageType {
    constructor() {
        super("ibc.core.connection.v1.Counterparty", [
            { no: 1, name: "client_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"client_id\"" } },
            { no: 2, name: "connection_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"connection_id\"" } },
            { no: 3, name: "prefix", kind: "message", T: () => MerklePrefix, options: { "gogoproto.nullable": false } }
        ], { "gogoproto.goproto_getters": false });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.clientId = "";
        message.connectionId = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string client_id */ 1:
                    message.clientId = reader.string();
                    break;
                case /* string connection_id */ 2:
                    message.connectionId = reader.string();
                    break;
                case /* ibc.core.commitment.v1.MerklePrefix prefix */ 3:
                    message.prefix = MerklePrefix.internalBinaryRead(reader, reader.uint32(), options, message.prefix);
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
        /* string client_id = 1; */
        if (message.clientId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.clientId);
        /* string connection_id = 2; */
        if (message.connectionId !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.connectionId);
        /* ibc.core.commitment.v1.MerklePrefix prefix = 3; */
        if (message.prefix)
            MerklePrefix.internalBinaryWrite(message.prefix, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.core.connection.v1.Counterparty
 */
export const Counterparty = new Counterparty$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientPaths$Type extends MessageType {
    constructor() {
        super("ibc.core.connection.v1.ClientPaths", [
            { no: 1, name: "paths", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.paths = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string paths */ 1:
                    message.paths.push(reader.string());
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
        /* repeated string paths = 1; */
        for (let i = 0; i < message.paths.length; i++)
            writer.tag(1, WireType.LengthDelimited).string(message.paths[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.core.connection.v1.ClientPaths
 */
export const ClientPaths = new ClientPaths$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ConnectionPaths$Type extends MessageType {
    constructor() {
        super("ibc.core.connection.v1.ConnectionPaths", [
            { no: 1, name: "client_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"client_id\"" } },
            { no: 2, name: "paths", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.clientId = "";
        message.paths = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string client_id */ 1:
                    message.clientId = reader.string();
                    break;
                case /* repeated string paths */ 2:
                    message.paths.push(reader.string());
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
        /* string client_id = 1; */
        if (message.clientId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.clientId);
        /* repeated string paths = 2; */
        for (let i = 0; i < message.paths.length; i++)
            writer.tag(2, WireType.LengthDelimited).string(message.paths[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.core.connection.v1.ConnectionPaths
 */
export const ConnectionPaths = new ConnectionPaths$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Version$Type extends MessageType {
    constructor() {
        super("ibc.core.connection.v1.Version", [
            { no: 1, name: "identifier", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "features", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ], { "gogoproto.goproto_getters": false });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.identifier = "";
        message.features = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string identifier */ 1:
                    message.identifier = reader.string();
                    break;
                case /* repeated string features */ 2:
                    message.features.push(reader.string());
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
        /* string identifier = 1; */
        if (message.identifier !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.identifier);
        /* repeated string features = 2; */
        for (let i = 0; i < message.features.length; i++)
            writer.tag(2, WireType.LengthDelimited).string(message.features[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.core.connection.v1.Version
 */
export const Version = new Version$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Params$Type extends MessageType {
    constructor() {
        super("ibc.core.connection.v1.Params", [
            { no: 1, name: "max_expected_time_per_block", kind: "scalar", T: 4 /*ScalarType.UINT64*/, options: { "gogoproto.moretags": "yaml:\"max_expected_time_per_block\"" } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.maxExpectedTimePerBlock = "0";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 max_expected_time_per_block */ 1:
                    message.maxExpectedTimePerBlock = reader.uint64().toString();
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
        /* uint64 max_expected_time_per_block = 1; */
        if (message.maxExpectedTimePerBlock !== "0")
            writer.tag(1, WireType.Varint).uint64(message.maxExpectedTimePerBlock);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.core.connection.v1.Params
 */
export const Params = new Params$Type();
