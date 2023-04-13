import express,{Application} from "express"
import { mainApp } from "./mainApp";
import mongoose from "mongoose"
import { dbConfig } from "./config/db";


const app:Application = express()

mainApp(app)

const server = app.listen(5000,()=>{
    console.log(" Valerian server is ready to rock");
})

dbConfig()

process.on("uncaughtException",(err:Error)=>{
    console.log("shutting down");
    console.log(err);
    process.exit(1)
})
process.on("unhandledRejection",(reason:Error)=>{
    console.log("shutting down :unhandledRejection");
    console.log(reason);
    process.exit(1)
})