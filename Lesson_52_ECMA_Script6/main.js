/**
 1. Let, const
 2. Template Literals
 3. Multi-line String
 4. Arrow function
 5. Classes
 6. Default parameter values
 7. Destructuring
 8. Rest parameters
 9. Spread
 10. Enhanced object literals
 11. Tagged template literal
 12. Modules
 */

 // ra đời 2016

 //Babel


 //1. Let,const: thay thế việc đặt biến bằng var
 //1.1 Var / Let; const: Scope(Phạm vi), Hosting(đưa lên trên đầu)
 //1.2 Const / Var; Let: Assignment


 //Code block: if else, loop, {}, ...
//phạm vi truy cập: let const kiểu local, var là global
//  if(true) {
//     const course = 'Javascript basic!';
//     {
//         {
//             // const course = 123; cái nào mới nhất lấy cái đó
//             console.log(course);
//         }
//     }
//  }

//Hoisting
//VD: đưa biến lên đầu
// var a;
// a = 1;

// var a = 1; //đưa lên đầu

//trường hợp khai báo biến a trước khi định nghĩa bằng từ khóa var vẫn hoisting đc

// a = 1;
// var a;

// console.log(a) //vẫn chấp nhận được

//còn let vs const ko có hoisting nên nếu khai báo như trên sẽ lỗi undefined


//Assignment: const là không gán lại được cho chính nó kiểu phần tử lớn là nó nhưng những phần tử nhỏ hơn bên trong 
// vẫn gán lại được
//VD

// const a = {
//     name: 'Javascript',
// };

// a.name = 'PHP';

// console.log(a) //a.name = PHP


//Khi định nghĩa biến và không gán lại biến đó: const
//Khi cần gán lại cho biến: let

// let isSuccess = false;

// if() {
//     isSuccess = true;
// }

//2. Template literals +  3. Multi-line string

// const courseName = `Javascript`;
// const courseName2 = `PHP`;
// //trong template string muốn thì cần nhớ cái này "\" \\ -> \; \" -> "; \n là xuống hàng
// // const description = `Course Name: ${courseName} ${courseName2}`;
// const description = `Template string noi suy : \${}`;



// const lines = 'Line 1\n'
//             + 'Line 2\n'
//             + 'Line 3\n'
//             + 'Line 4\n'
//             + 'Line 5\n'

//ECMAscript
//multi-line
// const lines = `Line1
// Line2
// Line3`;


// console.log(lines);


//4. Arrow function

//Hàm thông thường

// function logger(log) {
//     console.log(log);
// }


//chuyển tử expression function sang arrow function

// const logger = (log) => {
//     console.log(log);
// }

// logger('Message ...')

// var test = (a, b) => console.log(a, b);

// test(1, 2)

// const sum = (a, b) => a + b;//sau dấu ngoặc hiểu là return 
//return 1 object

// const sum = (a, b) => ({a: a, b: b});

// console.log(sum(2, 2));
// 1 parameter
// const logger =  log => console.log(log);

// logger('Message ...')
//arrow function không có context
//arrow function không làm constructor
// const course = {
//     name: 'Javascript basic!',
//     getName: () => {
//         return this; //context
//     }
// }
// //viết lại
// const course_new = {
//     name: 'Javascript basic!',
//     getName() {
//         return this; //có context
//     }
// }
// //còn nếu mà course ko thì sẽ là undefined do this ko có context nên sẽ giống kiểu object là undefined ???
// console.log(course_new.getName());
// //báo lỗi do ko làm constructor 
// const Course = (name, price) => {
//     this.name = name;
//     this.price = price;
// }

// const jsCourse = new Course('Javascript', 1000);

//5. Classes

// function Course (name, price) {
//     this.name = name;
//     this.price = price;

//     this.getName() = function () {
//         return this.name;
//     }
// }


// class Course {
//     constructor (name, price) {
//         this.name = name;
//         this.price = price;
//     }

//     getName() {
//         return this.name;
//     }

//     getPrice() {
//         return this.price;
//     }
    
//     run() {
//         const isSuccess = false;
//     }
// }

// const phpCourse = new Course ('PHP', 1000);
// const jsCourse = new Course ('Javascript', 1200);

// console.log(phpCourse)
// console.log(jsCourse);


//  6. Default parameter values: giá trị mặc định khi không truyền

// function logger (log) {
//     if (typeof log === 'undefined') {
//         log ='Giá trị mặc đinh';
//     }
//     console.log(log);
// }

// logger(undefined);

// function logger (log, type = 'log') {
//     console[type](log);
// }
// //type mặc định là log còn nếu truyền cái khác như warn hay error đều được
// logger('Message', 'warn');

