import { Usermodal } from "../model/usermodel.js"
export const getdata=async(req,res)=>{
    
}

export const updatedata=async(req,res)=>{
    //1st tarika
    const User=new Usermodal({
        name:"aj",
        email:"aj@gmail.com",
        password:"ajfudda@123"
    });

    User.save();

    //2nd tarika

    await Usermodal.create({
         name:"ajj",
        email:"ajj@gmail.com",
        password:"ajjfudda@123"
    })
    res.status(200).json({message:"Aspajay kispi bhuspund"})
}
