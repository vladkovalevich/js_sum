"use strict";
//object
const ok = {
  key_1: "value",
  key_2: 30,
  key_3: true,
  toShowKeys() {
    console.log(this.key_1, this.key_2, this.key_3, this.key_4);
  },
};
console.log(ok);
console.log(ok.key_1);
console.log(ok.key_2);
console.log(ok.key_3);
ok.toShowKeys();
ok.key_1 = "JavaScript";
ok.toShowKeys();
ok.key_4 = 1;
console.log(ok);
delete ok.key_4;
ok.toShowKeys();

//for in
for (let key in ok) {
  console.log("Каждое свойство", key);
  console.log("Каждое значение свойства", ok[key]);
}
const allKeys = Object.keys(ok);
console.log("Преобразовать свойства в массив ключей", allKeys);
const allValues = Object.values(ok);
console.log("Преобразовать значения в массив ключей", allValues);
const allEntries = Object.entries(ok);
console.log("Преобразовать значения и свойств в массив ключей", allEntries);
for (let elem of allEntries) {
  // console.log(elem);
  console.log(`${elem[0]}: ${elem[1]}`);
}
const numbers = [1, 2, 3, 4, 5];
let min = Math.min(numbers);
console.log(min);
min = Math.min(...numbers);
console.log(min);
const newNumbersArray = [...numbers];
console.log(newNumbersArray);
newNumbersArray.pop();
console.log(newNumbersArray);
console.log("Original array", numbers);

//распыление объекта
const strawberry = {
  name: "strawberry",
};
const bananas = {
  name: "bananas",
};
const coctail = Object.assign({}, bananas, strawberry);
console.log(coctail);
const newCoctail = {
  ...strawberry,
  ...bananas,
};
console.log(newCoctail);
function toDoCoctail(...args) {
  console.log(args);
}
toDoCoctail(1, 2, 3);
toDoCoctail(34);
function toGetData(email, ...args) {
  console.log(email);
  console.log(args);
}
toGetData("123@gmail.com", 4, 5, 6);
toGetData("123@gmail.com", 65);
toGetData("123@gmail.com", 45, 47);
//деструктуризация объекта
const user = {
  name: "Alex",
  age: 15,
  eyeColor: "green",
};
const { name, age, newAge = 16, eyeColor } = user;
console.log(name, age, newAge, eyeColor);
console.log(user);
//деструктуризация массивов
const fruits = [
  ["bananas", "oranges", "kiwi"],
  ["apples", "strawberries", "cherry"],
];
console.log(fruits[1]);
const [tropical, regional] = fruits;
console.log(tropical);
console.log(regional);
