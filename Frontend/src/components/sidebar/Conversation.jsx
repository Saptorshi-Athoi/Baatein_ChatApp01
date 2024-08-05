import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/socketContext'

const Conversation = ({conversation}) => {

  const {selectedConversation, setSelectedConversation} = useConversation()
  
  const isSelected = selectedConversation?._id === conversation._id
  const {onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)

  return (
    <div className={`flex justify-between hover:bg-slate-500 hover:bg-opacity-50 py-2 rounded-md cursor-pointer
      ${isSelected ? 'bg-slate-400 bg-opacity-50':''}
    `} onClick={()=>setSelectedConversation(conversation)}>
        <div className='flex items-center text-white gap-2'>
            <div className={`avatar ${isOnline ? 'online' : 'offline'}`}>
                <div className="w-16 rounded-full">
                    <img src='https://cdn.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png' />
                </div>
            </div>
            <span>{conversation.fullName}</span>
        </div>

    </div>
  )
}

export default Conversation