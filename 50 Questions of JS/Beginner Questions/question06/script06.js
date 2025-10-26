// 6. Write a function that returns the length of a given object (number of keys).

function totalObjLeghtKey(obj) {
  let ObjectKeyLength = Object.keys(obj);
  return ObjectKeyLength.length;
}

totalObjLeghtKey({
  fname: "jyoti",
  lname: "Deekonda",
  age: 55,
  Nationality: "Indian",
  isMarried: "Yes",
});
// Expected Output: 5
