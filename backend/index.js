const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/configDB");

const { Video } = require("./controller/video.controller");
const {getReport, postReport}=require("./controller/report.controller");
const { Educational } = require("./controller/educational.controller");
const{Quiz}=require("./controller/quiz.controller");
const{User}=require("./controller/user.controller")
const app = express();
dotenv.config({ path: [".env", ".env.local"] });
const Port=process.env.PORT

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});

app.use("/api/video",Video );
app.use("/api/postreport",postReport);
app.use("/api/getreport",getReport);
app.use("/api/artical",Educational);
app.use("/api/quiz",Quiz);
app.use("/api/user",User);


app.listen(Port, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", Port);
  connectDB();
});


