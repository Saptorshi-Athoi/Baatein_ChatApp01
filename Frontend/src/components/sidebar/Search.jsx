import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation"
import toast from 'react-hot-toast';
import useGetConversations from '../../hooks/useGetConversations';

const Search = () => {

  const [search, setSearch] = useState("")
  const { setSelectedConversation } = useConversation()
  const { conversations } = useGetConversations()
  

  const handleSubmit =  (e) => {
    e.preventDefault()
    if(!search) return
    if(search.length < 3) return toast.error("Atleast more than 3 search words")
    const convos = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase())) 

    if(!convos) return toast.error("No users found")
    
    setSelectedConversation(convos)
    setSearch("")

  }

  return (
    <form className='flex justify-center gap-2' onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Type here" 
          className="input input-bordered w-full max-w-xs rounded-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit' className="btn btn-circle btn-outline hover:bg-opacity-30 text-xl">
            <IoSearchSharp/>
        </button>
    </form>
  )
}

export default Search