import { insertOne,selectOneByPassword,selectOneByUserName,selectAllByOwnerId,updateById,deleteById } from "./queries.js"
import { getColllectionNotes } from "./users.js"

export const collection = await getColllectionNotes()

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

   static async updateById(id,value){
    const result = await updateById(collection,id,value)
    return result
   }

   static async selectAllByOwnerId(ownerId){
      const result = await selectAllByOwnerId(collection,ownerId)
      return result
   }

   static async deletById(id){
      await deleteById(collection,id)
   }
}
