/* 26. Write a Javascript function that accepts a string as a parameter and conversts the first
letter of each word of the string in upper case.*/

function firstLetterToUpperCase(words) {
  let wordsArray = words.split(" ");
  let firstLetterToUpperCase = wordsArray
    .map((word) => {
      let initialLetterUperCase = word[0].toUpperCase();
      initialLetterUperCase = word.replace(word[0], initialLetterUperCase);
      return initialLetterUperCase;
    })
    .join(" ");
  return firstLetterToUpperCase;
}

firstLetterToUpperCase("i am shekhar Narsimulu deekonda");
console.log(firstLetterToUpperCase("i am shekhar Narsimulu deekonda"));

function firstLetterToUpperCase2(words) {
  let wordsArray = words.split(" ");
  let firstLetterToUpperCase = wordsArray
    .map((word) => {
      let initialLetterUperCase = word.charAt(0).toUpperCase();
      let remainingLetters = word.slice(1);
      return initialLetterUperCase + remainingLetters;
    })
    .join(" ");
  return firstLetterToUpperCase;
}

firstLetterToUpperCase2("i am shekhar Narsimulu deekonda");
console.log(firstLetterToUpperCase2("i am shekhar Narsimulu deekonda"));
