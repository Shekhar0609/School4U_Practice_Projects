/* 37. What is a pure function, and why is it useful in UI rendering?*/

/*A pure function is a function that, given the same input, will always return the same output and does not have any side effects (i.e., it does not modify any external state or variables).

Pure functions are useful in UI rendering for several reasons: 
1. Predictability: Since pure functions always produce the same output for the same input, they make it 
easier to predict how the UI will behave based on the current state and props.
2. Testability: Pure functions are easier to test because they do not depend on or modify external state. 
This makes unit testing straightforward, as you can simply provide inputs and verify outputs.
3. Performance: Pure functions can be optimized by techniques like memoization, where the results of function 
calls are cached based on input parameters. This can lead to significant performance improvements in UI rendering, 
especially in frameworks like React that rely on re-rendering components.
4. Maintainability: Pure functions promote a functional programming style, which can lead to cleaner and 
more maintainable code. This is particularly beneficial in complex UI applications where managing state and 
side effects can become challenging.
Overall, using pure functions in UI rendering helps create more reliable, efficient, and maintainable applications.
*/

// Example of a pure function
function add(a, b) {
  return a + b;
}

// Example of an impure function
let counter = 0;
function increment() {
  counter++;
  return counter;
}

// The 'add' function is pure because it always returns the same result for the same inputs and has no side effects.
/* The 'increment' function is impure because it modifies the external variable 'counter' and its output depends 
on the state of that variable. */
