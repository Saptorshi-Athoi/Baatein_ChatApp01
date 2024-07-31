import React, { useEffect } from 'react'
import { useState } from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast'

const useGetMessage = () => {

    const [loading, setLoading] = useState(false)
    const {setMessages, messages, selectedConversation } = useConversation()

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true)
            // if(!checkMessage(message)) return
            try {
                // console.log(selectedConversation._id)

                const res = await fetch(`/api/messages/${selectedConversation._id}`)
                const data = await res.json()

                if(data.error) throw new Error(data.error)

                setMessages(data)

            }catch(error){
                toast.error(error.message)
            }finally{
                setLoading(false)
            }
        }
        if(selectedConversation?._id) getMessages()
    },[selectedConversation?._id])

    return {messages, loading}
}

export default useGetMessage