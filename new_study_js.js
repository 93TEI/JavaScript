//let: 변수, const: 상수
let name = 'tei';
let num = 9;
console.log(name + 'ss');

// ``을 이용한 변수 사용 (따옴표는 ${}의 변수가 출력안됨)
const msg = `My name is ${name}`;
console.log(msg);


//typeof -> 타입확인
console.log(typeof(num));

/*
//alert : 알려줌
//prompt : 입력받음
const a = prompt("단어를 입력하세요","a"); // 두번째 파라미터는 입력창에 디폴트로 써줌. 생략가능
console.log(a+"로 시작하는 단어네");
//confirm : 확인받음
confirm('정말 진행하시겠습니까?'); // 선택에 따라 bool값으로 나옴
*/

//형변환
console.log(String(num)); // String(), Number(), Boolean()도 있다

//비교연산자 모두 같음 ===만 추가

//조건문
if(name=='tei'){
    console.log("hi, if");
}
else{
    console.log("else");
}

//반복문도 같다

//or로 변수를 줄 수 있다
let orName = "a" || "b" ; // 입력받은 값이 null일 것을 대비하여 <|| 기본값 >을 추가해주는 것으로 응용가능
console.log(orName);

/*
함수 선언문

js는 인터프리터 언어여서 위에서 아래로 차례대로 한줄씩 읽으며 실행
하지만 js는 실행 전 초기화 단계에서 선언된 함수를 모두 찾아서 생성해 놓는다
-> 함수 선언 부분보다 위에서 함수 호출 가능
*/
function hello(){
    console.log("hello");
}
/*
함수 표현식

변수에 담아 표현한다.
함수 선언문과 다르게 코드에 도달하면 생성한다
-> 함수 코드 이후에 사용 가능
*/
let sayHello = function(){
    console.log("sayHello");
}
/*
화살표함수

function 대신 뒤에 화살표 추가
return 대신 {}를 ()로 교체 ( 한줄이라면 ()도 생략가능)
파라미터도 한개라면 () 생략가능 ( 파라미터가 없으면 () 써줘야함)

let a = function(a,b){
    return a+b;
}
let a = (a,b)=>{
    return a+b;
}
let a = (a,b)=> a+b;
let a = a => `this is ${a}`;
*/
let sayHell = ()=>{
    console.log("sayHell");
}

hello();
sayHello();
sayHell();

// 객체

const objman = {
    //키, 값
    name, // 이미 있는 변수를 사용 가능
    age : 20,
}
// 객체 출력
console.log(objman);
console.log(objman.name);
console.log(objman['name']);

// 객체에 항목 추가
objman.gender = "남";
objman['hair'] = "black";

console.log(objman.gender +","+objman.hair);

// 객체의 항목 삭제
delete objman.hair;

console.log(objman);

// 객체 안 확인
// age > 19 로 성인을 판단하지 않고
// !('age' in objman) || age <= 19 로 성인이 아님을 걸러내야함
console.log('name' in objman); // true
console.log('hair' in objman); //false

// for..in 반복문 (객체 순회)
for(let key in objman){
    console.log(key); // 키
    console.log(objman[key]); // 값
}

const superman ={
    name: 'superman',
    age: '20',
    //메소드 : 객체 프로퍼티로 할당된 함수
    fly: function(){
        console.log(`${this.name}이 날아간다`); // this 안붙이면 'tei'가 나옴
    },
    //메소드 축약버전
    flys(){
        console.log(`${this.name}이 날아간다`);
    }
}

superman.fly();
superman.flys();

// this의 활용
// 주의 : 화살표함수 안에서의 this는
//       내부가 아닌 외부에서 가져오기 때문에 결과가 완전히 달라짐

function sayYourName(){
    console.log(`나는 ${this.name}이다.`);
}

const boy={
    name:"철수",
    age:20,
    sayYourName, // 변수처럼 함수도 객체에 넣어 같은 동작을 강제할 수 있음
}

const girl={
    name:"영희",
    age:21,
    sayYourName,
}

boy.sayYourName();
girl.sayYourName();

//배열

let stu = ['철수','영희','영수'];
console.log(stu[0]);
let qwe = ['이름',10,{name:"칠공",hair:1},function(){console.log('hi,arr')}]; // 타입관계없이 넣음
for(let key in qwe){
    console.log(key);
}

//배열 함수

stu.push("강수"); // push
console.log(stu[3], stu.length);

stu.pop(); // pop
console.log(stu);

stu.shift(); // shift : 배열 앞 제거
console.log(stu);

stu.unshift("굴러온 돌"); // unshift : 배열 앞에 요소 추가
console.log(stu);

// for..of 반복문 : 배열 순회

for(let v of stu){
    console.log(v);
}

// 호이스팅 : 함수 선언된 곳보다 위에서 선언이 되어 있는 것처럼 사용 ( 값은 호이스팅 안됨 )
// let,const : 블록 스코프 / var : 블록 밖에서도 존재, 함수 스코프

// 생성자
function User (name,age){
    this.name = name;
    this.age=age;
    this.nameCall=function(){
        console.log(this.name);
    }
};

let u1 = new User("일번",1);
let u2 = new User("이번",2);

console.log(u1.name,u2.name);
u1.nameCall();
