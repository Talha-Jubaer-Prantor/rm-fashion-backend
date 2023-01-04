const express=require("express")
const router=express.Router()
const mongoose=require("mongoose")
const userSchema=require("../Schema/userSchema")
const User=new mongoose.model("User",userSchema)


// The route below creats account of the admin panel

router.post("/createuser",(req,res)=>{
    const {name,email,password}=req.body

    User.find({},(err,data)=>{
        if(data.length==1){
            res.send({limited:"limited"})
        }else{
            try{const newUser=new User({
                name:name,
                email:email,
                password:password
            })
            newUser.save()
            .then(res.send(true))
            }catch{
            res.send(false)
            }
        }
    })
})



// The route below logs in admin panel


router.post("/loginuser",(req,res)=>{
    const {email,password}=req.body

    
        User.find({email:email},(err,data)=>{
            if(data[0].password==password){
                res.send(true)
            }else{
                res.send(false)
            }
        })
    

})

module.exports=router