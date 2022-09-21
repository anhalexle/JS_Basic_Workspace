//innerText, Content Text

var headingElement = document.querySelector('.heading');

// console.log(headingElement.innerText)
// console.log(headingElement.textContent)

//setter

// headingElement.innerText = 'New heading';
// headingElement.textContent  = 'New heading';


//getter

// console.log(headingElement.textContent)

//khác biệt giữa innerText và textContent
//innerText chỉ đơn giản hiển thị các thành phần con trong thẻ 
//texContext lấy toàn bộ text node bên trong thẻ, lấy những khoảng cách bên trong element 


// console.log(headingElement.innerText)//ghi nhận sự thay đổi
// console.log(headingElement.textContent)//không bị ảnh hưởng bới attribute
//textContent trả hết tất cả mọi thẻ trong thẻ được gọi còn innerText chỉ hiện thị nội dung đơn thuần 


//mở rộng
headingElement.innerText = `

New Heading

`; //hiển thị ra cả khoảng trắng