import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'
import useConversation from '../../zustand/useConversation'

const ConversationHolder = () => {

  const {loading, conversations} = useGetConversations()
  
  // console.log(conversations)
  return (
    <div className='h-[80%] overflow-auto'>
      {loading ? <span className='loading loading-spinner mx-auto'> </span> : null}
      {
        conversations.map((conversation, index) => (
          <Conversation 
            key={conversation._id} 
            conversation={conversation}
          />
        ))
      }          
    </div>
  )
}

export default ConversationHolder