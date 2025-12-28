/* 54. Create a custom JavaScript function that behaves like React’s useState.
The function should:
o Store a value (like state).
o Return two things: the current value and a function to update it.
Use array destructuring to extract both the value and the setter when calling your function. */

// Solution :

// Custom useState function implementation
function useState(initialValue) {//  initialValue is the starting state value
  let value = initialValue; // current state value

  function setValue(newValue) {// function to update the state value
    value = newValue; // update the current value
    console.log("Value updated to:", value); // log the updated value
  }

  // Getter function to retrieve the current state value
  function getValue() { // function to get the current state value
    return value; // return the current state value
  }
  
  return [getValue, setValue]; // returning both the getter and setter functions
}

// Using array destructuring to extract the current value and the setter function
const [getCount, setCount] = useState(5); // initial state value is 5

// Testing the custom useState function
console.log(getCount()); // Output: 5
setCount(15); // Update state value to 15
console.log(getCount()); // Output: 15
setCount(25); // Update state value to 25
console.log(getCount()); // Output: 25
setCount(35); // Update state value to 35
console.log(getCount()); // Output: 35
