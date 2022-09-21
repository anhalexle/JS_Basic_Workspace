//forEach, find, filter, some, every, reduce

// var courses = [
//     'Javascript',
//     'PHP'
// ];

// courses.length = 10;

// for (var index in courses) {
//     console.log(courses[index]);
// };

// var courses = new Array (10);// khai báo 1 tham số thì hiểu là chiều dài mảng, nếu truyền từ 2 tham số trở lên thì hiểu là phần tử nằm trong mảng

// courses.push('Javascript' , 'PHP'); //2 phần tử thực và 10 phần tử ảo

// console.log(courses);

// for (var index in courses) {
//     console.log(courses[index]);
// };

//my forEach method()

// var courses = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ]

// courses.length = 1000; 

//for in không chỉ duyệt phần tử mà còn duyệt các phương thức mới được định nghĩa (element trong prototype)

//Ex:
// Array.prototype.testMethod1 = 1;
// Array.prototype.testMethod2 = 1;
// Array.prototype.forEach2 = function(callback) {
//     for (var index in this) {
//         // console.log(index); //khi log ra thì thêm 1 cái index là forEach2
//         // khi log ra sẽ thêm cả testMethod1 vs 2
        
//         // console.log(index, ); //kiểm tra phần tử chỉ gồm phần tử ko nằm trong prototype

//         //Cách sửa
//         if(this.hasOwnProperty(index)) {
//             callback(this[index], index, this);
//         }
//     }
// }
// // test 
// var courses = new Array(100);

// courses.push('Javascript', 'Ruby')

// courses.forEach2(function(element, index, array) {
//     console.log(element, index, array);
// });


//Revise

// Array.prototype.myForEach = function (callback) {
//     for  (var i  in this) {
//         if(this.hasOwnProperty(i)) {
//             callback(this[i], i, this);
//         }
//     }
// }

// courses.myForEach((course) => console.log(course));
//My Filter
// revise

// Array.prototype.myFilter = function (callback) {
//     var arr = []
//     for (var i in this) {
//         // if(this.hasOwnProperty(i)) {
//         //     callback(this[i], i, this) && arr.push(this[i])
//         // }
//         this.hasOwnProperty(i) && callback(this[i], i, this) && arr.push(this[i]) 
//     }
//     return arr
// }

// Array.prototype.filter2 = function(callback) {
//     var output = [];
//     for (var index in this) {
//         if (this.hasOwnProperty(index))
//         {
            
//             var results = callback(this[index], index, this); //trả về filter là đk
//             // console.log(index, output);
//             if(results) {
//                 output.push(this[index]);
//             }
//         }
//     }
//     return output;
// }
var courses = [
    {
        name: 'Javascript',
        coin: 680
    },
    {
        name: 'PHP',
        coin: 860
    },
    {
        name: 'Ruby',
        coin: 980
    }
];
// //filter có sẵn
// var filterCourses = courses.filter2(function(course, index, array) {
//     return course.coin > 700;
// });

// console.log(filterCourses);
// console.log(courses.myFilter((course) => course.coin > 800))

//Some thằng nào thỏa là trả về true luôn

//mySome

Array.prototype.mySome = function (callback) {
    
    for (let i in this) {
        if(this.hasOwnProperty(i)) {
            result = callback(this[i], i, this)
            result => true
            
        }
    }
    return false
}

// Array.prototype.some2 = function (callback) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = callback(this[index], index, this);
//             if(result) {
//                 return true;
//             }
//             
//         }
//     }
//     return false;
// }

var courses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: false,

    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: false,
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: true,
    }
];
// //some mẫu
// // var result = courses.some(function (course, index, array) {
// //     return course.isFinish;
// // })

// var result = courses.some2(function (course, index, array) {
//     return course.isFinish;
// })

// console.log(result);
console.log(courses.mySome(course => course.isFinish))


//myEvery ngược lại vs mySome là xong

// Array.prototype.every2 = function (callback) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = callback(this[index], index, this);
//             if(!result) {
//                 return false;
//             }
            
//         }
//     }
//     return true;
// }

// // var courses = [
// //     {
// //         name: 'Javascript',
// //         coin: 680,
// //         isFinish: true,

// //     },
// //     {
// //         name: 'PHP',
// //         coin: 860,
// //         isFinish: true,
// //     },
// //     {
// //         name: 'Ruby',
// //         coin: 980,
// //         isFinish: true,
// //     }
// // ];

// var courses =  new Array(100)
// //every mẫu
// // var result = courses.every(function (course, index, array) {
// //     return course.isFinish;
// // })

// var result = courses.every2(function (course, index, array) {
//     return course.isFinish;
// })

// console.log(result);

