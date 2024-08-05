import React, { useState } from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast'

const useSendMessage = () => {
    
    const [loading, setLoading] = useState(false)
    const {setMessages, messages, selectedConversation } = useConversation()

    const sendMessage = async (message) => {
        setLoading(true)
        // if(!checkMessage(message)) return
        try {
            // console.log("fetched")
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({message})
            })
            const data = await res.json()
            if(data.error) throw new Error(data.error)

            setMessages([...messages, data])
            

        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    return { sendMessage, loading }

}

// const checkMessage = ( ) => {

// }

export default useSendMessage