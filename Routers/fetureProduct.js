const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fetureProductSchema = require("../Schema/fetureProductSchema");
const FetureProduct = mongoose.model("FetureProduct", fetureProductSchema);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/fetureproductpost", upload.single("image"), (req, res) => {
  const imgPath = req.file.path;
  
console.log(req.headers)

  try{const newFetureProduct=new FetureProduct({
    name:req.body.name,
    price:req.body.price,
    img:imgPath
  })
  newFetureProduct.save()
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

module.exports = router;
