// var h1Element = document.querySelector('h1');

// var h2Element = document.querySelector('section h2');

// var h3Element = document.querySelector('div h3')

// console.log(h1Element, h2Element, h3Element)

// var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

// // function render(courses) {
// //     var ulElement = document.querySelector('.courses-list');
// //     var output = courses.map(function(course) {
// //         return `<li>${course}</li>`;
// //     });
// //     return ulElement.innerHTML = output.join('');
// // }




// function render(arr) {
//     var ulElement = document.querySelector('.courses-list')
    
//     return ulElement.innerHTML = arr.map(course => `
//         <li>${course}</li>
//     `).join('')
// }

// render(courses)


//1->2->3

// var sleep = function (ms) {
//     return new Promise(resolve => {
//         setTimeout(resolve, ms)
//     })
// }

// sleep(1000) //tên promise
//     .then(() => {
//         console.log(1)
//         return sleep(1000) // return lại cái hàm để cái hàm nó return ra 1 cái promise => tạo ra được 1 cái promise vì nếu chỉ gọi hàm thông thường thì nó return promise mà ko trả ngược ra khỏi method .then thì ko có tác dụng
//     })
//     //sleep(1000)
//         .then(() => {
//             console.log(2)
//             return sleep(1000)
//         })
//         //sleep(1000)
//             .then(() => {
//                 console.log(3)
//                 return sleep(1000)
//             })


//Cộng từng số theo thời gian

// function notHell(value) {
//     return new Promise( resolve => resolve(value + 1))
// }

// notHell(0)
//     .then(value => {
//         console.log(value) //2
//         return notHell(value++)
//     })
//     .then(value => {
//         console.log(value) //3
//         return notHell(value++)
//     })
//     .then(value => {
//         console.log(value) //4
//         return notHell(value++)
//     })
//     .then(value => {
//         console.log(value) //5
        
//     })

//Destructuring
//Array
// var array = ['Javascript', 'PHP', 'Ruby']

// // var a = array[0]
// // var b = array[1]
// // var c = array[2]
// // console.log(a, b, c)
// //Destructuring
// // var [a1, b1, c1] = array
// // console.log(a1, b1, c1) 
// //Rest parameters: những tham số còn lại

// var [a2, ...rest] = array
// console.log(a2, ...rest) //Res: Javascript PHP Ruby
// console.log(rest) //trả về mảng các phần tử còn lại. Res: ['PHP', 'Ruby']

//Object

// var course = {
//     name: 'JavaScript',
//     price: 1000,
//     title: 'Haha'
// }
// //nếu ko có tên key trùng với trong object => error
// // var { name, price } = course

// // console.log(name, price) //lấy ra value theo key

// //rest

// var {name, ...rest} = course
// // console.log(course[name]) undefined do name ở đây khi destructuring 1 object thì ứng tên key sẽ gán cái value của object đó nên name = 'Javascript
// // console.log(rest) //trả về 1 object chứa cả key và value của những thành phần còn lại

// var {...rest} = course

// rest.name = 'PHP'

// console.log(rest)


//Tagged template literal

// function highlight([first, ...strings], ...value) {
//     // console.log(param) //dùng kiểu này thì sẽ trả về mảng và phần tử đầu tiên trong mảng là mảng chứa các phần tử không bao gồm các biến được định nghĩa
//     // return first + value[0] + strings[0] + value[1] + strings[1];
//     // return `${first}${value[0]}${strings[0]}${value[1]}${strings[1]}`
//     document.querySelector('.root').innerHTML =  value.reduce( 
//         (acc, cur) => [...acc, `<span>${cur}</span>`, strings.shift()]
//     , [first]).join('')
// }

// var course = 'Javascript'

// var brand = 'F8'


// // console.log()
// highlight`Học lập trình ${course} tại ${brand} !`

// import logger from './logger/index.js'

// // import  {
// //     TYPE_ERROR,
// //     TYPE_LOG,
// //     TYPE_WARNING
// // } from './constant.js'
// //lấy toàn bộ

// import * as constant from './constant.js'
 

// // logger('Hello', constant.TYPE_ERROR)
// logger('Hello')


const users = ["john", "alex", "steve", "steve", "felix"]

function removeDuplicates(arr) {
    const output = []
    const arrLength = arr.length
    for (var index = 0; index < arrLength- 1; index++) {
        for (var i = index + 1;  i < arrLength; i++) {
            output.push(arr[index])
            if(arr[i] === arr[index]) {
                // output.slice(in)
            } 
        }
    }
    return output
}

console.log(removeDuplicates(users))