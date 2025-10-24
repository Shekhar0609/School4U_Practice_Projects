//1. Create a function that returns the last element of an array.

function lastElement(element) {
  //function that takes one parameter
  if (typeof element === "string") {
    //check if the parameter is a string
    return element.split("")[element.length - 1]; //split the string into an array and return the last element
  } else if (Array.isArray(element)) {
    //check if the parameter is an array
    return element[element.length - 1]; //return the last element of the array
  } else if (typeof element === "number") {
    let number = element.toString(); // convert the number to a string
    element = number.split(""); //split the string into an array
    return Number(element[element.length - 1]); //return the last element of the array
  } else if (typeof element === "object") {
    let keys = Object.keys(element); //get the keys of the object
    return element[keys[keys.length - 1]]; //return the value of the last key
  }
}

console.log(lastElement(["red", "green", "blue", "yellow", "purple"])); //test case for array
console.log(lastElement("Hello World")); //test case for string
console.log(lastElement(123456789)); //test case for number
console.log(lastElement({ name: "John", age: 30 })); //test case for object
