// 19. How would you handle high-precision decimal math in JS?

let a = 0.1;
let b = 0.2;
let sum = a + b;

console.log("Regular sum (with floating-point precision issues):", sum); // 0.30000000000000004
// Using the built-in toFixed method to handle precision    
let preciseSum = (a + b).toFixed(2);
console.log("Precise sum using toFixed:", preciseSum); // "0.30"
