/* 40. Explain immutability and how you would update an object in an array without mutating the original.*/


const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

const updatedUsers = users.map((user) => {
  if (user.id === 2) {
    return { ...user, age: 31 };
  } else {
    return user;
  }
});

console.log("Original Users:", users);
console.log("Updated Users:", updatedUsers);
