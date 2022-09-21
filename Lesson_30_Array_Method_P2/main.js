// /**
//     Array methods
//         forEach()
//         every()
//         some()
//         find()
//         filter()
//         map()
//         reduce()
//  */

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 100
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 200
    },
    {
        id: 3,
        name: 'Ruby2',
        coin: 220
    },
    {
        id: 4,
        name: 'PHP',
        coin: 200
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 480
    },
    
]

// // forEach()
// //duyệt qua từng phần tử của mảng
// // courses.forEach(function (course, index) {
// //     console.log(index, course)
// // });//call back

// //every tất cả mảng phai thỏa mãn phần tử gì đó, trả về boolean
// //ko duyệt qua hết tất cả phần tử mà phần tử nào đúng bỏ qua sai thì trả về false liền 
// // var isFree = courses.every(function(course, index) {
// //     console.log(index)
// //     return course.coin === 0;
// // }); //nếu bất cứ khóa học nào coin khác 0 return false

// // console.log(isFree)

// //some 1 ô thỏa mãn là trả về đúng và dưng lại vào lặp 
// // var isFree = courses.some(function(course, index) {
// //     console.log(index);
// //     return course.coin ===0;
// // });

// // console.log(isFree)

// //Find tìm 1 phần tử thỏa
// // var course = courses.find(function(course, index) {
// //     console.log(index);
// //     return course.name ==='Ruby';
// // });
// // //ko có sẽ là undefine
// // //đúng là dừng lại nên ko tìm được nữa
// // console.log(course);

// //Filter tìm tất cả ptử thỏa

// var listcourse = courses.filter(function(course, index) {
//     // console.log(index);
//     return course.name ==='Ruby';
// });

// console.log(listcourse)

// //Map
// //call back là mỗi lần thực thi thực hiện lại 1 function
// //nó sẽ thêm thuộc tính vào từng mảng
// //tham số thứ 3 ít xài
// // function courseHandler(course, index, originArray) {
// //     // console.log(course);
// //     // return 123; //trường hợp return một số random nó sẽ gán lần lượt cái return vào từng phần tử của mảng
// //     return {
// //         id: course.id,
// //         name: `Khóa học: ${course.name}`,
// //         coin: course.coin,
// //         coinText: `Giá: ${course.coin}`,
// //         index: index,
// //         originArray: originArray
// //     }
// // }

// //khi log nó ra trong hàm thì nó sẽ hiện ra tất cả các phần tử trong mảng 

// // var newCourses = courses.map(courseHandler);
// //trường hợp ko làm j hết trong hàm mà hiện ra bên ngoài thì nó sẽ hiện ra chỉ số từng phần tử trong mảng nhưng lại undefined
// // console.log(newCourses); 

// //Lấy ra thành 1 mảng riêng

// // function courseHandler(course, index) {
// //     return course.name;
// // }


// //Hiển thị thẻ HTML

// // function courseHandler(course, index) {
// //     return `<h2>${course.name}</h2>`;
// // }

// // console.log(newCourses.join(''));


// //reduce

// //Biến lưu trữ
// // Thực hiện việc lưu trữ

// // var i = 0;

// // function coinHandler(accumulator, currentValue, currentIndex, originArray) {
// //     i++;

// //     var total = accumulator + currentValue.coin;
// //     console.table({
// //         'Lượt chạy': i,
// //         'Biến tích trữ': accumulator,
// //         'Giá khóa học': currentValue.coin,
// //         'Tích trữ được': total
// //     });
// //     // console.log(currentValue); //currentValue là cái phần tử đang được trỏ trong mảng (object)

// //     return accumulator + currentValue.coin;//return cái j thì lần thứ 2 sẽ là cái đó accumulator sẽ nhận được giá trị là 100
// // }

// // var totalCoin =courses.reduce(coinHandler, 0); //init value

// // console.log(totalCoin)

