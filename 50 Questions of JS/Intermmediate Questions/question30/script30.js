/* 30. write a javascript program to shuffle an array.*/

let array = [14, 25, 36, 43, 35, 6, 7, 8, 9];

for (let index in array) {
  let randomIndex = Math.floor(Math.random() * array.length);

  [array[randomIndex], array[index]] = [array[index], array[randomIndex]];
}
console.log(array);
