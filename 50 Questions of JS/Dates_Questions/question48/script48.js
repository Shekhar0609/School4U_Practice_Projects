/* 48. Calculate the user's age from their date of birth. */

const dateInput = document.getElementById("dateInput");
const calculateBtn = document.getElementById("calculateBtn");
const resultSpan = document.getElementById("resultSpan");

calculateBtn.addEventListener("click", () => {
  const dobvalue = dateInput.value;
  const dob = new Date(dobvalue);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - dob.getFullYear();
  const monthDiff = currentDate.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < dob.getDate())) {
    age--;
  }
  resultSpan.textContent = `Age: ${age} years`;

});
