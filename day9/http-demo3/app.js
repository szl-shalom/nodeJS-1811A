const http = require("http");
const fs = require("fs");
const path = require("path")
console.log(1)
const server = http.createServer((req, res) => {
    // 任意请求路径返回  都返回页面
    // 如果访问的是 /   返回public/index.html
    if (req.url === "/") {
        // res.setHeader("Content-type", "text/html;charset=utf8")
        res.end(fs.readFileSync("public/index.html"))
    } else if (req.url === "/css/index.css") {
        res.end(fs.readFileSync("public/css/index.css"))
    } else if (req.url === "/js/index.js") {
        res.end(fs.readFileSync("public/js/index.js"))
    } else if (req.url === "/img/1.jpg") {
        res.end(fs.readFileSync("public/img/1.jpg"))
    } else if (req.url === "/favicon.ico") {
        res.end(fs.readFileSync("public/favicon.ico"))
    } else {
        // 设置编码格式
        // res.setHeader("Content-type", "text/plain;charset=utf8")
        // 设置状态码
        // res.statusCode = 404;
        // 如果访问的不是 /  返回 404页面  同时告诉浏览器  访问的那个路径不存在
        // res.setStatus(200)
        res.end(`404 Not Found-------${req.url}找不到！！！！`)
    }


    // 方式二：动态响应静态资源
    // 1.请求路径
    let pathname = req.url;
    // url => /
    // url => /css/index.css
    // url => /js/index.js
    // url => /img/1.jpg
    // url => /js/main.js
    // 2.判断请求路径是不是更路径
    if (pathname === "/") {
        // 2-1 是根路径就改名字
        pathname = "/index.html"
    }
    // public/index.html
    // public/css/index.css
    // public/js/index.js
    // public/img/1.jpg
    // public/js/main.js
    // public/css/main.css
    // 3.判断路径是否真实存在
    if (fs.existsSync(path.join("public", pathname))) {
        res.end(fs.readFileSync(path.join("public", pathname)))
    } else {
        res.end("404----not found------" + req.url)
    }

});



server.listen(8000, () => console.log("服务器在8080启动了！！"))