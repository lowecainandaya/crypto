var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import crypto from "./crypto.js";
const { parse, stringify } = JSON;
const samplePassword = "1";
const message = " HELLO WAORLD IN CAPITAL";
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        var encrypted = yield crypto.encrypt(message, samplePassword);
        yield console.log("success incrypt message", encrypted);
        yield console.log("in object", parse(encrypted));
        const decrypted = crypto.decrypt(encrypted, samplePassword);
        yield console.log(decrypted);
    });
}
test();
