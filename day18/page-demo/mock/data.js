const fs = require("fs")
const Mock = require("mockjs")
const data = Mock.mock({
    "list|88": [{
        "title": "@ctitle",
        "url": "@image(200x100,@color,@cname)",
        "price|100-10000": 1,
        "id": "@id",
        "desc":"@cword(20,40)",
        "auther":"@cname"
    }]
})

fs.writeFileSync("list.json",JSON.stringify(data.list))