/* 54. Create a custom JavaScript function that behaves like React’s useState.
The function should:
o Store a value (like state).
o Return two things: the current value and a function to update it.
Use array destructuring to extract both the value and the setter when calling your function. */

// Solution :
function useState(initialValue) {
  let value = initialValue;
  function setValue(newValue) {
    value = newValue;
    console.log("Value updated to:", value);
  }
  return [() => value, setValue];
}
const [getValue, setValue] = useState(5);
console.log(getValue());
setValue(15);
console.log(getValue());
setValue(25);
console.log(getValue());

