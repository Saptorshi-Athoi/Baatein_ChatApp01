import React from 'react'
import MessageHeader from './MessageHeader'
import Messages from './Messages'
import MessageInput from './MessageInput'
import NoConversation from './NoConversation'
import useConversation from '../../zustand/useConversation'

const MessageContainer = () => {

  const {selectedConversation} = useConversation()
  let pp = !selectedConversation 
  return (
    <div className='py-2 flex-grow flex flex-col gap-3 pr-3'>
      {pp ?  <NoConversation/> :( 
        <>
          <MessageHeader fullname={selectedConversation.fullName}/>
          <Messages/>
          <MessageInput/>
        </>
      )}
        
    </div>
  )
}

export default MessageContainer