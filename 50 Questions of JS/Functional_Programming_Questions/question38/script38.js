/* 38. How would you use .map() to transform a list of products into a list of HTML elements?*/

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 75 },
  { id: 4, name: "Pad", price: 34 },
];

const productElements = products.map((product) => {
  return `<div class="product">
    <h2>${product.name}</h2>
    <p>Price: $${product.price}</p>
  </div>`;
});

const containerElement = document.getElementById("product-container");
containerElement.innerHTML = productElements.join("\n");
