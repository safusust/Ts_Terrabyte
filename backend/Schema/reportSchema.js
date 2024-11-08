const mongoose = require("mongoose");
const { Schema } = mongoose;
const reportSchema = new Schema( {
  name: String,
  message: String,
  location: String,
  timestamp: {
    type: mongoose.Schema.Types.Date,
    default: new Date().toISOString(),
  },
});
const report = new mongoose.model("report",reportSchema)
module.exports =report ;
