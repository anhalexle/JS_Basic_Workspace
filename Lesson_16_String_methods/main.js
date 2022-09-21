/**
 1. Length
 2. Find index
 3. Replace
 4. Convert to upper case
 5. Convert to lower case
 6. Trim
 7. Split
 9. Get a character by index
 */
//Keyword: Javascript string methods
 var myString = '   Hoc JS tai F8!';
//  1. Length
//  console.log(myString.length);


// 2. Find index
//tìm ký tự đầu tiên trùng với giá trị được truyền vào
// console.log(myString.indexOf('JS',6)) ; //-1 là không tìm thấy
//tìm ký tự cuối
// console.log(myString.lastIndexOf('JS')); 
// //tìm kiếm
// console.log(myString.search('JS'));

 //3. Cut string
 //cắt từ trái sang phải là index dương còn phải qua trái là index âm
//  console.log(myString.slice(-3,-1));

//4.Replace
 //Giới thiệu biểu thức chính quy
// console.log(myString.replace(/JS/g,'Javascript'));

//5. Convert to upper case
// console.log(myString.toLocaleUpperCase())
//6. Convert to lower case
// console.log(myString.toLocaleLowerCase())

//7.Trim loại bỏ khoảng trắng hai đầu
// console.log(myString.trim().length);

//8.Split: tách dựa trên điểm chung của chuỗi
// var languages = 'Javascript';
// //cắt toàn bộ thì dùng chuỗi rỗng
// console.log(languages.split(''));

//9. Get a character by index
const myString2 = 'Anh Le';
//trường hợp index không có thì trả về chuỗi rỗng
// console.log(myString2.charAt(10)) Cách 1
//khi khai báo trong trường hợp này nếu ko có index thì trả về undefined
// console.log(typeof myString2[10])

/**Tổng hợp
 - length: lấy chiều dài của chuỗi
- Find Index: lấy vị trí cúa của từ khóa cần tìm trong chuỗi, trong trường hợp không tìm được sẽ trả về -1
    - indexOf(<từ khóa>, <thứ tự của từ khóa>): lấy vị trí từ khóa trong chuỗi, có thể tìm theo thứ tự từ khóa xuất hiện trong chuỗi
    - lastIndexOf(<từ khóa>): lấy vị trí của từ khóa cuối cùng trong chuỗi
    - search(<từ khóa>): giống indexOf nhưng không thể chuyền tham số thứ 2 vào (tìm theo thứ tự), có thể tìm kiếm theo biểu thức chính quy
- slice(<start: number>, <end: number>): cắt chuỗi, có thể cắt chuỗi theo chiều ngược lại những phải dùng giá trị âm và cắt từ phải qua trái
- Replace: ghi đè
    - replace(<từ khóa cần thay thế>, <từ khóa thay thế>): ghi đè
    - replace(/<từ khóa cần thay thế>/g, <từ khóa thay thế>): biểu thức chính quy, ghi đè tất cả các từ khóa cần thay thế thành từ khóa mới chuyền vào
- Convert string to uppercasee or lowercase:
    - toUppercase(): chuyển chuỗi thành chữ hoa
    - toLowercase(): chuyển chuỗi thành chữ thường
- trim(): loại bỏ kí tự khoảng trắng thừa ở hai đầu chuỗi
- split(<từ khóa cắt>): tách chuỗi thành array
- charAt(<number>): lấy một ký tự trong chuỗi theo 1 index (giá trị) cho trước
 */