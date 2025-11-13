/* 33. How do you find the closest ancestor element that matches a selector?*/

const usergrandParantUserName = document.querySelector("#grandParant");
const parent = document.querySelector("parent");
const child = document.querySelector(".child");



child.addEventListener("click", (e) => { 
  console.log(e.target.closest('.parent'));
});