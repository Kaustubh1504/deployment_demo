const express = require("express")

app=express()

app.get('/',(req,res)=>{
    res.status(201).json("app on the cloud :)")
})
app.listen(3000,()=>{
    console.log("started on port 3000")
})