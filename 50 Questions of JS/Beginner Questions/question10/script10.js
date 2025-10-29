// 10. Create an array of numbers and double each value using .map().

// Example:
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// Solution:
// Function to double each number in the array
function doubleNumbers(numbers) {
  // Using .map() to create a new array with doubled values
  return numbers.map((number) => number * 2); // Doubling each number
}

// Testing the function
console.log(doubleNumbers(array)); // Output the new array with doubled values
doubleNumbers(array);
// Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 0]
