const mongoose =require('mongoose');
const {Schema}= mongoose;
const educationalContentSchema= new Schema({
    titleName:String,
    content:String,
    solution:String,
    author: String,
    shortDescription:String
});
const  artical= new mongoose.model("artical",educationalContentSchema)
module.exports=artical;


