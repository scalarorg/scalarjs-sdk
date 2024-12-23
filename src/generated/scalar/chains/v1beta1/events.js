// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "scalar/chains/v1beta1/events.proto" (package "scalar.chains.v1beta1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf enum scalar.chains.v1beta1.Event.Status
 */
export var Event_Status;
(function (Event_Status) {
    /**
     * @generated from protobuf enum value: STATUS_UNSPECIFIED = 0;
     */
    Event_Status[Event_Status["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from protobuf enum value: STATUS_CONFIRMED = 1;
     */
    Event_Status[Event_Status["CONFIRMED"] = 1] = "CONFIRMED";
    /**
     * @generated from protobuf enum value: STATUS_COMPLETED = 2;
     */
    Event_Status[Event_Status["COMPLETED"] = 2] = "COMPLETED";
    /**
     * @generated from protobuf enum value: STATUS_FAILED = 3;
     */
    Event_Status[Event_Status["FAILED"] = 3] = "FAILED";
})(Event_Status || (Event_Status = {}));
// @generated message type with reflection information, may provide speed optimized methods
class VoteEvents$Type extends MessageType {
    constructor() {
        super("scalar.chains.v1beta1.VoteEvents", [
            { no: 1, name: "chain", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.casttype": "github.com/scalarorg/scalar-core/x/nexus/exported.ChainName" } },
            { no: 2, name: "events", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Event, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.chain = "";
        message.events = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string chain */ 1:
                    message.chain = reader.string();
                    break;
                case /* repeated scalar.chains.v1beta1.Event events */ 2:
                    message.events.push(Event.internalBinaryRead(reader, reader.uint32(), options));
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
        /* string chain = 1; */
        if (message.chain !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.chain);
        /* repeated scalar.chains.v1beta1.Event events = 2; */
        for (let i = 0; i < message.events.length; i++)
            Event.internalBinaryWrite(message.events[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.chains.v1beta1.VoteEvents
 */
export const VoteEvents = new VoteEvents$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Event$Type extends MessageType {
    constructor() {
        super("scalar.chains.v1beta1.Event", [
            { no: 1, name: "chain", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.casttype": "github.com/scalarorg/scalar-core/x/nexus/exported.ChainName" } },
            { no: 2, name: "tx_id", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "Hash", "gogoproto.customname": "TxID" } },
            { no: 3, name: "status", kind: "enum", T: () => ["scalar.chains.v1beta1.Event.Status", Event_Status, "STATUS_"] },
            { no: 4, name: "index", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 5, name: "confirmation_event", kind: "message", oneof: "event", T: () => ConfirmationEvent }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.chain = "";
        message.txId = new Uint8Array(0);
        message.status = 0;
        message.index = "0";
        message.event = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string chain */ 1:
                    message.chain = reader.string();
                    break;
                case /* bytes tx_id */ 2:
                    message.txId = reader.bytes();
                    break;
                case /* scalar.chains.v1beta1.Event.Status status */ 3:
                    message.status = reader.int32();
                    break;
                case /* uint64 index */ 4:
                    message.index = reader.uint64().toString();
                    break;
                case /* scalar.chains.v1beta1.ConfirmationEvent confirmation_event */ 5:
                    message.event = {
                        oneofKind: "confirmationEvent",
                        confirmationEvent: ConfirmationEvent.internalBinaryRead(reader, reader.uint32(), options, message.event.confirmationEvent)
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
        /* string chain = 1; */
        if (message.chain !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.chain);
        /* bytes tx_id = 2; */
        if (message.txId.length)
            writer.tag(2, WireType.LengthDelimited).bytes(message.txId);
        /* scalar.chains.v1beta1.Event.Status status = 3; */
        if (message.status !== 0)
            writer.tag(3, WireType.Varint).int32(message.status);
        /* uint64 index = 4; */
        if (message.index !== "0")
            writer.tag(4, WireType.Varint).uint64(message.index);
        /* scalar.chains.v1beta1.ConfirmationEvent confirmation_event = 5; */
        if (message.event.oneofKind === "confirmationEvent")
            ConfirmationEvent.internalBinaryWrite(message.event.confirmationEvent, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.chains.v1beta1.Event
 */
export const Event = new Event$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ConfirmationEvent$Type extends MessageType {
    constructor() {
        super("scalar.chains.v1beta1.ConfirmationEvent", [
            { no: 1, name: "sender", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "destination_chain", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.casttype": "github.com/scalarorg/scalar-core/x/nexus/exported.ChainName" } },
            { no: 3, name: "amount", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 4, name: "asset", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "payload_hash", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "Hash" } },
            { no: 8, name: "destination_contract_address", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "Address" } },
            { no: 9, name: "destination_recipient_address", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "Address" } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.sender = "";
        message.destinationChain = "";
        message.amount = "0";
        message.asset = "";
        message.payloadHash = new Uint8Array(0);
        message.destinationContractAddress = new Uint8Array(0);
        message.destinationRecipientAddress = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string sender */ 1:
                    message.sender = reader.string();
                    break;
                case /* string destination_chain */ 2:
                    message.destinationChain = reader.string();
                    break;
                case /* uint64 amount */ 3:
                    message.amount = reader.uint64().toString();
                    break;
                case /* string asset */ 4:
                    message.asset = reader.string();
                    break;
                case /* bytes payload_hash */ 5:
                    message.payloadHash = reader.bytes();
                    break;
                case /* bytes destination_contract_address */ 8:
                    message.destinationContractAddress = reader.bytes();
                    break;
                case /* bytes destination_recipient_address */ 9:
                    message.destinationRecipientAddress = reader.bytes();
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
        /* string sender = 1; */
        if (message.sender !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.sender);
        /* string destination_chain = 2; */
        if (message.destinationChain !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.destinationChain);
        /* uint64 amount = 3; */
        if (message.amount !== "0")
            writer.tag(3, WireType.Varint).uint64(message.amount);
        /* string asset = 4; */
        if (message.asset !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.asset);
        /* bytes payload_hash = 5; */
        if (message.payloadHash.length)
            writer.tag(5, WireType.LengthDelimited).bytes(message.payloadHash);
        /* bytes destination_contract_address = 8; */
        if (message.destinationContractAddress.length)
            writer.tag(8, WireType.LengthDelimited).bytes(message.destinationContractAddress);
        /* bytes destination_recipient_address = 9; */
        if (message.destinationRecipientAddress.length)
            writer.tag(9, WireType.LengthDelimited).bytes(message.destinationRecipientAddress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.chains.v1beta1.ConfirmationEvent
 */
export const ConfirmationEvent = new ConfirmationEvent$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NoEventsConfirmed$Type extends MessageType {
    constructor() {
        super("scalar.chains.v1beta1.NoEventsConfirmed", [
            { no: 1, name: "tx_id", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "Hash", "gogoproto.customname": "TxID" } },
            { no: 2, name: "chain", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.casttype": "github.com/scalarorg/scalar-core/x/nexus/exported.ChainName" } },
            { no: 3, name: "poll_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/scalarorg/scalar-core/x/vote/exported.PollID", "gogoproto.customname": "PollID" } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.txId = new Uint8Array(0);
        message.chain = "";
        message.pollId = "0";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes tx_id */ 1:
                    message.txId = reader.bytes();
                    break;
                case /* string chain */ 2:
                    message.chain = reader.string();
                    break;
                case /* uint64 poll_id */ 3:
                    message.pollId = reader.uint64().toString();
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
        /* bytes tx_id = 1; */
        if (message.txId.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.txId);
        /* string chain = 2; */
        if (message.chain !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.chain);
        /* uint64 poll_id = 3; */
        if (message.pollId !== "0")
            writer.tag(3, WireType.Varint).uint64(message.pollId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.chains.v1beta1.NoEventsConfirmed
 */
export const NoEventsConfirmed = new NoEventsConfirmed$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChainEventConfirmed$Type extends MessageType {
    constructor() {
        super("scalar.chains.v1beta1.ChainEventConfirmed", [
            { no: 1, name: "chain", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.casttype": "github.com/scalarorg/scalar-core/x/nexus/exported.ChainName" } },
            { no: 2, name: "event_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.customname": "EventID", "gogoproto.casttype": "EventID" } },
            { no: 3, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.chain = "";
        message.eventId = "";
        message.type = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string chain */ 1:
                    message.chain = reader.string();
                    break;
                case /* string event_id */ 2:
                    message.eventId = reader.string();
                    break;
                case /* string type */ 3:
                    message.type = reader.string();
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
        /* string chain = 1; */
        if (message.chain !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.chain);
        /* string event_id = 2; */
        if (message.eventId !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.eventId);
        /* string type = 3; */
        if (message.type !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.type);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.chains.v1beta1.ChainEventConfirmed
 */
export const ChainEventConfirmed = new ChainEventConfirmed$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChainEventCompleted$Type extends MessageType {
    constructor() {
        super("scalar.chains.v1beta1.ChainEventCompleted", [
            { no: 1, name: "chain", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.casttype": "github.com/scalarorg/scalar-core/x/nexus/exported.ChainName" } },
            { no: 2, name: "event_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.customname": "EventID", "gogoproto.casttype": "EventID" } },
            { no: 3, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.chain = "";
        message.eventId = "";
        message.type = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string chain */ 1:
                    message.chain = reader.string();
                    break;
                case /* string event_id */ 2:
                    message.eventId = reader.string();
                    break;
                case /* string type */ 3:
                    message.type = reader.string();
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
        /* string chain = 1; */
        if (message.chain !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.chain);
        /* string event_id = 2; */
        if (message.eventId !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.eventId);
        /* string type = 3; */
        if (message.type !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.type);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.chains.v1beta1.ChainEventCompleted
 */
export const ChainEventCompleted = new ChainEventCompleted$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChainEventFailed$Type extends MessageType {
    constructor() {
        super("scalar.chains.v1beta1.ChainEventFailed", [
            { no: 1, name: "chain", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.casttype": "github.com/scalarorg/scalar-core/x/nexus/exported.ChainName" } },
            { no: 2, name: "event_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.customname": "EventID", "gogoproto.casttype": "EventID" } },
            { no: 3, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.chain = "";
        message.eventId = "";
        message.type = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string chain */ 1:
                    message.chain = reader.string();
                    break;
                case /* string event_id */ 2:
                    message.eventId = reader.string();
                    break;
                case /* string type */ 3:
                    message.type = reader.string();
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
        /* string chain = 1; */
        if (message.chain !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.chain);
        /* string event_id = 2; */
        if (message.eventId !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.eventId);
        /* string type = 3; */
        if (message.type !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.type);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.chains.v1beta1.ChainEventFailed
 */
export const ChainEventFailed = new ChainEventFailed$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChainEventRetryFailed$Type extends MessageType {
    constructor() {
        super("scalar.chains.v1beta1.ChainEventRetryFailed", [
            { no: 1, name: "chain", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.casttype": "github.com/scalarorg/scalar-core/x/nexus/exported.ChainName" } },
            { no: 2, name: "event_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.customname": "EventID", "gogoproto.casttype": "EventID" } },
            { no: 3, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.chain = "";
        message.eventId = "";
        message.type = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string chain */ 1:
                    message.chain = reader.string();
                    break;
                case /* string event_id */ 2:
                    message.eventId = reader.string();
                    break;
                case /* string type */ 3:
                    message.type = reader.string();
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
        /* string chain = 1; */
        if (message.chain !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.chain);
        /* string event_id = 2; */
        if (message.eventId !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.eventId);
        /* string type = 3; */
        if (message.type !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.type);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.chains.v1beta1.ChainEventRetryFailed
 */
export const ChainEventRetryFailed = new ChainEventRetryFailed$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DestCallApproved$Type extends MessageType {
    constructor() {
        super("scalar.chains.v1beta1.DestCallApproved", [
            { no: 1, name: "chain", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.casttype": "github.com/scalarorg/scalar-core/x/nexus/exported.ChainName" } },
            { no: 2, name: "event_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.customname": "EventID", "gogoproto.casttype": "EventID" } },
            { no: 3, name: "command_id", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "CommandID", "gogoproto.customname": "CommandID" } },
            { no: 4, name: "sender", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "destination_chain", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.casttype": "github.com/scalarorg/scalar-core/x/nexus/exported.ChainName" } },
            { no: 6, name: "contract_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "payload_hash", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "Hash" } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.chain = "";
        message.eventId = "";
        message.commandId = new Uint8Array(0);
        message.sender = "";
        message.destinationChain = "";
        message.contractAddress = "";
        message.payloadHash = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string chain */ 1:
                    message.chain = reader.string();
                    break;
                case /* string event_id */ 2:
                    message.eventId = reader.string();
                    break;
                case /* bytes command_id */ 3:
                    message.commandId = reader.bytes();
                    break;
                case /* string sender */ 4:
                    message.sender = reader.string();
                    break;
                case /* string destination_chain */ 5:
                    message.destinationChain = reader.string();
                    break;
                case /* string contract_address */ 6:
                    message.contractAddress = reader.string();
                    break;
                case /* bytes payload_hash */ 7:
                    message.payloadHash = reader.bytes();
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
        /* string chain = 1; */
        if (message.chain !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.chain);
        /* string event_id = 2; */
        if (message.eventId !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.eventId);
        /* bytes command_id = 3; */
        if (message.commandId.length)
            writer.tag(3, WireType.LengthDelimited).bytes(message.commandId);
        /* string sender = 4; */
        if (message.sender !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.sender);
        /* string destination_chain = 5; */
        if (message.destinationChain !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.destinationChain);
        /* string contract_address = 6; */
        if (message.contractAddress !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.contractAddress);
        /* bytes payload_hash = 7; */
        if (message.payloadHash.length)
            writer.tag(7, WireType.LengthDelimited).bytes(message.payloadHash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.chains.v1beta1.DestCallApproved
 */
export const DestCallApproved = new DestCallApproved$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DestCallFailed$Type extends MessageType {
    constructor() {
        super("scalar.chains.v1beta1.DestCallFailed", [
            { no: 1, name: "chain", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.casttype": "github.com/scalarorg/scalar-core/x/nexus/exported.ChainName" } },
            { no: 2, name: "message_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.customname": "MessageID" } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.chain = "";
        message.messageId = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string chain */ 1:
                    message.chain = reader.string();
                    break;
                case /* string message_id */ 2:
                    message.messageId = reader.string();
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
        /* string chain = 1; */
        if (message.chain !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.chain);
        /* string message_id = 2; */
        if (message.messageId !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.messageId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message scalar.chains.v1beta1.DestCallFailed
 */
export const DestCallFailed = new DestCallFailed$Type();
