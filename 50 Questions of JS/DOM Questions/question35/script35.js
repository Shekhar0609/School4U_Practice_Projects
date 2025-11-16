/* 35. Create a Show/Hide Password Toggle*/

const userUserName = document.querySelector("#userUserName"); // Selects the input element for the username.
const userPassword = document.querySelector("#userPassword"); // Selects the input element for the password.
const showPassword = document.querySelector("#showPassword"); // Selects the element used to toggle password visibility.

showPassword.addEventListener("click", (e) => { // Adds a click event listener to the element that toggles password visibility.
  // Adds an event listener to the password toggle button.
  e.preventDefault(); // Prevents the default action of the toggle button.
  userPassword.type === "password" // Checks if the password input type is currently 'password'
    ? (userPassword.type = "text") // If true, changes the input type to 'text' (shows password)
    : (userPassword.type = "password"); // If false, changes the input type back to 'password' (hides password)

  showPassword.innerText = // Updates the text content of the toggle button itself
    userPassword.type === "password" ? "Show password" : "Hide password"; // Sets the button text based on the new password input type
});
