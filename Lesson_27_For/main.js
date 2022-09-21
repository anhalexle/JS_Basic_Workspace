
// // for (var i = 1; i <= 1000; i++){
// //     console.log(i);
// // }

// //For in

// //self study 2 cách lấy phần tử trong objec
// // var orders = [
// //     {
// //         name: 'Khóa học HTML - CSS Pro',
// //         price: 3000000
// //     },
// //     {
// //         name: 'Khóa học Javascript Pro',
// //         price: 2500000
// //     },
// //     {
// //         name: 'Khóa học React Pro',
// //         price: 3200000
// //     }
// // ]

// // function getTotal(arr) {
// //     var sum = 0;
// //     for (var i = 0; i < arr.length ; i++) {
// //         // sum += arr[i].price;
// //         // sum += arr[i]['price'];
// //     }
// //     return sum;
// // }



// // // Expected results:
// // getTotal(orders) // Output: 8700000

// //object
// var myInfo = {
//     name: 'Anh Le',
//     age: 18,
//     address: 'HCM, VN'
// }

// for (var key in myInfo) {
//     //code
//     // console.log(typeof key);// typeof key ra string 
//     console.log(key) //in ra 3 string 
// }


// //Array
// // var languages = [
// //     'Javascript',
// //     'PHP',
// //     'Ruby',
// //     'Java',
// // ]

// // for (var key in languages){
// //     // console.log(key); //log ra index trong mảng
// //     console.log(languages[key])
// // }

// //string
// var myString = 'Javascript';

// for (var key in myString){
//     console.log(myString[key]);//in ra từng chữ cái
// }

// function run(object) {
//     var arr = [];
//     for (var key in object) {
//         var index =  `Thuộc tính ${key} có giá trị ${object[key]}`;
//         arr.push(index);
//     }
//     return arr;
// }

// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));

//For of

// var languages = [
//     'Javascript',
//     'PHP',
//     'Java'
// ]

//string
var languages = 'Javascript';

//object
var myInfo = {
    name: 'Anh Le',
    age: 18
}


// for (var value of languages) {
//     console.log(value) //for of là lấy ra giá trị
// }

// console.log(Object.keys(myInfo)) //trả về 1 mảng các key của object

// for (var value of Object.keys(myInfo))
// {
//     console.log(myInfo[value]);
// }

console.log(Object.values(myInfo))//lấy ra values

for (var value of Object.values(myInfo)) {
    console.log(value)
}