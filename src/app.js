import express from "express";
import morgan from "morgan";
//Cookie-parser
import cookieParser from "cookie-parser";
//Cors
import cors from 'cors';
//Routers
import uploadRouter from "./routes/uploadFile.route.js";
import emailHelperR from "./routes/emailHelp.route.js";
import pqrRouter from "./routes/pqrsHelp.route.js";
//Dotenv
import dotenv from 'dotenv'
dotenv.config()

//Express
const app = express();

//Cors
app.use(
    cors({
        origin : 'http://localhost:5173',
        credentials : true
    })
)
//Morgan
app.use(morgan('dev'))
//App Json
app.use(express.json())
//Cookies parser
app.use(cookieParser())

//Images Router
app.use('/api', uploadRouter)
//Mail Router
app.use('/api', emailHelperR)
//PQR Router
app.use('/api', pqrRouter)

export default app