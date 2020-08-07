"use strict";
//task 1
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
const values = Object.values(user);
let i = 0;
for (let key in user) {
  console.log(`${key}: ${values[i]}`);
  i++;
}

//task 2
const countProps = function (obj) {
  const keys = Object.keys(obj);
  return keys.length;
};
console.log(countProps({})); // 0
console.log(countProps({ name: "Mango", age: 2 })); // 2
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

//task 3
const findBestEmployee = function (employees) {
  const keys = Object.keys(employees);
  const values = Object.values(employees);
  let count = 0;
  let employer;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > count) {
      employer = keys[i];
      count = values[i];
    }
  }
  return employer;
};
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence
console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango
console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux

//task 4
const countTotalSalary = function (employees) {
  let allSalary = 0;
  for (let salary in employees) {
    allSalary += employees[salary];
  }
  return allSalary;
};
console.log(countTotalSalary({})); // 0
console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330
console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400

//task 5
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    for (let key in arr[i]) {
      if (prop === key) {
        array.push(arr[i][key]);
      }
    }
  }
  return array;
};
console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
console.log(getAllPropValues(products, "category")); // []

//task 6
const products6 = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  for (let i = 0; i < allProdcuts.length; i++) {
    if (productName === allProdcuts[i].name) {
      return allProdcuts[i].price * allProdcuts[i].quantity;
    }
  }
};
console.log(calculateTotalPrice(products6, "Радар")); // 5200
console.log(calculateTotalPrice(products6, "Дроид")); // 2800

