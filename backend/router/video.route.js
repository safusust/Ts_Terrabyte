const express=require('express')
const Video =require("../controller/educational.Video")

const router = express.Router();

router.get("/", Video);

export default router;