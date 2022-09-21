//DOM attribute

var headingElement = document.querySelector('h1');

// console.log(headingElement)
//thêm attribute
//seter
// headingElement.id = 'Heading';//id
// headingElement.className = 'Heading'; //class
// headingElement.href = 'Heading';


//phương thức set attribute

// headingElement.setAttribute('class', 'heading')

//get ra value của attribute 


headingElement.title = 'Title-test';

console.log(headingElement.getAttribute('class'));
console.log(headingElement.getAttribute('title'));
//nếu như thuộc tính mình tự định nghĩa cần get set attribute

//còn ko thì nhanh hơn là 
alert(headingElement.title)