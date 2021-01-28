// 这个文件是服务器文件
// 1.引入核心内置模块
const http = require("http");

const fs = require("fs");


// 2.创建服务器
const server = http.createServer((req, res) => {
    // 2-1 获取请求路径
    let pathname = req.url;

    // 2-2 判断
    if (pathname === "/index.html") {
        res.end(fs.readFileSync("public/index.html"))
    } else if (pathname === "/css/index.css") {
        res.end(fs.readFileSync("public/css/index.css"))
    } else if (pathname === "/js/index.js") {
        res.end(fs.readFileSync("public/js/index.js"))
    } else if (pathname === "/favicon.ico") {
        res.end(fs.readFileSync("public/favicon.ico"))
    } else if (pathname === "/images/1.jpg") {
        res.end(fs.readFileSync("public/images/1.jpg"))
    } else {
        res.end(fs.readFileSync("public/404.html"))
    }
});



// 3.监听端口
server.listen(8080, () => console.log("server is running at port 8080 !!!!"))