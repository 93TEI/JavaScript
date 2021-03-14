//배열 내장함수


//forEach : for문 대체 가능
let hero = ['아이언맨','캡틴아메리카', '토르','닥터스트레인지'];

hero.forEach(n => {
  console.log(n);
});

//map : 새로운 배열 만들기
let array = [1, 2, 3, 4, 5, 6, 7, 8];
let squared = array.map(n=>n*n);
console.log(squared);

//indexOf : 원하는 항목이 몇번째 원소인가
console.log(hero.indexOf('토르'));

//findIndex : 배열 안의 객체나 배열을 찾을 때
const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];

const index = todos.findIndex(temp => temp.id === 3);
console.log(index);

//find : 찾아서 값반환
const index_find = todos.find(temp => temp.id === 3);
console.log(index_find);

//filter : 원하는 값만 새로운 배열로 생성
const ft = todos.filter(temp => temp.done === false);
console.log(ft);

//splice : 배열에서 특정 학목 제거
let num_temp = [1,2,3,4,5];
num_temp.splice(num_temp.indexOf(1),1);//1개 제거
console.log(num_temp);

/*
shift : 앞에 빼기
unshift : 원하는 걸 앞에 넣기
poo : 후출
*/

//join : 문자열 형태로 합쳐줌
console.log(num_temp.join('이랑 '));

//reduce
let sum = num_temp.reduce((n,m)=>n+m,0);
console.log(sum);

let sum2 = num_temp.reduce((acc,cur,index,arr)=>{
  if(index === num_temp.length-1) {
    return (acc+cur)/(index+1);
  }
  return acc+cur;
},0);
console.log(sum2);