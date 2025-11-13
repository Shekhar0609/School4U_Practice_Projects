/* 33. How do you find the closest ancestor element that matches a selector?*/

const usergrandParantUserName = document.querySelector("#grandParant"); // Selects the grand parent container using its ID.
const parent = document.querySelector(".parent"); // Selects the parent container using its class name.
const child = document.querySelector(".child"); // Selects the child element using its class name.

child.addEventListener("click", (e) => {
  // Attaches a click event listener specifically to the 'child' element.
  console.log(e.target.closest(".parent")); // Logs the closest ancestor element that matches the CSS selector '.parent' relative to the clicked target.
});
