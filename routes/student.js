const express=require('express')
const router=express.Router()


router.post('/',async(req,res)=>{
    try{
        res.status(200).json({mgs:"run"})
    }
    catch(err){

    }
})



module.exports=router