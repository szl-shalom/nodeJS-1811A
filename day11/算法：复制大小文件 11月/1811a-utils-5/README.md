```javascript

const fs = require("fs");
const path = require("path");


function copydir(source, target) {
    // 文件夹不存在  就创建
    !fs.existsSync(target) && fs.mkdirSync(target)
    // 循环子目录
    fs.readdirSync(source).forEach(v => {
        // 获取正确的路径
        let midSource = path.join(source, v)
        let midTarget = path.join(target, v)
        // 目录是否存在
        let isExit = fs.existsSync(midTarget);
        // 判断是不是文件
        let isFile = fs.statSync(midSource).isFile()

        if (isFile) {
            if (isExit) {
                // 获取字符串路径转化对象
                let o = path.parse(midTarget);
                // 判断文件是否存在
                while (isExit) {
                    // 获取名字 += (数字)
                    let name = o.name + `(${++i})`
                    // 修改目标目录
                    midTarget = o.dir + "/" + name + o.ext;
                    // 修改开关变量  新的目录是否存在
                    isExit = fs.existsSync(midTarget);
                }

            }
            // 是文件
            // 判断大小是否超过4mb
            // 单位 ： b
            // 1kb = 1024b
            // 1mb = 1024kb
            let size = fs.statSync(midSource).size;
            if (size > 4 * 1024) {
                // 流式
                let read = fs.createReadStream(midSource);
                let write = fs.createWriteStream(midTarget);
                read.pipe(write);
                console.log(midSource)
            } else {
                // 普通读取
                fs.copyFileSync(midSource, midTarget)
            }
        } else {
            // 是文件夹
            // 递归
            copydir(midSource, midTarget)
        }

    })

}


```