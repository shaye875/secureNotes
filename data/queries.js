export async function insertOne(collection,user){
   const result = await collection.insertOne(user)
   const data = result.insertedId
   return data
}

export async function selectOneByUserName(collection,value){
    const result = await collection.findOne({"username":value})
    return result
}

export async function selectOneByPassword(collection,value){
    const result = await collection.findOne({"password":value})
    return result
}

export async function updateByUserName(collection,username){
    const result = await collection.updateOne({"username":username},{$inc:{"encryptedMessagesCount":1}})
    return result
} 