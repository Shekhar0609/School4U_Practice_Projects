// 8. Given an array of strings, return a new array where all strings are in uppercase.

// Original array
let fruits = ["Banana", "Orange", "Apple", "Mango"];

// Function to convert all strings in the array to uppercase
function convertUpperCase(upperCaseValue) {
  // Function definition
  let newValue = upperCaseValue.map((value) => {
    // Using map to create a new array
    return value.toUpperCase(); // Converting each string to uppercase
  });
  return newValue; // Returning the new array
}

convertUpperCase(fruits); // Calling the function
// Output: ["BANANA", "ORANGE", "APPLE", "MANGO"]
console.log(convertUpperCase(fruits)); // Displaying the result
console.log(fruits); // Original array remains unchanged
