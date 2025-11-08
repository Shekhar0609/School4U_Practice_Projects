/* 29. write a javascript program to find the most frequent item of an array.*/

let numberArray = [1, 2, 3, 4, 2, [44, [52, 4], 2, 2], 7.65, 545, 0.4]; // Defines a nested array containing various numbers (integers and floats).

// Example1
function countLetters(number) {
  // Defines the first function, 'countLetters', which takes a nested array 'number'.
  let countNumberObj = {}; // Initializes an empty object to store the frequency map of numbers.

  number.flat(Infinity).forEach((num) => {
    // Flattens the array entirely using 'flat(Infinity)' and iterates over each resulting number ('num').
    if (countNumberObj.hasOwnProperty(num)) {
      // Checks if the current number 'num' is already a key in the count object.
      countNumberObj[num]++; // If the key exists, increments its count.
    } else {
      // Executes if the current number is encountered for the first time.
      countNumberObj[num] = 1; // Initializes the count for the new number to 1.
    }
  });
  return countNumberObj; // Returns the final object containing the frequency count of all numbers.
}

countLetters(numberArray); // Calls the first function with the sample nested array (for execution).
console.log(countLetters(numberArray)); // Calls the first function and prints the resulting frequency map to the console.


// Example2
function countLetters2(number) {
  // Defines the second function, 'countLetters2', which also takes a nested array 'number'.
  let countNumberObj2 = {}; // Initializes a second empty object for the frequency map.

  let numArray = number.flat(Infinity); // Flattens the array completely and stores the flat list of numbers in 'numArray'.

  for (let index = 0; index < numArray.length; index++) {
    // Starts a traditional 'for' loop to iterate through the flattened array.
    let currentNumber = numArray[index]; // Retrieves the number at the current index.

    if (countNumberObj2.hasOwnProperty(currentNumber)) {
      // Checks if the current number is already a key in the count object.
      countNumberObj2[currentNumber]++; // If the key exists, increments its count.
    } else {
      // Executes if the current number is encountered for the first time.
      countNumberObj2[currentNumber] = 1; // Initializes the count for the new number to 1.
    }
  }
  return countNumberObj2; // Returns the final object containing the frequency count.
}

countLetters2(numberArray); // Calls the second function with the sample nested array (for execution).
console.log(countLetters2(numberArray)); // Calls the second function and prints the resulting frequency map to the console.
