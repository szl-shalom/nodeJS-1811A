const Mock = require("mockjs");
const fs = require("fs");


// let data = Mock.mock({
//     name: "@cname",
//     title: "@ctitle",
//     age: "@integer(20,30)",
//     "num|20-30": 1,
//     url:"@image",
//     color:"@color",
//     city:"@city"
// })
let data = Mock.mock({
    "list|10": [{
        user: "@cname",
        pwd: "@word(6,12)"
    }]
})

console.log(data)

fs.writeFileSync("data.json",JSON.stringify(data.list))