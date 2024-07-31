import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"

export const sendMessage = async (req, res) => {
    try {
        const {message} = await req.body
        const {id : receiverId} = req.params    //Renaming..left one is the new name
        const senderId = req.user._id.toString()
        // console.log(senderId)

        let conversation = await Conversation.findOne({
            participants: { $all : [senderId, receiverId]} // find such a conversation where participants array includes all these fields (senderId, receiverId), thsi will give us the converation between these two users
        })

        if(!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId] // create a new conversation with these two users
            })
        }

        // console.log(conversation)

        const newMessage = await Message.create({
            sender: senderId,
            receiver: receiverId,
            message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id)
            await conversation.save();
        }

        //SOCKET IO FUNCTIONALITY

        res.status(201).json(newMessage)

    } catch (err) {
        console.log("error in message controller",err.message)
        res.status(500).json({error: "Internal Server Errror"})
    }
}

export const getMessage = async (req, res) => {
    try {
        const {id: userToChatId} = req.params // id of the user that you are chatting with
        const senderId = req.user._id.toString()

        const conversation = await Conversation.findOne({
            participants: { $all : [senderId, userToChatId]}
        }).populate("messages")

        if(!conversation) return res.status(200).json({})

        res.status(200).json(conversation.messages)

    } catch (err) {
        console.log("Error in getMessage Controller", err.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

// export default {
//     getMessage,
//     sendMessage
// };