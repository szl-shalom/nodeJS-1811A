const Mock = require("mockjs");
const fs = require("fs");
const data = Mock.mock({
    "user|10": [{
        "user": "@cname",
        "pwd": "123"
    }],
    "tab|5": [{
        title: "@ctitle",
        "children|2-8": [{
            url: "@image(200x100,@color)",
            title: "@ctitle"
        }]
    }],
})


fs.writeFileSync("user.json", JSON.stringify(data.user))
fs.writeFileSync("tab.json", JSON.stringify(data.tab))