//revise
// var i = 0
// function coinHandler (accumulator, currentValue) {
//   i++;
//   var total = accumulator + currentValue.coin;
//   console.table({
//     'Lượt chạy': i,
//     'Biến tích trữ': accumulator,
//     'Giá khóa học': currentValue.coin,
//     'Tích trữ được': total
//   }
//   )
//   return total
// }

// var totalCoin = courses.reduce(coinHandler, 0)

// console.log(totalCoin)



// //rút gọn

// // function coinHandler(accumulator, currentValue) {
// //     return accumulator + currentValue.coin;
// // }
//có thể hiểu khúc này là totalCoin = accumulator + currentValue.coin ứng với mỗi lần quét qua từng phần tử trong mảng và call back function
// // var totalCoin = courses.reduce(coinHandler, 0);

// // console.log(totalCoin);

// //Array reduce

// // //trường hợp truyền biến init value

// // var totalCoin = courses.reduce(function(total,course) {
// //     return total + course.coin;
// // }, 0); //initial value 
// // // khi không có giá trị khởi tạo nó lấy object đầu tiên trong mảng làm initial value 
// // //khi muốn lấy 1 giá trị nằm trong object mà object lại nằm trong mảng thì nên khởi tạo initial value thì mới lấy được 
// // // khi muốn cuối cùng nhận giá trị mong muốn là gì thì cần khởi tạo giá trị ban đầu là như vậy
// // // trong trường hợp này muốn nhận tổng số tiền thì khởi tạo giá trị ban đầu là 0 để chứa toàn bộ số tiền 


// // console.log(totalCoin)




// //trường hợp ko truyền
// var numbers = [
//     100,
//     200, 
//     220, 
//     200,
//     480
// ];
// //trường hợp dữ liệu cần lấy trùng với dữ liệu ban đầu thì ko cần truyền init value
// var totalCoin = numbers.reduce(function(total, number) {
//     console.log(total, number)
//     return total + number;
// });

// console.log(totalCoin)

// //Flat - làm phẳng mảng bằng cách nối mảng
// var depthArray = [1, 2, [3,4], 5, 6, [7, 8, 9]];

// var result = depthArray.reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])

// console.log(result)




// // var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
// //     return flatOutput.concat(depthItem);
// // }, []);//init là mảng trống để kết quả trả về là 1 cái mảng

// // console.log(flatArray);

// //Lấy ra các khóa học và đưa vào mảng mới

var topics = [
    {
        topic: 'Front-End',
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "Javascript"
            }
        ]
    },
    {
        topic: 'Back-End',
        courses: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS"
            }
        ]
    }
]


var newCourses = topics.reduce((accumulator, currentValue) => accumulator.concat(currentValue.courses), [])

// console.log(newCourses)

var html = newCourses.map((course) => `
  <h2>${course.title}</h2>
  <p>${course.id}</p>
`)

console.log(html.join(''))


// var newCourses = topics.reduce(function(courses, topics) {
//     // return courses.concat(topics.courses);
//     return courses.concat(topics.courses);
// },[]);

// console.log(newCourses);

// var htmls = newCourses.map(function(course) {
//     return `
//         <div>
//             <h2>${course.title}</h2>
//             <p>ID: ${course.id}</p>
//         </div>
//     `;
// });

// console.log(htmls.join(''));


//VD
// var watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//     }
//   ];
  
//   function calculateRating(arr) {
//     var index = 0;
//     var avgImdb = arr.reduce(function (avg, movie) {
//       if(movie["Director"] === "Christopher Nolan")
//       {
//         index++;
//         console.log(avg + parseFloat(movie["imdbRating"]));
//         return avg + parseFloat(movie["imdbRating"]);
//       } else   return avg;
//     },0.00000);
//     console.log(avgImdb);
//     return avgImdb/ index;
//   }
  
  
//   // Expected results
//   console.log(calculateRating(watchList)); // Output: 8.675
  
  
  
  
  
  
  