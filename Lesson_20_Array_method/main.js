/**
 1. ToString
 2. Join
 3. Pop
 4. Push
 5. Shift
 6. Unshift
 7. Splicing
 8. Concat
 9. Slicing
 */

 var languages = [
    'Javascript',
    'PHP',
    'Ruby',
 ]

//  console.log(languages.toString());//chuyển về dạng chuỗi ngăn cách nhau bởi dấu ,
//JOIN
//ghép vào chuỗi khá đẹp
// console.log(languages.join(', '))

//POP
// var result = languages.pop();
// console.log(result);
// console.log(languages.pop())
// console.log(languages.pop())//Xóa element
// console.log(languages.pop())//Xóa element
// console.log(languages.pop())//Xóa element
// //Xóa element
// // cuối mảng và trả về phần tử đã xóa
// //xóa hết thì undefined
// console.log(languages)

//PUSH
//thêm từ cuối thêm vào mảng và trả về độ dài mới của mảng
// console.log(languages.push('Dart', 'Java'))
// var result = languages.push('Dart', 'Java')
// console.log(result)
// console.log(languages)

//SHIFT
//Xóa phần tử đầu mảng và trả về phần tử xóa
// console.log(languages.shift())
// console.log(languages.shift())
// console.log(languages.shift())
// console.log(languages.shift())

// console.log(languages)

//UNSHIFT
//Thêm phần tử đầu mảng và trả về phần tử thêm
// console.log(languages.unshift('Dart', 'Java'))
// console.log(languages)

//Splicing: xóa, cắt, chèn phần tử vào mảng
//Xóa
//tham số thứ nhất là vị trí phần tử bị xóa, tham số thứ 2 từ tham số thứ nhất xóa bao nhiêu phần tử
//ko xóa thì truyền vào 0
// languages.splice(1, 2)

// console.log(languages)

//chèn thì truyền vào 0 vào thông số thứ 2
// chèn từ tham số thứ nhất 
// languages.splice(1, 0, 'Dart')

// console.log(languages)
// thay thế PHP bằng Dart
// languages.splice(1, 1, 'Dart')
// console.log(languages)

//Syntax splice:
//Tham số 1 là vị trí muốn con trỏ trỏ tới
//Tham số 2 là só lượng muốn xóa từ vị trí con trỏ
//Từ tham số thứ 3 trở về là số lượng muốn chèn vào từ vị trí con trỏ
// languages.splice(1 , 1,'Java','Dart')
// console.log(languages)

//Concat là ghép chuỗi
var languages2 =[
   'Dart',
   'Ruby'
];
//languages là mảng gốc ghép thêm languages2 vào phía bên phải
// languages.concat(languages2)
console.log(languages.concat(languages2))

//Slice: cắt toàn bộ hoặc 1 vài elements trong mảng
//Copy mảng thì truyền vào slice(0)
//Syntax:
//Tham số đầu tiên là vị trí cần cắt
//Tham số thứ 2 là số lượng phần tử cần cắt
//cắt từ phải qua trái thì thêm dấu âm vào
// console.log(languages.slice(0,1))
// console.log(languages)


