/* 45. Validate that a user's selected date range is no longer than 30 days. */

function validateDateRange(userDate) {
  const currentDate = new Date();
  // console.log(date.toLocaleDateString());
  const userEnteredDate = new Date(userDate);

  let deffDate = (userEnteredDate - currentDate) / 1000 / 60 / 60 / 24;

  if (deffDate > 30) {
    console.log("more than 30 days");
  } else {
    console.log("less than 30 days");
  }
}

validateDateRange("2025/12/01");
