/* 35. Create a Show/Hide Password Toggle*/

const userUserName = document.querySelector("#userUserName"); // Selects the input element for the username.
const userPassword = document.querySelector("#userPassword"); // Selects the input element for the password.
const showPassword = document.querySelector("#showPassword"); // Selects the element used to toggle password visibility.

showPassword.addEventListener("click", (e) => { // Adds an event listener to the password toggle button.
  e.preventDefault(); // Prevents the default action of the toggle button.
  if (userPassword.type === "password") { // Checks if the current type of the password input is 'password'.
    userPassword.type = "text"; // If it is 'password', changes the input type to 'text' (shows characters).
  } else { // Executes if the current type is not 'password' (i.e., it's 'text').
    userPassword.type = "password"; // Changes the input type back to 'password' (hides characters).
  }
});