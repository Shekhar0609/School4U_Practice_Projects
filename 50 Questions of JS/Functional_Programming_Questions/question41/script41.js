/* 41. How would you compose multiple functions to transform data step-by-step (e.g., sanitize → trim →
capitalize)? Scenario: You’re preparing user input before storing it. (Expected knowledge: Function
composition, chaining, pipe or compose logic.)*/

// Function to sanitize input by removing special characters
function sanitize(input) {
  return input.replace(/[^\w\s]/gi, "");
}

// Function to trim whitespace from both ends of the string
function trim(input) {
  return input.trim();
}

// Function to capitalize the first letter of each word
function capitalize(input) {
  return input.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Function to compose multiple functions
function compose(...functions) {
  return function (input) {
    return functions.reduceRight((acc, fn) => fn(acc), input);
  };
}

// Composing the functions to create a data transformation pipeline
const transformInput = compose(capitalize, trim, sanitize);

// Example usage
const userInput = "   hello@world! welcome to functional programming.   ";
const transformedInput = transformInput(userInput);
console.log(transformedInput); // Output: "Hello World Welcome To Functional Programming"
