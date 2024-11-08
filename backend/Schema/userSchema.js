const mongoose =require('mongoose');
const {Schema}= mongoose;
const userSchema= new Schema({
    userName:String,
    displayName:String,
    profileImage: String,
    location:{
        longitude:String,
        latitude:String
    }
});

module.exports=userSchema;


