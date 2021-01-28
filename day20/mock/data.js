const Mock = require("mockjs");
const fs = require("fs");

let data = Mock.mock({
    "user|10": [{
        "user": "@cname",
        "pwd": "123"
    }],
    "list|5": [{
        "url": "@image(50x50,@color,@cname)",
        "name": "@cname",
        "date": "date",
        "desc": "@cword(20,50)",
        "id": "@id",
        "mes|20-1000": [{
            "name": "@cname",
            "id": "@id",
            "say": "@cword(12,20)",
        }],
        "zan|200-1000":1,
    }]
})

fs.writeFileSync("user.json", JSON.stringify(data.user));
fs.writeFileSync("list.json", JSON.stringify(data.list));