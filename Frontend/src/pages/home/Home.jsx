import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messageContainer/MessageContainer'

const Home = () => {
  return (
    <div className='md:w-[70%] md:h-[80%] flex w-[90%] backdrop-blur-lg h-[90%] rounded-xl overflow-hidden bg-slate-500 bg-opacity-10'>
        <Sidebar/>
        <MessageContainer/>
    </div>
  )
}

export default Home