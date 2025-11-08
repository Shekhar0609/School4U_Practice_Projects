/* 26. Write a Javascript function that accepts a string as a parameter and conversts the first
letter of each word of the string in upper case.*/
// Example1
// Defines a function named 'firstLetterToUpperCase' that takes a string of words.
function firstLetterToUpperCase(words) {
  let wordsArray = words.split(" "); // Splits the input string into an array of individual words using spaces as the delimiter.
  let firstLetterToUpperCase = wordsArray // Declares a variable to hold the result of mapping and joining the words.
    .map((word) => {
      // Iterates over each 'word' in the 'wordsArray' to transform it.
      let initialLetterUperCase = word[0].toUpperCase(); // Gets the first character of the word and converts it to uppercase.
      initialLetterUperCase = word.replace(word[0], initialLetterUperCase); // Replaces the original first letter with its uppercase version in the current word.
      return initialLetterUperCase; // Returns the modified word.
    })
    .join(" "); // Joins the array of modified words back into a single string, separated by spaces.
  return firstLetterToUpperCase; // Returns the final string with the first letter of each word capitalized.
}

firstLetterToUpperCase("i am shekhar Narsimulu deekonda"); // Calls the function with a sample string (for execution purposes).
console.log(firstLetterToUpperCase("i am shekhar Narsimulu deekonda")); // Calls the function and prints the result to the console.

// Example2
function firstLetterToUpperCase2(words) {
  // Defines a function named 'firstLetterToUpperCase2' that accepts a string of words.
  let wordsArray = words.split(" "); // Splits the input string into an array of individual words using spaces as the delimiter.
  let firstLetterToUpperCase = wordsArray // Declares a variable to hold the result of the map and join operations.
    .map((word) => {
      // Iterates over each 'word' in the 'wordsArray' to transform it.
      let initialLetterUperCase = word.charAt(0).toUpperCase(); // Gets the first character and converts it to uppercase using charAt(0).
      let remainingLetters = word.slice(1); // Gets all characters from the second index to the end of the word.
      return initialLetterUperCase + remainingLetters; // Concatenates the capitalized first letter with the rest of the word.
    })
    .join(" "); // Joins the array of modified words back into a single string, separated by spaces.
  return firstLetterToUpperCase; // Returns the final string with the first letter of each word capitalized.
}

firstLetterToUpperCase2("i am shekhar Narsimulu deekonda"); // Calls the function with a sample string (for execution purposes).
console.log(firstLetterToUpperCase2("i am shekhar Narsimulu deekonda")); // Calls the function and prints the result to the console.
