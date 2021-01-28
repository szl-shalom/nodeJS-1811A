// const arr = [2, 5, 6, 3, 3, 5, 8, 3, 2];
// 求一个数组的最大值

// const max = Math.max.apply(null, arr)

// console.log(max)



// call
// apply
// bind
// function fn(a, b, c) {
//     console.log(this, a, b, c)
// }

// // 1.call和apply 会立即执行  bind不会立即执行  
// // 2.call第一个参数是this指向，从第二个参数起，分别和形参一一对应
// // 3.apply第一个参数也是this指向，第二个参数是一个数组，数组里面的每一项和形参一一对应
// // 4.bind第一个参数是this指向，从第二个参数起，分别和形参一一对应  但是不会立即执行，bind的返回值是一个函数
// fn.call(true, 1, 2, 3)
// fn.apply(false, [1, 2, 3])
// fn.bind(true, 1, 2, 3)()

// 2.数组的方法
// find:数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，
// 所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。
// findIndex:数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1

// // 举个栗子

// const arr = [{
//     user: "张三",
//     pwd: "123456"
// }, {
//     user: "里斯",
//     pwd: "5555"
// }, {
//     user: "admin",
//     pwd: "admin"
// }, {
//     user: "小三",
//     pwd: "33333"
// }]

// let p = arr.find((item, index) => {
//     return item.user === "admin" && item.pwd === "123"
// })

// console.log(p)

// 数组的  entries  keys  values
// const arr = [{
//     user: "张三",
//     pwd: "123456"
// }, {
//     user: "里斯",
//     pwd: "5555"
// }, {
//     user: "admin",
//     pwd: "admin"
// }, {
//     user: "小三",
//     pwd: "33333"
// }];

// let p1 = arr.entries();
// for(let i of p1){
//     console.log(i)
// }


// flat
let arr = [1, [2, [3, [4, [5]]]]];
// let p = arr.flat(Infinity)
// console.log(p)


// 算法：数组降维
// 方法一：
// function flat(arr) {
//     let res = [];
//     arr.forEach(item => {
//         if (Array.isArray(item)) {
//             // 递归
//             res = [...res, ...flat(item)]
//         } else {
//             res.push(item)
//         }
//     })
//     return res;
// }


// let p = flat(arr)
// console.log(p)

// 方法二：
// 通过reduce
// function flat(arr) {
//     return arr.reduce((p, n) => {
//         return Array.isArray(n) ? p.concat(flat(n)) : p.concat(n)
//     }, [])
// }

// let p = flat(arr)
// console.log(p)

let o = {
    0: "a",
    1: "b",
    2: "c",
    length: 3,
}

// console.log(o[0])
// console.log(o[1])
// console.log(o[2])
// console.log(o.length)
// console.log([...o])
// console.log(Array.from(o))
// console.log([].slice.call(o))

// 类数组转数组封装 
function ObjToArr(o) {
    return [].slice.call(o)
}