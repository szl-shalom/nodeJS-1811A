const Mock = require("mockjs");
const fs = require("fs");
const data = Mock.mock({
    "tab|5": [{
        "title": "@ctitle",
        "children|3-10": [{
            "url": "@image(200x100,@color)",
            "title": "@ctitle",
            "desc": "@cword(20)"
        }]
    }],
    "books|50":[{
        "title":"@ctitle",
        "auther":"@cname",
        "num|30-300":1,
        "source|1000-3000":1,
        "isHas":false,
        "desc":"@cword(30,60)",
        "id":"@id",
        "url":"@image(100x200,@color)",
        "date":"@date"
    }]
})

fs.writeFileSync("tab.json", JSON.stringify(data.tab))
fs.writeFileSync("books.json", JSON.stringify(data.books))