const fs = require("fs");
const path = require("path");

// 3.	使用promise封装fs读取方法
const readFile = (url) => {
    return new Promise((resolve, reject) => {
        fs.readFile(url, "utf8", (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data)
        })
    })
}

async function copyDir(url1, url2) {
    // 9.	如果是文件夹，就在一个新的路径下，创建一个同名称的目录
    !fs.existsSync(url2) && fs.mkdirSync(url2);


    // 4.	使用ES新语法进行遍历
    let arr = fs.readdirSync(url1);
    for (let i = 0; i < arr.length; i++) {
        let v = arr[i]
        // 5.	读取一个包含多级（最小三级，递归实现）的目录，路径需自行传入
        let midUrl1 = path.join(url1, v)
        let midUrl2 = path.join(url2, v)
        // 8.	判断是文件还是文件夹
        if (fs.statSync(midUrl1).isFile()) {
            // 6.	通过使用封装的读取方法来读取目录
            // 10.	如果是文件，就读取文件内容，并写入到同级目录下，文件名和读取文件名相同
            // 7.	使用async/await结合promise实现同步方式读取
            let res = await readFile(midUrl1);
            fs.writeFileSync(midUrl2, res)
        } else {
            copyDir(midUrl1, midUrl2);
        }
    }
}

copyDir("src", "build")

// 11.	正确实现递归创建文件及目录








// 12.	代码测试成功后，将本地代码打包发布到npm官网
// 13.	找一个新的目录下载自己刚刚上传的包，引入并测试这个下载的包提供的功能