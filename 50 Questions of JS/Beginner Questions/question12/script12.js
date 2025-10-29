// 12. Write a function to flatten a nested array (one level deep).(e.g., [1, [2, 3], 4] → [1, 2, 3, 4])

// Example nested array
let nestedArray = [65, 3, 24, [1, 2, 3], [4, 5, 6], [7, 8, 9]];

//Function to flatten a nested array
function flattenedArr(nestedArr) {
  return nestedArr.flat(1); // Using flat() method to flatten the array one level deep
}

// Test the function
console.log(flattenedArr(nestedArray));
flattenedArr(nestedArray); // function calling
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
