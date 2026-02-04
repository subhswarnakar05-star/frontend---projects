const products = [
  {
    name: "Wireless Headphones",
    price: "₹2,499",
    category: "Electronics",
    image: "https://via.placeholder.com/400x300"
  },
  {
    name: "Running Shoes",
    price: "₹3,999",
    category: "Footwear",
    image: "https://via.placeholder.com/400x300"
  },
  {
    name: "Smart Watch",
    price: "₹5,499",
    category: "Wearables",
    image: "https://via.placeholder.com/400x300"
  },
  {
    name: "Laptop Backpack",
    price: "₹1,299",
    category: "Accessories",
    image: "https://via.placeholder.com/400x300"
  },
  {
    name: "Bluetooth Speaker",
    price: "₹2,199",
    category: "Audio",
    image: "https://via.placeholder.com/400x300"
  },
  {
    name: "Sunglasses",
    price: "₹899",
    category: "Fashion",
    image: "https://via.placeholder.com/400x300"
  }
];

const productGrid = document.getElementById("productGrid");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <img src="https://img.freepik.com/premium-photo/photo-wireless-headphones_1029469-18128.jpg" alt="${product.name}">
    <div class="product-details">
      <h3>${product.name}</h3>
      <p class="category">${product.category}</p>
      <p class="price">${product.price}</p>
    </div>
  `;

  productGrid.appendChild(card);
});
