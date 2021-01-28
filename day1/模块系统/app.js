const result = require("./1.js");

console.log(result);


setTimeout(function () {
    console.log(result)
}, 2000)