const p1 = require("./1");
const p2 = require("./2");
const p3 = require("./3");

const name = p1("张三")
const age = p2(19)
const hobby = p1("打球");

const o = {
    name: name,
    age: age,
    hobby: hobby
}

console.log(o)