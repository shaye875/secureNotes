import { checkToken,checkWrite } from "./postNote.js"
import { NotesDal } from "../data/NotesDal.js"
import { getAllByToken } from "./getNote.js"

export class NotesService{
    static checkToken(req,res,next){
        const result = checkToken(req,res,next)
        return result
    }

    static checkWrite(token,note){
        const result = checkWrite(token,note)
        return result
    }

    static async getAllByToken(token){
        const result = await getAllByToken(token)
        return result
    }

    static async updateById(id,value){
       await NotesDal.updateById(id,value)
    }

    static async deletById(id){
        await NotesDal.deletById(id)
    }
}