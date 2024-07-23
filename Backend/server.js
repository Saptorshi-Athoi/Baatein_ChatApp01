import express from 'express'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.route.js '
import messageRoutes from './routes/message.route.js'
import userRoutes from './routes/user.route.js'
import connect  from './db/connectToDb.js';
import cookieParser from 'cookie-parser';
const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser())

const PORT = process.env.PORT || 5000
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)


app.get('/', (req, res) => {
    res.send(`Server is Ready ${PORT}`)
})

app.listen(PORT, () => {
    connect()
    console.log('listening on port',PORT)
});