const express = require("express");
const router = express.Router();
const fs = require("fs");
module.exports = router;



router.post("/api/login", (req, res) => {
    let {
        user,
        pwd
    } = req.body;
    let data = JSON.parse(fs.readFileSync("mock/user.json"));
    let flag = data.some(item => item.user === user && item.pwd === pwd);
    res.send({ code:flag })
})

router.post("/api/register", (req, res) => {
    let {
        user,
        pwd
    } = req.body;
    let data = JSON.parse(fs.readFileSync("mock/user.json"));
    let flag = data.some(item => item.user === user);
    if(flag){
        res.send({ code:0 })
    }else{
        data.push(req.body);
        fs.writeFileSync("mock/user.json",JSON.stringify(data))
        res.send({ code:1 })
    }
})