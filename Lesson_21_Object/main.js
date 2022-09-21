// Object in Javascript
var emailKey = 'email';
//nếu bỏ dấu ngoặc vuông thì object sẽ hiểu là emailkey còn có dấu ngoặc vuông sẽ hiểu là email
var myInfo = {
   name: 'Anh Le',
   age: 18,
   address: 'HCM, VN',
   [emailKey]: 'anhle@gmail.com',
   // emailKey: 'anhle@gmail.com'
   getName: function() {
      return this.name; //this là myInfo
   },
   getAge: function() {

   }
}

//function --> Phương thức (method) 
//others --> thuộc tính (property)
//muốn đặt tên tránh vi phạm cách đặt tên thì chuyển thành string
//C1
//myInfo.email = 'anhle@gmail.com'

//C2
// myInfo['my-email']= 'anhle@gmail.com'
//Lấy dữ liệu
//C1
//console.log(myInfo.age)
//C2
// console.log(myInfo['age']);
//nếu không có trong object trả về undefined
// console.log(myInfo['email'])

// var myKey = 'address'
//C2 thuận tiện khi biến chứa tên key trùng với tên key trong object có sẵn
// console.log(myInfo[myKey]);


//toán tử call là: ()

//xóa value trong object
// delete myInfo.age
console.log(myInfo.getName())
console.log(myInfo)