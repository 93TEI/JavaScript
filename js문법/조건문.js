//조건문

//if문
let a = 0;
if(a+1===2){
  console.log('a+1은 2입니다.');
}
else if(a+1===3){
  console.log('a+1은 3이다.')
}else{
  console.log('a는 0이었다.')
}

//swich/case문

let device = 'iphone'

switch(device){
  case 'iphone':
    console.log('아이폰');
    break;
  case 'ipad':
    console.log('아이패드');
    break;
  default:
    console.log('알 수 없다.')
}