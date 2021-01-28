const fs = require("fs");
// 1、创建一个自定义的函数(20分)
// 2、面向对象编程，创建一名为ReadFile的构造函数，设置默认参数(20分)



// 1、创建一个自定义的函数(20分)
// 2、面向对象编程，创建一名为ReadFile的构造函数，设置默认参数(20分)
class ReadFile {
    constructor(pathname) {
        // 3、结合commonjs规范,判断文件大小（20分）

        if (fs.statSync(pathname).size > 4 * 1024) {
            // 4、分别使用数据流、数据块的方式进行文件读取。（20分）
            let read = fs.createReadStream(pathname)
        } else {
            // 4、分别使用数据流、数据块的方式进行文件读取。（20分）

            let res = fs.readFileSync(pathname)
        }
    }
}

// 5、命名合理，项目目录规范（20分）
