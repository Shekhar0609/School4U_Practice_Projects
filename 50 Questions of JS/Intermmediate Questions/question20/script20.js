// 20. What is the difference between slice and splice?

const fruits = ["apple", "banana", "cherry", "date"];

console.log(fruits.slice(1, 3));

console.log(fruits);

fruits.splice(1, 2, "blueberry", "dragonfruit");
console.log(fruits);

console.log(fruits);
