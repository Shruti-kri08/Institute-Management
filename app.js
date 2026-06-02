require('dotenv').config()
const express=require('express')
const app=express()
const mongoose=require('mongoose')

//import all routes
const userRoutes=require('./routes/user')
const batchRoutes=require('./routes/batch')
const studentRoutes=require('./routes/student')
const feeRoutes=require('./routes/fee')

//Connect DB
const connectWithDB=async()=>{
   try{
     await mongoose.connect(process.env.MONGODB_URL)
    console.log('connected with DB');
    
   }
   catch(err){
    console.log(err);
    
   }

}

connectWithDB()


app.use('/user',userRoutes)
app.use('/batch',batchRoutes)
app.use('/student',studentRoutes)
app.use('/fee',feeRoutes)

// app.use('*',(req,res)=>{
//     res.status(404).json({
//         message:'bad request'
//     })
// })

module.exports=app