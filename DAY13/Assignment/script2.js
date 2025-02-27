document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById("cartItems");
    const totalAmount = document.getElementById("totalAmount");
    const checkoutButton = document.getElementById("checkout");
    const backToProductsButton = document.getElementById("backToProducts");
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    function renderCart() {
        cartItemsContainer.innerHTML = "";
        let total = 0;
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<tr><td colspan='6'>Your cart is empty! Add some products!</td></tr>";
        } else {
            cart.forEach((product, index) => {
                total += product.price;
                
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td><img src="${product.image}" width="50"></td>
                    <td>${product.name}</td>
                    <td>${product.category}</td>
                    <td>$${product.price.toFixed(2)}</td>
                    <td>
                        <button onclick="changeQuantity(${index}, -1)">-</button>
                        ${product.quantity || 1}
                        <button onclick="changeQuantity(${index}, 1)">+</button>
                    </td>
                    <td><button onclick="removeFromCart(${index})">Remove</button></td>
                `;
                cartItemsContainer.appendChild(row);
            });
        }
        totalAmount.textContent = total.toFixed(2);
    }
    
    window.changeQuantity = function (index, change) {
        if (cart[index].quantity === undefined) cart[index].quantity = 1;
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    };
    
    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    };
    
    checkoutButton.addEventListener("click", function () {
        alert("Thank you for your purchase!");
        localStorage.removeItem("cart");
        renderCart();
    });
    
    backToProductsButton.addEventListener("click", function () {
        window.location.href = "index.html";
    });
    
    renderCart();
});