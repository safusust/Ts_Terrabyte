const express=require('express')
const Quiz =require("../controller/quiz.controller.js")
const router = express.Router();
router.get("/", Quiz);

export default router;