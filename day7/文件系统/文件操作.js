const fs = require("fs"); // 引入核心内置模块

// 所有的fs的方法 ：
// 带Sync时同步方法，不带的时异步方法，但是异步方法最后一个参数一定时回调函数
// 文件操作
// 1.读取文件
// pathname :  读取文件的路径  
// encoding :  编码格式
// callback :  回调函数
// 语法： fs.readFile(pathname, [encoding],callback);
//        fs.readFileSync(pathname,[encoding]);
// fs.readFile("1.txt", "utf-8", (err, data) => {
//     console.log(data)
// })

// let data = fs.readFileSync("1.txt", "utf-8");
// console.log(data)


// fs.readFile("1.txt", "utf-8", (err, data) => {
//     fs.readFile("2.txt", "utf-8", (err, data1) => {
//         console.log("异步结束")
//     })
// })


// let str1 = fs.readFileSync("1.txt", "utf-8")
// let str2 = fs.readFileSync("2.txt", "utf-8");

// console.log("同步结束")


// 2.写入文件
// 异步：fs.writeFile(pathname, data, callback)
// 同步：fs.writeFileSync(pathname, data)

// fs.writeFile("1.txt", "嘿嘿嘿", () => {})

// let str1 = fs.readFileSync("1.txt", "utf-8");
// fs.writeFileSync("1.txt", str1 + "呵呵呵")
// fs.writeFileSync("1.txt", "呵呵呵")

// 3.追加文件
// 异步：fs.appendFile(pathname,data,callback)
// 同步：fs.appendFileSync(pathname,data)

// fs.appendFileSync("1.txt", "呵呵呵")

// 4删除文件
// 异步：fs.unlink(pathname,callback)
// 同步：fs.unlinkSync(pathname)


// fs.unlink("1.txt", (err) => {
//     console.log(err)
// })

// 5.改名字
// fs.rename(oldName, newName,callback);
// fs.renameSync(oldName, newName);

// fs.renameSync("1.txt", "2.txt");