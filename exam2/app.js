const express = require("express");
const app = express();
const fs =require("fs");
app.listen("8080");


app.use(express.static("public"))
app.use(express.json())


app.post("/api/list",(req,res)=>res.send(fs.readFileSync("mock/list.json")))
app.post("/api/add",(req,res)=>{
    let data = JSON.parse(fs.readFileSync("mock/list.json"))
    data.push(req.body);
    fs.writeFileSync("mock/list.json",JSON.stringify(data));
    res.send({ code:1 })
})


app.post("/api/search",(req,res)=>{
    let { searchVal } = req.body;
    let data = JSON.parse(fs.readFileSync("mock/list.json"))
    // 核心 搜索  使用filter
    let arr = data.filter(item=>item.name.includes(searchVal));
    res.send(arr)
})