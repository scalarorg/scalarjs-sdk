// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "cosmos/upgrade/v1beta1/upgrade.proto" (package "cosmos.upgrade.v1beta1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
// @generated message type with reflection information, may provide speed optimized methods
class Plan$Type extends MessageType {
    constructor() {
        super("cosmos.upgrade.v1beta1.Plan", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "time", kind: "message", T: () => Timestamp, options: { "gogoproto.nullable": false, "gogoproto.stdtime": true } },
            { no: 3, name: "height", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 4, name: "info", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "upgraded_client_state", kind: "message", T: () => Any, options: { "gogoproto.moretags": "yaml:\"upgraded_client_state\"" } }
        ], { "gogoproto.goproto_stringer": false, "gogoproto.equal": true });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.name = "";
        message.height = "0";
        message.info = "";
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
                case /* google.protobuf.Timestamp time = 2 [deprecated = true];*/ 2:
                    message.time = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.time);
                    break;
                case /* int64 height */ 3:
                    message.height = reader.int64().toString();
                    break;
                case /* string info */ 4:
                    message.info = reader.string();
                    break;
                case /* google.protobuf.Any upgraded_client_state = 5 [deprecated = true];*/ 5:
                    message.upgradedClientState = Any.internalBinaryRead(reader, reader.uint32(), options, message.upgradedClientState);
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
        /* google.protobuf.Timestamp time = 2 [deprecated = true]; */
        if (message.time)
            Timestamp.internalBinaryWrite(message.time, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* int64 height = 3; */
        if (message.height !== "0")
            writer.tag(3, WireType.Varint).int64(message.height);
        /* string info = 4; */
        if (message.info !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.info);
        /* google.protobuf.Any upgraded_client_state = 5 [deprecated = true]; */
        if (message.upgradedClientState)
            Any.internalBinaryWrite(message.upgradedClientState, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.upgrade.v1beta1.Plan
 */
export const Plan = new Plan$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SoftwareUpgradeProposal$Type extends MessageType {
    constructor() {
        super("cosmos.upgrade.v1beta1.SoftwareUpgradeProposal", [
            { no: 1, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "plan", kind: "message", T: () => Plan, options: { "gogoproto.nullable": false } }
        ], { "gogoproto.goproto_stringer": false, "gogoproto.equal": true });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.title = "";
        message.description = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string title */ 1:
                    message.title = reader.string();
                    break;
                case /* string description */ 2:
                    message.description = reader.string();
                    break;
                case /* cosmos.upgrade.v1beta1.Plan plan */ 3:
                    message.plan = Plan.internalBinaryRead(reader, reader.uint32(), options, message.plan);
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
        /* string title = 1; */
        if (message.title !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.title);
        /* string description = 2; */
        if (message.description !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.description);
        /* cosmos.upgrade.v1beta1.Plan plan = 3; */
        if (message.plan)
            Plan.internalBinaryWrite(message.plan, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.upgrade.v1beta1.SoftwareUpgradeProposal
 */
export const SoftwareUpgradeProposal = new SoftwareUpgradeProposal$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CancelSoftwareUpgradeProposal$Type extends MessageType {
    constructor() {
        super("cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal", [
            { no: 1, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ], { "gogoproto.goproto_stringer": false, "gogoproto.equal": true });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.title = "";
        message.description = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string title */ 1:
                    message.title = reader.string();
                    break;
                case /* string description */ 2:
                    message.description = reader.string();
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
        /* string title = 1; */
        if (message.title !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.title);
        /* string description = 2; */
        if (message.description !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.description);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal
 */
export const CancelSoftwareUpgradeProposal = new CancelSoftwareUpgradeProposal$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ModuleVersion$Type extends MessageType {
    constructor() {
        super("cosmos.upgrade.v1beta1.ModuleVersion", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "version", kind: "scalar", T: 4 /*ScalarType.UINT64*/ }
        ], { "gogoproto.goproto_stringer": true, "gogoproto.equal": true });
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.name = "";
        message.version = "0";
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
                case /* uint64 version */ 2:
                    message.version = reader.uint64().toString();
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
        /* uint64 version = 2; */
        if (message.version !== "0")
            writer.tag(2, WireType.Varint).uint64(message.version);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.upgrade.v1beta1.ModuleVersion
 */
export const ModuleVersion = new ModuleVersion$Type();