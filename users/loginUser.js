import { isInformation, isTypes } from "../utils/validation.js"
import { verifyPassword } from "../dcript/has.js"
import { getToken } from "../JWT/getToken.js"
import { UsersDal } from "../data/UsersDal.js"

function checkValid(user) {
    const keys = ["username", "password"]
    const ifInformation = isInformation(keys, user)
    if (ifInformation === false) {
        return { "false": "missing information" }
    }
    const objTypes = { "username": "", "password": "" }
    const ifTypes = isTypes(objTypes, user)
    if (ifTypes === false) {
        return { "false": "one or more of types is wrong" }
    }
    return true
}

export async function checkLogin(user) {
    const ifValid = checkValid(user)
    if (typeof (ifValid) === 'object') {
        return ifValid
    }
    const result = await UsersDal.selectOneByUserName(user.username)
    if (!result) {
        return { "false": "the username not exists" }
    }
    const resultPassword = await verifyPassword(user.password,result.password)
    if(!resultPassword){
        return {"false":"passworng wrong"}
    }
    const id = result._id
    const token = getToken(id,result.username)
    return {token:token}
}