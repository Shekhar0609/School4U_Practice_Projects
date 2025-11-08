/* 28. Write a javascript function to get the number of occurtunces of each letter in specified
string.*/

let fname = "shekhar narsimulu deekonda"; // Defines a string variable containing a name.

function countLetters(letter) { // Defines a function named 'countLetters' that accepts a string.
  let countLetterObj = {}; // Initializes an empty object to store the letter counts (the frequency map).

  let letterArray = letter.split(""); // Splits the input string into an array of individual characters (including spaces).

  letterArray.forEach((letter) => { // Iterates over each 'letter' in the character array.
    if (countLetterObj.hasOwnProperty(letter)) { // Checks if the current letter is already a key in the count object.
      countLetterObj[letter]++; // If the letter exists, increments its count by one.
    } else { // Executes if the current letter is encountered for the first time.
      countLetterObj[letter] = 1; // Adds the new letter to the object and sets its initial count to 1.
    }
  });
  return countLetterObj; // Returns the final object containing the count of each unique character.
}

countLetters(fname); // Calls the function with the sample string (for execution purposes).
console.log(countLetters(fname)); // Calls the function and prints the resulting frequency map object to the console.

function countLetters2(letter) { // Defines a function named 'countLetters2' that accepts a string ('letter').
  let countLetterObj2 = {}; // Initializes an empty object to store the frequency count of characters.

  let letterArray = letter.split(""); // Splits the input string into an array of individual characters (including spaces).

  for (let index = 0; index < letterArray.length; index++) { // Starts a standard 'for' loop to iterate through the character array.
    let currentLetter = letterArray[index]; // Gets the character at the current loop index.

    if (countLetterObj2.hasOwnProperty(currentLetter)) { // Checks if the current character is already a key in the count object.
      countLetterObj2[currentLetter]++; // If the key exists, increments its count.
    } else { // Executes if the current character is encountered for the first time.
      countLetterObj2[currentLetter] = 1; // Initializes the count for the new character to 1.
    }
  }
  return countLetterObj2; // Returns the final object containing the count of each unique character.
}

countLetters2(fname); // Calls the function using the previously defined 'fname' variable.
console.log(countLetters2(fname)); // Calls the function again and prints the resulting frequency map to the console.