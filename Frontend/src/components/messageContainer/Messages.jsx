import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../../hooks/useGetMessage'
import MessageSkeletons from '../skeletons/MessageSkeletons'
import useListenMessages from '../../hooks/useListenMessages'

const Messages = () => {
  const {messages, loading} = useGetMessage()
  useListenMessages()
  const lastMessageRef = useRef()
  // console.log(messages.length) 
  useEffect(() =>{
    lastMessageRef.current?.scrollIntoView({behaviour : 'smooth'})
  },[messages])

  return (
    <div className='overflow-auto h-[80%]'>
        {loading && [...Array(7)].map((_, idx) => <MessageSkeletons key={idx} /> ) }
        {!messages.length ? <div className='flex items-center justify-center h-full text-stone-50 text-2xl'>{"No converstion yet :("}</div> : <></>}
        {!loading && messages.length && messages.map((message, idx) => {
          return(
            <div ref={lastMessageRef} key={message._id}>
              <Message message={message}/>
            </div> 
          )
        })}
    </div>
  )
}

export default Messages