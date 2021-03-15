// spread : 객체나 배열을 펼칠 수 있음
/*
const slime = {
  name: '슬라임'
};
const cuteSlime = {
  name: '슬라임',
  attribute: 'cute'
};
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
*/
const slime = {
  name: '슬라임'
};

const cuteSlime = {
  ...slime,
  attribute: 'cute'
};

const purpleCuteSlime = {
  ...cuteSlime,
  color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);


//rest는 반대로 여러개를 함축 가능
const { color, ...rest } = purpleCuteSlime;
console.log(color);
console.log(rest);