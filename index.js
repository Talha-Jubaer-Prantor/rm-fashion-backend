const express=require("express")
const cors=require("cors")
const user=require("./Routers/user")
const mongoose=require("mongoose")



const app=express()

app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.send("adadas")
})


app.post("/createuser",user)
app.post("/loginuser",user)



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
