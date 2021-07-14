//삼항 연산자 
//let text = array.length === 0 ? '배열이 비어있습니다' : '배열이 비어있지 않습니다.';

//truthy, falsy
//undefined,null,0,' ',NaN -> Falsy 거짓에 가까운

//parseInt
let txt = '15'
console.log(parseInt(txt)); //숫자 15

//논리연산자
//A && B : A가 truthly-> B가 결과값
//         A가 Falsy한 값이면 A가 결과값
//-> 예외처리 코드 단축가능

//함수에 기본 파라미터 사용 가능해졌음
/*
const calc(r=1){
  return Math.PI * r * r;
}
*/

//조건문의 조건이 길 때
/*
function isAnimal(name){
  let temp = ['dog','cat'];
  return temp.includes(name);
}를 화살표 써서 아래와 같이 바꿈
*/
const isAnimal = name =>['dog','cat'].includes(name);
console.log(isAnimal('dog'));
