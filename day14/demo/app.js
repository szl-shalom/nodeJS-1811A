const express = require("express"); //引入
const app = express(); //获取顶层 实例
const fs = require("fs");
// 处理静态资源
app.use(express.static("public", {
    index: "login.html"
}))
// 处理post json 请求
// 它会将数据绑定在  req.body身上
app.use(express.json())


// 接口处理 

// 登录接口
app.post("/api/login", (req, res) => {
    let { user,pwd  } = req.body;



    
    // 读取本地数据 同事转化JSON
    let data = JSON.parse(fs.readFileSync("mock/data.json"))
    let flag = data.some(item=>item.user === user && item.pwd === pwd)
    if(flag){
        res.end("1")
    }else{
        res.end("0")
    }
})



// 监听服务
app.listen(8080, () => console.log("8080启动了！"))