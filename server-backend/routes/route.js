import express from "express"
import {getdata, updatedata} from "../controllers/controllers.js"

export const router=express.Router();

router.get('/data',getdata);
router.post('/dataUpdate',updatedata);