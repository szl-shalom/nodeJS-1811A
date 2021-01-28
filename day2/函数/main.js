// 1.函数默认值


// function fn({ name } = {}) {
//     console.log(name)
// }


// fn()

// 函数的length
// 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。

// function fn(a, b = 1, c) {}


// console.log(fn.length)


// 2.rest 运算符


// function add(...arr) {
//     let result = 0;
//     arr.forEach(function (item) {
//         result += item;
//     })

//     return result;
// }


// add(1, 2, 3);
// add(4, 5, 6, 8, 9);
// add(1, 1, 1, 1, 1, 1, 1)