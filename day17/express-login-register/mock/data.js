const Mock = require("mockjs");
const fs = require("fs");
const data = Mock.mock({
    "user|10": [{
        "user": "@cname",
        "pwd": "123",
        "id": "@id"
    }]
})


fs.writeFileSync("user.json", JSON.stringify(data.user))