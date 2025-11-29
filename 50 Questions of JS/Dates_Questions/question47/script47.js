/* 47. Add or subtract n days from a given date. (E.g., Add 7 days to "2025-05-01“) */

const dateInput = document.getElementById("dateInput");
const daysInput = document.getElementById("daysInput");
const calculateBtn = document.getElementById("calculateBtn");
const resultSpan = document.getElementById("resultSpan");

calculateBtn.addEventListener("click", function () {
  let date = new Date(dateInput.value);
  date.setDate(date.getUTCDate() + parseInt(daysInput.value));
  resultSpan.textContent = date.toISOString().split("T")[0];
});
