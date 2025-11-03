// 17. Why does 0.1 + 0.2 !== 0.3 in JavaScript?


console.log(0.1 + 0.2 === 0.3); // false

// Explanation:
// This is due to the way floating-point numbers are represented in binary.
// In JavaScript, numbers are stored as 64-bit floating-point values (IEEE 754 standard).
// Some decimal fractions cannot be represented exactly in binary, leading to small precision errors.
// For example, 0.1 and 0.2 have repeating binary representations, which results in a sum that is very close to, but not exactly, 0.3.
console.log(0.1 + 0.2); // 0.30000000000000004

// To compare floating-point numbers, it's often better to check if they are "close enough" rather than exactly equal.
const epsilon = Number.EPSILON;
console.log(Math.abs((0.1 + 0.2) - 0.3) < epsilon); // true
// This checks if the difference between the two numbers is smaller than a very small value (epsilon).

// In summary, the inequality arises from the inherent limitations of floating-point arithmetic in binary systems.
