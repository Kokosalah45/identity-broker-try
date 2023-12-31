import express from "express";
import cors from "cors";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import mainRouter from "./routers/index.js";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/pages'));
app.use(express.static(path.join(__dirname, '../', 'public')));
app.use(cors());
app.use("/", mainRouter);
app.listen(3000, () => console.log('LIVE'));
//# sourceMappingURL=main.js.map