/* 42. What is the difference between forEach and map, and when is it wrong to use map?*/

/* The forEach() method executes a provided function once for each array element. It does not return
 a new array; it simply iterates over the existing array and performs the specified operation on 
 each element.*/
const numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach((num) => {
  console.log(num * 2); // Outputs: 2, 4, 6, 8, 10
});

/* The map() method creates a new array populated with the results of calling a provided function
 on every element in the calling array. It is used when you want to transform each element and 
 create a new array with the transformed values.*/
const numbers2 = [1, 2, 3, 4, 5];
const doubled = numbers2.map((num) => num * 2);
console.log(doubled); // Outputs: [2, 4, 6, 8, 10]

/* It is wrong to use map() when you do not need to create a new array or when you are not interested 
in the returned values. If you only want to perform side effects (like logging or modifying external 
variables) without needing a new array, forEach() is the appropriate choice.*/
const numbers3 = [1, 2, 3, 4, 5];
numbers3.map((num) => {
  console.log(num * 2); // This is a misuse of map, as we are not using the returned array.
});

// In summary, use forEach() for side effects and map() when you need to transform data and create a new array.
