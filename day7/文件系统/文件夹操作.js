const fs = require("fs");



// 1.创建文件夹
// 异步：fs.mkdir(dirname,callback);
// 同步：fs.mkdirSync(dirname);


// fs.mkdirSync("123")

// fs.writeFileSync("123/1.txt","哈哈")



// 2.删除文件夹    => 删除空目录   非空目录不可以删除
// 异步：fs.rmdir(dirname,callback)
// 同步：fs.rmdirSync(dirname)

// fs.unlinkSync("123/1.txt")
// fs.rmdirSync("123")



// 3.读取文件夹的子目录


// let arr = fs.readdirSync("./");
// console.log(arr)