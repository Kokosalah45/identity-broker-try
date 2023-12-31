import { Router } from "express";
import authRouter from "./auth";


const apiRouter = Router()

apiRouter.get("/" , (req , res)=>{
    return res.send("Hello api Worlds")
})


apiRouter.use('/auth' , authRouter)

export default apiRouter