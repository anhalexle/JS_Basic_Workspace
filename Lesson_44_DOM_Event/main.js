//DOM events
//1. Attribute events
//2. Assign event using the element node

// var h1Elements = document.querySelectorAll('h1');

// console.log(h1Element);

// for (var i = 0; i < h1Elements.length; i++) {
//     // console.log(h1Elements[i]);
//     h1Elements[i].onclick = function (e) {
//         //console.log(h1Elements[i]); không dùng cách này vì vòng for chạy sạch sẽ rồi thì khi ta log nó sẽ ra undefined
//         console.log(e.target);
//     }
// }

// h1Elements.onclick = function (e) {
//     //code here!!
//     //target vào đúng cái mà chuột nhấn vào
//     console.log(e.target);
// }

//DOM events

//1. Input / select
//2. Key up / down
//1.
// var inputValue
// //dạng text
// // var inputElement = document.querySelector('input[type = "text"]');
// // var inputElement = document.querySelector('input[type = "checkbox"]');
// var inputElement = document.querySelector('select');


// console.log(inputElement)
// //onchange thì ph click ra ngoài(blur) oninput là input đổi tới đâu lấy tới đó
// //checkbox thì onchange
// inputElement.onchange = function (e) {
//     //text
//     // console.log(e.target.value);
//     // inputValue = e.target.value;
//     //checkbox
//     // console.log(e.target.checked);
//     //select
//     console.log(e.target.value);
    
// }

//2.
// var inputElement = document.querySelector('input[type = "text"]');

// inputElement.onkeyup = function(e) {
//     console.log(e.which);//lấy mã ascii của bàn phím

//     switch(e.which) {
//         case 27:
//             console.log('Exit');
//             break;
//     }
// }

// document.onkeypress = function(e) {
//     console.log(e.which)
//     switch(e.which) {
//         case 27: 
//             console.log('EXIT');
//             break;
//         case 13:
//             console.log('SEND CHAT');
//             break;
//     }
// }

//1.preventDefault: xóa hành vi mặc định của thẻ HTML
//2.stopPropagation

//1.
//anchors là thẻ a nhưng phải đặt thêm attribute vào cho thẻ a
//không thì lấy thành link
//VD1
// var aElements = document.links;

// // console.log(aElements)

// for (var i = 0; i < aElements.length; ++i) {
//     aElements[i].onclick = function(e) {
//         //startsWith(): bắt đầu với
//         if(!e.target.href.startsWith("https://fullstack.edu.vn")) {
//             e.preventDefault();
//         }
//     }
// }

//VD2
// var ulElement = document.querySelector('ul');

// ulElement.onmousedown = function(e) {
//     e.preventDefault();
// }

// ulElement.onclick = function (e) {
//     console.log(e.target);
// }

//2.

document.querySelector('div').onclick = function(e) {
    console.log('DIV');
}

document.querySelector('button').onclick = function(e) {
    e.stopPropagation();//không nổi bọt
    console.log('Click me!');
}