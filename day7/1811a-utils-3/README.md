# 复制文件夹
```javascript
const fs = require("fs");


function copyDir(source, target) {
    if (!fs.existsSync(target)) {
        // 1.创建目标目录
        fs.mkdirSync(target);
    }

    // 2.读取源文件夹子目录
    let arr = fs.readdirSync(source)
    // 3.遍历每一个子目录
    arr.forEach(v => {
        // 拼接路径
        let midSource = source + "/" + v
        let midTarget = target + "/" + v
        if (fs.statSync(midSource).isFile()) {
            // 是文件
            fs.copyFileSync(midSource, midTarget)
        } else {
            // 是文件夹
            copyDir(midSource, midTarget)
        }
    })
}



copyDir("demo", "demo1")
```

# 删除文件夹
```javascript
const fs = require("fs");
// 算法实现： 删除非空文件夹


function removeDir(dir) {
    // 1.获取文件夹的子目录
    let arr = fs.readdirSync(dir);
    // 2.循环子目录
    arr.forEach(v => {
        // 路径拼接下
        v = dir + "/" + v;
        // 2-1 读取文件信息    
        let isFile = fs.statSync(v).isFile()
        // 2-2 判断是文件还是文件夹
        if(isFile){
            // 是文件  直接删除
            fs.unlinkSync(v)
        }else{
            // 是文件夹  
            // 递归删除文件夹
            removeDir(v)
        }
    })
    // 3.删除文件夹
    fs.rmdirSync(dir);

}


removeDir("demo")
```


# 转化
```javascript
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
```