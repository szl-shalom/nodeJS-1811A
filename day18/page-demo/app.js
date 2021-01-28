const { json } = require("body-parser");
const express = require("express");
const app = express();
const fs = require("fs")

app.listen(8080, () => console.log(8080))


app.use(express.static("public"))
app.use(express.json());


app.post("/api/detail",(req,res)=>{
    let data = JSON.parse(fs.readFileSync("mock/list.json"));
    let o = data.find(item=>item.id === req.body.id)
    res.send(o)
})


app.post("/api/list", (req, res) => {
    let {
        pageSize,
        index
    } = req.body;

    let data = JSON.parse(fs.readFileSync("mock/list.json"))

    res.send({
        data: data.slice(index * pageSize, (+index + 1) * pageSize),
        pageMaxCode:Math.ceil(data.length / pageSize)
    })
})
































// 分液器基本原理  

// let arr = ["a", "b", "c", "d", "e", 'f', 'g', 'h', 'i', 'k']
//         0    1     2    3    4   5     6    7    8     9


// 请把  a,b,c  截取出来           下标         每组几个人
// let p1 = arr.slice(0, 3)        0               3
// d,e,f 
// let p2 = arr.slice(3, 6)        1               3
// g,h,i
// let p3 = arr.slice(6,9)         2               3

//  截取开始下标   =   下标 *  每组个数
//  截取终止下标   = (下标 + 1) * 每组个数


// data:大数据
// index:下标
// pageSize：每组个数
// 数据截取
// data.slice(index*pageSize, (index+1) * pageSize)
// 最大分组
// Math.ceil(data.length / pageSize)