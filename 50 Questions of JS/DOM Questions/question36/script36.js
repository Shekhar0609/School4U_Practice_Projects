/* 35. 36. Create a Sticky Header on Scroll. The header becomes fixed to the top after scrolling
down. (Key concepts: scroll event, window.scrollY, classList.add/remove)*/

const headerEl = document.querySelector(".header");

document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    headerEl.classList.add("stick");
  } else {
    headerEl.classList.remove("stick");
  }
});
