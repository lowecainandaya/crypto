import format from "./formater.js";
import crypto from "crypto-js";
import {onlyIf} from "@validitor/main";
const {stringify,parse} = JSON;
const aes = crypto.AES;

class _Crypto{
  constructor(){}
  encrypt(data:any,password:string){
    var __data;
    // everthing that is not an object conver to string
    onlyIf(typeof data !== "object").execute(() => {
      __data = data.toString();
    });
    
    // stringify if data is an objecy literal 
    onlyIf(typeof data === "object").execute(() => {
      __data  = stringify(data)
    });
    
    
    // incrypt
    const __encrypt = aes.encrypt(data,password, {format : format});
    
    // return JSON DATA 
    return __encrypt.toString();
  }
  decrypt(encrypted:any,password:string){
    
    const __data = aes.decrypt(encrypted,password, {format: format});
    return __data.toString(crypto.enc.Utf8)
  }
}



const __return:any  = new _Crypto()
export default __return;

