// 20. What is the difference between slice and splice?

// Slice does not modify the original array, while splice modifies the original array.
const fruits = ["apple", "banana", "cherry", "date"];

// Using slice to get a portion of the array
console.log(fruits.slice(1, 3));
// Original array remains unchanged
console.log(fruits);
// Using splice to remove and add elements

// Original array is modified
fruits.splice(1, 2, "blueberry", "dragonfruit");
console.log(fruits);

// Original array after splice
console.log(fruits);

// Output:
// [ 'banana', 'cherry' ]
// [ 'apple', 'banana', 'cherry', 'date' ]
// [ 'apple', 'blueberry', 'dragonfruit', 'date' ]
// [ 'apple', 'blueberry', 'dragonfruit', 'date' ]
/* In summary, slice is used to create a new array from a portion of an existing array without modifying 
it, while splice is used to add or remove elements from an array, thereby modifying the original array.*/

