import jwt from 'jsonwebtoken';
import User from '../models/userModel.js'

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        if(!token) return res.status(401).json({error:"Unauthorized- No Token Provided"});

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded) return res.status(401).json({error:"Unauthorized- Invalid Token"});

        const user = await User.findById(decoded.userId).select('-password');
        // console.log(user)

        if(!user) return res.status(401).json({error:"User not found"})

        req.user = user;
        // The line req.user = user; in the middleware is attaching the retrieved user object to the req (request) object. This makes the user object available in subsequent middleware functions or route handlers that handle the same request.
        //Yes, we can say that we are creating a completely new field inside the request object by assigning req.user = user;. The req (request) object is an instance of the HTTP request made by the client, and in Node.js/Express, it is common practice to add custom properties to this object to pass information between middleware and route handlers.
        next();

    } catch (err) {
        console.log("error in protectRoute middleware", err.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}

export default protectRoute;