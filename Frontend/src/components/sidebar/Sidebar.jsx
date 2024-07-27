import React from 'react'
import ConversationHolder from './ConversationHolder'
import Search from './Search'
import { BiLogOut } from "react-icons/bi"; 
import useLogout from '../../hooks/useLogout.js';


const Sidebar = () => {
  const { logout } = useLogout()
  return (
    <div className='p-4 w-[30%] flex flex-col'>
        <Search/>

            <div className='divider px-3'></div>
        <ConversationHolder/>

            <div className='divider px-3'></div>
            
        <button className='btn btn-outline flex items-center  hover:bg-slate-500 hover:bg-opacity-50 hover:text-white cursor-pointer' onClick={logout}>
            <BiLogOut />
            <span>Logout</span>
        </button>
    </div>
  )
}

export default Sidebar