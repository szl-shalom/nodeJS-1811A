const ejs = require("ejs");
const fs = require("fs");
let file = fs.readFileSync("index.ejs", "utf8");

let arr = ["a", "b", "c", "d"]
let num = 10;
let html = ejs.render(file,{ arr })
console.log(html)