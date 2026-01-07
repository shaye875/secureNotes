import { isInformation,isTypes } from "../utils/validation.js"
import { verifyToken,getIdUsernameByToken } from "../JWT/verifyToken.js"
import { NotesDal } from "../data/NotesDal.js"

async function checkValid(token,note){

   const keys = ["ownerId","title","content"]
   const ifInformation = isInformation(keys,note)
   if(ifInformation === false){
    return {"false":"missing information"}
   }
   const objTypes = {"ownerId":"","title":"","content":""}
   const ifTypes = isTypes(objTypes,note)
   if(ifTypes === false){
    return {"false":"one or more of types is wrong"}
   }

   const {id} = getIdUsernameByToken(token)
   if(id !== note.ownerId){
    return {"false":"owner id not your token"}
   }
}

export function checkToken(req,res,next){
    if(!req.headers.token){
        res.status(401)
        return res.json({"false":"missing token"})
    }
    const token = req.headers.token
    let bool = false
    const result = verifyToken(token)
    for(let key in result){
        if(key === "id"){
            bool = true
            next()
        }
    }
    if(bool === false){
    res.status(401)
    return res.json({"false":"token not good"})
    }
}

export async function checkWrite(token,note){
    const ifValid = await checkValid(token,note)
    if(typeof(ifValid) === 'object'){
        return ifValid
    }
    const result = await NotesDal.insertOne({
        ownerId:note.ownerId,
        title:note.title,
        content:note.content,
        createdAt:new Date()
    })
    return {"true":result}
}