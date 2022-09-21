//HTML DOM : document object model (tiêu chuẩn W3C)

// có 3 thành phần

/**
 1. Element các thành phần trong trang web: get qua ID, class, tag, CSS selector, HTML Collection
 2. Attribute thuộc tính của element 
 3. Text
 */

// var headingNode = document.getElementById('heading'); //lấy qua ID

// var headingNodes = document.getElementsByClassName('heading'); //lấy qua class //trả về 1 HTMLCollections giống 1 array
// console.log()
// // console.log(Array.from(headingNodes))

// var arr = Array.from(headingNodes)

// document.querySelector('.root').innerHTML = arr.map(node => `<h2>${node.innerText}</h2>`).join('')

// var headingNodes = document.getElementsByTagName('p'); //lấy qua tag //trả về HTMLCollections

// var headingNode = document.querySelector('.box .heading-2:last-child'); //lấy qua CSS selector //trong trường hợp khai báo nhìu cái lấy cái đầu tiên trừ trường hợp dùng pseudo class
// var headingNodes = document.querySelectorAll('.box .heading-2'); //lấy hết trả về NodeList

// //HTML Collection 
// //C1
// console.log(document.forms['form-1']);
// //C2
// console.log(document.forms.testForm);

// console.log(document.anchors);//trả về thẻ a thông qua attribute name



// // console.log(headingNode); //typeof object
// //1 trang web thì chỉ có 1 id ko có 2 id cùng 1 tên 
// // console.log({
// //     element: headingNode
// // // });

// console.log(headingNodes[1]);


//Part 2

//C1

// var listItemNodes =
//     document.querySelectorAll('.box-1 li');


// console.log(listItemNodes)

// var boxNode = document.querySelector('.box-1');

// //Công việc 1: sử dụng tới 'boxNode'

// console.log(boxNode)

// //Công việc 2: Sử dụng tới các li elements là con của '.box-1'

// console.log(boxNode.getElementsByTagName('li')); //tìm element là con của boxNode
// console.log(boxNode.querySelector('p')); //tìm element là con của boxNode



// P3 revision

/**
 1. getElementById
 2. getElementsByClassName
 3. getElementsByTagName
 4. querySelector
 5. querySelectorAll
 6. HTML Connection
 7. document.write
 */

//  var heading =  document.querySelector('#heading');

//  console.log(heading);

// var headings = document.getElementsByTagName('h1'); //trả về HTML collection

// //còn querySelectorAll trả về NodeList

// console.log(headings[0]); 

// var headings = document.querySelectorAll('.heading')

// for (var i = 0; i < headings.length; i++) {
//     console.log(headings[i]); 
// }

// console.log(document.forms['form-1'])//giống array


// document.write('Hello')//file js ở đâu hiển thị ở vị trí đó, có khả năng ghi đè



//Revise
//lấy thằng bao nhiêu .className:nth-child(number) ko thì class:first-child hoặc className:last-child
// var headingNode = document.querySelector('.box .heading-2:last-child')

// console.log(headingNode)

//lấy toàn bộ bằng CSS selector sẽ trả về listNode

// var headingNodes = document.querySelectorAll('.box .heading-2')

// // console.log(headingNodes.join(''))

// var arr = Array.from(headingNodes)

// console.log(arr)

// var headingNode = document.forms
//hoặc truyền theo key

// var headingNode = document.forms['form-1']
// console.log(headingNode)

//trả về tất cả thẻ a

// console.log(document.anchors['youtube'])

console.log(document.anchors.youtube)