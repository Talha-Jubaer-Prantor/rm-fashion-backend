const express=require("express")
const { default: mongoose } = require("mongoose")
const router=express.Router()
const multer = require("multer")
const path=require("path")
const newProductSchema=require("../Schema/newProductSchema")
const NewProduct=mongoose.model("NewProduct",newProductSchema)
var fs = require("fs");

// const storage=multer.diskStorage(
// {
//     destination:(req,file,cb)=>{
//         cb(null,"images")
//     },
//     filename:(req,file,cb)=>{
//         cb(null, Date.now()+path.extname(file.originalname))
//     }
    
// }

// )
// const upload=multer({storage:storage})

router.post("/newproductpost", (req,res)=>{

      console.log(req.body)

    const newProduct= new NewProduct({
        name:req.body.name,
        img:req.body.img
    })
    newProduct.save()
    .then(res.send(true))

})



router.get("/newproduct",(req,res)=>{
    NewProduct.find({},(err,data)=>{
        res.send(data)
    })
})


router.post("/deletenewproduct", (req, res) => {

  const id=req.body.path

try{
    NewProduct.findOneAndDelete( {_id:id })
    .then(res.send(true))
  }catch(err){
    if(err){console.log(err)}
  }
})
module.exports=router