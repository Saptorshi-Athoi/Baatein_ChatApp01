import express from 'express'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.route.js'
import connect  from './db/connectToDb.js';
const app = express();

dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 5000
app.use("/api/auth", authRoutes)


app.get('/', (req, res) => {
    res.send(`Server is Ready ${PORT}`)
})

app.listen(PORT, () => {
    connect()
    console.log('listening on port',PORT)
});