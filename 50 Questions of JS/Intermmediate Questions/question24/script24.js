// 24. Write a JavaScript function that reverse a number.

function reverseNumber(numb) {
  let reverseString = numb.toString().split("").reverse();
  return Number(reverseString.join(""));
}

reverseNumber(1234567890);
// Output: 0987654321

console.log(reverseNumber(1234567890));
