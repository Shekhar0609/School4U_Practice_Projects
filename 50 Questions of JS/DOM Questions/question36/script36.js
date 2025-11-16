/* 35. 36. Create a Sticky Header on Scroll. The header becomes fixed to the top after scrolling
down. (Key concepts: scroll event, window.scrollY, classList.add/remove)*/

const headerEl = document.querySelector(".header"); // Selects the header element using its class name

document.addEventListener("scroll", () => { // Adds an event listener that fires whenever the user scrolls the document
  if (window.scrollY > 100) { // Checks if the vertical scroll position is greater than 100 pixels
    headerEl.classList.add("stick"); // If true, adds the class 'stick' to the header element (making it sticky)
  } else { // Executes if the scroll position is 100 pixels or less
    headerEl.classList.remove("stick"); // Removes the class 'stick' from the header element (unsticking it)
  }
});
