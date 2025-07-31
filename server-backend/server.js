import express from "express";
import cors from "cors";
import connectDb from "./config/db.js";
import { updatedata } from "./controllers/controllers.js";
import { router } from "./routes/route.js";

//we have made an object of express
const app=express();
app.use(cors());
app.use(express.json())

app.use('/api',router);
app.use('/api',router);
app.post('/',(req,res)=>{
    try {
        
        console.log(req.body.data);
        res.send("hello");
    } catch (error) {
        console.log(error)
    }
})
connectDb();


app.listen(3000,()=>{
    console.log('server is running ')
})