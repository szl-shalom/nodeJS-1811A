// // 1. 深度克隆
// class Tool {
//     static copy(o) {
//         // 基本数据类型
//         if (typeof o !== "object") {
//             return o;
//         }
//         // 引用数据类型
//         // 判断时数组还是对象
//         if (Array.isArray(o)) {
//             // 时数组
//             var arr = [];
//             o.forEach(v => {
//                 // 递归
//                 arr.push(Tool.copy(v))
//             })
//             return arr;
//         } else {
//             // 是对象
//             var obj = {};
//             for (let key in o) {
//                 // 递归
//                 obj[key] = Tool.copy(o[key])
//             }
//             return obj;
//         }
//     }
// }

// let obj1 = {
//     name: '',
//     hobby: {
//         foods: ['宫保鸡丁', '酸菜鱼']
//     }
// }
// let obj2 = Tool.copy(obj1);
// console.log(obj2)



// 2. 2.第二题：使用reduce实现获取不定嵌套结构的对象的指定属性的函数

// let data = {
//     name: 'zhangsan',
//     count: {
//         math: 97,
//         wenzong: {
//             zhengzhi: 80,
//             lishi: 80,
//             dili: 70
//         }
//     }
// }

// function returnAttr(attrs, obj) {
//     if (!attrs) {
//         return
//     }
//     return attrs.split(".").reduce((p, n) => {
//         return p[n]
//     }, obj)
// }
// //字符串count.math即为data对象的count属性的math属性
// console.log(returnAttr("count.math", data)) //97


// 第三题：实现任意维度数组求和
// let arr = [1, 2, 3, [4, 5, [6, 7, 8, 9]]]

// function returnSum(arr) {
//     let sum = 0;
//     // 降维
//     function fn(arr) {
//         return arr.reduce((p, n) => {
//             return Array.isArray(n) ? p.concat(fn(n)) : p.concat(n);
//         }, [])
//     }
//     // 获取降维数组
//     let res = fn(arr);
//     // 求和
//     res.forEach(v => sum += v)

//     return sum
// }
// console.log(returnSum(arr)) //45 