const express=require("express")
const { default: mongoose } = require("mongoose")
const router=express.Router()
const multer = require("multer")
const path=require("path")
const newProductSchema=require("../Schema/newProductSchema")
const NewProduct=mongoose.model("NewProduct",newProductSchema)

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

router.post("/newproductpost", upload.single("image"), (req,res)=>{
    const imgPath=req.file.path


    const newProduct= new NewProduct({
        name:req.body.name,
        img:imgPath
    })
    newProduct.save()
    .then(res.send(true))

})



router.get("/newproduct",(req,res)=>{
    NewProduct.find({},(err,data)=>{
        res.send(data)
    })
})

module.exports=router