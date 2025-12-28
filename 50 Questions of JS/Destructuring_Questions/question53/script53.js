/* 53. Write a function that take numbers as argument and separates even and odd numbers and return
an object with evens and odds and destructure the output while calling function. */

// Solution: 
// Creating an array of numbers from 1 to 10
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // You can change or extend this array as needed

// Function to separate odd and even numbers from the given numbers
function oddEvenNumbers(...nums) { // Using rest parameter to accept multiple numbers as arguments
  let odd = []; // Array to store odd numbers
  let even = []; // Array to store even numbers

  // Iterating through each number and separating them into odd and even arrays
  nums.filter((num) => { // Using filter method to iterate through numbers 
    num % 2 !== 0 ? odd.push(num) : even.push(num);// Ternary operator to check if number is odd or even and push to respective array accordingly
  });

  return { odd, even }; // Returning an object containing both odd and even arrays
}

let { odd, even } = oddEvenNumbers(...nums); // Destructuring the returned object to get odd and even arrays

// Logging the odd and even numbers to the console
console.log("Odd Numbers are: ", odd);
console.log("Even Numbers are: ", even);
