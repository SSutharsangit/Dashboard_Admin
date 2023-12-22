const express =require("express");
const mongoose=require("mongoose");
const app=express();
const productrouter=require("./routes/Product");
const userrouter=require("./routes/User");
const orderrouter=require("./routes/Order");
const adminrouter=require("./routes/Admin");
const cors =require("cors");
// database connection
mongoose.connect("mongodb+srv://suthu:1234@cluster0.ycyloij.mongodb.net/")
.then(()=>{
    console.log("DB connceted successfuly");
    app.listen(5000,()=>{
        console.log("Sever running on port 5000");
    })
})
.catch((err)=>{
    console.log("something wrong in DB connection");
    console.log(err);
})
// to send json body
app.use(express.json());
// cross resourse
app.use(cors({credentials: true }));

//product route
app.use("/product",productrouter);
app.use("/orders",orderrouter);
app.use("/user",userrouter);
app.use("/admin",adminrouter);
