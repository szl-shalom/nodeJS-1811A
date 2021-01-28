// const p = new Promise((resolve, reject) => {
//     // resolve()
//     reject()
// });



// p.then(() => {
//     console.log("成功回调函数")
// }).catch(() => {
//     console.log("失败回调函数")
// })


const fs = require("fs");

// 同步
// let data = fs.readFileSync("1.txt", "utf8")
// 异步
// fs.readFile("1.txt", "utf8", (err, data) => {
//     console.log(err, data)
// })
// console.log(data)
// 请使用Promise封装一个异步读取方法  read
function read(url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, "utf8", (err, data) => {
            if (err) {
                reject(err)
                return;
            }
            resolve(data)
        })
    })
}

async function readAll() {
    let d1 = await read("1.txt");
    console.log(d1)
    let d2 = await read("2.txt");
    console.log(d2)
    let d3 = await read("3.txt");
    console.log(d3)

}


readAll()

// read("1.txt").then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })

// read("2.txt").then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })

// read("3.txt").then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })