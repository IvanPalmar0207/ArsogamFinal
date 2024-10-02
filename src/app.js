import express from "express";
import morgan from "morgan";
//Router

//Cookie-parser
import cookieParser from "cookie-parser";
//Cors
import cors from 'cors';
//Routers
import uploadRouter from "./routes/uploadFile.route.js";
import emailHelperR from "./routes/emailHelp.route.js";

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

//Routers
app.use('/api', uploadRouter)

app.use('/api', emailHelperR)

export default app