const fs = require("fs");
const path = require("path")
let str = ""
fs.readdirSync("src").forEach(v => {
    let pathname = path.join("src", v);

    if (path.extname(pathname) === ".js") {
        str += fs.readFileSync(pathname)
    }
})

fs.writeFileSync("script.min.js", str)