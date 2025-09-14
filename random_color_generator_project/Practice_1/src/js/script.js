const bodyEl = document.querySelector("#body"); //body element
const inputColor = document.getElementById("color-input"); //input color element

const randomColor = document.querySelector("#random-color"); //random color button
const colorApply = document.querySelector("#apply-color"); //apply color button

let outputColorName = document.querySelector("#output-color-name"); //output color name element

const colorArray = [
  //array of colors
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
  //when document is loaded
  inputColor.focus(); //focus on input color element
});

colorApply.addEventListener("click", (color) => {
  //apply color button click event listener and function
  color = inputColor.value; //get the value of input color element

  if (color === "") {
    //if input color is empty
    outputColorName.innerText = "please enter color name"; //output message
    outputColorName.classList.add("text-red-800"); // add class to output color name element
    outputColorName.removeAttribute("style"); //remove style attribute from output color name element
  } else {
    //if input color is not empty
    outputColorName.classList.remove("text-red-800"); //remove class from output color name element
    bodyEl.style.backgroundColor = color; //set background color of body element to input color value
    outputColorName.innerText = bodyEl.style.backgroundColor; //output the background color of body element
  }
});

randomColor.addEventListener("click", () => {
  //random color button click event listener and function
  let randomNumber = Math.floor(Math.random() * colorArray.length); //generate random number between 0 and length of color array
  bodyEl.style.backgroundColor = colorArray[randomNumber]; //set background color of body element to random color from color array
  outputColorName.innerText = bodyEl.style.backgroundColor; //output the background color of body element
  outputColorName.style.color = bodyEl.style.backgroundColor; //set the text color of output color name element to the background color of body element
});
