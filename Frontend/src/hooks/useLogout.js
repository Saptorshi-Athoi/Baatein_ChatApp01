

import { useState, useContext } from "react"
import toast from "react-hot-toast"
import AuthContext from "../context/authContext"

const useLogout = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useContext(AuthContext)

  const logout = async () => {
        setLoading(true)
        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const data = await res.json()
            if(data.error) {
                throw new Error(data.error)
            }

            localStorage.removeItem("chat-user")
            setAuthUser(null)

        } catch (err) {
            toast.error(err.message)
        }finally{
            setLoading(false)
        }

    }
    return { loading, logout }
}

export default useLogout