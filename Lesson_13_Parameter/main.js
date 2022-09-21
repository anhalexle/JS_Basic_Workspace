// //Tham số hàm - JavaScript cơ bản

// /**
//  1. Tham số?
//    - Định nghĩa
//    - Kiểu dữ liệu
//    - Tính private?
//    - 1 tham số
//    - Nhiều tham số
// 2. Truyền tham số
//    - 1 tham số
//    - Nhiều tham só
// 3. Arguments?
//    - Đối tượng arguments
//    - Giới thiệu vòng for of
//  */
// //parameters
// // function writeLog() {
// //    // if (message) {
// //    //    console.log( message);
// //    // }
// //    // if (message2) {
// //    //    console.log( message2);
// //    // }
// // }

// // writeLog();

// // console.log(1, 2, 3, 4, 5, 6, 7);

// function writeLog() {
//    //gán từng giá trị trong mảng arguments vào biến params
//    var myString = '';
//    for (var param of arguments) {
//       myString += `${param} -`
//    }
//    console.log(myString); 
// }

// writeLog('Log 1', 'Log 2', 'Log 3');

//return trong hàm
// var isConfirm = confirm('Message?');

// console.log(isConfirm);

function cong(a,b) {
   return a + b;
}

var result = cong(2,8);
console.log(result);