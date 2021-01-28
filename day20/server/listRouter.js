const express = require("express");
const router = express.Router();
const fs = require("fs");
module.exports = router;


router.post("/api/mes/add",(req,res)=>{
    let { id } = req.body;
    let data = JSON.parse(fs.readFileSync("mock/list.json"))
    let o = data.find(item=>item.id === id);
    o.mes.unshift(req.body.o);
    fs.writeFileSync("mock/list.json",JSON.stringify(data));
    res.send({ code:1 })
})


router.post("/api/detail",(req,res)=>{
    let { id } = req.body;
    let data = JSON.parse(fs.readFileSync("mock/list.json"))

    let o = data.find(item=>item.id === id);
    res.send(o)
})



router.post("/api/zan", (req, res) => {
    let {
       id,
    } = req.body;
    let data = JSON.parse(fs.readFileSync("mock/list.json"));
    let o = data.find(item=>item.id === id)
    o.zan++;
    fs.writeFileSync("mock/list.json",JSON.stringify(data))
    res.send({ code:1 })
})


router.get("/api/list", (req, res) => {
    res.send(fs.readFileSync("mock/list.json"))
})