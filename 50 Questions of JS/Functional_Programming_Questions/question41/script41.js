/* 41. How would you compose multiple functions to transform data step-by-step (e.g., sanitize → trim →
capitalize)? Scenario: You’re preparing user input before storing it. (Expected knowledge: Function
composition, chaining, pipe or compose logic.)*/

// Function to sanitize input by removing special characters
function sanitize(input) {
  // Removes all non-alphanumeric characters except spaces
  return input.replace(/[^\w\s]/gi, ""); // Regex to match non-alphanumeric characters
}

// Function to trim whitespace from both ends of the string
function trim(input) {
  // Removes leading and trailing whitespace
  return input.trim(); // Built-in trim method
}

// Function to capitalize the first letter of each word
function capitalize(input) {
  // Capitalizes the first letter of each word
  return input.replace(/\b\w/g, (char) => char.toUpperCase()); // Regex to match the first letter of each word
}

// Function to compose multiple functions
function compose(...functions) {
  // Takes any number of functions as arguments
  return function (input) {
    // Returns a new function that takes the initial input
    return functions.reduceRight((acc, fn) => fn(acc), input); // Applies each function from right to left
  };
}

// Composing the functions to create a data transformation pipeline
const transformInput = compose(capitalize, trim, sanitize); // Composes the functions in the order: sanitize → trim → capitalize

// Example usage
const userInput = "   hello@world! welcome to functional programming.   "; // Sample user input with special characters and extra spaces
const transformedInput = transformInput(userInput); // Transforms the input using the composed function

// Output the transformed input
console.log(transformedInput); // Output: "Hello World Welcome To Functional Programming"
