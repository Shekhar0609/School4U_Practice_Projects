/* 28. Write a javascript function to get the number of occurrences of each letter in specified
string.*/

let fname = "shekhar narsimulu deekonda";

function countLetters(letter) {
  let countLetterObj = {};

  let letterArray = letter.split("");

  letterArray.forEach((letter) => {
    if (countLetterObj.hasOwnProperty(letter)) {
      countLetterObj[letter]++;
    } else {
      countLetterObj[letter] = 1;
    }
  });
  console.log(countLetterObj);
}

countLetters(fname);

function countLetters2(letter) {
  let countLetterObj2 = {};

  let letterArray = letter.split("");

  for (let index = 0; index < letterArray.length; index++) {
    let currentLetter = letterArray[index];

    if (countLetterObj2.hasOwnProperty(currentLetter)) {
      countLetterObj2[currentLetter]++;
    } else {
      countLetterObj2[currentLetter] = 1;
    }
  }
  console.log(countLetterObj2);
}

countLetters2(fname);
