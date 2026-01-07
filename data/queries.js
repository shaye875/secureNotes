import { ObjectId } from "mongodb"

export async function insertOne(collection,user){
   const result = await collection.insertOne(user)
   const data = result.insertedId
   return data
}

export async function selectOneByUserName(collection,value){
    const result = await collection.findOne({"username":value})
    return result
}

export async function selectOneId(collection,id){
    const result = await collection.findOne({_id:new ObjectId(id)})
    return result
}

export async function selectAllByOwnerId(collection,ownerid){
    const result = await collection.find({ownerId:ownerid}).toArray()
    return result
}

export async function selectOneByPassword(collection,value){
    const result = await collection.findOne({"password":value})
    return result
}

export async function updateById(collection,id,value){
    const result = await collection.updateOne({_id:new ObjectId(id)},{$set:{content:value}})
    return result
} 

export async function deleteById(collection,id){
    await collection.deleteOne({_id:new ObjectId(id)})
}