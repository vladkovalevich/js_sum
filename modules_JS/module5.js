"use strict";
//процедурный код
const name = "Alex";
const age = 11;
function greet(name, age) {
  console.log(`${name} is ${age} years old`);
}
greet(name, age);

//Объектно ориентированный код
const user = {
  name: "Alex",
  age: 15,
  greet() {
    console.log(`${this.name} is ${this.age} years old`);
  },
};
user.greet();

//Функции-конструкторы
const User = function (name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`${this.name} is ${this.age} years old`);
  };
};
//Все методы для объекта нужно записываать в свойство
//prototype в функцие конструктора
User.prototype.toShowName = function () {
  console.log(this.name);
};
const user1 = new User("Vlad", 11);
const user2 = new User("Alex", 15);
user1.greet();
user2.greet();
user1.toShowName();
user2.toShowName();
console.log(user1);
console.log(user2);

//ES6 classes
class NewUser {
  static claasName = "user";
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  toShowName() {
    console.log(this.name);
  }
  updateName(val1 = "", val2 = 0, val3 = "Happy") {
    console.log((this.name = val1));
    console.log((this._age = val2));
    console.log(val3);
  }
  //get & set
  get age() {
    return this._age;
  }
  set age(value) {
    return (this._age = value);
  }
}
const classUser = new NewUser("Alex", 15);
console.log(classUser);
classUser.updateName("Alex1", 16, " ");
classUser.updateName();
console.log(classUser.age); //vysov get
// classUser.age(20);
console.log((classUser.age = 40));

//статические св-ва и методы
console.log(NewUser.classUser);

//наследование
class SuperNewUser extends NewUser {
  constructor(name, age, superName, superAge) {
    super(name, age);
    this.superName = superName;
    this.superAge = superAge;
  }
  toGreet() {
    console.log("Hello");
  }
}
const newSuperUser = new SuperNewUser("Alexexandra", 16, "Stranno", 0);
console.log(newSuperUser);
