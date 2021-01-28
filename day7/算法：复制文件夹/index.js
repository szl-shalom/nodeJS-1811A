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