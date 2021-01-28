const fs = require("fs");
const path = require("path");


// 同步执行代码
// function removeDir(dirname) {
//     // 循环子目录
//     fs.readdirSync(dirname).forEach(v => {
//         // 拼接目录
//         let realPath = path.join(dirname, v);
//         // 判断是文件还是文件夹
//         if(fs.statSync(realPath).isFile()){
//             fs.unlinkSync(realPath)
//         }else{
//             removeDir(realPath)
//         }
//     })

//     fs.rmdirSync(dirname)
// }

// function readdir(dirname) {
//     return new Promise((resolve, reject) => {
//         fs.readdir(dirname, (err, arr) => {
//             if (err) {
//                 reject(err)
//                 return;
//             }
//             resolve(arr)
//         })
//     })
// }



// // 异步代码
// function removeDir(dirname) {
//     readdir(dirname).then(arr => {
//         arr.map(v => {
//             let realPath = path.join(dirname, v);
//             if (fs.statSync(realPath).isFile()) {
//                 fs.unlinkSync(realPath)
//             } else {
//                 removeDir(realPath)
//             }
//         })

//         fs.rmdir(dirname, (err) => {
//             console.log(err)
//         })
//     })
// }


// removeDir("day6")