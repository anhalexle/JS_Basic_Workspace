// Array.prototype.reduce2 = function (callback, result) {
//     let i = 0
//     if (arguments.length < 2) {
//         i = 1;
//         result = this[0];
//     }//xét trường hợp không truyền init value vì nếu truyền thì arguments.length = 2
//     for (; i < this.length; i++) {
//         result = callback(result, this[i], i, this);//total, number, index, origin Array
//     }
//     return result;
// }

// const numbers = [1, 2, 3, 4, 5];
// //C1
// // const result  = numbers.reduce((total, number, index, originArray) => {
// //     return total + number;
// // },0)
// //C2 đi tự định nghĩa
// const result  = numbers.reduce2((total, number, index, originArray) => {
//     console.log(total, number, index, originArray);
//     return total + number;
// })

// // console.log(result);
// //syntax
// // const result = numbers.reduce(callback, initialValue)

// const numbers = [1, 2, 3, 4, 5];

// //tự định nghĩa hàm

// Array.prototype.myReduce = function(callback, initialValue) {
//     let i = 0;
//     if(arguments.length < 2) {
//         i = 1;
//         initialValue = this[0]
//     }
//     for(; i < this.length; i++) {
//         initialValue = callback(initialValue, this[i], i, this);
//     }
//     return initialValue;
// }

// console.log(numbers.myReduce((accumulator, currentValue, currentIndex, originArray) => {
//     console.log(accumulator, currentValue, currentIndex, originArray);
//     return accumulator + currentValue}))

//test

var test = {}

test['name'] = 'Anh Le'

console.log(test)

// /**
//  note: khi không khởi tạo giá trị ban đầu thì biến tích trữ trong trường hợp này là biến total sẽ lấy giá trị là phần tử đầu tiên trong mảng
//  , nên khi chạy hàm reduce sẽ gán vào phần tử tiếp theo của mảng rồi return dần cho đến hết mảng
//  NOTEEE quan trọng mỗi lần gọi là phải có return vì nếu không return thì biến tích trữ sẽ bị mất vd cụ thể trong phần bt ôn tập reduce
//  trường hợp khởi tạo giá trị ban đầu thì biến tích trữ sẽ lưu giá trị ban đầu và bắt đầu trỏ vào phần tử đầu tiên của mảng thay vì phần tử thứ 2 so với khi ko khởi tạo giá trị ban đầu
//  */

// console.log(result)

// function arrToObj(arr) {
//     var results = arr.reduce(function (accumulator, currentValue) {
//         console.log (typeof currentValue[1]);
//         accumulator[currentValue[0]] = currentValue[1];
//         return accumulator;
//     },{})
//     return results;
// }
 
// // Expected results:
// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];
// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }