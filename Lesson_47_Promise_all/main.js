//- Sync
//- Async
//- Nỗi đau
//- Lý thuyết, cách hoạt động
//- Thực hành, ví dụ

//Sync / Async
//những cái bất đồng bộ
//setTimeout, setInterval, fetch, XMLHttpRequest, file reading,
//request animation frame

//Callback: xử lý bất đồng bộ

//sleep
// setTimeout(function () {
//     console.log(1);
// }, 1000);


// console.log(2);

//in ra 2 rồi tới 1(bất đồng bộ)

//Pain

//Callback hell

//Pyramid of doom
//thực hiện tuần tự từng việc một -> nỗi đau (những tác vụ phụ thuộc vào nhau)
// setTimeout(function() {
//     console.log(1);//Viec 1
//     setTimeout(function() {
//         console.log(2);//Viec 2
//         setTimeout(function() {
//             console.log(3);//Viec 3
//             setTimeout(function() {
//                 console.log(4);//Viec 4
//             },1000);
//         },1000);
//     },1000);
// },1000);


//Concept

//Memory leak

/**
 1. new Promise
 2. executer
 */

 /** Trạng thái của promise
  1. pending: chờ
  2. fulfilled: hoàn thành
  3. rejected: thất bại
  */
// var promise = new Promise(
//     //Executor
//     //Logic
//     //resolve(): thành công
//     //reject(): thất bại
//     function(resolve, reject) {
//         // resolve();
//         // reject();

//         //Fake call API
//         // resolve({
//         //     id: 1,
//         //     name: 'Javascript'
//         // })
//         reject('Có lỗi');
//     }
// );

// promise
//     //resolve được gọi
//     .then(function(courses) {  
//         console.log(courses);
        
//     })
//     //reject được gọi
//     //không bắt lỗi thì sẽ báo lỗi (in promise)
//     .catch(function(error) { 
//         console.log(error);

//     })
//     //khi xong(có hay không cũng được)
//     // .finally(function() {   
//     //     console.log('Done!');

//     // });

//Promise: giúp xử lý các thao tác bất đồng bộ, trước khi có promise thì ta sẽ thường sử dụng callback
//sẽ xảy ra vấn đề là callback hell nên nó dùng để khắc phục callback hell
// Để tạo ra 1 promise ta cần tạo ra 1 new Promise xong đó truyền vào bên trong 1 executer(function)
//Trong executer function bạn sẽ nhận được 2 tham số là resolve và reject dạng hàm
//Resolve khi thao tác xử lý logic thành công
//Reject khi thao tác xử lý logic thất bại
// khi đối tượng promise được tạo ra, ta sẽ sử dụng phương thức 
//.then (lọt vào khi resolve được gọi) và .catch (lọt vào khi reject được gọi)


//Promise(chain)

//Chuỗi

// var promise = new Promise(
//     function (resolve, reject) {
//         resolve();
//     }
// )

// promise
//     .then(function () {
//         // console.log(1);
//         //nếu ko return 1 promise thì sẽ chạy cái chuỗi kế tiếp của nó
//         // return 1
//         //trừ trường hợp return 1 promise thì thằng này bắt buộc phải chờ promise r mới làm thằng kết tiếp (sync)
//         return new Promise(function(resolve) {
//             // setTimeout(resolve, 3000);
//             setTimeout(function (){
//                 resolve([1,2,3])
//             },3000);//sau 3 giây trả mảng [1,2,3]
//         })
//     })
//     //mạnh ở chỗ khi cái đầu tiên được gọi và trả về 1 thành phần nào đó thì cái 2 sẽ nhận được cái đó
//     //data sẽ là 1 vì function đầu tiên trả về 1
//     .then(function (data) {
//         console.log(data);
//         return 2;
//     })
//     // .then(function (data) {
//     //     console.log(data);
//     //     return 3;
//     // })
//     // .then(function (data) {
//     //     console.log(data);
//     // })
//     .catch(function () {
        
//     })
//     .finally(function() {
//         console.log('Done!')
//     })

//BT 1 giây in ra 1 -> 2 -> 3

// function sleep(ms) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, ms);
//     });
// }

// sleep(1000)
//     .then(function() {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(2);
//         return new Promise (function(resolve,reject) {
//             reject('Có lỗi');//báo lỗi
//         })
//     })
//     .then(function() {
//         console.log(3);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log('Done');
//     })
//     .catch(function(err) {
//         console.log(err);
//     })

//1. Promise.resolve()
//2. Promise.reject()
//3. Promise.all()

// var promise = new Promise(function(resolve, reject) {
//     //Logic


//     // resolve('Success');

//     reject('Error!')
// });

//Thư viện: output luôn luôn là 1 promise

// var promise = Promise.resolve('Success!');
// var promise = Promise.reject('Error!');
//Promise all 2 thằng chạy song song nhưng vẫn muốn lấy dữ liệu qua lại giữa 2 thằng

// var promise1 = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve([1]);
//     },2000);
// });

// // var promise2 = new Promise(function(resolve) {
// //     setTimeout(function() {
// //         resolve([2, 3]);
// //     },5000);
// // });
// var promise2 = Promise.reject('Có lỗi')
// //tổng lấy thời gian là thgian là lâu nhất =5000ms
// //hợp nhất 2 mảng thành 1 [1, 2, 3]
// //tất cả các thằng promise ph được resolve mới lọt vào đây
// Promise.all([promise1, promise2])
//     .then(function(result) {
//         var result1 = result[0];
//         var result2 = result[1];
//         console.log(result1.concat(result2))
//     })
//     .catch(function(err) {
//         console.log(err);
//     })

// // promise
// //     .then (function(result) {
// //         console.log('result ', result);
// //     })
// //     .catch (function(err) {
// //         console.log('result ', err)
// //     })


//Promise in ứng dụng thực tế =))

var users = [
    {
      id: 1,
      name: 'Kien Dam',
    },
    {
      id: 2,
      name: 'Son Dang',
    },
    {
      id: 3,
      name: 'Anh Le',
    },
];

var comments = [
    {
      id: 1,
      user_id: 1,
      content: 'Anh Son chua ra video :('
    },
    {
      id: 2,
      user_id: 2,
      content: 'Vua ra xong em oi!'
    },
    {
      id: 3,
      user_id: 1,
      content: 'Cam on Anh!!!'
    },
]


//1. Lấy comments
//2. Từ comments lấy ra user_id
//3. Từ user_id lấy ra user tương ứng


//Fake API

//1. Array
//2. Function, Callback
//3. Promise
//4. DOM

function getComments() {
  return  new Promise(function(resolve) {
    setTimeout(function() {
      resolve(comments);
    },1000);
  });
}

function getUsersByIds(userIds) {
  return new Promise(function (resolve) {
    var result = users.filter(function(user) {
      return userIds.includes(user.id);//kiểm tra coi là userIds có nằm trong list id của mảng chứa các object của users
    });//đúng trả về lần lượt các user
    setTimeout(function() {
      // console.log(result)
      resolve(result);

    },1000)
  })
}

getComments()
  .then(function(comments) {
    // console.log(comments);
    var userIds = comments.map(function (comment) {
      return comment.user_id;
    })

    // console.log(userIds);
    //gọi promise kế tiếp
    return getUsersByIds(userIds)
      .then(function (users) {
        return {
          users: users,
          comments: comments,
        }; //(1)
      })
  })
  
  // .then(data => {
  //   console.log(data);
  //   return data;
  // })
  //data sẽ mảng các object ở chỗ (1)
  .then(function(data){
    // console.log(data);
    var commentBlock = document.getElementById('comment-block'); //thực hiện HTML DOM

    var html = '';
    //comments và users là key của cái object mà trả về chỗ (1)
    data.comments.forEach(function(comment) {
      var user = data.users.find(function(user) {
        return user.id === comment.user_id;
      });
      // console.log(user)
      html += `<li>${user.name}: ${comment.content}</li>`;
    });

    commentBlock.innerHTML = html;
  })

// getUsersByIds([1, 2])
//   .then(function (users) {
//     console.log(users);
//   })