/* 34. How would you toggle a class on an element when another element is clicked (e.g.,
show/hide sidebar)?*/

const asideBar = document.querySelector("#aside"); // Selects the aside element using its ID
const listEL = document.querySelector(".list"); // Selects the element with the class 'list'
const openCloseSideBar = document.querySelector(".sideBarbutton"); // Selects the button used to open/close the sidebar

openCloseSideBar.addEventListener("click", () => { // Adds a click event listener to the open/close button
  asideBar.classList.toggle("open"); // Toggles the 'open' class on the aside bar
  listEL.classList.toggle("close"); // Toggles the 'close' class on the list element
  openCloseSideBar.innerText = openCloseSideBar.innerText === "<" ? ">" : "<"; // Changes the button text between '<' and '>'
});
