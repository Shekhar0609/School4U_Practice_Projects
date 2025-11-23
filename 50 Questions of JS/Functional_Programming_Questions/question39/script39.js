/* 39. How do you use .reduce() to calculate the total price in a shopping cart?*/

const shoppingCart = [
  { item: "Laptop", price: 999.99 },
  { item: "Phone", price: 499.99 },
  { item: "Tablet", price: 299.99 },
];

const totalPrice = shoppingCart.reduce((acc, product) => {
  return acc + product.price;
}, 0);

console.log(totalPrice.toFixed(2)); // Output: 1799.97
