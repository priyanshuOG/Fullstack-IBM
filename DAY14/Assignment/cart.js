document.addEventListener("DOMContentLoaded", function() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items");
    const totalPriceEl = document.getElementById("total-price");
    let total = 0;
    
    if (cartItems.length === 0) {
        cartContainer.innerHTML = "<p>Cart is empty.</p>";
    } else {
        cartContainer.innerHTML = "";
        cartItems.forEach((item, index) => {
            total += item.price;
            cartContainer.innerHTML += `<div>
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
                <button onclick='removeFromCart(${index})'>Remove</button>
            </div>`;
        });
    }
    totalPriceEl.textContent = `Total: ₹${total}`;
    localStorage.setItem("totalPrice", total);
});

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

function checkout() {
    window.location.href = "checkout.html";
}
