/* 39. How do you use .reduce() to calculate the total price in a shopping cart?*/

// Sample shopping cart array
const shoppingCart = [
  { item: "Laptop", price: 999.99 },
  { item: "Phone", price: 499.99 },
  { item: "Tablet", price: 299.99 },
];

// Using .reduce() to calculate the total price
const totalPrice = shoppingCart.reduce((acc, product) => {
  // acc is the accumulator, product is the current item
  return acc + product.price; // Add the price of the current product to the accumulator
}, 0); // Initial value of accumulator is 0

console.log(totalPrice.toFixed(2)); // Output: 1799.97
