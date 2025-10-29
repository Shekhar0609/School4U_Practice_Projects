// 10. Create an array of numbers and double each value using .map().

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function doubleNumbers(numbers) {
  return numbers.map((number) => number * 2);
}

doubleNumbers(array);
// Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 0]