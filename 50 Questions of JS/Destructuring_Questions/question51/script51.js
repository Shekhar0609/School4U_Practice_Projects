/* 51. What will be the output? */

const arr = [1, 2, 3]; // An array with three elements
const obj = { ...arr }; // Using the spread operator to spread the array elements into an object literal
console.log(obj); // Logs the resulting object to the console

// Output: { '0': 1, '1': 2, '2': 3 }
// Explanation: When using the spread operator on an array within an object literal,
// the array elements are assigned to object properties with keys corresponding to their indices.
