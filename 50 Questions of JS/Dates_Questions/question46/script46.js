/* 46. Calculate difference between two dates in the format of “_ years _ months _days _ hours _ minutes _ sec”. */

const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");
const calculateBtn = document.getElementById("calculateBtn");
const resultDisplay = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
  const startDate = new Date(startDateInput.value);
  const endDate = new Date(endDateInput.value);
  let diffInSeconds = Math.floor((endDate - startDate) / 1000);
  let seconds = diffInSeconds % 60;
  let minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);
  let hours = Math.floor((diffInSeconds % (24 * 60 * 60)) / (60 * 60));
  let days = Math.floor((diffInSeconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
  let months = Math.floor((diffInSeconds % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60));
  let years = Math.floor(diffInSeconds / (365 * 24 * 60 * 60));

  resultDisplay.textContent = `${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} sec`;
});
