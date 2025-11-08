// 24. Write a JavaScript function that reverse a number.

// Example x = 1234567890;
function reverseNumber(numb) {
  // function starts here
  // convert number to string, split into array, reverse array, join back to string, convert back to number
  let reverseString = numb.toString().split("").reverse();
  return Number(reverseString.join("")); // return the reversed number
}

// call the function
reverseNumber(1234567890);
// Output: 0987654321

console.log(reverseNumber(1234567890)); // Output: 987654321
