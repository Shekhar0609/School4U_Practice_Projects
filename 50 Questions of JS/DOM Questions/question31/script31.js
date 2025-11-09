/* 31. How can you update the DOM based on user input in real-time (e.g., live preview of a
form)?*/


const inputTextEl = document.querySelector("#inputText"); // Selects the input element (textarea) using its ID.

const outputEl = document.querySelector("#output"); // Selects the output element (div) using its ID.

inputTextEl.addEventListener("input", (e) => { // Attaches an event listener that fires every time the input value changes (e.g., on every keypress).
  return outputEl.innerText = e.target.value  // Updates the text content of the output element with the current value of the input.
});
