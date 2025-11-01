// 13. Write a function that checks if all elements in an array are numbers.

let array = ["Alice", 30, true, "Bob", 10, "Charlie", false, 20, true, 30, 40];

function checkNumber(numbers) {
  return numbers.every((number) => (typeof number === "number" ? true : false));
}

checkNumber(array);
// Output: false
