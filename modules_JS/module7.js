"use strict";
const title = document.querySelector("h1");
title.textContent = "JS";
title.style.color = "blue";
title.style.background = "black";

const list = document.querySelector("ul");
list.classList.add("myNewClass");
list.classList.remove("myNewClass");
const image = document.querySelector("img");
image.setAttribute("alt", "value");
image.src =
  "../1.jpg";
image.width = 250;
image.removeAttribute("alt");

//2
// const title = document.querySelector(".Main_Title");
// const title = document.getElementsByClassName("item");

//3 
// const title = document.querySelector("#title");
// const title = document.getElementById("title");

//4
// const title = document.querySelector('[data-action="action"]');
console.log(title);
console.dir(title);

//создание элем
const newLi = document.createElement("li");
newLi.textContent = "...";
list.appendChild(newLi); //добавился гл
// list.prepend("some new elements in the begining");
// list.append("some new elements in the end");
// list.removeChild(newLi);
// list.remove();

const newImage = image.cloneNode(true);
list.insertAdjacentElement("afterend", newImage);

const beforeList = document.createElement("a");
beforeList.textContent = "1";
const beginList = document.createElement("a");
beginList.textContent = "3";
const endList = document.createElement("a");
endList.textContent = "4";
const afterList = document.createElement("a");
afterList.textContent = "2";

list.style.border = "5px solid";
list.insertAdjacentElement("afterbegin", beginList);
list.insertAdjacentElement("beforebegin", beforeList);
list.insertAdjacentElement("beforeend", endList);
list.insertAdjacentElement("afterend", afterList);

// list.insertBefore(newImage,endList);
const desk = `<h2 style="color:black">Bewitching<h2>`;
list.insertAdjacentHTML("beforebegin", desk);
// list.removeChild(endList);
beforeList.remove();
afterList.remove();
// list.innerHTML = ""; list.innerHTML = `<li>1<li>`;

const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("Обработка клика по кнопке");
  console.log(event.type);
  console.log(event.target); 
  console.log(event.currentTarget);
  list.style.border = "7px solid black";
});

const form = document.querySelector("form");
const input = document.querySelector(".input");
input.addEventListener("input", (event) => {
  console.log("Обработка события input");
  console.dir(input.value);
})
form.addEventListener("submit", () => {
  event.preventDefault();
  console.log("Обработка события submit");
  console.dir(form);
})
// input.addEventListener("focus" () => {
//   // input.style.border = "2px"
// });
