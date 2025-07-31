import mongoose from "mongoose"

async function connectDb(params) {
    try {
        await mongoose.connect("mongodb+srv://rohit250310:cQW4C5G6qPGDeky@cluster0.gs0unrv.mongodb.net/practice-server")
        console.log("mongoDb connection")
    } catch (error) {
        console.log(error)
    }
}

export default connectDb;