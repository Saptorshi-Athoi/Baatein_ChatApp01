import { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import AuthContext from '../context/authContext'

const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const {setAuthUser} = useContext(AuthContext)

  const login = async (userName, password) => {
        const success = handleInputErrors(userName, password)

        if(!success) return

        setLoading(true)
        try {
            // console.log(1, 'login')
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userName, password }),
            })

            const data = await res.json()
            if(data.error) {
                throw new Error(data.error)
            }

            localStorage.setItem('chat-user', JSON.stringify(data)) // storing user data in local storage
            await setAuthUser(data) // setting user data to authUser state in AuthContext 
            toast.success('Welcome!', data.fullName) // success message

        }catch (err) {
            toast.error(err.message)
            console.error(err)
        }finally{
            setLoading(false)
        }
    }

    return { login, loading }
}

const handleInputErrors = (userName, password) => {
    if(!userName ||!password) {
        toast.error("Please enter all fields.");
        return false
    }

    return true
}

export default useLogin