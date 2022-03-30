///////////////// 초급 ////////////////

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

///////////////// 중급 ////////////////

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

// 계산된 프로퍼티

let category = 'job';

const objman2={
    name:"mike",
    [category]:'teacher',
}

console.log(objman2.job); // teacher

// 객체 메소드 (Object.assign() , Object.keys() , Object.values() , Object.entries() , Object.fromEntries() )

//Object.assign() : 객체 복제
let cloneObj = Object.assign({},objman2); // 빈 객체 {} 에 objman2가 병합된다, 첫번째 파라미터에 빈 객체 가 아닌 {hair:"black"}을 넣으면 추가되어 생성됨
                                            // 여러 파라미터를 넣으면 첫번째 파라미터에 나머지 파라미터가 합쳐지는 방식
console.log(cloneObj.job); // 메모리 주소가 다른, 복제가 됐다

//Object.keys() : 객체의 키를 '배열'로 반환

let arrkeys = Object.keys(objman2);
console.log(arrkeys);

//Object.values() : 객체의 값을 '배열'로 반환

console.log(Object.values(objman2));

//Object.entries() : 객체의 키/값을 쌍으로 묶어서 '배열'로 반환

console.log(Object.entries(objman2));

//Object.fromEntries() : 키/값 배열을 객체로 만들어줌

const arrObj = [
    ["name","mike"],
    ["age",30],
    ["rr","aa"],
];

console.log(Object.fromEntries(arrObj));

// 심볼 : 유일한 식별자를 만들 때 사용, 유일성이 보장된다

const sym = Symbol('설명을 넣을 수 있다'); // new를 붙이지 않는다
const sym2 = Symbol(); // 같게 만들어도 서로 다르며, 함수로 출력했을 때 안나오는 경우가 많음(아래와 같이 해야 나옴)

const temp = {
    [sym] : "test-temp",
}
console.log(temp[sym]);

// Symbol.for() : 전역 심볼 ( 싱글톤으로 만들어짐 )

const sym3 = Symbol.for('id'); // 'id'부분이 아이디가 됨
const sym4 = Symbol.for('id'); // sym3 === sym4
console.log(Symbol.keyFor(sym3)); // 'id' // 아이디를 알려준다

// 심볼 응용 : 심볼은 for..in 등에 안잡히기 때문에 기존 코드나 사용자가 사용할 때에 영향을 주지 않고 개발 가능
/// 기존 코드
const temp_user = {
    name : "tei",
    age : "20"
}
/// 내가 작업
const showName = Symbol("show name");
temp_user[showName] = function(){
    console.log(this.name);
};
/// 이렇게 해야 보임
temp_user[showName]();

/// 사용자가 접속하면 보는 메시지
for (let key in temp_user){
    console.log(`His ${key} is ${temp_user[key]}`);
}

// 진법

num.toString(2); // 2진수
num.toString(16); // 16진수

// Math
/// 올림
Math.ceil(num);
/// 내림
Math.floor(num);
/// 반올림
Math.round(num);
/// 소수점 2자릿수 반올림
Number(num.toFixed(2)); // 문자열이므로 형변환해야함

//isNaN()
let x = Number('x');
isNaN(x); // true

// parseInt() : Number()와 다른 점은 문자가 포함되어 있어도 무시하고 숫자만 int로 바꿔줌
let num2 = '2f'
console.log(parseInt(num2)); // 2
console.log(parseInt(num2,16)); // 47 : 두번째 인자에 몇 진수로 반환할지 정할 수 있다

// Math.random() : 0~1 사이의 랜덤숫자 생성
Math.floor(Math.random()*100)+1; // 1~100 사이의 랜덤숫자

/////////////////// 문자열

// max, min, abs, pow(제곱), sqrt(제곱근)


// toUpperCase(), toLowerCase()


// str.indexOf(파라미터) : 파라미터에 받은 문자열이 어디에 위치하는지 숫자로 반환, 여러개일 경우 첫번째 위치만 반환


// str.includes(파라미터) : str에 파라미터가 존재하는지 체크



// str.slice(시작점, 끝-1점) : 슬라이스해서 반환


// str.substring(n,m) : n,m 사이에 있는것들 반환


// str.substr(n,m) : n부터 m개를 반환


// str.trim() : 앞 뒤 공백 제거


// str.repeat(n) : 문자열을 n번 반복


// str.codePointAt(n)   : str의 n번째 문자의 아스키값 반환
console.log("abc".codePointAt(1)); //98

// str.fromCodePoint(97) : 아스키코드 97의 값을 가져옴


///////////////////// 배열
let arr = [1,2,3,4,5,6,7,8,9];
let n = 1; // error 때문에 그냥 넣은 의미없는 코드
let m = 2;
let p = 3;

// n부터 m개를 지움, 삭제된 요소의 배열을 반환함
arr.splice(n,m);

// n부터 m개 지우고 거기에 p 추가
arr.splice(n,m,p);

// 내림차순
console.log(arr.sort((a,b)=> b-a)); // 음수,0,양수 반환

// https://lodash.com/ 에 들어가면 sort에 대한 것을 쉽게 가능

// arr.reduce((누적값,현재값),초기값) : 누적으로 더하기


//////////////////////// 구조 분해 할당
let alpha = ['M','T','J'];
let alpha_str = "MtoTtoJ";

//원래는 각각 넣어야 하는 것을 분해해서 하나씩 넣어줄 수 있다.
let [alpha1, alpha2, alpha3="X"] = alpha; // "X"처럼 값이 안들어왔을 때 기본값 설정가능

