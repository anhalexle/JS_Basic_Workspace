/**
 * false
 * 0
 * ''
 * NaN
 * null
 * undefined
 * 6 cái này là false
 */
var a = 1;
var b = 2;

// var result = 'A' && 'B' && 'C' && 'D';
//toán tử && là khi xét từ trái sang phải nếu thấy thằng bên trái khác với 6 thằng ở trên thì tự động lấy giá trị thằng bên phải (ngoài cùng) gán vào giá trị của biến
//console.log(result);//D
//nếu thằng đầu thuộc 6 thằng kia thì lấy luôn giá trị thằng đó
var result2 = 'A' && 'B' && NaN && 'D';

// if(result2){
//     console.log('DIEU KIEN DUNG');
// }else{
//     console.log('DIEU KIEN SAI');
// }

//OR: ngược với AND thằng đầu mà thỏa (không thuộc 6 thằng ở trên) là lấy luôn
var result = 'A' || 'B' || 'C' || 'D';

if(result){
    console.log('DIEU KIEN DUNG');
}else{
    console.log('DIEU KIEN SAI');
}