"use strict";

const num1 = [4, 9, 78];
const num2 = [0, 48, 5];
const num3 = [8, 3, 1];

//dirty function (функции с побочным эффектом) могут изменять значния глоб. переменных
const dirtyFunction = function (array, value) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= value;
  }
  return array;
};

console.log(dirtyFunction(num1, 3));
console.log(num1);
console.log(dirtyFunction(num2, 0));
console.log(dirtyFunction(num3, 2));

//pure function (чистая функция)
const pureFunction = function (array, value) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(array[i] * value);
  }
  return arr;
};

console.log(pureFunction(num1, 5));
console.log(num1);

//перебирающие методы массива
// array.method(callback[value, index, array]);

//method forEach - return nothing (перебирает, альтернатива for)
num1.forEach((num) => console.log(num)); // show each element
num1.forEach((num) => {
  num += 1;
  return console.log(num);
});
console.log(num1);

//method map возвращает новый массив из изменнных элементов исходного массива
console.log(
  num1.map((num) => {
    return (num *= 10);
  })
);
console.log(num1.map((num) => (num *= 10)));
console.log(num1);

//method filter return new array from elements origin array, соответствует условию
console.log(num1.filter((num) => num % 2 === 0));

//method find return first unic element of array
console.log(num1.find((num) => num % 2 === 0));

//method every (&&) return boolean true || false if all elements of array was checked
console.log(num1.every((num) => num % 2 === 0));

//method some (||) return boolean true || false if one element of array was checked
console.log(num1.some((num) => num % 2 === 0));

//method sort
console.log(num1.sort());
console.log(num1.sort((a, b) => a - b)); //1 - 9
console.log(num1.sort((a, b) => b - a)); //9 - 1

const words = ["apple", "frog", "dog", "application", "absolute"];
console.log(words.sort()); //a - z
console.log(words.reverse()); //z - a

//method reduce
// array.method(callback[acc, value, index, array]);
console.log(num1.reduce((acc, num) => acc + num, 0));
console.log(
  num1.reduce((acc, num) => {
    let element = num + 101;
    acc.push(element);
    return acc;
  }, []).sort()
);
