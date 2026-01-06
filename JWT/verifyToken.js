import JWT from 'jsonwebtoken'
import 'dotenv/config'
import { json } from 'express'

export function verifyToken(token){
    let result
    JWT.verify(token,process.env.JWT_SECRET,async(err,decodd)=>{
        if(err){
           result = JSON.stringify(err)
        }else{
        result = decodd
        }
    })
    return result
}

