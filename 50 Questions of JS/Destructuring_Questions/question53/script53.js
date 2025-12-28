/* 53. Write a function that take numbers as argument and separates even and odd numbers and return
an object with evens and odds and destructure the output while calling function. */

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function oddEvenNumbers(...nums) {
  let odd = [];
  let even = [];
  nums.filter((num) => {
    num % 2 !== 0 ? odd.push(num) : even.push(num);
  });

  return { odd, even };
}

let { odd, even } = oddEvenNumbers(...nums);

console.log("Odd Numbers are: ", odd);
console.log("Even Numbers are: ", even);
