const { json } = require("express");
const express = require("express")
const app = express();
const fs = require("fs")



// 引入路由
const booksRouter = require("./server/bookRouter");

// 中间件
app.use(express.static("public",{ index:"book.html" }));
app.use(express.json());
app.use(express.urlencoded());


// 使用路由
app.use(booksRouter);


// 监听
app.listen(8080, () => console.log("8080!!!!"));


// 接口
app.get("/api/books",(req,res)=>res.send(fs.readFileSync("mock/books.json")))
app.post("/api/tab",(req,res)=>res.send(fs.readFileSync("mock/tab.json")))
