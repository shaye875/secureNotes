import { checkLogin } from "./loginUser.js";
import { checkWrite } from "./postUser.js";


export class AuthService{
    static async checkLogin(user){
        const result = await checkLogin(user)
        return result
    }

    static async checkWrite(user){
        const result = await checkWrite(user)
        return result
    }
}