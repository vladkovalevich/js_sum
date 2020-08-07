"use strict";
//task 1
const Account = function ({ login, email }) {
  this.login = login;
  this.email = email;
  //   Account.prototype.getInfo = function () {
  //     console.log(`Login: ${this.login}, Email: ${this.email}`);
  //   };
};
Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};
console.log(Account.prototype.getInfo); // function
const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});
poly.getInfo(); // Login: Poly, Email: poly@mail.com

//task 2
class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo = function () {
    console.log(
      `${this.name} is ${this.age} years old and has ${this.followers} followers`
    );
  };
}
const mango1 = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});
mango1.getInfo(); // User Mango is 2 years old and has 20 followers
const poly1 = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});
poly1.getInfo(); // User Poly is 3 years old and has 17 followers

//task 3
class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    if (!this.items.includes(item)) return this.items.push(item);
  }
  removeItem(item) {
    if (this.items.includes(item)) {
      for (let i = 0; i < this.items.length; i++) {
        return this.items.splice(i, 1);
      }
    }
  }
}
const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);
const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

//task 4
class StringBuilder {
  constructor(value) {
    this._value = value;
  }
  get value() {
    return this._value;
  }
  append(str) {
    this._value = `${this._value}${str}`;
    return this._value;
  }
  prepend(str) {
    this._value = `${str}${this._value}`;
    return this._value;
  }
  pad(str) {
    this._value = `${str}${this._value}${str}`;
    return this._value;
  }
}
const builder = new StringBuilder(".");
builder.append("^");
console.log(builder.value); // '.^'
builder.prepend("^");
console.log(builder.value); // '^.^'
builder.pad("=");
console.log(builder.value); // '=^.^='

//task 5 - не доделано
class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
    );
  }
  constructor(car) {
    this.maxSpeed = car.maxSpeed;
    this.speed = 0;
    this._price = car.price;
    this.isOn = false;
    this.distance = 0;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    return (this._price = value);
  }
  turnOn() {
    return (this.isOn = true);
  }
  turnOff() {
    return (this.isOn = false), (this.speed = 0);
  }
  accelerate(value) {
    this.speed += value;
    if (this.speed <= this.maxSpeed) return this.speed;
  }
  decelerate(value) {
    this.speed -= value;
    if (this.speed > 0) return this.speed;
  }
  drive(hours) {
    this.distance += hours * this.speed;
    if (this.isOn === true) return this.distance;
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
console.log(mustang._price); // 2000
mustang.price = 4000;
console.log(mustang._price); // 4000
