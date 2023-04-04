const express = require("express")
const {spawn}=require("child_process")
app=express()

app.get('/',(req,res)=>{
    // res.status(201).json("app on the cloud :)")
    let dataCompare
    const childPython = spawn('python',['test.py'])

    childPython.stdout.on('data',(bufferData)=>{
        // console.log(bufferData);
        const bufferString = Buffer.from(bufferData).toString();
        dataCompare = JSON.parse(bufferString)
        console.log(dataCompare);
    })
    childPython.stderr.on('data',(data)=>{
        console.log(`stderr:${data}`);
        res.send(data);
    })
    childPython.on('close',(code)=>{
        console.log(`child process exicited with code : ${code}`)
        res.send(dataCompare);
        
    })

})
app.listen(3000,()=>{
    console.log("started on port 3000")
})