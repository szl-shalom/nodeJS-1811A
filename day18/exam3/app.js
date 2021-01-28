const express = require("express")
const app = express();
const fs = require("fs")
app.listen("8080", () => console.log("8080服务器 启动了"));


app.use(express.static("public"));
app.use(express.json());

app.post("/api/detail",(req,res)=>{
    let { id,score } = req.body;
    let data = JSON.parse(fs.readFileSync("mock/list.json"));
    let obj = data.find(item=>item.id === id);
    obj.count++;
    obj.score = score;
    fs.writeFileSync("mock/list.json",JSON.stringify(data));
    res.send( { code:1 } )
})

app.post("/api/list",(req,res)=>res.send(fs.readFileSync("mock/list.json")))