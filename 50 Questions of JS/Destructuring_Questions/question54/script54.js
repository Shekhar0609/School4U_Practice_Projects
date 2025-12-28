/* 54. Create a custom JavaScript function that behaves like React’s useState.
The function should:
o Store a value (like state).
o Return two things: the current value and a function to update it.
Use array destructuring to extract both the value and the setter when calling your function. */

// Solution :

// Custom useState function implementation
function useState(initialValue) { //  initialValue is the starting state value
  let value = initialValue; // current state value

  function setValue(newValue) { // function to update the state value 
    value = newValue; // update the current value
    console.log("Value updated to:", value); // log the updated value
  }
  return [() => value, setValue]; // return an array with a getter function and the setter function
}

// Using array destructuring to extract the current value and the setter function
const [getValue, setValue] = useState(5); // initial state value is 5

// Testing the custom useState function
console.log(getValue()); // Output: 5
setValue(15); // Update state value to 15 
console.log(getValue()); // Output: 15
setValue(25); // Update state value to 25
console.log(getValue());  // Output: 25

