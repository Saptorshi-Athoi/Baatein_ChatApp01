import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message:{
        type: String,
        required: true
    }

},{timestamps:true}) //This option automatically adds createdAt and updatedAt fields to the schema, which will be managed by Mongoose.

const Message = mongoose.model("Message", messageSchema);

export default Message;