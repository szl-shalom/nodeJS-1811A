const Mock = require("mockjs");
const fs = require("fs");
const {
    SSL_OP_NO_TLSv1_1
} = require("constants");


let o = Mock.mock({
    "user|10": [{
        user: "@cname",
        pwd: "@word(6,12)",
        id: "@id"
    }],
    "list|10": [{
        name: "@cname",
        "age|18-28": 1,
        "sex": "@boolean",
        id:"@id"
    }]
})


fs.writeFileSync("user.json", JSON.stringify(o.user))
fs.writeFileSync("list.json", JSON.stringify(o.list))