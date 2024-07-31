import React, { useState } from 'react'
import { BiSend } from "react-icons/bi";
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {

  const [message, setMessage] = useState("")
  const { sendMessage, loading } = useSendMessage()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!message) return 
    await sendMessage(message)
    setMessage("")
  }

  return (
    <form className='flex items-center gap-2 pt-1' onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Type here" 
          className="input input-bordered w-full rounded-full" 
          value={message} 
          onChange={(e)=> setMessage(e.target.value)}
        />
        <button type='submit' className="btn btn-circle btn-outline hover:bg-opacity-30 text-2xl flex justify-center items-center cursor-pointer">
            {loading ? <div className='loading loading-spinner'></div> : <BiSend />}
        </button>
    </form>
  )
}

export default MessageInput