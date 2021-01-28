const fs = require("fs");


let html = fs.readFileSync("src/index.html", "utf8");
let css = fs.readFileSync("src/css/app.css", "utf8");
let js = fs.readFileSync("src/js/app.js", "utf8");

let result = html.replace("<!-- 这里替换css -->", `<style>${css}</style>`).replace("<!-- 这里替换js -->", `<script>${js}</script>`);

let str = result.replace(/(\s\s\s)|\n/g, "")
console.log(str)
fs.writeFileSync("new.html", result)
fs.writeFileSync("new.min.html", str)