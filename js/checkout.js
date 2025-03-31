document.addEventListener("DOMContentLoaded", function () {
    // Get user details from LocalStorage
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
        document.getElementById("fullName").value = loggedInUser.username || "";
        document.getElementById("email").value = loggedInUser.email || "";
    }

    // Load Cart Summary
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartSummary = document.getElementById("cartSummary");
    let total = 0;

    cartSummary.innerHTML = cart.map(item => {
        total += parseFloat(item.price.replace("₹", "")) * item.quantity;
        return `<li class="list-group-item d-flex justify-content-between">
                    <span>${item.title} (x${item.quantity})</span>
                    <strong>$${(parseFloat(item.price.replace("₹", "")) * item.quantity).toFixed(2)}</strong>
                </li>`;
    }).join("");

    // Add total price
    cartSummary.innerHTML += `<li class="list-group-item d-flex justify-content-between">
                                <strong>Total</strong>
                                <strong>$${total.toFixed(2)}</strong>
                              </li>`;

    // Handle Proceed to Payment
    document.getElementById("proceedToPayment").addEventListener("click", function () {
        let fullName = document.getElementById("fullName").value.trim();
        let email = document.getElementById("email").value.trim();
        let address = document.getElementById("address").value.trim();

        if (!fullName || !email || !address) {
            alert("Please fill in all required fields.");
            return;
        }

        // Store order details in LocalStorage
        let orderDetails = {
            fullName,
            email,
            address,
            paymentMethod: document.getElementById("paymentMethod").value,
            cart,
            total
        };

        localStorage.setItem("orderDetails", JSON.stringify(orderDetails));

        // Redirect to order success page
        window.location.href = "order-success.html";
    });
});
