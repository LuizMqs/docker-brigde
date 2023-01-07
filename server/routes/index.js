import { Router } from "express";

import Sign from "../controllers/sign.js"
import GetAll from "../controllers/getAll.js"
import Delete from "../controllers/delete.js"

const route = Router();

route.get('/get/contact', new GetAll().handler.bind(new GetAll()));

route.post('/insert/contact', new Sign().handler.bind(new Sign()));

route.delete('/delete/contact/:id', new Delete().handler.bind(new Delete()));

export {route};