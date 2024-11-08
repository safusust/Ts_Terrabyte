const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/configDB");
const { Video } = require("./controller/video.controller");
const app = express();
dotenv.config({ path: [".env", ".env.local"] });
const Port=process.env.PORT

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});

app.use("/api/video",Video );



app.listen(Port, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", Port);
  connectDB();
});


