/* 31. How can you update the DOM based on user input in real-time (e.g., live preview of a
form)?*/

const inputTextEl = document.querySelector("#inputText");

const outputEl = document.querySelector("#output");

inputTextEl.addEventListener("input", (e) => {
  return outputEl.innerText = e.target.value
});
