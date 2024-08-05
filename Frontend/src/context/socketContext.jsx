import { Children, createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./authContext";
import io from 'socket.io-client';

const SocketContext = createContext()

export const useSocketContext = () => {
    return useContext(SocketContext)
}

export const SocketContextProvider = ({children}) => {
    
    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const {authUser} = useContext(AuthContext)

    useEffect(() => {
        if(authUser) {
            const socket = io('http://localhost:8000',{
                query : {
                    userId : authUser._id
                }
            })

            setSocket(socket)

            // socket.on is used both on client side and server side for listening to events

            socket.on('getOnlineUsers', (users) =>{
                setOnlineUsers(users)
            })

            return () => socket.close()
        }else{
            if(socket) {
                socket.close()
                setSocket(null)
            }
        }
    },[authUser])

    return (
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}