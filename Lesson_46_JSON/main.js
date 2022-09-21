//JSON 
// 1. Là một định dạng dữ liệu (chuỗi)
// 2. JavaScript Object Notation
// 3. JSON: Number, Boolean, String, Null, Array, Object

//Mã hóa / Giải mã
//Encode / Decode
//Stringify / Parse

//Stringify: từ JavaScript types -> JSON
//Parse: Từ JSON -> JavaScript types
//ký hiệu trong mảng lá dấu kép
// var json = '["Javascript", "PHP"]';
//cú pháp JSON: chuỗi 
// var json = '{"name": "Anh Le", "age": 18}';
//string
// var a = '"abc"';
var json = '{"name" : "Anh Le", "age": 22}'

// console.log(typeof JSON.parse(a));

var object = JSON.parse(json);

console.log(object);
//stringify
// console.log(JSON.stringify(null));
//JSON phải dùng "" nếu gọi string vì cú pháp của JSON là''
// console.log(JSON.stringify([
//     'Javascript',
//     'PHP'
// ]));


console.log(JSON.stringify({
    name: 'Anh Le',
    age: 16,
    test: function() {}
}));