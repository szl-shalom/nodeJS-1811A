let a = 1;
let b = 2;


// 对象的简洁表达式
// 属性表达式

// let name = "age";
// let p = "hello";

// function say() {
//     return name + p
// }
// let o = {
//     a,
//     b,
//     [say()]: "123"
// }

// console.log(o)



// Object.assign()




// let o = Object.assign([1, 2, 3], [4, 5, 6, 11, 12], [7, 8, 9, 0])
// console.log(o)


// 算法：实现合并对象
// let o1 = {
//     name: "张三"
// };
// let o2 = {
//     age: "18"
// };
// let o3 = {
//     name: "李斯",
//     sex: "男"
// };

// function assign(res, ...arr) {
//     arr.forEach(item => {
//         // 需要循环对象
//         let keys = Object.keys(item);
//         keys.forEach(key=>{
//             res[key] = item[key]
//         })
//     })
//     return res;
// }

// let o = assign(o1, o2, o3)
// console.log(o)




// 循环对象
// let o = {
//     name: "张三",
//     age: "10",
//     sex: "男"
// }

// let p1 = Object.keys(o);
// let p2 = Object.values(o);
// let p3 = Object.entries(o)
// console.log(p1, p2, p3)

// for   ... of 循环
// for (let [key,value] of Object.entries(o)) {
//     console.log(key, value)
// }


// let num = Symbol(1);
// console.log(typeof num)


// 在不使用循环语句下，实现向数组推入1-100之间的数字（必做项）
// function fn() {
//     let arr = [];
//     let i = 0;

//     function f() {
//         arr.push(i)
//         i++ < 100 && f();

//     }
//     f();
//     return arr;
// }

// let res = fn();
// console.log(res)
// 在二维坐标系中，有100x100的矩阵，把每一个点坐标存放到map数据结构（必做项）


// let o = new Map();
// for (let x = 0; x < 10; x++) {
//     for (let y = 0; y < 10; y++) {
//         o.set(Symbol(x), y)
//     }
// }
// console.log(o)


// let o = new Map();

// let o1 = [1, 2, 3];
// let o2 = {}
// let o3 = new Date();


// o.set(o1, 1);
// o.set(o2, 2)
// o.set(o3, 3)
// console.log(o.get(o1))
// console.log(o.get(o2))
// console.log(o["1,2,3"])