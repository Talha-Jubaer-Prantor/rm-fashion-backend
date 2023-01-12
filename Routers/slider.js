const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const sliderImgSchema = require("../Schema/sliderImgSchema");
const SliderImg = mongoose.model("SliderImg", sliderImgSchema);
const multer = require("multer")
const path=require("path")

const storage=multer.diskStorage(
{
    destination:(req,file,cb)=>{
        cb(null,"images")
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now()+path.extname(file.originalname))
    }
    
}

)

const upload=multer({storage:storage})



router.post("/sliderimgpost",upload.single("image") ,(req,res)=>{
    const imgPath=req.file.path

    SliderImg.find({},(err,data)=>{
        if(data.length<4){

            const newSlider= new SliderImg({
                name:"img-1",
                img:imgPath,
            })
            newSlider.save()
            .then(res.send(true))

        }
    })

    
console.log(req)

})




router.get("/sliderimg",(req,res)=>{

    SliderImg.find({},(err,data)=>{
        res.send(data)
    })

})


module.exports=router