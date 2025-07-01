import express from "express"
import corse from "cors"
import cookieParser from "cookie-parser"
const app = express()




//routes import

import userRouter from './routes/user.routes.js'



// routes declaration
app.use("/api/v1/users", userRouter)


export{ app }