// // var i = 0;

// // var myArray = [
// //     'Javascript',
// //     'PHP',
// //     'Ruby'
// // ]

// // while (i < myArray.length) {
// //     console.log(myArray[i]);
// //     i++;
// // }

// //do_while : run at least one time

// var i = 0;
// var isSuccess = false;

// do {
//     i++;
//     console.log('Nạp thẻ lần ' + i);

//     //Thành công
//     if(false){
//         isSuccess = true;
//     }
// } while (!isSuccess && i <= 3); //ĐK

//Break and continue

// for (var i = 0; i < 10; i++){

//     if (i % 2 !== 0)
//     {
//         continue;
//     }
//     console.log(i);

//     // if(i >= 5) {
//     //     break;
//     // }


// }

//Nested loop: vòng lặp lồng

// var myArray = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ]

// for (var i = 0; i < myArray.length; i++) {
//     for (var j = 0; j < myArray[i].length; j++) {
//         console.log(myArray[i][j]);
//     }
// }

// for (var i = 100; i > 0; i--) {
//     console.log(i);
    
// }

// for (var i = 0; i <= 100 ; i +=5) {
//     console.log(i);
// }

for (var i = 100; i >= 0; i -= 5) {
    console.log(i);
}