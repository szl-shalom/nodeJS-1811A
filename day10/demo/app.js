const http = require("http");
const url = require("url"); //处理网络路径
const path = require("path"); //处理本地路径
const fs = require("fs");
const data = require("./mock/data");
//     /api/data
const server = http.createServer((req, res) => {
    // req  请求体
    // res  响应体
    // 1.获取请求路径
    let pathname = url.parse(req.url, true).pathname;
    // 2.判断访问的是不是根路径
    if (pathname === "/") {
        pathname = "/index.html";
    }
    // 3请求的是不是静态资源 => 是文件  => 文件包含扩展名
    if (path.extname(pathname)) {
        // 访问静态资源
        // 3-1  判断文件是否存在
        if (fs.existsSync(path.join("public", pathname))) {
            res.end(fs.readFileSync(path.join("public", pathname)))
        } else {
            res.end("not found")
        }
    } else {
        // 访问接口

        if (pathname === "/api/data") {
            res.end(JSON.stringify(data))
        }


        if (pathname === "/123/321/456") {
            res.end("aaaaaa")
        }
    }

});

server.listen(8080, () => console.log("8080启动！！"))