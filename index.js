const express=require("express")
const cors=require("cors")
const user=require("./Routers/user")
const slider=require("./Routers/slider")
const newProduct=require("./Routers/newProduct")
const fetureProduct=require("./Routers/fetureProduct")
const mongoose=require("mongoose")



const app=express()
app.use(express.urlencoded({ extended : false }));
app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.send("adadas")
})


app.post("/createuser",user)
app.post("/loginuser",user)
app.use("/sliderimgpost",slider)
app.use("/newproductpost",newProduct)
app.use("/fetureproductpost",fetureProduct)
app.get("/sliderimg",slider)
app.get("/newproduct",newProduct)
app.get("/fetureproduct",fetureProduct)
const path = require("path");



// app.use('/images', express.static('images'))
// app.use('/static', express.static(__dirname, '/public'))
app.use('/images', express.static(path.join(__dirname, 'images')))


mongoose.set('strictQuery', false);

mongoose.connect(
    "mongodb+srv://prantor:prantor@cluster0.8kgvh3x.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(console.log("Database connection successful"))
  .catch((err) => {
    console.log(err);
  });

const PORT=process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})
