const Mock = require("mockjs")
const fs = require("fs");




let data = Mock.mock({
    "list|6": [{
        "name": "@cname",
        "count|1-10": 1,
        "score|90-100": 1,
        "id": "@id"
    }]
})

fs.writeFileSync("list.json", JSON.stringify(data.list))