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

colorApply.addEventListener("click", (color) => {
  let format = `/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/`;
  color = inputColor.value;
  if (!color.includes(format)) {
    outputColorName.innerText = "please enter valid color name";
    console.log(!color.includes(format));
  }
  if (color === "") {
    outputColorName.innerText = "please enter color name";
  } else {
    bodyEl.style.backgroundColor = color;
    outputColorName.innerText = bodyEl.style.backgroundColor;
  }
});

randomColor.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * colorArray.length);
  bodyEl.style.backgroundColor = colorArray[randomNumber];
  outputColorName.innerText = bodyEl.style.backgroundColor;
  console.log(colorArray[randomNumber]);
});
