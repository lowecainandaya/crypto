"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonFormatter = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
// You can define your own formats in order to be compatible with other crypto implementations. A format is an object with two methods— stringify and parse—that converts between CipherParams objects and ciphertext strings.
// Here's how you might write a JSON formatter:
exports.JsonFormatter = {
    stringify: function (cipherParams) {
        // create json object with ciphertext
        var jsonObj = { ct: cipherParams.ciphertext.toString(crypto_js_1.default.enc.Base64) };
        // optionally add iv or salt
        if (cipherParams.iv) {
            jsonObj.iv = cipherParams.iv.toString();
        }
        if (cipherParams.salt) {
            jsonObj.s = cipherParams.salt.toString();
        }
        // stringify json object
        return JSON.stringify(jsonObj);
    },
    parse: function (jsonStr) {
        // parse json string
        var jsonObj = JSON.parse(jsonStr);
        // extract ciphertext from json object, and create cipher params object
        var cipherParams = crypto_js_1.default.lib.CipherParams.create({
            ciphertext: crypto_js_1.default.enc.Base64.parse(jsonObj.ct)
        });
        // optionally extract iv or salt
        if (jsonObj.iv) {
            cipherParams.iv = crypto_js_1.default.enc.Hex.parse(jsonObj.iv);
        }
        if (jsonObj.s) {
            cipherParams.salt = crypto_js_1.default.enc.Hex.parse(jsonObj.s);
        }
        return cipherParams;
    }
};
exports.default = exports.JsonFormatter;
