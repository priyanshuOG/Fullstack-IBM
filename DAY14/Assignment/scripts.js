const products = [
    {d: 1, name: "Wireless Bluetooth Headphones", category: "Electronics", price: 49.99, rating: 4.5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV2vL0gdxuaUs0mC3yD5W6rBYIgbRgXIR3eg&s" },
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

function displayProducts(productsToShow = products) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    products.forEach(product => {
        let item = `<div class='product'>
            <img src='${product.image}' alt='${product.name}'>
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <p>Rating: ${product.rating}</p>
            <button onclick='addToCart(${product.id})'>Add to Cart</button>
        </div>`;
        productList.innerHTML += item;
    });
}

displayProducts();

function addToCart(productId){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
}

function searchProducts(){
    let searchQuery = document.getElementById("search-bar").value.toLowerCase();
    let filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));
    displayFilteredProducts(filteredProducts);
}

document.getElementById("search-bar").addEventListener("input", searchProducts);

function filterProducts() {
    let category = document.getElementById("category").value;
    let priceRange = document.getElementById("price-filter").value;
    
    let filteredProducts = products.filter(product => {
        let categoryMatch = category === "all" || product.category === category;
        let priceMatch = false;

        if (priceRange === "all") {
            priceMatch = true;
        } else if (priceRange === "below-500" && product.price < 500) {
            priceMatch = true;
        } else if (priceRange === "500-1000" && product.price >= 500 && product.price <= 1000) {
            priceMatch = true;
        } else if (priceRange === "above-1000" && product.price > 1000) {
            priceMatch = true;
        }

        return categoryMatch && priceMatch;
    });

    displayFilteredProducts(filteredProducts);
}

function sortProducts() {
    let sortOption = document.getElementById("sort").value;
    let sortedProducts = [...products];

    if (sortOption === "price-low") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high") {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating") {
        sortedProducts.sort((a, b) => b.rating - a.rating);
    }

    displayFilteredProducts(sortedProducts);
}
document.getElementById("category").addEventListener("change", filterProducts);
document.addEventListener("DOMContentLoaded", function () {displayProducts();});

function displayFilteredProducts(filteredProducts) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    
    filteredProducts.forEach(product => {
        let item = `<div class='product'>
            <img src='${product.image}' alt='${product.name}'>
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <p>Rating: ${product.rating}</p>
            <button onclick='addToCart(${product.id})'>Add to Cart</button>
        </div>`;
        productList.innerHTML += item;
    });
}



function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    console.log("Dark mode set to:", localStorage.getItem("darkMode"));
}


document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    // Ensure product listing functions only run on pages where they exist
    if (document.getElementById("product-list") && typeof displayProducts === "function") {
        displayProducts();
    }

    if (document.getElementById("cart-container") && typeof displayCart === "function") {
        displayCart();
    }

    if (document.getElementById("checkout-container") && typeof displayCheckout === "function") {
        displayCheckout();
    }
});
