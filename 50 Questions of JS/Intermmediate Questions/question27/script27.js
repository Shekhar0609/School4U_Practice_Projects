/* 27. Write a javascript function to get the first element of an array. Passing a parameter 'n' will
return the first 'n' elements of the array.*/

function returnNofArrays(array, nNumnber) { // Defines a function named 'returnNofArrays' that takes an array and a number 'nNumnber'.
  if (!nNumnber) { // Checks if 'nNumnber' is undefined, null, 0, or an empty string.
    return array[0]; // If 'nNumnber' is falsy, returns the first element of the array.
  } else if (array.length <= nNumnber) { // Checks if the array length is less than or equal to the requested number 'nNumnber'.
    return console.log("exceeding the no of array length"); // If length is exceeded, logs an error message to the console (and returns undefined).
  } else { // Executes if 'nNumnber' is a positive number and is less than the array's length.
    return array.slice(0, nNumnber); // Returns a new array containing the first 'nNumnber' elements.
  }
}

returnNofArrays([4, 5, 6, 7, 8]); // Calls the function to get the first element (since nNumnber is missing).
console.log(returnNofArrays([4, 5, 6, 7, 8])); // Calls the function and logs the result (which will be the element 4).

returnNofArrays([4, 5, 6, 7, 8], 7); // Calls the function to request 7 elements (exceeds length).
console.log(returnNofArrays([4, 5, 6, 7, 8], 7)); // Calls the function and logs the result (which will be undefined, but it first logs the error message).

returnNofArrays([4, 5, 6, 7, 8], 4); // Calls the function to request the first 4 elements.
console.log(returnNofArrays([4, 5, 6, 7, 8], 4)); // Calls the function and logs the resulting sub-array.



function returnNofArrays2(array, nNumnber) { // Defines a function named 'returnNofArrays2' that accepts an array and a number 'nNumnber'.
  if (!nNumnber) { // Checks if the number 'nNumnber' is missing or falsy.
    return array[0]; // If missing, returns only the first element of the array.
  } else if (nNumnber > array.length) { // Checks if the requested number 'nNumnber' is larger than the array's length.
    return console.log("exceeding the no of array length"); // If exceeded, logs an error message (and returns undefined).
  }

  let newArray = []; // Initializes an empty array to store the result.

  array.forEach((arr, ind) => { // Iterates over each element ('arr') and index ('ind') in the input array.
    if (ind < nNumnber) { // Checks if the current index is less than the desired count 'nNumnber'.
      return newArray.push(arr); // If true, adds the current element to the 'newArray'.
    }
  });
  return newArray; // Returns the newly created array containing the first 'nNumnber' elements.
}

returnNofArrays2([4, 5, 6, 7, 8]); // Calls the function to get the first element (nNumnber is missing).
console.log(returnNofArrays2([4, 5, 6, 7, 8])); // Calls the function and logs the result (which will be the element 4).

returnNofArrays2([4, 5, 6, 7, 8], 8); // Calls the function to request 8 elements (exceeds length).
console.log(returnNofArrays2([4, 5, 6, 7, 8], 8)); // Calls the function and logs the result (first logs the error, then logs undefined).

returnNofArrays2([4, 5, 6, 7, 8], 4); // Calls the function to request the first 4 elements.
console.log(returnNofArrays2([4, 5, 6, 7, 8], 4)); // Calls the function and logs the resulting sub-array.
