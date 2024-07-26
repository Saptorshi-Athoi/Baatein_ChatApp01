import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <form className='flex justify-center gap-2'>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-full"/>
        <button type='submit' className="btn btn-circle btn-outline hover:bg-opacity-30 text-xl">
            <IoSearchSharp/>
        </button>
    </form>
  )
}

export default Search