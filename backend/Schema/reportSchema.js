const mongoose =require('mongoose');
const {Schema}= mongoose;
const reportSchema= new Schema({
    name:String,
    message:String,
    place:{
        longitude:Number,
        latitude:Number
    },
    timestamp:{
        type:mongoose.Schema.Types.Date,
        default: new Date().toISOString()
    }
});

module.exports=quizSchema;


