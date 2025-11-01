// 15. Create a function that removes duplicate values from an array.

let array = [11, 2, 2, 3, 4, 4, 5, 5, 56, 33];

function removeDuplicateValue(duplicateValues) {
  return duplicateValues.filter(
    (value, index) => array.indexOf(value) === index
  );
}

removeDuplicateValue(array);
// Output: [11, 2, 3, 4, 5, 56, 33]

console.log(removeDuplicateValue(array));

let newArray = [11, 2, 2, 3, 4, 4, 5, 5, 56, 33];

function removeDuplicateValue2(Values) {
  return [...new Set(Values)];
}

removeDuplicateValue2(newArray);
console.log(removeDuplicateValue2(newArray));
