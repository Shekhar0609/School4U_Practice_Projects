// 22. In an array of numbers and strings, only add those numbers which are not strings.

let stringNumberArray = [1, "2", 3, "4", 5, "hello", 6, "world"];

let sum = 0;

function numberArray(nums) {
  nums.forEach((num) => {
    if (typeof num == "number") {
      sum += num;
    }
  });
}

numberArray(stringNumberArray);
console.log(sum);
