/* 27. Write a javascript function to get the first element of an array. Passing a parameter 'n' will
return the first 'n' elements of the array.*/

function returnNofArrays(array, nNumnber) {
  if (!nNumnber) {
    return array[0];
  } else if (array.length <= nNumnber) {
    return console.log("exceeding the no of array length");
  } else {
    return array.slice(0, nNumnber);
  }
}

returnNofArrays([4, 5, 6, 7, 8]);
console.log(returnNofArrays([4, 5, 6, 7, 8]));

returnNofArrays([4, 5, 6, 7, 8], 7);
console.log(returnNofArrays([4, 5, 6, 7, 8], 7));

returnNofArrays([4, 5, 6, 7, 8], 4);
console.log(returnNofArrays([4, 5, 6, 7, 8], 4));

function returnNofArrays2(array, nNumnber) {
  if (!nNumnber) {
    return array[0];
  } else if (nNumnber > array.length) {
    return console.log("exceeding the no of array length");
  }

  let newArray = [];

  array.forEach((arr, ind) => {
    if (ind < nNumnber) {
      return newArray.push(arr);
    }
  });
  return newArray;
}

returnNofArrays2([4, 5, 6, 7, 8]);
console.log(returnNofArrays2([4, 5, 6, 7, 8]));

returnNofArrays2([4, 5, 6, 7, 8], 8);
console.log(returnNofArrays2([4, 5, 6, 7, 8], 8));

returnNofArrays2([4, 5, 6, 7, 8], 4);
console.log(returnNofArrays2([4, 5, 6, 7, 8], 4));
