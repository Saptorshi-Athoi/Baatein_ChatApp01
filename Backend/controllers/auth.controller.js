import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js"

export const loginUser = async (req,res) => {
    try{
        const {userName, password} = req.body
        // console.log(req.body.userName)
        const user = await User.findOne({userName})

        if (!user) {
            return res.status(400).json({ error: "Invalid User" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid Password" });
        }

        generateTokenAndSetCookie(user._id, res)

        res.status(200).json({
            message: "User Login Successfully",
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            profilePic: user.profilePic
        })
    }
    catch(err){
        console.log("Error in Login Controller", err)
        res.status(500).json({
            error: "internal server Error"
        })
    }
}
export const logoutUser = (req,res) => {
    try{
        res.cookie("jwt", "", { maxAge:0})
        res.status(200).json({Message : "User logged out successfully"})
    }
    catch(err){
        console.log("Error in Logout Controller", err)
        res.status(500).json({
            error: "internal server Error"
        })
    }
}

export const signupUser = async (req,res) => {
  
    try{
        const {fullName, userName, password, confirmPassword} = req.body
        if(password != confirmPassword) return res.status(400).json({error: "Password didnt match"})

        const user = await User.findOne({userName})

        if(user){
            return res.status(400).json({error: "UserName already exists"})
        }

        //HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //PROFILE PIC API
        const boyProfilePic = `avatar.iran.liara.run/public/boy?username=${userName}`
        // const girlProfilePic = `avatar.iran.liara.run/public/boy?userName=${userName}`

        const newUser = new User({
            fullName,
            userName, 
            password:hashedPassword, 
            profilePic: boyProfilePic 
        })

        if(newUser){
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save()

            res.status(201).json({
                message: "User Created Successfully",
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
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

// INITIAL VERSION

// import User from "../models/userModel.js"
// import bcrypt from "bcryptjs"
// import generateTokenAndSetCookie from "../utils/generateToken.js"

// export const loginUser = async (req,res) => {
//     try{
//         const {username, password} = req.body
//         // console.log(req.body.username)
//         const user = await User.findOne({username})

//         if (!user) {
//             return res.status(400).json({ error: "Invalid User" });
//         }

//         const isPasswordCorrect = await bcrypt.compare(password, user.password);

//         if (!isPasswordCorrect) {
//             return res.status(400).json({ error: "Invalid Password" });
//         }

//         generateTokenAndSetCookie(user._id, res)

//         res.status(200).json({
//             message: "User Login Successfully",
//             _id: user._id,
//             fullname: user.fullname,
//             username: user.username,
//             profilePic: user.profilePic
//         })
//     }
//     catch(err){
//         console.log("Error in Login Controller", err)
//         res.status(500).json({
//             error: "internal server Error"
//         })
//     }
// }
// export const logoutUser = (req,res) => {
//     try{
//         res.cookie("jwt", "", { maxAge:0})
//         res.status(200).json({Message : "User logged out successfully"})
//     }
//     catch(err){
//         console.log("Error in Logout Controller", err)
//         res.status(500).json({
//             error: "internal server Error"
//         })
//     }
// }

// export const signupUser = async (req,res) => {
  
//     try{
//         const {fullname, username, password, confirmpassword, gender} = req.body
//         if(password != confirmpassword) return res.status(400).json({error: "Password didnt match"})

//         const user = await User.findOne({username})

//         if(user){
//             return res.status(400).json({error: "UserName already exists"})
//         }

//         //HASH PASSWORD HERE
//         const salt = await bcrypt.genSalt(10)
//         const hashedPassword = await bcrypt.hash(password, salt)

//         //PROFILE PIC API
//         const boyProfilePic = `avatar.iran.liara.run/public/boy?username=${username}`
//         const girlProfilePic = `avatar.iran.liara.run/public/boy?username=${username}`

//         const newUser = new User({
//             fullname,
//             username, 
//             password:hashedPassword, 
//             gender, 
//             profilePic: gender === "male" ? boyProfilePic : girlProfilePic
//         })

//         if(newUser){
//             generateTokenAndSetCookie(newUser._id, res)
//             await newUser.save()

//             res.status(201).json({
//                 message: "User Created Successfully",
//                 _id: newUser._id,
//                 fullname: newUser.fullname,
//                 username: newUser.username,
//                 profilePic: newUser.profilePic
//             })
//         }else{
//             res.status(500).json({
//                 error: "Invalid User Data"
//             })
//         }


//     }catch(err){
//         console.log("Error in Signup Controller", err.message)
//         res.status(500).json({
//             error: "internal server Error"
//         })
//     }
// }