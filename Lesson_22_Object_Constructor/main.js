//Object constructor

function User(firstName, lastName, avatar) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.avatar = avatar;

   this.getName = function() {
      return `${this.firstName} ${this.lastName}` //this gọi từ ô nào thì là ô đó
   }
}

var author = new User('Son', 'Dang', 'Avatar');
var user = new User('Anh', 'Le', 'Avatar');
//Định nghĩa thuộc tính mới
author.title = 'Chia sẻ F8';
user.comment = 'Quá mệt mỏi'

// console.log(author.constructor === User);
console.log(author.getName());
console.log(user.getName());


//Expression function

// var User = function(firstname, lastname, avatar){
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.avatar = avatar;

//    this.getName = function() {
//       return `${this.firstName} ${this.lastName}` //this gọi từ ô nào thì là ô đó
//    }
// }