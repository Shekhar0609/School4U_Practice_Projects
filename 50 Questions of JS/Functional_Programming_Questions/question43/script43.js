/* 43. How do you implement your own version of .map() function on arrays?*/

// Adding a custom map function to the Array prototype
Array.prototype.ownMap = function (callback) {
  // 'this' refers to the array on which ownMap is called and callback is the function to be applied to each element
  const result = []; // Create a new array to hold the results
  for (let i = 0; i < this.length; i++) {
    // Iterate over each element in the array
    // Call the callback function with the current element, index, and the array itself
    result.push(callback(this[i], i, this)); // Push the result of the callback into the new array
  }
  return result; // Return the new array
};

// Example usage:
// Using the custom ownMap function to double each number in the array
const numbers = [1, 2, 3, 4];

// Doubling each number using ownMap
const doubled = numbers.ownMap((num) => num * 2);

// Logging the result
console.log(doubled); // Output: [2, 4, 6, 8]
