//2. Find the combination of two arrays.

function combinationArray(array1, array2) {
  let combination = [...array1, ...array2];
  return combination;
}

console.log(combinationArray([1, 2, 4], [6, 5, 4]));
// Output: [1, 2, 4, 6, 5, 4]

console.log(combinationArray(["a", "b", "c"], ["d", "e", "f"]));
// Output: ['a', 'b', 'c', 'd', 'e', 'f']
console.log(combinationArray([true, false], [false, false, true]));
// Output: [true, false, false, false, true]
console.log(combinationArray([1, [2, 3]], [[4, 5], 6]));
// Output: [1, [2, 3], [4, 5], 6]
console.log(combinationArray(new Array(3), new Array(2)));
