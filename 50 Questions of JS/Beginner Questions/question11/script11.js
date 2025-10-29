// 11. Convert an array of strings into a single comma-separated string.

// Sample array of strings
let stringArray = ["apple", "banana", "cherry", "red", "green", "blue"];

// Function to convert array to single comma-separated string
function singleCommaSeparatedString(str) {
  return str.join(","); // Join array elements with a comma and return the string
}

// Call the function and log the result
console.log(singleCommaSeparatedString(stringArray));
singleCommaSeparatedString(stringArray);
// Output: "apple,banana,cherry,red,green,blue"
