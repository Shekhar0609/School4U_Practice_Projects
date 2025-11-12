/* 32. How would you handle form validation in real time and show error messages
dynamically?*/

const userUserName = document.querySelector("#userUserName");
const userPassword = document.querySelector("#userPassword");
const showPassword = document.querySelector("#showPassword");
const alertMessege = document.querySelector(".alert");
const formEl = document.querySelector("#form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let userUserNameValue = userUserName.value;
  let userPasswordValue = userPassword.value;

  if (userUserNameValue !== userPasswordValue) {
    alertMessege.innerText = `Username and Password is incorrect`;
    alertMessege.style.color = "red";
    userUserName.value = "";
    userPassword.value = "";
  } else {
    alertMessege.innerText = `Username and Password is correct`;
    alertMessege.style.color = "lightgreen";
    userUserName.value = "";
    userPassword.value = "";
  }
});

showPassword.addEventListener("click", (e) => {
  e.preventDefault();
  if (userPassword.type === "password") {
    userPassword.type = "text";
  } else {
    userPassword.type = "password";
  }
});
