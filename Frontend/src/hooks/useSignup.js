import { useState } from "react";

import React from 'react'
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async({fullName, userName, password, confirmPassword})=>{
    const success = handleInputErrors({fullName, userName, password, confirmPassword})
    if(!success) return

    setLoading(true)
    try {
        const res = await fetch('/api/auth/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fullName, userName, password, confirmPassword})
        })

        const data = await res.json()
        if (res.ok) {
            console.log(data); // Success message
            toast.success('Welcome!', fullName)
        } else {
            console.log("Signup failed: ", data.message);
            toast.error(data.message);
        }
        // console.log(data)
    } catch (error) {
        toast.error(error.message)
    }finally{
        setLoading(false)
    }

  }

  return {signup, loading}
}

const handleInputErrors = ({fullName, userName, password, confirmPassword}) => {
    console.log(fullName, userName, password, confirmPassword)
    if(!fullName || !userName || !password || !confirmPassword) {
        toast.error("Please enter all fields.");
        return false
    }

    if(password != confirmPassword){
        toast.error("Passwords do not match.");
        return false
    }

    if(password.length < 6){
        toast.error("Password should be at least 6 characters long.");
        return false
    }

    return true;
 
}

export default useSignup