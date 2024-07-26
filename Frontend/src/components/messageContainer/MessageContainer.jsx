import React from 'react'
import MessageHeader from './MessageHeader'
import Messages from './Messages'
import MessageInput from './MessageInput'
import NoConversation from './NoConversation'

const MessageContainer = () => {
  let pp = 1
  return (
    <div className='py-2 flex-grow flex flex-col gap-3 pr-3'>
      {pp ?  <NoConversation/> :( 
        <>
          <MessageHeader/>
          <Messages/>
          <MessageInput/>
        </>
      )}
        
    </div>
  )
}

export default MessageContainer