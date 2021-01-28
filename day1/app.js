function fn(arr) {
    return [...new Set(arr)]
}



let p1 = fn([1, 2, 3, 1, 2, 3, 1, 2, 3])
console.log(p1)


function sort(arr) {
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr.length - i; j++) {
    //         let temp;
    //         if (arr[j] > arr[j + 1]) {
    //             temp = arr[j];
    //             arr[j] = arr[j + 1];
    //             arr[j + 1] = temp;
    //         }
    //     }
    // }
    return arr.sort(function (a, b) {
        return b - a
    })
}

let p2 = sort([11, 2, 7, 84, 2, 4, 67, 5, 4, 4, 2])
console.log(p2)