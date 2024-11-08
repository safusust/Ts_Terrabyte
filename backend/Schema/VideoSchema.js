const mongoose =require('mongoose');
const {Schema}= mongoose;
const vedioSchema= new Schema({
    titleName:String,
    url:String,
    description: String,
});

module.exports=vedioSchema;


