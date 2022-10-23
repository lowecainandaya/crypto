"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formater_js_1 = __importDefault(require("./formater.js"));
const crypto_js_1 = __importDefault(require("crypto-js"));
const onlyif_1 = require("@validitor/main/onlyif");
const { stringify, parse } = JSON;
const aes = crypto_js_1.default.AES;
class _Crypto {
    constructor() { }
    encrypt(data, password) {
        var __data;
        // everthing that is not an object conver to string
        (0, onlyif_1.onlyIf)(typeof data !== "object").execute(() => {
            __data = data.toString();
        });
        // stringify if data is an objecy literal 
        (0, onlyif_1.onlyIf)(typeof data === "object").execute(() => {
            __data = stringify(data);
        });
        // incrypt
        const __encrypt = aes.encrypt(data, password, { format: formater_js_1.default });
        // return JSON DATA 
        return __encrypt.toString();
    }
    decrypt(encrypted, password) {
        const __data = aes.decrypt(encrypted, password, { format: formater_js_1.default });
        return __data.toString(crypto_js_1.default.enc.Utf8);
    }
}
const __return = new _Crypto();
exports.default = __return;
