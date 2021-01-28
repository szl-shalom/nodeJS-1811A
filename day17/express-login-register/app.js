const express = require("express");
const app = express();
const fs = require("fs");
let nodeCode; //全局   变量  验证码
// 监听
app.listen(8080, () => console.log("8080！！！！！！！！"));
// 中间件
app.use(express.static("public", {
    index: "login.html"
}));
app.use(express.json());
// 接口


app.post("/api/code", (req, res) => {
    // 随机验证码
    nodeCode = Math.random().toString(36).slice(2, 6);
    // 返回验证码
    res.send({
        code: nodeCode,
    })
})


app.post("/api/login", (req, res) => {
    let {
        user,
        pwd,
        code
    } = req.body; //获取用户名和密码‘以及验证码
    // 判断验证是否正确
    if (code !== nodeCode) {
        res.send({
            code: 0,
            mess: "验证码不正确"
        })
        return;
    }



    // 登录注册功能
    let data = JSON.parse(fs.readFileSync("mock/user.json")); //读取本地文件
    let flag = data.some(item => item.user === user && item.pwd === pwd) //判断用户名和密码是否同时正确
    let flag1 = data.some(item => item.user === user) //判断用户名是否存在
    if (flag) {
        // 用户名和密码同时正确
        // 登录成功
        res.send({
            code: 1,
            mess: "登录成功"
        })
    } else if (flag1) {
        // 用户名存在
        // 但是密码不正确
        res.send({
            code: 0,
            mess: "密码错误"
        })
    } else {
        // 用户不存在
        // 注册

        // 推入数据
        data.push({
            user: user,
            pwd: pwd,
            id: Math.random().toString().slice(2)
        })
        // 更新本地数据
        fs.writeFileSync("mock/user.json", JSON.stringify(data))
        res.send({
            code: 2,
            mess: "注册成功"
        })


    }
})