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
const User = new mongoose.model("User",userSchema)
module.exports=User;


