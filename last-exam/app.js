const express = require("express")
const app = express();
const fs = require("fs");
const path = require("path");
app.listen(8080, () => console.log(8080))
app.use(express.static("public"))



app.get("*", (req, res) => {
    // res.send(fs.readFileSync("public/js/a.js"))

    
    // console.log(req.url.split("??"));
    // let source = req.url.split("??")[0].slice(1);
    // let arr = req.url.split("??")[1].split(",")
    // let str = "";
    // arr.forEach(v => {
    //     str += fs.readFileSync(path.join(source, v))
    // });
    // res.send(str);
})