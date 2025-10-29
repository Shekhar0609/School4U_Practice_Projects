// 11. Convert an array of strings into a single comma-separated string.

let stringArray = ["apple", "banana", "cherry", "red", "green", "blue"];

function singleCommaSeparatedString(str) {
  return str.join(",");
}
singleCommaSeparatedString(stringArray);
// Output: "apple,banana,cherry,red,green,blue"