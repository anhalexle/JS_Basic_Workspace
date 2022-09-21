//Call back
/**
 1. Là hàm
 2. Được truyền qua đối số
 3. Được gọi lại (trong hàm nhận đối số)
 */

//  function myFunction(param) {
//     console.log(typeof param);
//  }

//  myFunction('Học lập trình')
//cách thông thường

// function myFunction(param) {
//     if(typeof param === 'function') {
//         param('Học Lập trình');
//     }
    

// }

// function myCallBack(value) {
//     console.log('Value: ', value);
// }

// myFunction(myCallBack); //call back // truyền myCallBack vào param đấy xong r param truyền 'Học lập trình' vào value trong myCallBack nên myCallBack là call back vì là hàm và được truyền qua đối số của hàm khác là hàm myFunction

// Array.prototype.map2 = function(callback) {
//     // console.log(this);
//     var output = [], arrayLength = this.length;
//     for (var i = 0; i < arrayLength; i++) {
//         var result = callback(this[i]);
//         output.push(result);
//     }
//     return output;
// };

Array.prototype.myMap = function (callback) {
    var arr =[]
    for (let i =0 ; i < this.length; i++) {
        arr.push(callback(this[i], i, this))
    }
    return arr
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];

var htmls = courses.myMap(function(course) {
    return `<h2>${course}</h2>`
})

console.log(htmls.join(''))


// // courses.map2(function(course) {
// //     // console.log(index, course);
// //     return `<h2>${course}</h2>`;
// // });

// var htmls = courses.map2(function(course) {
//     return `<h2>${course}</h2>`;
// })

// console.log(htmls.join(''));


// Array.prototype.myMap = function(cb) {
//     var output = [], arrayLength = this.length;
//     for (var i = 0; i < arrayLength; i++) {
//         var results = cb(parseInt(this[i]), i);
//         output.push(results);
//     }
//     return output;
// };

// const numbers = [1, 2, 3];

// console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) // Output: [0, 2, 6]
