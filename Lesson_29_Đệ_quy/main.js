
// var array = ['a' ,'b', 'c', 'a' ,'b', 'c']


// console.log([...(new Set(array))]); //...spread j đó giúp chuyển từ object sang array

//Function đệ quy: hàm gọi lại chính nó 

//1. Xác định được điểm dừng
//2. Logic handle => Tạo ra điểm dừng


// function deQuy(num) {
    
//     if(num < 0){
//         return;
//     }
//     deQuy();
// }

// deQuy(10);

//vd về countdown

// function countDown(num) {
//     if(num > 0) {
//         console.log(num)
//         return countDown(num - 1);
//     }
//     return num;
// }

// countDown(3)

//vd về loop
// function loop(start, end, cb) {
//     if (start <  end) {
//         cb(start);
//         return loop(start + 1, end, cb);
//     }
// }

// var array = [
//     'Javascript',
//     'PHP',
//     'Ruby',
// ];

// loop(0, array.length, function (index) {
//     console.log(array[index]);
// })

//Tính giai thừa 
// function giaiThua(num) {
//     var result = 1;
//     for (var i = num; i > 0; i--) {
//         result *=i;
//     }
//     return result;
// }

function giaiThua(num) {
    if(num > 0) {
        return num * giaiThua(num - 1)
    }
    return 1;
}

console.log(giaiThua(5))