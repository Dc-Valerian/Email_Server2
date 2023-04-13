import express, { Application } from "express"
import cors from "cors"
import ejs from "ejs"


export const mainApp = (app:Application)=>{
    app.use(express.json()).use(cors()).set("view engine")
}