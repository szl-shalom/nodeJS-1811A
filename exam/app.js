const express = require("express");
const app = express();
const fs =require("fs");
app.listen(8080,()=>console.log(8080));


app.use(express.static("public",{ index:"login.html" }));
app.use(express.json());

app.post("/api/tab",(req,res)=>res.send(fs.readFileSync("mock/tab.json")))

app.post("/api/login",(req,res)=>{
    let { user,pwd } = req.body;

    let data = JSON.parse(fs.readFileSync("mock/user.json"))

   let flag =  data.find(item=>item.user === user && item.pwd === pwd);

   if(flag){
       res.send({ code:1 })
   }else{
       res.send({ code:0 })
   }
})


app.post("/api/register",(req,res)=>{
    let { user } = req.body;

    let data = JSON.parse(fs.readFileSync("mock/user.json"))

   let flag =  data.find(item=>item.user === user);

   if(flag){
       res.send({ code:0 })
   }else{
        data.push(req.body);

        fs.writeFileSync("mock/user.json",JSON.stringify(data))

       res.send({ code:1 })
   }
})