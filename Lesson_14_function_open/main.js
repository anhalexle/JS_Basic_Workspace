// /**
//  1. Khi function đặt trùng tên?
//  2. Khai báo biến trong hàm?
//  3. Định nghĩa hàm trong hàm?
//  */
// //1
// function showMessage1() {
//    console.log('Message1');
// }
// function showMessage1() {
//    console.log('Message2');
// }
// function showMessage1() {
//    console.log('Message3');
// }
// showMessage1();//Message3
// //2
// function showMessage() {
//    var fullName = 'Anh Le';
//    console.log(fullName);
// }

// showMessage();

// //3
// function showMessage2(){
//    function showMessage3(){
//       console.log('Message2');
//    }
//    showMessage3();
// }

// showMessage2();
/**
   Các loại function:
   1. Declaration function
   2. Expression function
   3. Arrow function
 */
//Declaration function
// showMessage();
// function showMessage() {
//    console.log('Declaration function');
// }
// //Expression function
// var showMessage2 = function() {
//    console.log('Expression function');
// }

//hosting; gọi trước khi định nghĩa
// setTimeout(function autoLogin() {

// });

// var myObject = {
//    myFunction: function(){

//    }
// }

var a = 1, b = 2

a < b && console.log('OK')