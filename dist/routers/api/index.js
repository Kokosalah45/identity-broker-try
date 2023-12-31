import { Router } from "express";
import authRouter from "./auth/index.js";
const apiRouter = Router();
apiRouter.get("/", (req, res) => {
    return res.send("Hello api Worlds");
});
apiRouter.use('/auth', authRouter);
export default apiRouter;
//# sourceMappingURL=index.js.map