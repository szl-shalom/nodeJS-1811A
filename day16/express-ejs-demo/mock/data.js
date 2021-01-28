const Mock = require("mockjs");
const fs = require("fs");


let data = Mock.mock({
    "user|10": [{
        user: "@cname",
        pwd: "123"
    }],
    "list|20": [{
        "id": "@id",
        name: "@cname",
        "age|12-30": 1,
        sex: /^[男女]$/,
        tel: /^1[3-9]\d{9}$/,
    }]
})


fs.writeFileSync("user.json", JSON.stringify(data.user))
fs.writeFileSync("list.json", JSON.stringify(data.list))