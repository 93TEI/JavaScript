//프로토타입과 클래스

function Animal(type, name, sound){
  this.type = type;
  this.name = name;
  this.sound = sound;
  this.say = function(){
    console.log(this.sound);
  };
}
//객체 생성자 new
let dog = new Animal('개','더기덕','멍멍');
let cat = new Animal('고양이','야옹이','야오옹');

dog.say();
cat.say();

//프로토타입
Animal.prototype.age=1;
console.log(dog.age);
dog.age=12;
console.log(dog.age);

//객체 상속
