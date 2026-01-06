import express from 'express'
import { roterUser } from './users/roeter.postUser.js'

const app = express()

app.use(express.json())

app.use("/auth",roterUser)

app.listen(3000,()=>{
    console.log("server run");
    
})