// 22. In an array of numbers and strings, only add those numbers which are not strings.

// Example Input: [1, "2", 3, "4", 5, "hello", 6, "world"]
// Example Output: 15 (1 + 3 + 5 + 6)
let stringNumberArray = [1, "2", 3, "4", 5, "hello", 6, "world"];

// Initialize sum variable to store the sum of numbers
let sum = 0;

// Function to iterate through the array and add only numbers to sum and ignore strings
// nums is the parameter representing the input array
function numberArray(nums) {
  // Iterate through each element in the array
  nums.forEach((num) => {
    if (typeof num == "number") {
      // Check if the element is of type number
      // If it is a number, add it to sumF
      sum += num; // sum = sum + num
    }
  });
}

// Call the function with the provided array
numberArray(stringNumberArray);
// Print the final sum of numbers
console.log(sum);
// Expected Output: 15
