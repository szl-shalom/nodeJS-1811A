const express = require("express");
const app = express();
const fs = require("fs");
app.listen(8080, () => console.log("服务器启动了!"));


app.use(express.static("public", {
    index: "login.html"
}));
app.use(express.json())


// 数据删除接口
app.post("/api/delete", (req, res) => {
    let {
        id
    } = req.body;

    // console.log(typeof  id)
    let data = JSON.parse(fs.readFileSync("mock/list.json"))

    // 过滤删除
    data = data.filter(item => {
        console.log(item.id, id)
        return item.id !== id
    });

    fs.writeFileSync("mock/list.json",JSON.stringify(data))
    res.send({
        code: 1
    })
})

// 数据请求接口
app.post("/api/list", (req, res) => res.send(fs.readFileSync("mock/list.json")))


// 登录接口
app.post("/api/login", (req, res) => {
    let {
        user,
        pwd
    } = req.body;
    let data = JSON.parse(fs.readFileSync("mock/user.json"));

    let isExit = data.some(item => item.user === user && item.pwd === pwd);

    isExit ? res.send({
        code: 1
    }) : res.send({
        code: 0
    });
})



// 注册接口
app.post("/api/register", (req, res) => {
    let {
        user,
        pwd
    } = req.body;
    let data = JSON.parse(fs.readFileSync("mock/user.json"));

    let isExit = data.some(item => item.user === user);

    if (isExit) {
        res.send({
            code: 0
        })
    } else {
        data.push(req.body);

        fs.writeFileSync("mock/user.json", JSON.stringify(data))

        res.send({
            code: 1
        })
    }
})