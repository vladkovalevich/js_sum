"use strict";
// console.log("Интерпритатор");
// console.log("переводит");
// console.log("код");
// console.log("на");
// console.log("язык");
// console.log("понятный");
// console.log("машине");
// let sum;
// console.log(sum); //underfind
// sum = 2 + 3;
// console.log(sum);
// console.log(typeof sum); //number
// sum = "2"+"3";
// console.log(sum); 
// console.log(typeof sum); //string
// sum = false;
// console.log(typeof sum); //boolean

// //взаимодействие с пользователем
// // const greet = alert(123);
// // console.log(greet); //underfined
// // const ask = confirm("Hello"); 
// // console.log(ask); //true or false
// // const enter = prompt("Enter your name please")
// // console.log(enter);

// //основный операторы
// console.log(10%5); //0
// console.log(101%5); //1
// console.log(0%0); //Nan - not a number

// console.log(2**3); //степень 8

// // операторы сравнения
// console.log(false==0); //true - это не строгое равенство, происходит логическое преобразование типов
// console.log(false===0); //false - строгое равенство
// console.log(false!=0);
// console.log(false!==0);

// //приведение к числу
// console.log(+"5"); //N
// console.log(Number("5")); //N
// console.log(Number("false")); //Nan
// console.log(Number(false)); //0
// console.log(Number(true)); //1
// console.log(Number(null)); //0
// console.log(Number(undefined)); //Nan

// //приведение к строке
// console.log(5 + ""); //5
// console.log(5 + 5 + ""); //10
// console.log(5 + "" + 5); //55

// //проверка на число
// console.log(isNaN(5)); //false
// console.log(isNaN("5")); //false
// console.log(isNaN(true)); //false
// console.log(isNaN("Hello")); //true


// console.log(0.1 + 0.2);
// console.log((0.1 * 10 + 0.2 * 10) / 10)

// //методы обьекта math
// console.log(Math.floor(7.99)); //7 in small
// console.log(Math.ceil(7.99)); //8 in high
// console.log(Math.round(7.1)); //7 like real math
// console.log(Math.round(7.5)); //8 like real math

// console.log(Math.min(2, 6, 3, 43)); //2
// console.log(Math.max(2, 6, 3, 43)); //43
// console.log(Math.random());
// console.log(Math.round((Math.random() * (555 - 55) + 55))); //from 55 to 555

//логические операторы 
//&&
// console.log(3 > 5);

// if (5 > 3) {
//     console.log("Код выполняется");
// } else if (4 > 2) {
//     console.log("Код тоже выполняется");
// } else {
//     console.log("Код не выполняется");
// };

// let a = true;
// let b = false;
// if (a) {
//     console.log("Выражение правдиво");
// } else if (!a) {
//     console.log("Виражение ложно");
// }
// if (b) {
//     console.log("Выражение правдиво");
// } else if (!b) {
//     console.log("Виражение ложно");
// }

// let age = +prompt;
// if (age > 10 && age < 16) {
//     console.log("It`s teen");
// } else if (age >= 16 && age <= 21) {
//     console.log("It`s young peeson");
// } else {
//     console.log("It`s other category")
// }

//switch
// let haircolor = prompt("Введите ваш цвет волос").toLowerCase();
// switch(haircolor) {
//     case "блонд":
//     console.log("Вам нужно увлажнять волосы");
//     break;
//     case "шатен":
//     console.log("Вам нужно питать волосы");
//     break;
//     default:
//         console.log("Я не знаю какие у вас волосы");
//         break;
// }

//while
// let c = 49;
// while (c < 50) {
//     c++;
//     console.log(c);
// };
// do {
//     c++;
//     console.log(c);
// } while (c < 50);

//for
//length - кол-во знаков
// let message = "I love JavaScript";
// console.log(message.length);
// for(let i = 0; i <= message.length; i++) {
//     console.log(i);
// };
// for (let i = 1; i < 15; i += 3){
//     if (i % 2 === 0 || i === 13) {
//         continue;
//     }
//     console.log(i);
// }
// console.log(isNaN(val));










