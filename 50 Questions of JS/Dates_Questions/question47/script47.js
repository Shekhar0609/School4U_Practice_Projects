/* 47. Add or subtract n days from a given date. (E.g., Add 7 days to "2025-05-01“) */

// Get references to HTML elements
const dateInput = document.getElementById("dateInput");  // Input for the date
const daysInput = document.getElementById("daysInput"); // Input for the number of days to add/subtract
const calculateBtn = document.getElementById("calculateBtn"); // Button to trigger calculation
const resultSpan = document.getElementById("resultSpan");  // Span to display the result

// Event listener for the calculate button
calculateBtn.addEventListener("click", function () { // When button is clicked
  let date = new Date(dateInput.value); // Create a Date object from the input date
  date.setDate(date.getUTCDate() + parseInt(daysInput.value)); // Add/subtract the specified number of days
  resultSpan.textContent = date.toISOString().split("T")[0]; // Display the resulting date in YYYY-MM-DD format
});


