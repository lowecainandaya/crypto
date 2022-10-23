import crypto from "./crypto.js";
const {parse,stringify} = JSON;
const samplePassword:string  = "1";
const message = " HELLO WAORLD IN CAPITAL";
async function test() {
  var encrypted = await crypto.encrypt(message,samplePassword);
  await console.log("success incrypt message",encrypted);
  await console.log("in object", parse(encrypted))
  const decrypted =  crypto.decrypt(encrypted, samplePassword);
  await console.log(decrypted)
}

test();