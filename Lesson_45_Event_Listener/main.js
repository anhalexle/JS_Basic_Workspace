var btn = document.getElementById('btn');

// console.log(btn);



// setTimeout(function() {
//     btn.onclick = function() {
//         //Viec 1
//         console.log('Viec 1');
    
//         //Viec 2
//         console.log('viec 2');
    
//         //Viec 3
//         alert('Viec 3');
//     }
// },7000);

// setTimeout(function() {
//     btn.onclick = function() {}
// },3000);
//argument truyền vào là đầu tiên tên event bỏ chữ on, cái thứ 2 là function để callback
//add theo thứ tự cái nào trước gọi trước 

function viec1() {
    console.log('Viec 1');
}

function viec2() {
    console.log('Viec 2');
}

//callback nha không truyền method call kiểu () vì truyền vào là nó gọi luon
btn.addEventListener('click', viec1);
btn.addEventListener('click', viec2);

setTimeout(function() {
    btn.removeEventListener('click', viec1);
}, 3000);


// btn.addEventListener('click', function () {
//     console.log('Event 1');
// });

// btn.addEventListener('click', function () {
//     console.log('Event 2');
// });

// btn.addEventListener('click', function () {
//     console.log('Event 3');
// });