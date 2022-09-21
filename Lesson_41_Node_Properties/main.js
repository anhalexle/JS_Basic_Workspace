/**Note
 * attribute : trả về các thuộc tính của element

childElementCount : số element con
children : trả về mảng htmlcollection[ chứa element bên trong]
childNode: node con: element node vs text node
draggable : kéo thả element
khoảng trống cũng là text node
firstChild: node đầu tiên
firstElementchild : lấy ra element con đầu tiên
lastElementchild
draggable: kéo thỏa
hidden : element ẩn hay ko
classList: quản lý attribute của class
localName : trả về tên thẻ của element hiện tại
nextElementSibling : trả về thể liền kề(bên dưới nó)
nodeType : 1-2-3(element-attr-textnode)
offsetHeight/ width : kích thước cao,ngang của elementh + px
tương tự vs left/top: vị trí trên và trái
offsetParent : đang là con của thẻ nào
parentElement : thẻ cha là gì
ownerDocument : chủ sở hữu của element hiện tại(document)

scrollHeight : vị trí hành động kéo thả
 */

var boxElement = document.querySelector('.box');

console.log([boxElement]); //object