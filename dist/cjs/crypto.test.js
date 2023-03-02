"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_js_1 = __importDefault(require("./crypto.js"));
const { parse, stringify } = JSON;
const samplePassword = "1";
const message = " HELLO WAORLD IN CAPITAL";
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        var encrypted = yield crypto_js_1.default.encrypt(message, samplePassword);
        yield console.log("success incrypt message", encrypted);
        yield console.log("in object", parse(encrypted));
        const decrypted = crypto_js_1.default.decrypt(encrypted, samplePassword);
        yield console.log(decrypted);
    });
}
test();
