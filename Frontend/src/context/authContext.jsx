import { createContext } from "react";
import { useState } from "react";

const AuthContext = createContext()
export default AuthContext;

export const AuthContextProvider = ({children}) => {

    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

    return (
        <AuthContext.Provider value = {{authUser, setAuthUser}}>
            {children}
        </AuthContext.Provider>
    )
}