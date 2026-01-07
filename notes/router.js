import express from 'express'
import { NotesService } from './NotesService.js'

export const routerNotes = express()

routerNotes.post("/",async(req,res)=>{
   const body = req.body
   const token = req.headers.token
   const result = await NotesService.checkWrite(token,body)
   for(let key in result){
        if(key === "false"){
            res.status(400)
            res.json(result)
        }else{
            res.json(result)
        }
    }
})

routerNotes.get("/",async(req,res)=>{
    const token = req.headers.token
    const result = await NotesService.getAllByToken(token)
    if(result[0]){
        res.json(result)
    }else{
        res.status(404)
        res.json({"false":"not information"})
    }
})

routerNotes.put("/:id",async(req,res)=>{
    const id = req.params
    await NotesService.updateById(id,req.body.content)
    res.json({"true":"update"})
})

routerNotes.delete("/:id",async(req,res)=>{
    const id = req.params
    await NotesService.deletById(id)
    res.json({"true":"remove"})
})