const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const sliderImgSchema = require("../Schema/sliderImgSchema");
const SliderImg = mongoose.model("SliderImg", sliderImgSchema);
const multer = require("multer");
const path = require("path");
var fs = require("fs");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

router.post("/sliderimgpost", (req, res) => {
 
  SliderImg.find({}, (err, data) => {
    if (data.length < 4) {
      const newSlider = new SliderImg({
        name: "img",
        img: req.body.img,
      });
      newSlider.save()
      .then(res.send(true));
    }
  });

  
});

router.get("/sliderimg", (req, res) => {
  SliderImg.find({}, (err, data) => {
    res.send(data);
  });
});

router.post("/deleteslider", (req, res) => {
 
  const id=req.body.id


  try{
  SliderImg.findOneAndDelete({ _id:id  })
  .then(res.send(true)) 
}catch(err){
  if(err){console.log(err)}
}

});

module.exports = router;
