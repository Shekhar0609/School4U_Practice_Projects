const bodyEl = document.querySelector("#body");
const inputColor = document.getElementById("color-input");

const randomColor = document.querySelector("#random-color");
const colorApply = document.querySelector("#apply-color");

let outputColorName = document.querySelector("#output-color-name");

const colorArray = [
  "red",
  "blue",
  "green",
  "yellow",
  "lightseagreen",
  "cyan",
  "tomato",
  "lightcoral",
  "acqua",
  "white",
  "black",
];

document.addEventListener("DOMContentLoaded", () => {
  inputColor.focus();
});

colorApply.addEventListener("click", (color) => {
  color = inputColor.value;

  if (color === "") {
    outputColorName.innerText = "please enter color name";
    outputColorName.classList.add("text-red-800");
    outputColorName.removeAttribute("style");
  } else {
    outputColorName.classList.remove("text-red-800");
    bodyEl.style.backgroundColor = color;
    outputColorName.innerText = bodyEl.style.backgroundColor;
  }
});

randomColor.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * colorArray.length);
  bodyEl.style.backgroundColor = colorArray[randomNumber];
  outputColorName.innerText = bodyEl.style.backgroundColor;
  outputColorName.style.color = bodyEl.style.backgroundColor;
});
