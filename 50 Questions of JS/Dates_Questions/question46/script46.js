/* 46. Calculate difference between two dates in the format of “_ years _ months _days _ hours _ minutes _ sec”. */


// Get references to HTML elements
const startDateInput = document.getElementById("startDate"); // Input for start date
const endDateInput = document.getElementById("endDate"); // Input for end date
const calculateBtn = document.getElementById("calculateBtn"); // Button to trigger calculation
const resultDisplay = document.getElementById("result");  // Element to display the result


// Event listener for button click
calculateBtn.addEventListener("click", () => { // When the button is clicked
  const startDate = new Date(startDateInput.value); // Get the start date from input (timestamp format) YYYY-MM-DD HH:MM:SS
  const endDate = new Date(endDateInput.value); // Get the end date from input (timestamp format) YYYY-MM-DD HH:MM:SS

  // Calculate the difference in seconds
  let diffInSeconds = Math.floor((endDate - startDate) / 1000);  // Convert milliseconds to seconds

  // Calculate years, months, days, hours, minutes, and seconds
  let seconds = diffInSeconds % 60; // Remaining seconds after minutes
  let minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);  // Remaining minutes after hours
  let hours = Math.floor((diffInSeconds % (24 * 60 * 60)) / (60 * 60)); // Remaining hours after days
  let days = Math.floor((diffInSeconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60)); // Remaining days after months
  let months = Math.floor((diffInSeconds % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60));  // Remaining months after years
  let years = Math.floor(diffInSeconds / (365 * 24 * 60 * 60));  // Total years

    // Display the result in the specified format
  resultDisplay.textContent = `${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} sec`;
});
