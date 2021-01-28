const path = require("path");
const fs = require("fs");




function dirToJSON(dir) {
    return fs.statSync(dir).isFile() ? {
        // 是文件
        name: path.parse(dir).name,
        ext: path.extname(dir) || path.parse(dir).ext,
        dir: path.dirname(dir) || path.parse(dir).dir,
        pathname: dir,
        type: "file",
        size: fs.statSync(dir).size,
        con: fs.readFileSync(dir, "utf8"),

    } : {
        // 是文件夹
        name: path.parse(dir).name || path.basename(dir),
        dir: path.dirname(dir) || path.parse(dir).dir,
        pathname: dir,
        type: "dir",
        children: fs.readdirSync(dir).map(v => dirToJSON(path.join(dir, v)))
    }
}


function JSONToDir(obj) {
    if (obj.type === "file") {
        fs.writeFileSync(obj.pathname, obj.con)
    } else {
        fs.mkdirSync(obj.pathname);
        obj.children.forEach(v => {
            JSONToDir(v)
        })
    }
}

JSONToDir(JSON.parse(fs.readFileSync("data.json")))