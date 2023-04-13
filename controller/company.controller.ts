import {Request,Response} from "express"
import companyModel from "../model/company.model";

import cryto from "crypto"

export const getCompany = async (req:Request,res:Response)=>{
    try {
        const companies = await companyModel.find()

        res.status(200).json({
            message:"companies",
            data:companies
        })
    } catch (error) {
     console.log(error);
        
    }
}

export const updateCompany = async (req:Request,res:Response)=>{
    try {
        const {id}=  req.params

        const companies = await companyModel.findByIdAndUpdate(id,{},{new:true})

        res.status(200).json({
            message:"companies",
            data:companies
        })
    } catch (error) {
     console.log(error);
        
    }
}

export const createCompany = async (req:Request,res:Response)=>{
    try {
        const {id}=  req.params

        const toke = cryto.randomBytes


        const {email,password,name} = req.body
        const companies = await companyModel.create({
            email,password,name,
            // token,RCNumber,OTP
        })

        res.status(200).json({
            message:"companies",
            data:companies
        })
    } catch (error) {
     console.log(error);
        
    }
}