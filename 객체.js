//객체

const dog={
  name : 'dogi',
  age : 2
};

console.log(dog.name);
console.log(dog.age);
console.log(dog);

//객체 활용
function print(temp){
  let txt = '강아지의 이름은 '+temp.name+'이며, 나이는 '+temp.age+'살입니다';
  console.log(txt);
}

console.log(print(dog));