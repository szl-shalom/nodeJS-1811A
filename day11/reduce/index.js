const arr = [{
    age: 12
}, {
    age: 10
}, {
    age: 16
}, {
    age: 12
}];
// reduce是数组的高阶函数
// 语法：Array.reduce(callback, initValue);
// calllback :  ( p , n , i )  =>  {}
// 方式一：  没有初始值 initValue
// p 代表数组第一项     n代表数组第二项     i是下表
// 方式二：  传递初始值 initValue
// p = initValue       n代表数组第一项     i是下表

// 每次循环的callback的返回值是下一次循环p的初始值


let res = arr.reduce((p, n) => {
    return p + n.age;
})

// p = { n:12 }   n = { age：10 }   return { n:12 } + 10 = NaN
// p = 12  n = { age: 10 }   return 22
// ...







// 没有传递初始值
// p = 1   n = 2   return 3
// p = 3   n = 3   return 6
// p = 6   n = 4   return 10
// p = 10  n = 5   return 15
// 传递初始值
// p = 2   n = 1   return  3
// p = 3   n = 2   return 5
// p = 5   n = 3   return 8
// p = 8   n = 4   return 12
// p = 12  n = 5   return 17



console.log(res)