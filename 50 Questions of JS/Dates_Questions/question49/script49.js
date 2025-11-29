/* 49. Write a formatDate(dateStr) function that returns a user-friendly format like Jan 1, 2025. Why is it better to
centralize this logic in a utility? */

const dateInput = document.getElementById("dateInput");
const formatDateBtn = document.getElementById("formatDate");
const resultSpan = document.getElementById("resultSpan");

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const options = { year: "numeric", month: "long", day: "numeric", weekday: "long" };
  return date.toLocaleDateString("en-IN", options);
}

formatDateBtn.addEventListener("click", () => {
  const enteredDate = dateInput.value;
  const formattedDate = formatDate(enteredDate);
  resultSpan.textContent = formattedDate;
});