//7. Enhanced object literal
/**
 1. Định nghĩa key: value cho value ngắn gọn hơn
 2. Định nghĩa method cho object
 3. Định nghĩa key cho object dưới dạng biến
 */


// var name  = 'Javascript'
// var price = 1000;

// var course = {
//     name,
//     price,
//     getName() {
//         return name;
//     }
// }

// console.log(course.getName());

// var fieldName = 'new-name';
// var fieldPrice = 'price';

// var course = {
//     [fieldName]:'Javascript',
//     [fieldPrice]: 1000,
// }

// console.log(course);

//  7. Destructuring: sử dụng cho array và object

// var array = ['Javascript', 'PHP', 'Ruby'];

// //Destructuring với array
// //không muốn lấy thằng 'PHP'
// var [a, , c] = array;

// console.log(a, c)

//8. Rest: toán tử còn lại
// var array = ['Javascript', 'PHP', 'Ruby'];

// var [a, b, ...rest] = array;

// console.log(rest)//lấy ra phần còn lại 

// var course = {
//     name: 'JavaScript',
//     price: 1000,
//     image: 'image-address',
//     // children: {
//     //     name: 'ReactJS'
//     // }
//     description: 'description-value',
// };
//lấy đúng tên key
// var {name, price, image} =course;
//price2 sẽ là undefined

// var {name, ...rest} = course;//cách tạo ra 1 object mới và xóa đi 1 phần tử bất kỳ
// console.log(name);

// console.log(rest)

// var {name: parentName, children: {name: childrenName}} = course;
//key không đó sẽ lấy giá trị mặc định được định nghĩa trước
// var {name, description = 'Default description'} = course;

// console.log(name);
// console.log(description);

//ứng dụng rest
//lấy ra thằng còn lại
// function logger (a, b, ...params) {
//     console.log(params); //nhận được 1 mảng
// }

// logger(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//với object

// function logger({name, price, ...rest}) {
//     console.log(name);
//     console.log(price);
//     console.log(rest);
// }

// logger({
//     name: 'Javascript',
//     price: 1000,
//     description: 'Description content'
// });


//10.Spread(...):... thể hiện việc bỏ đi cặp ngoặc vuông nếu là array và ngoặc nhọn nếu là object rồi gán vào như bth
// var array1 = ['Javascript', 'Ruby', 'PHP'];

// var array2 = ['ReactJS','Dart'];
// //spread: nối array2 tới array1 
// // var array3 = array1.concat(array2);

// var array3 = [...array2, ...array1];

// console.log(array3);

//Nối object

// var object1 = {
//     name: 'Javascript'
// };

// var object2 = {
//     price: 1000
// };

// var object3 = {
//     ...object1,
//     ...object2
// };

// console.log(object3);

//được dùng để override

//truyền tham số cho mảng

// var array = ['Javascript', 'PHP', 'Ruby', 'ReactJS']

// function logger (...rest) {//rest
//     // console.log(a, b, c);
//     for (var i = 0; i < rest.length; i++) {
//         console.log(rest[i]);
//     }
// }

// logger(...array);//spread

//11. Tagged template literals

// function highlight([first, ...strings], ...values) {
//     // console.log(rest);
//     // console.log(first);
//     // console.log(strings);
//     // console.log(values);

//     return values.reduce(
//         (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()], [first]

//     ).join('');
// }

// //Học lập trình <span>Javascript</span> tại <span>F8</span>


// var brand = 'F8';

// var course = 'Javascript';
// //chứa mảng không chứa nội suy
// const html = highlight`Học lập trình ${course} tại ${brand}!`;

// console.log(html);


//Modules: Import / Export

// import {logger2} from './logger/index.js';

// // import {
// //     TYPE_LOG,
// //     TYPE_ERROR,
// //     TYPE_WARN
// // } from './constant.js'

// import * as constant from './constant.js'


// console.log(constant)
// // console.log(logger)

// logger2('Text message', constant.TYPE_ERROR);


//13. Optional chaining (?.): kiểm tra xem key trong object có tồn tại không
// const obj = {
//     name: 'Alice',
//     cat: {
//       name: 'Dinah',
//       cat2: {
//         name: 'Dinah 2',
//         cat3: {
//             name: 'Dinah 3'
//           }
//       }
//     }
//   };

// //không chắc chắn cái key mình muốn kiểm tra có tồn tại trong object ko

// //cách trình bày khác
// // obj['cat']?.['cat2']
// if(obj?.cat?.cat2?.cat3?.name)
// {
//     console.log(obj.cat.cat2.cat3.name);
// }

const obj = {
    // getName(value) {
    //     console.log(value);
    // }

}
//gọi hàm
obj.getName?.(123);