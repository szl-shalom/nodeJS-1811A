const express = require("express")
const app = express();
const fs = require("fs");
app.listen(8080, () => console.log("服务启动了 8080"));



app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded());; //处理表单

//设置模板引擎
app.set("view engine", "ejs")
// 单独处理首页
app.all("/", (req, res) => {
    res.render("index", {
        title: "哈哈哈"
    })
})

// 处理列表页面
app.all("/list", (req, res) => {
    res.render("list", {
        data: JSON.parse(fs.readFileSync("mock/list.json"))
    })
})


app.post("/api/list", (req, res) => {
    res.send(fs.readFileSync("mock/list.json"))
})
// 新增

app.post("/api/add", (req, res) => {
    req.body  //添加的数据
    // 读取本地数据
    let data = JSON.parse(fs.readFileSync("mock/list.json"))
    // 添加数据  推入
    data.push(req.body);
    // 写入本地数据
    fs.writeFileSync("mock/list.json",JSON.stringify(data))
    // 返回信息
    res.send({ code:1 })

})


// 删除
app.post("/api/delete", (req, res) => {
    let {
        id
    } = req.body;
    let data = JSON.parse(fs.readFileSync("mock/list.json"));
    data = data.filter(item => item.id != id);
    fs.writeFileSync("mock/list.json", JSON.stringify(data));
    res.send({
        code: 1
    })
})


app.post("/api/login", (req, res) => {
    let {
        user,
        pwd
    } = req.body;
    let data = JSON.parse(fs.readFileSync("mock/user.json"))
    let flag = data.some(item => item.user === user && item.pwd === pwd)
    flag ? res.send({
        code: 1
    }) : res.send({
        code: 0
    })
})