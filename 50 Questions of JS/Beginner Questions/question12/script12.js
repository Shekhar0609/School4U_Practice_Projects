// 12. Write a function to flatten a nested array (one level deep).(e.g., [1, [2, 3], 4] → [1, 2, 3, 4])

let nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function flattenedArr(nestedArr) {
  return nestedArr.flat();
}

flattenedArr(nestedArray);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]