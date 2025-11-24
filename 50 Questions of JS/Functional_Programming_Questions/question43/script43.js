/* 43. How do you implement your own version of .map() function on arrays?*/

Array.prototype.ownMap = function (callback) {
  const result = []; // Create a new array to hold the results
  for (let i = 0; i < this.length; i++) {
    // Call the callback function with the current element, index, and the array itself
    result.push(callback(this[i], i, this));
  }
  return result; // Return the new array
};

// Example usage:
const numbers = [1, 2, 3, 4];
const doubled = numbers.ownMap((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
