// 21. Create a function that reverse each word of a given sentence.
// E.g., Mai hun manas → sanam nuh iam

// Solution:
// Define the sentence to be reversed
let sentance = "Mai hun manas";

// Function to reverse each word in the sentence
function reverseFunction(words) {
  // words = "Mai hun manas"
  let wordArray = Array.from(words); // wordArray = ['M', 'a', 'i', ' ', 'h', 'u', 'n', ' ', 'm', 'a', 'n', 'a', 's']
  return wordArray.reverse().join(""); // sanam nuh iam
}

// Call the function and log the result
reverseFunction(sentance); // sanam nuh iam
console.log(reverseFunction(sentance)); // sanam nuh iam
