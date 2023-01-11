const mongoose=require("mongoose")

const fetureProductSchema=mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    }

})

module.exports=fetureProductSchema