// 25. Write a javascript function that returns a passed string with letters in alphabetical order.

// Defines a function named 'alpabeticalOrder' that accepts a string of words.
function alpabeticalOrder(words) {
  return words.split(" ").sort().join(" "); // Splits the string by spaces, sorts the resulting word array alphabetically, and joins the words back with spaces.
}

// Calls the function with a sample string, initiating the sorting process.
alpabeticalOrder("shekhar Narsimulu deekonda");
