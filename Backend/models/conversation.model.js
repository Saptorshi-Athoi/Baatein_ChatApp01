import mongoose from "mongoose";

const conversationSchema = mongoose.Schema({
    participants:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Message",    //gets useful when we use (populate) method
            default : []
        }
    ]
},{timestamps : true})

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;