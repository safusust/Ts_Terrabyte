const mongoose =require("mongoose");

const connectDB= async () => {
    try{
        await mongoose.connect('mongodb+srv://safusust:cxj6KeT4KtUag66a@cluster0.4m0ry.mongodb.net/');
        console.log("Connect SuccessFully ")
    }catch(err){
        console.log(err)
        console.log("Connection failed")
    }
}
module.exports=connectDB;