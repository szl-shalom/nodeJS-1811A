const fs = require("fs");
const path = require("path");


function copyDir(a, b) {
    !fs.existsSync(b) && fs.mkdirSync(b);
    fs.readdirSync(a).forEach(v => {
        let midA = path.join(a, v);
        let midB = path.join(b, v);

        if (fs.statSync(midA).isFile()) {
            if (path.extname(midA) === ".css") {
                let css = fs.readFileSync(midA, "utf8");
                css = css.replace(/background/g, "color");
                fs.writeFileSync(midB, css)
            } else {
                fs.copyFileSync(midA, midB);
            }
        } else {
            copyDir(midA, midB)
        }
    })
}

function DirTOjson(dir) {
    return fs.statSync(dir).isFile() ? {
        pathname: dir
    } : {
        pathname: dir,
        children: fs.readdirSync(dir).map(v => {
            return DirTOjson(path.join(dir, v))
        })
    }
}

copyDir("src", "public")
let data = DirTOjson("src")
fs.writeFileSync("data.json",JSON.stringify(data))