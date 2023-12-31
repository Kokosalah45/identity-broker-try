import { Router } from "express";
const authRouter = Router();
authRouter.get("/", (req, res) => {
    return res.send("Hello auth Worlds");
});
authRouter.get("/login", (req, res) => {
    return res.render("../../views/pages");
});
export default authRouter;
//# sourceMappingURL=index.js.map