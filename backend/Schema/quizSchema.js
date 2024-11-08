const mongoose =require('mongoose');
const {Schema}= mongoose;
const quizSchema= new Schema({
    questions:String,
    option:{
        op1:String,
        op2:String,
        op3:String,
        op4:String
    },
    answers:String,
});
const  Quiz= new mongoose.model("Quiz",quizSchema)
module.exports=Quiz;