// 구조 분해 할당 + split()
let [alpha4,alpha5,alpha6] = alpha_str.split("to");

console.log(alpha1,alpha2,alpha3+" , "+alpha4,alpha5,alpha6); // M T J, M T J



///////////////// 나머지 매개변수, 전개구문

//argument
function showtemp(name){
    console.log(arguments.length);
    console.log(arguments[0]);
}
showtemp(num); // 1과 9가 뜬다


// 나머지 매개변수 : 정해지지 않은 개수의 인수를 배열로 받음
function freeParameter(...name){
    console.log(name.reduce((prev,cur)=>{
        return prev += cur;
    },0)
    );
}
freeParameter(1,2,3,4,5,6,7,8,9,10); // 55

// 전개구문 : 나머지 매개변수를 전개로 쓰는 것
let tt = [1,2,3];
let tt_concat = [...tt]; // 메모리 주소를 보내는 것이 아닌 복제가 됨


// 클로저 : 내부함수에서 외부함수가 끝났음에도 값을 참조할 수 있는 것 -> 은닉화 가능


// setTimeout : 일정 시간 후 '함수' 실행
const tId=  setTimeout(function(what){
                console.log(what+"실행합니다.");
            }, 3000,"뭔가가");

clearTimeout(tId); // 스케줄링 취소 ( 실행안됨 )

// setInterval : 일정 시간 간격으로 '함수' 반복
const itvTid = setInterval(function(){console.log("a");},3000);
clearInterval(itvTid);


// .call() : this를 특정값으로 지정 가능 (모든 함수에서 사용가능) // .apply()도 거의 똑같다


// hasOwnProperty() : 프로퍼티 존재 확인
console.log(objman.hasOwnProperty('name')); // true

// 상속받기 , 기본설정 추가하기

const car = {
    wheels : 4,
}

const bmw = {
    color : "red",
}
bmw.__proto__ = car; // 생성자함수에서의 상속 , 프로퍼타입 체인 --> prototype으로 만들어주면 더 좋음
console.log(bmw.wheels); //4


//////////////// 클래스

class User_class {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showName(){ // showName은 정보로 안나온다. 클래스 내 정의한 메소드는 prototype으로 만들어지기 때문(__proto__에 있음)
        console.log(this.name);
    }
}
const tom = new User_class("Tom",19);
console.log(tom);

// extends : 클래스에서의 상속
// super() : 부모의 메소드를 오버라이딩

class car2 {
    constructor(color){ // 생성자는 빈 객체 {} 를 만들고 나머지를 추가하는 방식
        this.color = color;
        this.wheels = 4;
    }

    drive(){
        console.log("drive!");
    }
    stop(){
        console.log("stop!");
    }
}

class bmw2 extends car2{
    constructor(color,who){
        super(color);    // 자식클래스는 빈 객체를 생성하지 않고 넘어가기 때문에 부모클래스의 생성자를 호출해야 한다. 부모에서 받은 인자를 super에도 똑같이 넣어야함
        this.who = "tei" ;
    }
    stop(){
        super.stop(); // 부모클래스의 stop()
        console.log("stop! stop!!");
    }
}

const z4 = new bmw2("blue");
console.log(z4); // stop! stop!!

// promise : 어떤 일이 완료됐을 때 알려주는 함수 ( callback함수 )
/*
    (resolve,reject) : 각각 성공, 실패 했을 때 반환값
    state : pending(대기)
    result : undefined

        resolve(value)  성공하면

    state : fulfilled(이행됨)
    result : value

        reject(error)
    state : reject(거부됨)
    result : error

*/

const pr_resolve = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve('OK')
    },3000)
});


const pr_reject = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    reject(new Error('error~~'))  // 에러를 띄워줌
}, 2000)
});

pr_resolve.then(
    function(result){
        console.log(result + ' 다 됐네');
    },
    function(err){
        console.log('다시 주문하자');
    }
);

pr_reject.then(
    function(result){
        console.log(result + ' 됐다');
    }
).catch(
    function(err){
        console.log(err +' 실패했습니다');
    }
).finally(
    function(){
        console.log('--주문 끝--');
    }
)

// Promise.all ( 동시에 promise 처리하기 )

Promise.all([pr_resolve,pr_reject]).then((res)=>{
    console.log(res);
}).catch(
    function(res){
        console.log(res+'실패도 했습니다');
    }
)

// Promise.race ( 동시에 promise를 시작하여 처음으로 끝나는 것 하나 외에 나머지는 실행중단 )

Promise.race([pr_resolve,pr_reject]).then((res)=>{
    console.log(res);
}).catch(
    function(res){
        console.log(res+'실패도 했습니다');
    }
)

// async : function 앞에 async을 붙이면 Promise로 반환한다
async function async_fn(){
    throw new Error; // 에러 보내기
    //return "async-function call"; // 성공 보내기
}
async_fn().then((name)=>console.log(name)).catch((err)=>console.log(err+" 에러가 났다"));

// await : async 내부에서 사용 가능, await 오른쪽에 Promise가 와야하며, 해당 Promise가 끝날 때까지 기다린다



/*
generator : 함수 실행을 중간에 멈췄다가 재개할 수 있는 기능, function 옆에 *붙여서 만들고, 내부에 yield를 사용

generator 함수는 객체를 반환하는데, .next()로 다음 yield까지 실행시킨다.

 */
function* fn() {
    console.log('첫번째');
    yield 1;
    console.log('두번째');
    yield 2;
    console.log('세번째');
    console.log('네번째');
    yield 3;
    return "끝";
}

const gen = fn();
gen.next;
