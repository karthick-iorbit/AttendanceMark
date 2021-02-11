const mongoose = require('mongoose');

//Database Connection
const connectDB = async ()=>{
 try {
     const conn = await mongoose.connect(process.env.Mongo_URL_Dev,
        {
useNewUrlParser:true,
useCreateIndex:true,
useFindAndModify:false,
useUnifiedTopology:true,
        })
console.log("Database connected");

 } catch (error) {
     console.log(error);
 }
}



module.exports = connectDB;
