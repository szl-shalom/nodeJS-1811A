const Mock = require("mockjs");
const fs = require("fs");



fs.writeFileSync("data.js", JSON.stringify(Mock.mock({
    "list|100": [{
        title: "@ctitle",
        url: "@image(200x100,@color)",
    }]
}).list))