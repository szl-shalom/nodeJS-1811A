// 服务器文件
const express = require("express");
// 获取顶层express实例
const app = express();

// 处理静态资源
app.use(express.static("public", {
    index: "login.html"    //设置首页
}))


app.listen(8080, () => console.log("server is running at port 8080 !!!"))