// 15. Create a function that removes duplicate values from an array.

//  Example:
let array = [11, 2, 2, 3, 4, 4, 5, 5, 56, 33];

//function to remove duplicate values
function removeDuplicateValue(duplicateValues) {
  return duplicateValues.filter(
    // filter method to filter out duplicate values
    (value, index) => array.indexOf(value) === index // check if the index of the value is the same as the current index
  );
}

removeDuplicateValue(array);
// Output: [11, 2, 3, 4, 5, 56, 33]

console.log(removeDuplicateValue(array));

// Another Approach using Set
let newArray = [11, 2, 2, 3, 4, 4, 5, 5, 56, 33];

//function to remove duplicate values using Set
function removeDuplicateValue2(Values) {
  // Set only stores unique values
  return [...new Set(Values)]; // spread operator to convert Set back to array
}
removeDuplicateValue2(newArray);
// Output: [11, 2, 3, 4, 5, 56, 33]
console.log(removeDuplicateValue2(newArray));
