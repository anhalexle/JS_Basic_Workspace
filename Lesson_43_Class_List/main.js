//Class List property

//add: thêm 
//contains: kiểm tra có năm trong element hay không ?
//remove: xóa bỏ 1 class khỏi element
//toggle: kiểm tra trong element nếu có thì xóa, không có thì thêm vào

var boxElements = document.querySelectorAll('div');
//độ dài
// console.log(boxElement.classList.length);
//trả về giá trị chuỗi
// console.log(boxElement.classList.value);


//thêm class vào 1 element (thêm nhiều element thì phẩy)
// boxElement.classList.add('red', 'blue');
// boxElement.classList.add('red');

//kiểm tra class có tồn tại
// console.log(boxElement.classList.contains('red'));

//xóa
//tạo trễ
//sau 3 giây sẽ xóa
// setTimeout(() => {
//     boxElement.classList.remove('red');
// },3000)


//có thì xóa, không thì thêm
// setInterval(() => {
//     boxElement.classList.toggle('red');
// },3000)


console.log(boxElements)

for (var index in boxElements) {
    if(boxElements.hasOwnProperty(index))
    {
        boxElements[index].classList.add('box');
    }
    
}

