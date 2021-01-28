const Mock = require("mockjs");
const fs = require("fs");


let data = Mock.mock({
    // 用户数据
    "user|10-20": [{
        user: "@cname",
        pwd: "@word(6,12)"
    }],
    // 列表数据
    "list|10":[{
        title:"@ctitle",
        "price|100-1000":1,
        url:"@image(200x100,@color,@city)"
    }]
})

console.log(data)
fs.writeFileSync("user.json",JSON.stringify(data.user))
fs.writeFileSync("list.json",JSON.stringify(data.list))