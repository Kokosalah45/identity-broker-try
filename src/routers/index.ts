import {Router} from "express";
import apiRouter from "./api";
import pagesRouter from "./pages";

const mainRouter = Router()

mainRouter.use('/api' , apiRouter)

mainRouter.use("/" , pagesRouter)


export default mainRouter