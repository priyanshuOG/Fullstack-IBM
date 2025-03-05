document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("products-container")) {
        fetchProducts();
    }
    if (document.getElementById("users-container")) {
        fetchUsers();
    }
    if (document.getElementById("product-details")) {
        fetchProductDetails();
    }
    if (document.getElementById("user-details")) {
        fetchUserDetails();
    }
});

let allProducts = [];
let allUsers = [];

function sortProducts(criteria, order) {
    const sortedProducts = [...allProducts].sort((a, b) => {
        if (order === "asc") {
            return a[criteria] - b[criteria];
        } else {
            return b[criteria] - a[criteria];
        }
    });
    displayProducts(sortedProducts);
}
function filterUsersByCity(city) {
    const filteredUsers = allUsers.filter(user => user.address.city.toLowerCase() === city.toLowerCase());
    displayUsers(filteredUsers);
}


function sortUsers(order) {
    const sortedUsers = [...allUsers].sort((a, b) => {
        const nameA = `${a.name.firstname} ${a.name.lastname}`.toLowerCase();
        const nameB = `${b.name.firstname} ${b.name.lastname}`.toLowerCase();
        return order === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
    displayUsers(sortedUsers);
}

function fetchProducts() {
    document.getElementById("loading").style.display = "block";
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            document.getElementById("loading").style.display = "none";
            allProducts = products;
            displayProducts(products);
        })
        .catch(error => console.error("Error fetching products:", error));
}

function fetchUsers() {
    document.getElementById("loading-users").style.display = "block";
    fetch("https://fakestoreapi.com/users")
        .then(response => response.json())
        .then(users => {
            document.getElementById("loading-users").style.display = "none";
            allUsers = users;
            displayUsers(users);
        })
        .catch(error => console.error("Error fetching users:", error));
}

function displayProducts(products) {
    const container = document.getElementById("products-container");
    container.innerHTML = "";
    products.forEach(product => {
        const productCard = `<div class="card">
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="viewProduct(${product.id})">View Details</button>
        </div>`;
        container.innerHTML += productCard;
    });
}

function displayUsers(users) {
    const container = document.getElementById("users-container");
    container.innerHTML = "";
    users.forEach(user => {
        const userCard = `<div class="card">
            <h3>${user.name.firstname} ${user.name.lastname}</h3>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <button onclick="viewUser(${user.id})">View Details</button>
        </div>`;
        container.innerHTML += userCard;
    });
}

function viewProduct(id) {
    localStorage.setItem("selectedProduct", id);
    window.location.href = "product-detail.html";
}

function viewUser(id) {
    localStorage.setItem("selectedUser", id);
    window.location.href = "user-detail.html";
}

function fetchProductDetails() {
    const productId = localStorage.getItem("selectedProduct");
    document.getElementById("loading-product").style.display = "block";
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then(product => {
            document.getElementById("loading-product").style.display = "none";
            document.getElementById("product-details").innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <p>Category: ${product.category}</p>
                <button onclick="goBack()">Back to Products</button>`;
        })
        .catch(error => console.error("Error fetching product details:", error));
}

function fetchUserDetails() {
    const userId = localStorage.getItem("selectedUser");
    document.getElementById("loading-user").style.display = "block";
    fetch(`https://fakestoreapi.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            document.getElementById("loading-user").style.display = "none";
            document.getElementById("user-details").innerHTML = `
                <h2>${user.name.firstname} ${user.name.lastname}</h2>
                <p>Username: ${user.username}</p>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
                <p>Address: ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
                <p>Company: ${user.company.name}</p>
                <button onclick="goBack()">Back to Users</button>`;
        })
        .catch(error => console.error("Error fetching user details:", error));
}

function goBack() {
    window.history.back();
}
