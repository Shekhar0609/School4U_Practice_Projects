// 16. What’s the difference between parseInt and Number()?

// The main difference between parseInt and Number() lies in how they convert strings to numbers:

// 1. parseInt:
// - parseInt converts a string to an integer by parsing it from the beginning of the string until it encounters a non-numeric character.
// - It can take a second argument, the radix (base) for the conversion (e.g., base 10 for decimal, base 16 for hexadecimal).
// - If the string does not start with a valid number, parseInt returns NaN.
// Example:
console.log(parseInt("42px")); // 42
console.log(parseInt("101", 2)); // 5 (binary to decimal)
console.log(parseInt("0xF", 16)); // 15 (hexadecimal to decimal)
console.log(parseInt("abc")); // NaN

// 2. Number():
// - Number() converts the entire string to a number. If the string contains any non-numeric characters (except for leading/trailing whitespace), it returns NaN.
// - It does not take a radix argument.

// Example:
console.log(Number("42")); // 42
console.log(Number("  42  ")); // 42
console.log(Number("42px")); // NaN
console.log(Number("0xF")); // 15 (hexadecimal to decimal)
console.log(Number("abc")); // NaN
// In summary, use parseInt when you want to extract an integer from the beginning of a string, and use Number() when you want to convert an entire string to a number.
