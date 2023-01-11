const mongoose=require("mongoose")

const newProductSchema=mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    }

})

module.exports=newProductSchema