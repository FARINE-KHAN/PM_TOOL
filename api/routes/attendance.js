import express from "express";
import {addAttendace,getlastAttendace} from "../controller/attendanceController.js";
const router= express.Router();

router.post("/add",addAttendace)
router.get("/get",getlastAttendace)



export default router;