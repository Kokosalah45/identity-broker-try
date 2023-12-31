import { Router } from "express";
import apiRouter from "./api/index.js";
import pagesRouter from "./pages/index.js";
const mainRouter = Router();
mainRouter.use('/api', apiRouter);
mainRouter.use("/", pagesRouter);
export default mainRouter;
//# sourceMappingURL=index.js.map