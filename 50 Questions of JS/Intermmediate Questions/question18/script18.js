// 18. Explain floating-point precision issues in JavaScript.

// Floating-point precision issues in JavaScript arise because it uses the IEEE 754 standard for representing numbers.
// This standard represents numbers in a binary format, which can lead to inaccuracies when dealing with decimal fractions.
// For example, some decimal fractions cannot be represented exactly in binary, leading to small rounding errors.
// A common example is the addition of 0.1 and 0.2:
console.log(0.1 + 0.2); // Output: 0.30000000000000004
// Instead of the expected 0.3, we get 0.30000000000000004 due to these precision issues.
// To mitigate these issues, developers often use techniques such as rounding the result to a fixed number of decimal places
// or using libraries designed for precise decimal arithmetic.
// For instance, using toFixed to round the result:
console.log((0.1 + 0.2).toFixed(2)); // Output: "0.30"
// However, note that toFixed returns a string, so further conversion may be necessary for numerical operations.

// Another approach is to use libraries like Decimal.js or Big.js that provide arbitrary-precision decimal arithmetic.
// These libraries help avoid floating-point precision issues by allowing developers to work with decimal numbers more accurately.
// In summary, floating-point precision issues in JavaScript stem from the binary representation of decimal numbers,
// leading to small inaccuracies in calculations. Developers should be aware of these issues and use appropriate techniques or libraries to handle them effectively.
