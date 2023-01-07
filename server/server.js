import express from "express";
import {route} from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(route);

app.use('/',express.static("views"));

app.listen(PORT, () => {console.log(`Servidor criado: listen port ${PORT}`)});