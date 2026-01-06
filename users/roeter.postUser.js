import express from 'express'
import { ifBudy } from '../utils/midddelware.js'
import { AuthService } from './AuthService.js'

export const roterUser = express()

roterUser.post("/register",ifBudy,async(req,res)=>{
    const body = req.body
    const result = await AuthService.checkWrite(body)
    for(let key in result){
        if(key === "false"){
            res.status(400)
            return res.json(result)
        }else{
            return res.json(result)
        }
    }
})

roterUser.post("/login",ifBudy,async(req,res)=>{
     const body = req.body
    const result = await AuthService.checkLogin(body)
    for(let key in result){
        if(key === "false"){
            res.status(400)
            return res.json(result)
        }else{
            return res.json(result)
        }
    }
})