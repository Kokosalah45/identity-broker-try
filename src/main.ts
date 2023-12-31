import express from "express";
import cors from "cors";
import path from "path";
import mainRouter from "./routers/";




const app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname  , 'views/pages'));
app.use(express.static(path.join(__dirname , '../' , 'public')))


app.use(cors())

app.use("/", mainRouter)

app.listen(3000 , ()=> console.log('LIVE'))