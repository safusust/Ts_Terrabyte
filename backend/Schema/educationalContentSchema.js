const mongoose =require('mongoose');
const {Schema}= mongoose;
const educationalContentSchema= new Schema({
    titleName:String,
    content:String,
    author: String,
    shortDescription:String
});

module.exports=educationalContentSchema;


