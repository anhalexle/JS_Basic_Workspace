/**
 * Kiểu dữ liệu trong Javascript
 * 1. Dữ liệu nguyên thủy - Primitive Data
 * - Number
 * - String
 * - Boolean
 * - Undefined
 * - Null
 * - Symbol
 * 2. Dữ liệu phức tạp - Complex Data
 * - Function
 * - Object
 */
//Number type
var a = 1;
var b = 2;
var c = 1.5;
//Check kiểu dữ liệu


//String type
var fullName = 'Anh " Le';
var fullName='Anh \'Le';
//console.log(fullName);
//Boolean Type 
var isSuccess=true;
//Undefined type
var age;

//Null
var isNull=null;
// console.log(isNull);
console.log(typeof isNull);
//type of null is object
//return of type of is string

//Symbol
var id=Symbol('id');
var id2=Symbol('id');//unique
console.log(id===id2)

//Function
var myFunction=function(){
    alert('Hi. Xin chao cac ban!');
}

// myFunction()

//Object types
//key : value giữa các cặp cách nhau bới dấu ,
var myObject = {
    name : 'Anh Le',
    age : 18,
    address : 'HCM',
    myFunction: function () {

    }
};
// console.log('myObject', myObject);

var myArray = [
    'Javascript',
    'PHP',
    'Ruby'
];

//console.log(myArray)