//반복문

let objects = [{name:'멍멍이'},{name:'야옹이'}];
for(let i=0;i<3;i++){
  console.log(objects[i]);
}

//for ... of : 배열을 위한 반복문 내장함수

let num = [1,2,3,4,5];
for (let num of num){
  console.log(num);
}

//for ... in : 객체를 위한 반복문 내장함수

let dog ={
  name:'멍멍이',
  sound:'멍멍',
  age:2
};
console.log('start');
//Object.entries: [[키, 값], [키, 값]] 형태의 배열로 변환
console.log(Object.entries(dog));
//Object.keys: [키, 키, 키] 형태의 배열로 변환
console.log(Object.keys(dog));
//Object.values: [값, 값, 값] 형태의 배열로 변환
console.log(Object.values(dog));