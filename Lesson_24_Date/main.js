// Date là object
var date = new Date(); //object
// var date = Date(); //function
//khai báo object hay function gọi ra thì trả về string
// console.log(typeof date)

var year = date.getFullYear();
var month = date.getMonth() + 1;//do return từ month về là 0-11 tương ứng 1-12 nên +1
var day = date.getDate();

// console.log(day)

console.log(`${day}/${month}/${year}`);

//keyword: javascript date object mozilla kết quả đầu tiê