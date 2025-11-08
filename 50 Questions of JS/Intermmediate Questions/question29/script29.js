/* 29. write a javascript program to find the most frequent item of an array.*/

let numberArray = [1,2,3,4,2,44,52,4,2,2,7.65,545,0.4]; 

function countLetters(number) {
  let countNumberObj = {};

  number.forEach((num) => {
    if (countNumberObj.hasOwnProperty(num)) {
      countNumberObj[num]++; 
    } else {
      countNumberObj[num] = 1;
    }
  });
  return countNumberObj;
}

countLetters(numberArray);
console.log(countLetters(numberArray));


function countLetters2(number) {
  let countNumberObj2 = {};

  for (let index = 0; index < number.length; index++) { 
    let currentNumber = number[index];

    if (countNumberObj2.hasOwnProperty(currentNumber)) { 
      countNumberObj2[currentNumber]++;
    } else {
      countNumberObj2[currentNumber] = 1;
    }
  }
  return countNumberObj2;
}

countLetters2(numberArray);
console.log(countLetters2(numberArray));