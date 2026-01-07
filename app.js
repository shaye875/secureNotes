import express from 'express'
import { roterUser } from './users/roeter.postUser.js'
import { routerNotes } from './notes/router.js'
import { NotesService } from './notes/NotesService.js'

const app = express()

app.use(express.json())

app.use("/auth",roterUser)

app.use("/notes",NotesService.checkToken,routerNotes)

app.listen(3000,()=>{
    console.log("server run")
    
})