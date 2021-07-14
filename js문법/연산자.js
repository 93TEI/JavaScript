//연산자
let value = 1;
value = 2;

let a = 1+2;
console.log(a);

console.log(a+value--);
console.log(a--+value);
console.log(a);

a+=7;
console.log(a);

//not, and, or 등은
//지금까지 배운 자바와 똑같다

//비교연산자
/*
'===' : 타입까지 같은지 확인해줌
'=='을 사용 시 0=false, null=undefined
*/
let one = 1;
let one_temp = '1';
console.log(one==one_temp);//true
console.log(one===one_temp);//false

//문자열 붙이기 가능
let string = 'a';
let strong = 'b';
console.log(string+strong);//ab

