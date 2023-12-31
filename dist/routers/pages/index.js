import { Router } from "express";
const pagesRouter = Router();
pagesRouter.get("/", (req, res) => {
    return res.render("index", {
        message: "halo"
    });
});
export default pagesRouter;
//# sourceMappingURL=index.js.map