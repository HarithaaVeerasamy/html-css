document.addEventListener("DOMContentLoaded", function () {
    loadCart();
});

function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartBody = document.getElementById("cart-body");
    cartBody.innerHTML = "";

    let total = 0;
    
    cart.forEach((item, index) => {
        let itemTotal = parseFloat(item.price.replace("₹", "")) * item.quantity;
        total += itemTotal;

        let row = `
            <tr>
                <td>${item.title}</td>
                <td>${item.price}</td>
                <td>
                    <button class="btn btn-sm btn-outline-secondary quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                </td>
                <td class="product-total">₹${itemTotal.toFixed(2)}</td>
                <td><button class="btn quantity-btn btn-sm" onclick="removeItem(${index})">X</button></td>
            </tr>
        `;
        cartBody.innerHTML += row;
    });

    document.getElementById("cart-total").textContent = `₹${total.toFixed(2)}`;
}

function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    if (cart[index].quantity + change < 1) return; // Prevent quantity going below 1

    cart[index].quantity += change;
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart(); // Refresh cart display
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart(); // Refresh cart display
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("checkoutBtn").addEventListener("click", function () {
      let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  
      if (loggedInUser) {
        // User is logged in, go to checkout page
        window.location.href = "checkout.html";
      } else {
        // User is not logged in, redirect to login page
        window.location.href = "login.html";
      }
    });
  });
  