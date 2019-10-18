const express=require('express')
const app=express()

app.get('/',function(req,res){
    res.send("------->hello world")
})
console.log("Inside nodeJS project");
app.listen(3000);
