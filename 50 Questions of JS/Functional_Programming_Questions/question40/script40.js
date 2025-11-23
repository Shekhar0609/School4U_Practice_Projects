/* 40. Explain immutability and how you would update an object in an array without mutating the original.*/

/*Immutability is a concept where data cannot be changed after it has been created. 
In JavaScript, this means that instead of modifying an existing object or array, you 
create a new one with the desired changes. This approach helps to avoid unintended 
side effects and makes it easier to reason about code.*/

// To update an object in an array without mutating the original,
// you can use methods like .map() to create a new array with the updated object.
// Here's an example:

// Original array of objects
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

// Update Bob's age to 31 without mutating the original array
const updatedUsers = users.map((user) => {
  // Using map to create a new array
  if (user.id === 2) {
    // Check for the user to update
    return { ...user, age: 31 }; // Return a new object with the updated age
  } else {
    // For other users, return the original object
    return user; // Return the original object
  }
});

// Logging the original and updated arrays
console.log("Original Users:", users);

// Original array remains unchanged
console.log("Updated Users:", updatedUsers);
