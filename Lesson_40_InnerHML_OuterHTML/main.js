var boxElement = document.querySelector('.box');

// console.log(boxElement)
//inner: lấy ra bên trong element đang được trỏ tới
//setter
boxElement.innerHTML = '<h1 title = "Heading">Heading</h1>' //thêm element node vào class box

// // console.log(document.querySelector('h1').innerText)
// //getter
// console.log(boxElement.innerHTML)

//outer: lấy ra đúng vị trí element đang được trỏ tới

// boxElement.outerHTML = '<span>Test</span>'; //ghi đè

// console.log(boxElement.innerHTML)

var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var ulElement = document.querySelector('ul');
    var output = courses.map(function(course) {
        return `<ul>${course}</ul>`;
    });
    return ulElement.innerHTML = output.join('');
}

render(courses);
