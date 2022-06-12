const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
app.use(express.json())
const prodrouter=require("./Router/products.routes")

app.use("/Product",prodrouter)

module.exports=app;