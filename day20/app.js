const express = require("express");
const app = express();
const fs = require("fs");
app.listen("8080", () => console.log(8080))
// 引入
const loginRouter = require("./server/loginRouter");
const listRouter = require("./server/listRouter");

app.use(express.static("public", {
    index: "login.html"
}))
app.use(express.json())


// 使用
app.use(loginRouter);
app.use(listRouter);

