var boxElement = document.querySelector('.box');

// console.log(boxElement.style);

//background-position
//camelCase
//chỉnh CSS thông qua CSS DOM
// boxElement.style.width = '100px';
// boxElement.style.height = '200px';
// boxElement.style.backgroundColor = 'red';

//khai báo nhiều đối tượng thông qua việc assign cho 1 object -> sinh ra CSS inline
//gán toàn bộ thuộc tính mới tạo vào lại boxElement
Object.assign(boxElement.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'green',
});


console.log({
    element: boxElement
})
// console.log(boxElement.style.backgroundColor)
