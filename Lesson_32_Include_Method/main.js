//includes method
//string
// var title = 'Responsive web design';

// //tham số 1 là kí tự kiểm tra
// //tham số 2 là vị trí bắt đầu kiểm tra, ko truyền vào hiểu là 0
// console.log(title.includes('web', 15))//kiểm tra xem kí tự đó có trong chuỗi ko true có/ false ko

//array

var courses = ['Javascript' , 'PHP', 'Dart'];

console.log(courses.includes('PHP', 2));// kiểm tra có phần tử trong mảng không
// tham số thứ 2 cũng là vị trí index trong mảng bắt đàu kiểm tra

//trường hợp truyền số âm thì lấy length của mảng + với số âm
// 3+ -1 = 2
console.log(courses.includes('PHP', -1));// tương ứng index số 2 nếu - ra số âm thì mặc định là số 0