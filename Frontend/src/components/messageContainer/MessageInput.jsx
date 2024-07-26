import React from 'react'
import { BiSend } from "react-icons/bi";

const MessageInput = () => {
  return (
    <form className='flex items-center gap-2 pt-1'>
        <input type="text" placeholder="Type here" className="input input-bordered w-full rounded-full" />
        <button type='submit' className="btn btn-circle btn-outline hover:bg-opacity-30 text-2xl flex justify-center items-center">
            <BiSend />
        </button>
    </form>
  )
}

export default MessageInput