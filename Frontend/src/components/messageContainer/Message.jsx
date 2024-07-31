import React, { useContext } from 'react'
import AuthContext from '../../context/authContext'
import useConversation from '../../zustand/useConversation'
import extractTime from '../../../utils/extractTime'

const Message = ({message}) => {

    const {authUser} = useContext(AuthContext)
    const {selectedConversation} = useConversation()
    const fromMe = message.sender == authUser._id
    // console.log("authuser: ", authUser._id,fromMe,"senderid:", message)
    const chatClassName = fromMe ? 'chat-end' : 'chat-start'
    const bubbleColor = fromMe ? 'bg-slate-600' :''
    const formattedTime = extractTime(message.createdAt)
    // console.log(message)

  return (
    <div>
        <div className={`chat ${chatClassName}`}>
        <div className="chat-header">
            <time className="text-xs opacity-50">{formattedTime}</time>
        </div>
            <div className={`chat-bubble ${bubbleColor}`}>
                {message.message}
            </div>
        </div>
    </div>
  )
}

export default Message