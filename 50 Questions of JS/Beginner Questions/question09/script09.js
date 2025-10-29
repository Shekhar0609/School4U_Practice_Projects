// 9. Check if an object is empty (has no keys).

let person = {}; // Empty object

// Function to check if an object is empty
function isObejectEmpty(obj) {
  // Corrected function name to isObjectEmpty

  // Object.keys(obj) is converting to keys array and checking its length
  let isEmptyKey = Object.keys(obj) < 1 ? "Empty Object" : "Object not Empty"; // Corrected condition to check length of keys array
  return isEmptyKey; // Return the result
}

isObejectEmpty(person); // Calling the function
console.log(isObejectEmpty(person)); // Output: "Empty Object"
