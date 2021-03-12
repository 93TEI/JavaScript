//함수

function add(a,b){
  return a+b;
  console.log('오류!')
}

let a = 1;
let b= 2;
console.log(add(a,b));

//문자열add함수
function hello(name){
  console.log('hello, my friend, '+name);
}//'hello my friend, ${name}'

let me = 'tei';
hello(me);

//화살표문법
let add_ = (a,b) => {
  return a+b;
}
console.log(add_(a,b));