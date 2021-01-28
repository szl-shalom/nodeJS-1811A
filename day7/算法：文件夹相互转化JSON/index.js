const fs = require("fs");
const path = require("path");

function dirToJSON(dir) {
    let info = fs.statSync(dir)
    if (info.isFile()) {
        // 是文件
        return {
            // 获取路径最后一个名字
            basename: path.basename(dir),
            pathname: dir,
            extname: path.extname(dir),
            type: "file",
            size: info.size,
            content: fs.readFileSync(dir, "utf-8")
        }
    } else {
        // 是文件夹
        return {
            pathname: dir,
            type: "dir",
            children: fs.readdirSync(dir).map(v => {
                return dirToJSON(dir + "/" + v)
            })
        }

    }
}



// let o = dirToJSON("demo");
// fs.writeFileSync("data.json", JSON.stringify(o))


function JSONToDir(obj) {
    if (obj.type === "dir") {
        // 是文件夹
        fs.mkdirSync(obj.pathname);
        obj.children.forEach(item => {
            JSONToDir(item)
        })
    } else {
        // 是文件
        fs.writeFileSync(obj.pathname, obj.content)
    }
}

// let o = JSON.parse(fs.readFileSync("data.json"));
// JSONToDir(o)