//4. Create a function that takes an array containing both numbers and strings,
// and returns a new array containing only the string values.

const mixedArray = ["apple", 123, "banana", 45.67, "orange", 89];

let stringArray = mixedArray.filter((stringArr) => {
  return typeof stringArr === "string";
});

console.log(stringArray);
