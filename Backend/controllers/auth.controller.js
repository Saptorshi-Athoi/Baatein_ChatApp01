import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js"

export const loginUser = (req,res) => {
    res.send("Login User")
}
export const logoutUser = (req,res) => {
    res.send("logout User")
}

export const signupUser = async (req,res) => {
    // try{
    //     res.json(req.body)

    // }catch(err){
    //     console.log(err.message)
    // }
    try{
        const {fullname, username, password, confirmpassword, gender} = req.body
        if(password != confirmpassword) return res.status(400).json({error: "Password didnt match"})

        const user = await User.findOne({username})

        if(user){
            return res.status(400).json({error: "UserName already exists"})
        }

        //HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //PROFILE PIC API
        const boyProfilePic = `avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `avatar.iran.liara.run/public/boy?username=${username}`

        const newUser = new User({
            fullname,
            username, 
            password:hashedPassword, 
            gender, 
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if(newUser){
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save()

            res.status(201).json({
                message: "User Created Successfully",
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        }else{
            res.status(500).json({
                error: "Invalid User Data"
            })
        }


    }catch(err){
        console.log("Error in Signup Controller", err.message)
        res.status(500).json({
            error: "internal server Error"
        })
    }
}