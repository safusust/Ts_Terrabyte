const mongoose =require("mongoose");

const connectDB= async () => {
    try{
        await mongoose.connect(process.env.DATABSAE_URL);
        console.log("Connect SuccessFully ")
    }catch(err){
        console.log(err)
        console.log("Connection failed")
    }
}
module.exports=connectDB;