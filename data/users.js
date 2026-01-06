import { MongoClient } from "mongodb"
import 'dotenv/config'

export async function getColllectionUsers(){
    const client = new MongoClient(process.env.URL)
    await client.connect()
    const usersDb = client.db(process.env.DATABASE)
    const collectionUsers = usersDb.collection("users")
    return collectionUsers
}

export async function getColllectionNotes(){
    const client = new MongoClient(process.env.URL)
    await client.connect()
    const usersDb = client.db(process.env.DATABASE)
    const collectionUsers = usersDb.collection("notes")
    return collectionUsers
}

