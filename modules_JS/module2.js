"use strict";
//array
// const arr = [`1`, `2`, `3`];
// console.log(arr);
// console.log(arr[0]);
// arr [0] = 'js';
// console.log(arr);
// const arrayLength = arr.length;
// console.log(arrayLength);

// Итерация по массиву
// const numbersArray = [13, 10, 121, 157, 23, 9, 3, 114, 25, 100];
// for (let i = 0; i < numbersArray.length; i++) {
//     console.log(`элемент в индексе ${i} -`, numbersArray[i]);
// };
// for (let i = 0; i < 4; i++) {
//     numbersArray.push(`js`);
//     console.log(`элемент в индексе ${i} -`, numbersArray[i]);
// };
// for (let elem of numbersArray) {
//     console.log(elem);
// };
// console.log(numbersArray);

//Присвоение значений
// Значения примитивов копируются
// let a = 5;
// let b = a;
// console.log(`a:`, a, `b:`, b);
// a = 3;
// console.log(`a:`, a, `b:`, b);
//Значение объектов и функций копируютсся за посыланием
// const array1 = [1, 2, 3, 4, 5];
// const array2 = array1;
// console.log(array1 === array2);
// const array3 = array1.slice();
// console.log(array1 === array3);
// console.log(array1 , array3);
// array2.push(`js`);
// console.log(array1, array2, array3);
// array2.unshift(`html`);
// console.log(array1, array2, array3);
// array3.pop();
// array3.shift();
// console.log(array1, array2, array3);

// //split & join
// const str1 = "apples, orandes, cherrys";
// const arr1 = str1.split(" ");
// console.log(arr1);
// const arr2 = str1.split(",");
// console.log(arr2);
// const str2 = arr1.join(" - ");
// console.log(str2);

// //indexOF & includes(boolean)
// console.log(array1.indexOf(`js`)); //6
// console.log(array1.indexOf(`css`)); //-1
// console.log(array1.indexOf(3)); //3

// console.log(array1.includes(`js`)); //true
// console.log(array1.includes(`css`)); //false
// console.log(array1.includes(3)); //true

// //splice
// // let allArrays = array1.concat(array2).concat(array3);
// let allArrays = array1.concat(array2, array3);
// console.log(allArrays);

//функция
//function expression - нельзя вызвать до объявления
const func = function (num1, num2) {
    return num1 + num2;
};
console.log(func(2, 3)); //2 + 3 = 5

//arrow function - нельзя вызвать до объявления
const func1 = (a, b) => a - b;
console.log(func1(9, 8)); //9 - 8 = 1

const func2 = (c) => console.log(c);
func2("Hello world!"); //Hello world!

//function declaration - можно вызвать до объявления
decl(3, 4); //3 * 4 = 12
function decl(par1, par2) {
  return console.log(par1 * par2);
}

//параметры по умолчанию
const toBuyProducts = function (product = "milk", count = 1) {
  return console.log(`I bought ${count} of ${product}`);
};
toBuyProducts("bread", 8);
toBuyProducts(8, "bread");
toBuyProducts(8); //count underfined
toBuyProducts("apple");
toBuyProducts();

//псевдомассив arguments
const total = function () {
  let sum = 0;
  for (const argument of arguments) {
    sum += argument;
  }
  return sum;
};
console.log(total(2, 6)); //8
console.log(total(7, 89, 8, 5)); //109

const total1 = (...args) => {
  console.log(args);
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  console.log(total);
};
total1(1, 2, 3);

//преобразовние псевдомассива arguments в нормальный массив
const func3 = function () {
  const array = [1, 2, 3];
  console.log("Обычный массив", array);
  console.log("Псеводмассив", arguments);
  const newarray = Array.from(arguments);
  console.log("Преобразованный массив", newarray);
};
func3(1, 2, 3);

//Guard clause
const addNewUser = function (age) {
  if (age < 16 || age > 21) {
    console.log("Мы не можем вас добавить(");
  } else if (age >= 16 && age <= 21) {
    console.log("Поздравляем вы студент!");
  } else {
    console.log("Вы ввели неправильные данные");
  }
};
addNewUser(15);
addNewUser(32);
addNewUser(18);
addNewUser("Hello");

const addNewUser1 = function (age) {
  if (age < 16 || age > 21) {
    return console.log("Мы не можем вас добавить(");
  }
  if (age >= 16 && age <= 21) {
    return console.log("Поздравляем вы студент!");
  }
  console.log("Вы ввели неправильные данные");
};
addNewUser1(15);
addNewUser1(32);
addNewUser1(18);
addNewUser1("Hello");

const firstfunction = function () {
    console.log("Начала выполнине функция 1");
    console.log("Закончила выполнине функция 1");
};
const secondfunction = function () {
    console.log("Начала выполнине функция 2");
    firstfunction();
    console.log("Закончила выполнине функция 2");
};
const thirdfunction = function () {
    console.log("Начала выполнине функция 3");
    secondfunction();
    console.log("Закончила выполнине функция 3");
};
const fourthfunction = function () {
    console.log("Начала выполнине функция 4");
    thirdfunction();
    console.log("Закончила выполнине функция 4");
};
fourthfunction();

const mainfunc = function (a, b, c) {
    a();
    b();
    c();
}
const toGo = function () {
    console.log("I am going");
}
const toRun = function () {
    console.log("I am running");
}
const toJump = function () {
    console.log("I am jumping");
}
mainfunc(toGo, toRun, toJump);
