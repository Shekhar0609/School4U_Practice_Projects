// 19. How would you handle high-precision decimal math in JS?

let a = 0.1;
let b = 0.2;
let sum = a + b;

console.log("Regular sum (with floating-point precision issues):", sum); // 0.30000000000000004
// Using the built-in toFixed method to handle precision    
let preciseSum = (a + b).toFixed(2);
console.log("Precise sum using toFixed:", preciseSum); // "0.30"
// Using a library like decimal.js for high-precision decimal math
// Uncomment the following lines if you have decimal.js installed
// const Decimal = require('decimal.js');
// let decimalA = new Decimal(0.1);
// let decimalB = new Decimal(0.2);
// let decimalSum = decimalA.plus(decimalB);
// console.log("Precise sum using decimal.js:", decimalSum.toString()); // "0.3"
// Note: To use decimal.js, you need to install it via npm: npm install decimal.js
// Another approach is to use integer math by scaling
let scale = 100; // Scale factor
let intA = Math.round(a * scale);
let intB = Math.round(b * scale);
let intSum = intA + intB;
let scaledSum = intSum / scale;
console.log("Precise sum using integer math:", scaledSum); // 0.3