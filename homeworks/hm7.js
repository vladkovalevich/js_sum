"use strict";
//task1
const categoriesUl = Array.from(
  document.querySelectorAll("ul#categories>li.item")
);
console.log(`В списке ${categoriesUl.length} категории`);
const categoriesList = Array.from(
  document.querySelectorAll("ul#categories li.item ul ")
);
console.log(categoriesList);
const categoriesArr = [];
categoriesList.forEach((element) => {
  categoriesArr.push(
    `Категория: ${
      document.querySelector("h2").textContent
    } / Количество элементов: ${element.children.length}`
  );
});

console.log(categoriesArr);

//task2

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ul = document.querySelector("#ingredients");
for (const element of ingredients) {
  const li = document.createElement("li");
  li.textContent = element;
  ul.appendChild(li);
}
console.log(ul);

//task 3

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const ul2 = document.querySelector("#gallery");
console.log(ul2);
for (let element of images) {
  const img = `<img src="${element.url}" class="img" >`;
  ul2.insertAdjacentHTML("beforebegin", img);
}
// task 4
const button = document.querySelector("button");
console.log(button);
const button2 = document.querySelector("button");
console.log(button);
// task 6

let input = document.getElementById("validation-input");
console.dir(input);
const dataLenght = +input.getAttribute("data-length");
console.log(dataLenght);
// input.classList.add("valid");
input.addEventListener("blur", () => {
  if (input.value.length !== dataLenght && input.value.length !== 0) {
    input.classList.add("invalid");
  }
  if(input.value.length === 0){
    input.classList.remove("valid");
    input.classList.remove("invalid");
  }
  if (input.value.length === dataLenght) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  }
});
