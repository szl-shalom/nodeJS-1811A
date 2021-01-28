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