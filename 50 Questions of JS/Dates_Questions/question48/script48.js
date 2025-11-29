/* 48. Calculate the user's age from their date of birth. */

// Get references to HTML elements
const dateInput = document.getElementById("dateInput"); // Date of Birth input
const calculateBtn = document.getElementById("calculateBtn"); // Calculate button
const resultSpan = document.getElementById("resultSpan"); // Result display span

// Event listener for Calculate button click
calculateBtn.addEventListener("click", () => { // Calculate age 
  const dobvalue = dateInput.value; // Get date of birth value 
  const dob = new Date(dobvalue); // Create Date object for date of birth
  const currentDate = new Date(); // Get current date

  // Calculate age in years
  let age = currentDate.getFullYear() - dob.getFullYear(); // Initial age calculation subtracting years
  const monthDiff = currentDate.getMonth() - dob.getMonth(); // Calculate month difference since last birthday so we can adjust age if necessary

  // Adjust age if birthday hasn't occurred yet this year
  if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < dob.getDate())) { // If current month is before birth month or it's the birth month but current day is before birth day
    age--; // Decrease age by 1
  }

  // Display the calculated age in the result span
  resultSpan.textContent = `Age: ${age} years`;
});
