/* 30. write a javascript program to shuffle an array.*/

let array = [14, 25, 36, 43, 35, 6, 7, 8, 9]; // Initializes an array of numbers to be shuffled.

for (let index in array) {
  // Starts a loop that iterates over the indices (0, 1, 2, ...) of the array.
  let randomIndex = Math.floor(Math.random() * array.length); // Generates a random index between 0 and array.length - 1.

  [array[randomIndex], array[index]] = [array[index], array[randomIndex]]; // Uses destructuring to swap the element at the current 'index' with the element at the 'randomIndex'.
}
console.log(array); // Prints the final, randomly shuffled array to the console.
