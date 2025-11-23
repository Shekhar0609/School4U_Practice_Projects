/* 38. How would you use .map() to transform a list of products into a list of HTML elements?*/

// Sample list of products
const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 75 },
  { id: 4, name: "Pad", price: 34 },
];

// Transform products into HTML elements
const productElements = products.map((product) => {
  // Using template literals to create HTML structure
  // Returning HTML string for each product
  return `<div class="product">
    <h2>${product.name}</h2>
    <p>Price: $${product.price}</p>
  </div>`;
});

// Assuming there's a container element in the HTML to hold the product elements
const containerElement = document.getElementById("product-container");

// Inserting the generated HTML into the container
containerElement.innerHTML = productElements.join("\n");
