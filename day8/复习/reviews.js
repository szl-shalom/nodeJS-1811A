const path = require("path");
// let str = "user/1811a/day8/123";
// // 获取  index.js
// console.log(path.basename(str)) //获取最后一个路径
// console.log(path.dirname(str)) //获取文件夹所在路径（其实就是除了最后一个路径）
// console.log(path.extname(str)) //获取扩展名  


// console.log(path.resolve());
// console.log(__dirname)


// console.log(path.join(__dirname, "123", "../456", "../1"))

// console.log(path)

let str = "C:/Users/龙/Documents/Tencent Files/906446244/FileRecv/周考/123";
let o = {
    root: 'C:/',    //磁盘
    dir: 'C:/Users/龙/Documents/Tencent Files/906446244/FileRecv/周考',  // 获取文件夹所在路径（其实就是除了最后一个路径）
    base: 'index.js',     //获取最后一个路径
    ext: '.css',  ////获取扩展名  
    name: '1'    //文件名称
}

console.log(path.parse(str))
// console.log(path.format(o));