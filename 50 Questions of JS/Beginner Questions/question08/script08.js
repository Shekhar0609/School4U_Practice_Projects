// 8. Given an array of strings, return a new array where all strings are in uppercase.

let fruits = ["Banana", "Orange", "Apple", "Mango"];

function convertUpperCase(upperCaseValue) {
  let newValue = upperCaseValue.map((value) => {
    return value.toUpperCase();
  });
  return newValue;
}

convertUpperCase(fruits);
// Output: ["BANANA", "ORANGE", "APPLE", "MANGO"]
console.log(convertUpperCase(fruits));
console.log(fruits);
