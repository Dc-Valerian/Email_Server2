import express, { Application,Request,Response } from "express"
import cors from "cors"
import ejs from "ejs"


export const mainApp = (app:Application)=>{
    app.use(express.json()).use(cors()).set("view engine","ejs").use(express.static("public")).use(express.static(`${__dirname} public/css`)).use(express.static(`${__dirname} public/asset`))

    app.get("/view",(req:Request,res:Response)=>{
res.render("index")
    })
    app.get("/",(req:Request,res:Response)=>{
res.json({
    message:"Done"
})
    })
}