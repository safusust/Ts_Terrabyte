const mongoose =require('mongoose');
const {Schema}= mongoose;
const userSchema= new Schema({
    userName:String,
    displayName:String,
    profileImage: String,
    location:{
        longitude:Number,
        latitude:Number
    }
});

module.exports=userSchema;


