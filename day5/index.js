// 1.forEach

// function myForEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i)
//     }
// }


// 2.map

// function myMap(arr, callback) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i], i))
//     }
//     return result;
// }


// 3.filter
// function myFilter(arr, callback) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i) && result.push(arr[i])
//     }
//     return result;
// }


//  4.Object.assign
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



// 5.封装Array.from
// function objToArr(obj) {
//     return [].slice.call(obj)
// }


// 6.reduce

// Array.prototype.myReduce = function (fn, init) {
//     //fn为回调函数，init为初始值
//     var len = this.length,
//         pre = init,
//         i = 0;
//     //判断初始值的类型
//     if (init == undefined) {
//         pre = this[0];
//         i = 1;
//     };
//     //pre
//     for (var i = 0; i < len; i++) {
//         pre = fn(pre, this[i], i, this) //function(previousValue, item, index, arr)
//     };
//     return pre;
// }


// 7.使用Promise实现图片懒加载



// 8.数组降维

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