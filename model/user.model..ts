import mongoose from "mongoose"

interface iUser {
    userNmae:string;
    email:string;
    password:string;
    token:string,
    verified:boolean,
    OTP:string,
    RCNumber:string,

}

interface iUserData extends iUser,mongoose.Document{}

const userModel = new mongoose.Schema({
    userName:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    token:{
        type:String,
    },
    verified:{
        type:String,
    },
    OTP:{
        type:String,
    },
    RCNumber:{
        type:String,
    },
},{timestamps:true},)

export default mongoose.model<iUserData>("users",userModel)