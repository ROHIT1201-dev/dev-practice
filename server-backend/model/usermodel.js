import mongoose from "mongoose";

const User=new mongoose.Schema({
    name:{
        type:String,
    },
    email: String,
    password:String,
})

export const Usermodal=mongoose.model("User",User,"User");
