const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fetureProductSchema = require("../Schema/fetureProductSchema");
const FetureProduct = mongoose.model("FetureProduct", fetureProductSchema);
var fs = require("fs");



router.post("/fetureproductpost", async(req, res) => {
 
  
  console.log(req.body);

  try{const newFetureProduct=new FetureProduct({
    name:req.body.name,
    price:req.body.price,
    img:req.body.img
  })
  await newFetureProduct.save()
  .then(res.send(true))
}catch(err){
  console.log(err)
}
  
});

router.get("/fetureproduct",(req,res)=>{

    FetureProduct.find({},(err,data)=>{
        res.send(data)
    })

})


router.post("/deletefeture", (req, res) => {
    const id=req.body.path
console.log(id)

try{
  FetureProduct.findOneAndDelete({_id:id})
  .then(res.send(true))
}catch(err){
  if(err){console.log(err)}
}


// try{
//   FetureProduct.findOneAndDelete( {_id:id })
//   .then(res.send(true))
// }catch(err){
//   if(err){console.log(err)}
// }



});

module.exports = router;
