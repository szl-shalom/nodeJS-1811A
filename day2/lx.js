// let arr1 = [1, 2, 3, 1, 2];
// let arr2 = [4, 5, 6, 2, 4];

// // 交集  并集  差集  

// // 并集
// // let p1 = [...new Set([...arr1, ...arr2])]
// // console.log(p1);



// // 
// let arr = [];
// let arr3 = [];
// let a1 = new Set(arr1);
// let a2 = new Set(arr2);
// a1.forEach(item => {
//     // let flag = a2.has(item);
//     // if (flag) {
//     //     arr.push(item)
//     // } else {
//     //     arr3.push(item)
//     // }

//     a2.has(item) ? arr.push(item) : arr3.push(item)
// })
// console.log(arr,arr3)




let arr = ["a", "b", "c"];

// let p = arr.filter(item => {
//     return item === "b"
// })

// function myFilter(arr, callback) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i) && result.push(arr[i])

//     }
//     return result;
// }

// let p = myFilter(arr, item => {
//     return item === "b"
// })
// console.log(p)















// map

// let p = arr.map(item => {
//     return `<p>${item}</p>`
// }).join("")
// console.log(p)

// function myMap(arr, callback) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i], i))
//     }
//     return result;
// }


// let p = myMap(arr, (item) => {
//     return `<h1>${item}</h1>`
// })

// console.log(p)















// 封装forEach
// let p1 = arr.forEach((item, index) => {
//     console.log(item,index)
// })

// console.log(p1)

// function myForEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i)
//     }
// }


// myForEach(arr, (item, index) => {
//     console.log(item, index)
// })