/* 32. How would you handle form validation in real time and show error messages
dynamically?*/

const userUserName = document.querySelector("#userUserName"); // Selects the input element for the username.
const userPassword = document.querySelector("#userPassword"); // Selects the input element for the password.
const showPassword = document.querySelector("#showPassword"); // Selects the element used to toggle password visibility.
const alertMessege = document.querySelector(".alert"); // Selects the element used to display alert messages.
const formEl = document.querySelector("#form"); // Selects the form element by its ID.

formEl.addEventListener("submit", (e) => { // Adds an event listener to the form that triggers on submission.
  e.preventDefault(); // Prevents the default form submission (page reload).
  console.log(e.closest);
  let userUserNameValue = userUserName.value; // Retrieves the current value entered in the username field.
  let userPasswordValue = userPassword.value; // Retrieves the current value entered in the password field.

  if (userUserNameValue.length <= 4) { // Checks if the username value is 4 characters or less.
    alertMessege.innerText = `user name must be more than 4 characters`; // Sets the alert message for insufficient username length.
    alertMessege.style.color = "red"; // Styles the alert message text color to red.
  } else if (userPasswordValue.length <= 4) { // Checks if the password value is 4 characters or less.
    alertMessege.innerText = `password must be more than 4 characters`; // Sets the alert message for insufficient password length.
    alertMessege.style.color = "red"; // Styles the alert message text color to red.
  } else if (userUserNameValue !== userPasswordValue) { // Checks if the username and password values are NOT identical.
    alertMessege.innerText = `Username and Password is incorrect`; // Sets the alert message for incorrect credentials.
    alertMessege.style.color = "red"; // Styles the alert message text color to red.
    userUserName.value = ""; // Clears the username input field.
    userPassword.value = ""; // Clears the password input field.
  } else { // Executes if the username and password values ARE identical.
    alertMessege.innerText = `Username and Password is correct`; // Sets the alert message for correct credentials.
    alertMessege.style.color = "lightgreen"; // Styles the alert message text color to light green.
    userUserName.value = ""; // Clears the username input field.
    userPassword.value = ""; // Clears the password input field.
  }
});

showPassword.addEventListener("click", (e) => { // Adds an event listener to the password toggle button.
  e.preventDefault(); // Prevents the default action of the toggle button.
  if (userPassword.type === "password") { // Checks if the current type of the password input is 'password'.
    userPassword.type = "text"; // If it is 'password', changes the input type to 'text' (shows characters).
  } else { // Executes if the current type is not 'password' (i.e., it's 'text').
    userPassword.type = "password"; // Changes the input type back to 'password' (hides characters).
  }
});