/* 52. How does using spread help avoid mutation? Modify the object without affecting the original? */


// Original Object
const originalObj = {
  fname: "shekhar",
  age: 28,
};


// Using Spread Operator to create a copy and modify it without affecting the original object
const copyOriginalObj = { ...originalObj, contactNo: 12345321 };

// Modifying nested object to demonstrate deep mutation avoidance
copyOriginalObj.address = {
  city: "mumbai",
  state: "maharashtra",
};


console.log(originalObj); // Original object remains unchanged
console.log(copyOriginalObj);  // New object with added properties
