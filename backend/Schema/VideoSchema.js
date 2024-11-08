const mongoose =require('mongoose');
const {Schema}= mongoose;
const vedioSchema= new Schema({
    titleName:String,
    url:String,
    description: String,
});
const Video = new mongoose.model("Video",vedioSchema)
module.exports= Video;


