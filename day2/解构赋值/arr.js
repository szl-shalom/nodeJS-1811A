// 数组解构赋值
// 1.一一对应原则   左右数据类型要对等
// 2.扩展运算符...  只能出现在末尾   获取未被解构的值
// 3.默认值  只有当解构的值是undefined的时候  会走默认值 



// let arr = [1, 2, NaN]

// let [a, b, c = 5] = arr

// console.log(a, b, c)


// 对象解构
let o = {
    name: "张三",
    age: 18,
    sex: "男"
}

let {
    name,
    ...o1
} = o
console.log(o1)

// let name =o.name;
// let age =o.age;
// let sex =o.sex;