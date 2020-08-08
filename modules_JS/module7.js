"use strict";
//варианты получения доступа к документу
//1 through name of tage
const title = document.querySelector("h1");
title.textContent = "Fire";
title.style.color = "darkred";
title.style.background = "black";

const list = document.querySelector("ul");
list.classList.add("myNewClass");
list.classList.remove("myNewClass");
const image = document.querySelector("img");
image.setAttribute("alt", "value");
image.src =
  "https://images.pexels.com/photos/1558916/pexels-photo-1558916.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
image.width = 250;
image.removeAttribute("alt");

//2 through class
// const title = document.querySelector(".Main_Title");
// const title = document.getElementsByClassName("item");

//3 through identifier
// const title = document.querySelector("#title");
// const title = document.getElementById("title");

//4 through data atribute
// const title = document.querySelector('[data-action="action"]');
console.log(title);
console.dir(title);

//создание элементов
const newLi = document.createElement("li");
newLi.textContent = "$$";
list.appendChild(newLi); //добавился глобально
// list.prepend("some new elements in the begining");
// list.append("some new elements in the end");
// list.removeChild(newLi);
// list.remove();

const newImage = image.cloneNode(true);
list.insertAdjacentElement("afterend", newImage);

const beforeList = document.createElement("a");
beforeList.textContent = "&";
const beginList = document.createElement("a");
beginList.textContent = "@";
const endList = document.createElement("a");
endList.textContent = "@";
const afterList = document.createElement("a");
afterList.textContent = "&";

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
  console.log(event.target); //happened event
  console.log(event.currentTarget); //happened handler events
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
