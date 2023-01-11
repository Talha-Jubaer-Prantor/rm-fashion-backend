const mongoose = require("mongoose");

const sliderImgSchema = mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        img:{
            type:String,
            required:true
        }

    
  
});

module.exports = sliderImgSchema;
