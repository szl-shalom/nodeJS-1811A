const Mock = require("mockjs");
const fs = require("fs");
const data = Mock.mock({
    "list|10": [{
        "id": "@id",
        name: "@cname",
        sex: "22"
    }]
})

fs.writeFileSync("list.json",JSON.stringify(data.list))