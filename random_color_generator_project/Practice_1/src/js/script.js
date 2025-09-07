const bodyEl = document.querySelector("#body");
const inputColor = document.getElementById("color-input");

const randomColor = document.querySelector("#random-color");
const colorApply = document.querySelector("#apply-color");

let outoutColorName = document.querySelector("#output-color-name");

colorApply.addEventListener("click", () => {
  let format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

  if (inputColor.value.match(format)) {
    outoutColorName.innerText = "please enter valid color name";
  }
  if (inputColor.value === "") {
    outoutColorName.innerText = "please enter color name";
  } else {
    bodyEl.style.backgroundColor = `${inputColor.value}`;
    outoutColorName.innerText = bodyEl.style.backgroundColor;
  }
});
