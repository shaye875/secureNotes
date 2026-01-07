import JWT from 'jsonwebtoken'
import 'dotenv/config'

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

export function getIdUsernameByToken(token){
    const result = verifyToken(token)
    return {id:result.id,username:result.username}
}

