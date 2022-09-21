function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
 
    this.getName = function() {
       return `${this.firstName} ${this.lastName}` //this gọi từ ô nào thì là ô đó
    }
}
//thêm thuộc tính bên ngoài hàm tạo
//properties
User.prototype.className = 'F8';

//methods
User.prototype.getClassName = function(){
    return this.className;
}
var user = new User('Son', 'Dang', 'Avatar');
var user2 = new User('Anh', 'Le', 'Avatar');

console.log(user.className);
console.log(user2.getClassName());