const express = require("express");
const router = express.Router();//获取路由
const fs = require("fs");
module.exports= router; //抛出路由



// 详情
router.post("/api/detail",(req,res)=>{
    let { id } = req.body;
    let data = JSON.parse(fs.readFileSync("mock/books.json"));
    let o =  data.find(item=>item.id === id)
    res.send(o)
})

// 删除接口
router.post("/api/delete",(req,res)=>{
    let { id  }= req.body;
    let data = JSON.parse(fs.readFileSync("mock/books.json"))
    // 核心 过滤 ID
    data =  data.filter(item=> item.id !== id);    
    fs.writeFileSync("mock/books.json",JSON.stringify(data))
    res.send({ code:1 })
})

// 切换加入书架
router.post("/api/toggle",(req,res)=>{
    let { id  }= req.body;
    let data = JSON.parse(fs.readFileSync("mock/books.json"))
    // 通过id 找对象
    let o = data.find(item=>item.id === id);
    // 修改字段  isHas
    o.isHas = !o.isHas;

    fs.writeFileSync("mock/books.json",JSON.stringify(data))
    res.send({ code:1 })
})

// 修改数据
router.post("/api/save",(req,res)=>{
    let { id }= req.body;
    let data = JSON.parse(fs.readFileSync("mock/books.json"))
    // 通过id 找对象
    let o = data.find(item=>item.id === id);
    // 修改字段  isHas
    Object.assign(o,req.body)

    fs.writeFileSync("mock/books.json",JSON.stringify(data))
    res.send({ code:1 })
})








