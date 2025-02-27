const products = [
  { id: 1, name: "Wireless Bluetooth Headphones", category: "Electronics", price: 49.99, rating: 4.5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV2vL0gdxuaUs0mC3yD5W6rBYIgbRgXIR3eg&s" },
  { id: 2, name: "Gaming Mouse", category: "Electronics", price: 29.99, rating: 4.2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBAsvYsgUYnMgx4O_h3QdgXIgiswMTBoJYMg&s" },
  { id: 3, name: "Mechanical Keyboard", category: "Electronics", price: 79.99, rating: 4.7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz538gSY40g9QQAsGHo5R6T7pYjx96QCRikw&s" },
  { id: 4, name: "Smartwatch", category: "Wearable", price: 199.99, rating: 4.8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsoYpomDEecXRCdgjm5JqSOEiB5xYlvIBZg&s" },
  { id: 5, name: "Running Shoes", category: "Fashion", price: 59.99, rating: 4.3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkIAP0MHnQywt5qc60GS-u_svGrjQea2aAuw&s" },
  { id: 6, name: "Leather Wallet", category: "Fashion", price: 19.99, rating: 4.0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKSutuhBFNNkF_nAkYAihcHLo5w6EIerj_uA&s" },
  { id: 7, name: "Digital Camera", category: "Electronics", price: 349.99, rating: 4.6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiKfK3dm74nY3GhpYX-R_Vl966OIPqwtxnDw&s" },
  { id: 8, name: "Backpack", category: "Accessories", price: 39.99, rating: 4.4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoNy3LLVIt_tsuySBEJsvpIz2DVMaYi0oWMA&s" },
  { id: 9, name: "Sunglasses", category: "Fashion", price: 24.99, rating: 4.1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd6-QkwueieUrc-F7tGlR1brMoVBxwPWUAkg&s" },
  { id: 10, name: "Water Bottle", category: "Home & Kitchen", price: 14.99, rating: 4.2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXCT6z8pMKvfWPg9jnxmKx_DltS4SpOqFTmQ&s" }
];

const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("categoryFilter");
const sortPrice = document.getElementById("sortPrice");

function displayProducts(filteredProducts) {
  productContainer.innerHTML = "";
  filteredProducts.forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.category}</p>
          <p>$${product.price.toFixed(2)}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productContainer.appendChild(productCard);
  });
}

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === productId);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText));
  displayProducts(filteredProducts);
});

categoryFilter.addEventListener("change", () => {
  const selectedCategory = categoryFilter.value;
  const filteredProducts = selectedCategory === "all" ? products : products.filter(product => product.category === selectedCategory);
  displayProducts(filteredProducts);
});

sortPrice.addEventListener("change", () => {
  const sortedProducts = [...products].sort((a, b) => sortPrice.value === "low-high" ? a.price - b.price : b.price - a.price);
  displayProducts(sortedProducts);
});

document.getElementById("goToCart").addEventListener("click", () => {
  window.location.href = "cart.html";
});

displayProducts(products);