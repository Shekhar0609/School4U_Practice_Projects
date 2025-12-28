/* 2. How does using spread help avoid mutation? Modify the object without affecting the original? */

const originalObj = {
  fname: "shekhar",
  age: 28,
};

const copyOriginalObj = { ...originalObj, contactNo: 12345321 };

copyOriginalObj.address = {
  city: "mumbai",
  state: "maharashtra",
};

console.log(originalObj);
console.log(copyOriginalObj);
