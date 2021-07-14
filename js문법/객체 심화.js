//객체 비구조화 할당

const fifa= {
  name : '피파',
  company : '넥슨',
  rank : '3'
};

const lol={
  name :'롤',
  company : '라이엇',
  rank:'1'
};

function print(game){
  const {name, company, rank} = game; //객체 비구조화 할당 문법
  let txt = '현재 게임 순위 '+rank+'인 '+name+'의 회사는'+company+'입니다.';
  console.log(txt);
}

print(fifa);
print(lol);


//객체 안에 함수 넣기

const dog = {
  name: '더기덕',
  sound : '멍멍!',
  say: function(){
    //this는 자신이 속해있는 객체를 가리킴
    console.log(this.sound);
  }
};

dog.say();


//Getter함수와 Setter함수
//->특정 값 바꾸거나 조회할 때 원하는 코드 실행

//get : 특정값 조회-> 우리가 설정한 함수로 값 반환
let num ={
  a:1,
  b:2,
  get sum(){
    console.log('sum함수가 실행됩니다.');
    return this.a+this.b;
  }
};

//()이 아니라서 실행이 아닌 조회를 했는데 실행되고 결과값출력
console.log(num.sum);

//set

let number = {
  _a : 1,
  _b : 2,
  sum : 3,
  calculate(){
    console.log('calculate');
    this.sum = this._a + this._b;
  },
  get a(){
    return this._a;
  },
  get b(){
    return this._b;
  },
  set a(value){
    console.log('a가 바뀝니다.');
    this._a = value;
    this.calculate()
  },
  set b(value){
    console.log('b가 바뀝니다.');
    this._b = value;
    this.calculate()
  }
}

console.log(number.sum);
//구조체같이 생긴거에 함수를 쓰는것 같은데 이 방식이 다름
number.a = 5;
number.b = 7;
number.a = 9;
console.log(number.sum);
console.log(number.sum);
console.log(number.sum);