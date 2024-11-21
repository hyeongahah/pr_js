// switch는 꼭 break를 포함 시켜줘야한다
let fruit = 0;
let fruitName;
switch (fruit) {
  case 0:
    fruitName = 'apple';
    break;
  case 1:
    fruitName = 'banana';
    break;
  case 2:
    fruitName = 'orange';
    break;
}
console.log(fruitName); // apple

let fruits = 'banana';
let favorite;
switch (fruits) {
  case 'apple':
  case 'banana':
    favorite = 'yes';
    break;
  case 'orange':
    favorite = 'no';
    break;
  default:
    favorite = 'um..'; // 선택지가 없을 때 출력
}
console.log(favorite); // yes
