document.addEventListener("DOMContentLoaded", function() {
    const checkoutForm = document.getElementById("checkout-form");
    const orderSummary = document.getElementById("order-summary");
    const totalPriceEl = document.getElementById("total-price");
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let total = localStorage.getItem("totalPrice") || 0;
    
    if (orderSummary) {
        orderSummary.innerHTML = "";
        cartItems.forEach(item => {
            orderSummary.innerHTML += `<div>
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
            </div>`;
        });
    }
    
    if (totalPriceEl) {
        totalPriceEl.textContent = `Total: ₹${total}`;
    }
    
    if (checkoutForm) {
        checkoutForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const address = document.getElementById("address").value;
            const paymentMethod = document.getElementById("payment").value;
            
            if (!name || !email || !address) {
                alert("Please fill in all required fields.");
                return;
            }
            
            alert(`Order placed successfully!\n\nName: ${name}\nEmail: ${email}\nAddress: ${address}\nPayment: ${paymentMethod}\nTotal: ₹${total}`);
            localStorage.removeItem("cart");
            localStorage.removeItem("totalPrice");
            window.location.href = "index.html";
        });
    }
});
