import { isInformation,isTypes } from "../utils/validation.js"
import { hashPassword } from "../dcript/has.js"
import { UsersDal } from "../data/UsersDal.js"

async function checkValid(user){
   const keys = ["username","password"]
   const ifInformation = isInformation(keys,user)
   if(ifInformation === false){
    return {"false":"missing information"}
   }
   const objTypes = {"username":"","password":""}
   const ifTypes = isTypes(objTypes,user)
   if(ifTypes === false){
    return {"false":"one or more of types is wrong"}
   }
   const result = await UsersDal.selectOneByUserName(user.username)
   if(result){
    return {"false":"the username alredy exists"}
   }
   return true
}

export async function checkWrite(user){
    const ifValid = await checkValid(user)
    if(typeof(ifValid) === 'object'){
        return ifValid
    }
    await UsersDal.insertOne({
        username:user.username,
        password:await hashPassword(user.password)
    })
    return {"true":"seccses"}
}