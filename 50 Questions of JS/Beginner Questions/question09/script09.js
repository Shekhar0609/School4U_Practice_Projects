// 9. Check if an object is empty (has no keys).

let person = {};

function isObejectEmpty(obj) {
  let isEmptyKey = Object.keys(obj) < 1 ? "Empty Object" : "Object not Empty";
  return isEmptyKey;
}

isObejectEmpty(person);
console.log(isObejectEmpty(person)); // Output: "Empty Object"