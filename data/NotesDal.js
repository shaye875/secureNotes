import { getColllectionUsers,getColllectionNotes } from "./users.js"
import { insertOne,selectOneByPassword,selectOneByUserName,updateByUserName } from "./queries.js"
import { getColllectionNotes } from "./users.js"

const collection = await getColllectionNotes()

export class NotesDal{
   static async getColllectionUsers(){
    const result = await getColllectionUsers()
    return result
   }

   static async getColllectionNotes(){
    const result = await getColllectionNotes()
    return result
   }

   static async insertOne(note){
    const result = insertOne(collection,note)
    return result
   }

   static async selectOneByPassword(value){
    const result = await selectOneByPassword(collection,value)
    return result
   }

   static async selectOneByUserName(value){
    const result = await selectOneByUserName(collection,value)
    return result
   }

   static async updateByUserName(username){
    const result = await updateByUserName(collection,username)
    return result
   }
}
