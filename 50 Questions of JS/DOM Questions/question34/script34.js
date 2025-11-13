/* 34. How would you toggle a class on an element when another element is clicked (e.g.,
show/hide sidebar)?*/

const asideBar = document.querySelector("#aside");
const listEL = document.querySelector(".list");
const openCloseSideBar = document.querySelector(".sideBarbutton");

openCloseSideBar.addEventListener("click", () => {
  asideBar.classList.toggle("open");
  listEL.classList.toggle("close");
  openCloseSideBar.innerText = openCloseSideBar.innerText === "<" ? ">" : "<";
});
