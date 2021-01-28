let o = {
    name: "张三",
    hobby: ["篮球", "足球", "排球"],
    desc: {
        age: 18,
        sex: "男",
        height: 180,
        a: ["哈哈"]
    }
}

let {
    name,
    hobby: [, , a],
    desc:{
        height
    }
} = o

console.log(name, a,height)
