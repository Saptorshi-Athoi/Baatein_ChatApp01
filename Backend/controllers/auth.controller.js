import User from "../models/userModel.js"

export const loginUser = (req,res) => {
    res.send("Login User")
}
export const logoutUser = (req,res) => {
    res.send("logout User")
}
export const signupUser = async (req,res) => {
    try{
        const {fullname, username, password, confirmpassword, gender} = req.body
        if(password != confirmpassword) return res.status(400).json({error: "Password didnt match"})

        const user = await User.findOne({username})

        if(user){
            return res.status(400).json({error: "User already exists"})
        }

        //HASH PASSWORD HERE

        const boyProfilePic = `avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `avatar.iran.liara.run/public/boy?username=${username}`

        const newUser = new User({
            fullname,
            username, 
            password, 
            gender, 
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic})

    }catch{

    }
}