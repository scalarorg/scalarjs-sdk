// @generated by protobuf-ts 2.9.4 with parameter long_type_string,output_javascript_es2015,generate_dependencies
// @generated from protobuf file "google/protobuf/any.proto" (package "google.protobuf", syntax proto3)
// tslint:disable
//
// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { isJsonObject } from "@protobuf-ts/runtime";
import { typeofJsonValue } from "@protobuf-ts/runtime";
import { jsonWriteOptions } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class Any$Type extends MessageType {
    constructor() {
        super("google.protobuf.Any", [
            { no: 1, name: "type_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "value", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    /**
     * Pack the message into a new `Any`.
     *
     * Uses 'type.googleapis.com/full.type.name' as the type URL.
     */
    pack(message, type) {
        return {
            typeUrl: this.typeNameToUrl(type.typeName), value: type.toBinary(message),
        };
    }
    /**
     * Unpack the message from the `Any`.
     */
    unpack(any, type, options) {
        if (!this.contains(any, type))
            throw new Error("Cannot unpack google.protobuf.Any with typeUrl '" + any.typeUrl + "' as " + type.typeName + ".");
        return type.fromBinary(any.value, options);
    }
    /**
     * Does the given `Any` contain a packed message of the given type?
     */
    contains(any, type) {
        if (!any.typeUrl.length)
            return false;
        let wants = typeof type == "string" ? type : type.typeName;
        let has = this.typeUrlToName(any.typeUrl);
        return wants === has;
    }
    /**
     * Convert the message to canonical JSON value.
     *
     * You have to provide the `typeRegistry` option so that the
     * packed message can be converted to JSON.
     *
     * The `typeRegistry` option is also required to read
     * `google.protobuf.Any` from JSON format.
     */
    internalJsonWrite(any, options) {
        var _a;
        if (any.typeUrl === "")
            return {};
        let typeName = this.typeUrlToName(any.typeUrl);
        let opt = jsonWriteOptions(options);
        let type = (_a = opt.typeRegistry) === null || _a === void 0 ? void 0 : _a.find(t => t.typeName === typeName);
        if (!type)
            throw new globalThis.Error("Unable to convert google.protobuf.Any with typeUrl '" + any.typeUrl + "' to JSON. The specified type " + typeName + " is not available in the type registry.");
        let value = type.fromBinary(any.value, { readUnknownField: false });
        let json = type.internalJsonWrite(value, opt);
        if (typeName.startsWith("google.protobuf.") || !isJsonObject(json))
            json = { value: json };
        json["@type"] = any.typeUrl;
        return json;
    }
    internalJsonRead(json, options, target) {
        var _a;
        if (!isJsonObject(json))
            throw new globalThis.Error("Unable to parse google.protobuf.Any from JSON " + typeofJsonValue(json) + ".");
        if (typeof json["@type"] != "string" || json["@type"] == "")
            return this.create();
        let typeName = this.typeUrlToName(json["@type"]);
        let type = (_a = options === null || options === void 0 ? void 0 : options.typeRegistry) === null || _a === void 0 ? void 0 : _a.find(t => t.typeName == typeName);
        if (!type)
            throw new globalThis.Error("Unable to parse google.protobuf.Any from JSON. The specified type " + typeName + " is not available in the type registry.");
        let value;
        if (typeName.startsWith("google.protobuf.") && json.hasOwnProperty("value"))
            value = type.fromJson(json["value"], options);
        else {
            let copy = Object.assign({}, json);
            delete copy["@type"];
            value = type.fromJson(copy, options);
        }
        if (target === undefined)
            target = this.create();
        target.typeUrl = json["@type"];
        target.value = type.toBinary(value);
        return target;
    }
    typeNameToUrl(name) {
        if (!name.length)
            throw new Error("invalid type name: " + name);
        return "type.googleapis.com/" + name;
    }
    typeUrlToName(url) {
        if (!url.length)
            throw new Error("invalid type url: " + url);
        let slash = url.lastIndexOf("/");
        let name = slash > 0 ? url.substring(slash + 1) : url;
        if (!name.length)
            throw new Error("invalid type url: " + url);
        return name;
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.typeUrl = "";
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
                case /* string type_url */ 1:
                    message.typeUrl = reader.string();
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
        /* string type_url = 1; */
        if (message.typeUrl !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.typeUrl);
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
 * @generated MessageType for protobuf message google.protobuf.Any
 */
export const Any = new Any$Type();
