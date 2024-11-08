const express=require('express')
const User =require("../controller/user.controller.js")

const router = express.Router();

router.get("/",User);

export default router;