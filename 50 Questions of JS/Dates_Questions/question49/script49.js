/* 49. Write a formatDate(dateStr) function that returns a user-friendly format like Jan 1, 2025. Why is it better to
centralize this logic in a utility? */

// Getting references to HTML elements
const dateInput = document.getElementById("dateInput"); // Input field for date
const formatDateBtn = document.getElementById("formatDate"); // Button to trigger date formatting
const resultSpan = document.getElementById("resultSpan"); // Span to display the result

// Function to format the date
function formatDate(dateStr) { // dateStr in 'YYYY-MM-DD' format
  const date = new Date(dateStr); // Create a Date object from the input string
  const options = { year: "numeric", month: "long", day: "numeric", weekday: "long" }; // Formatting options defined here
  return date.toLocaleDateString("en-IN", options); // Return formatted date string
}

// Event listener for the button click to format the date
formatDateBtn.addEventListener("click", () => { 
  const enteredDate = dateInput.value; // Get the date entered by the user
  const formattedDate = formatDate(enteredDate); // Call the formatDate function to format the date
  resultSpan.textContent = formattedDate; // Display the formatted date in the result span
});
