import mongoose from "mongoose";

const connect = async() => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Connected to MONDODB")

    }catch(err){
        console.error("ERROR connecting to mongoDB",err.message);
    }
}

export default connect;