import express, { Application,Request,Response } from "express"
import cors from "cors"
import ejs from "ejs"
import mongoose from "mongoose"

const data={
    name:"Valerian",
    matID:33445,
    color:"red"
}

export const mainApp = (app:Application)=>{
    app.
    use(express.json()).use(cors()).set("view engine","ejs").use(express.static("public")).use(express.static(`${__dirname} ./public/css`)).use(express.static(`${__dirname} ./public/asset`))

    app.get("/view",(req:Request,res:Response)=>{
res.render("index",{data})
    })
    app.get("/",(req:Request,res:Response)=>{
res.json({
    message:"Done"
})
    })
}