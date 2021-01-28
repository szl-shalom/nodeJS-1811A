// 引入核心内置模块
const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

// 数据
const data = [{
    user: "1811a",
    pwd: "123456"
}, {
    user: "张三",
    pwd: "zhangsan"
}, {
    user: "admin",
    pwd: "admin"
}]


// 创建服务器
const server = http.createServer((req, res) => {
    // 请求路径
    let pathname = url.parse(req.url).pathname;
    // 是不是根路径
    if (pathname === '/') {
        pathname = 'index.html';
    }
    // 判断静态资源
    if (path.extname(pathname)) {
        // 是静态
        if (fs.existsSync(path.join('public', pathname))) {
            res.end(fs.readFileSync(path.join('public', pathname)))
        } else {
            res.end("not found")
        }
    } else {

        // 是接口   登录 POST 请求方式
        if (pathname === "/api/login" && req.method === "POST") {
            let str = "";
            // 数据发送事件
            req.on("data", (chunk) => {
                str += chunk;
            })
            // 数据发送完毕事件
            req.on("end", () => {
                // console.log(str)
                let {
                    user,
                    pwd
                } = JSON.parse(str);


                let flag = data.some(item => item.user === user && item.pwd === pwd)
                if (flag) {
                    res.end("1")
                } else {
                    res.end("0")
                }

            })
        }


        // 接口  注册  post
        if (pathname === "/api/register" && req.method === "POST") {
            let str = "";
            // 数据发送事件
            req.on("data", (chunk) => {
                str += chunk;
            })
            // 数据发送完毕事件
            req.on("end", () => {
                let o = JSON.parse(str);

                let flag = data.some(item => item.user === o.user);
                if (flag) {
                    res.end("0")
                } else {
                    data.push(o);
                    res.end("1")
                }
            })
        }
    }
})
// 监听端口
server.listen(8080, () => console.log('8080服务器启动成功！'))