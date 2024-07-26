import React from 'react'
import { TbMessageHeart } from "react-icons/tb";


const NoConversation = () => {
  return (
    <div className='flex items-center justify-center h-full text-white flex-col'>
        <span className='text-2xl'>Hey there, welcome Back !</span>
        <span className='text-2xl'>check out who's been waiting..</span>
        <span className='text-8xl'><TbMessageHeart /></span>
    </div>
  )
}

export default NoConversation