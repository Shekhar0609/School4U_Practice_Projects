// 23. How would you check if a number is an integer?

// Function to check if a number is an integer
function isInteger(num) {
  // Using Number.isInteger method
  return Number.isInteger(num); // Returns true if num is an integer, false otherwise
}

// Alternative implementation without using Number.isInteger

console.log(typeof 23, 23, isInteger(23)); // true
console.log(typeof 3.14, 3.14, isInteger(3.14)); // false
console.log(typeof -7, -7, isInteger(-7)); // true
console.log(typeof 0, 0, isInteger(0)); // true
console.log(typeof "10", "10", isInteger("10")); // false
console.log(NaN, isInteger(NaN)); // false
console.log(typeof Infinity, Infinity, isInteger(Infinity)); // false
console.log(typeof -Infinity, -Infinity, isInteger(-Infinity)); // false
