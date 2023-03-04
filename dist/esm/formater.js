import crypto from "crypto-js";
// You can define your own formats in order to be compatible with other crypto implementations. A format is an object with two methods— stringify and parse—that converts between CipherParams objects and ciphertext strings.
// Here's how you might write a JSON formatter:
export var JsonFormatter = {
    stringify: function (cipherParams) {
        // create json object with ciphertext
        var jsonObj = { ct: cipherParams.ciphertext.toString(crypto.enc.Base64) };
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
        var cipherParams = crypto.lib.CipherParams.create({
            ciphertext: crypto.enc.Base64.parse(jsonObj.ct)
        });
        // optionally extract iv or salt
        if (jsonObj.iv) {
            cipherParams.iv = crypto.enc.Hex.parse(jsonObj.iv);
        }
        if (jsonObj.s) {
            cipherParams.salt = crypto.enc.Hex.parse(jsonObj.s);
        }
        return cipherParams;
    }
};
export default JsonFormatter;
