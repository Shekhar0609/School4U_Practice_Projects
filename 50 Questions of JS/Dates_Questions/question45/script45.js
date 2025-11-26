/* 45. Validate that a user's selected date range is no longer than 30 days. */

function validateDateRange(userDate) { // Defines a function named 'validateDateRange' that takes one argument, 'userDate'
  const currentDate = new Date(); // Creates a new Date object representing the current date and time
  const userEnteredDate = new Date(userDate); // Creates a new Date object from the date string passed by the user

  let deffDate = (userEnteredDate - currentDate) / 1000 / 60 / 60 / 24; // Calculates the difference between the two dates in milliseconds, and converts it to days

  if (deffDate > 30) { // Checks if the difference in days is greater than 30
    console.log("more than 30 days"); // Logs the message if the difference is more than 30 days
  } else { // Executes if the difference in days is 30 or less
    console.log("less than 30 days"); // Logs the message if the difference is less than or equal to 30 days
  }
}

validateDateRange("2025/12/01"); // Calls the function with the specific date string "2025/12/01"
