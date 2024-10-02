//Router
import { Router } from "express";
//Methods
import uploadFile from "../controllers/uploadFile.controller.js";
//Uploads
import uploads from "../middlewares/uploadFile.middleware.js";

const uploadRouter = new Router();

uploadRouter.post('/upload', uploads.single('images'), uploadFile)

export default uploadRouter