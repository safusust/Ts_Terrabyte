const express=require('express')
const Educational =require("../controller/educational.controller.js")
const router = express.Router();
router.get("/", Educational);

export default router;