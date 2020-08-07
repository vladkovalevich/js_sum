"use strict";
//task 1
let name = "Генератор защитного поля";
let price = 1000;
console.log(`Выбран "${name}", цена за штуку "${price}" кредитов`);
price = 2000;
console.log(`Выбран "${name}", цена за штуку "${price}" кредитов`);

//task 2
const total = 100;
let ordered = 50;
//situation 1
if (ordered > total) {
  console.log("На складе недостаточно твоаров!");
} else {
  console.log("Заказ оформлен, с вами свяжется менеджер");
}
//situation 2
ordered = 130;
if (ordered > total) {
  console.log("На складе недостаточно товаров!");
} else {
  console.log("Заказ оформлен, с вами свяжется менеджер");
}

//task 3
// cancel - null
// ok - jqueryismyjam
// something else
// const ADMIN_PASSWORD = "jqueryismyjam";
// const enter = prompt("Enter password please");
// if (enter == null) {
//   alert("Отменено пользователем!");
// } else if (enter == ADMIN_PASSWORD) {
//   alert("Добро пожаловать!");
// } else {
//   alert("Доступ запрещен, неверный пароль!");
// };

//task 4
let credits = 23580;
let pricePerDroid = 3000;
// const quantity = +prompt("Какое колчиество роботов вы хотите купить?");
// console.log(quantity);
// if (quantity === 0) {
//   alert("Отменено пользователем!");
// } else {
//   let totalsum = quantity * pricePerDroid;
//   if (totalsum <= credits) {
//     credits -= totalsum;
//     alert(
//       `Вы купили ${quantity} дроидов, на счету осталось ${credits} кредитов.`
//     );
//   } else if (totalsum > credits) {
//     alert("Недостаточно средств на счету!");
//   } else {
//     alert("Это не число, напишите число!");
//   }
// };

//task 5
let cost;
const country = prompt("В какую страну вы хотите доставку?").toLowerCase();
switch (country) {
  case "китай":
    cost = 100;
    alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;
  case "чили":
    cost = 250;
    alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;
  case "австралия":
    cost = 170;
    alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;
  case "индия":
    cost = 80;
    alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;
  case "ямайка":
    cost = 120;
    alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;
  default:
    alert("В вашей стране доставка не доступна");
    break;
};

//task 6
// let total6 = 0;
// let input = confirm(`Введите число`);
// while (input != 0) {
//   input = +prompt("Введите число");
//   total6 += input;
// };
// alert(`Общая сума равна ${total6}`);
