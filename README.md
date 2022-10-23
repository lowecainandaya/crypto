# @fntools/crypto 
A simple library for encrypting and decrypting data which resolves into JSON where is ready to be transfer to servers and savable to any 
browser based storage it is soon to have its bundled file to be use directly in the browser but use [webpack](https://www.npmjs.com/package/webpack)
### install 
### NPM
```bash 
$ npm install @fntools/crypto 
```
### Usage 
```javascript 
const crypto = require("@validitor/main");
// IN ES6 PROJECTS 
// import crypto from "crypto";
const data = "hello world";

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

/* success incrypt message {"ct":"r+RW++RF4aUhYQxiw5zYdJ5CEb8BRaEOJWNgIclwBgY=","iv":"e400192f0188ec5920d71c73325f6016","s":"4dbffa7513f88684"}
in object {
  ct: 'r+RW++RF4aUhYQxiw5zYdJ5CEb8BRaEOJWNgIclwBgY=',
  iv: 'e400192f0188ec5920d71c73325f6016',
  s: '4dbffa7513f88684'
}

HELLO WAORLD IN CAPITAL
*/
  
```
