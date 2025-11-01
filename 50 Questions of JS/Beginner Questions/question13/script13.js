// 13. Write a function that checks if all elements in an array are numbers.

// Sample Input:
let array = ["Alice", 30, true, "Bob", 10, "Charlie", false, 20, true, 30, 40];

// Sample Output: false
function checkNumber(numbers) {
  // Your code here
  // Using the every() method to check if all elements are numbers
  return numbers.every((number) => (typeof number === "number" ? true : false));
}

checkNumber(array);
// Output: false
