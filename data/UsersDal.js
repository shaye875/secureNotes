import { getColllectionUsers,getColllectionNotes } from "./users.js"
import { insertOne,selectOneByPassword,selectOneByUserName,selectOneId} from "./queries.js"

const collection = await getColllectionUsers()

export class UsersDal{
   static async getColllectionUsers(){
    const result = await getColllectionUsers()
    return result
   }

   static async getColllectionNotes(){
    const result = await getColllectionNotes()
    return result
   }

   static async insertOne(user){
    const result = insertOne(collection,user)
    return result
   }

   static async selectByid(id){
      const result = await selectOneId(collection,id)
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

