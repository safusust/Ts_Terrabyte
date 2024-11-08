const express=require('express')
const {getReport,postReport} =require("../controller/report.controller.js")
const router = express.Router();
router.get("/", getReport);
router.post("/",postReport);

export default router;