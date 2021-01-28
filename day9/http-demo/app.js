const http = require("http");
const fs = require("fs");


// 创建服务器
let server = http.createServer((request, response) => {
    // request  请求体
    // resoonese 响应体
    // console.log(request.url)

    if (request.url === "/index.html") {
        let html = fs.readFileSync("public/index.html");
        response.end(html)
    }else{
        response.end("Not Found!!!!!!!!")
    }

})


// 监听端口
server.listen(8080, () => {
    console.log("服务器在8080启动了！！！")
})