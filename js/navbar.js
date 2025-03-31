document.addEventListener("DOMContentLoaded", function () {
  let usernameElement = document.getElementById("usernameDisplay");
  let loginLink = document.getElementById("loginLink");
  let cartCountElement = document.getElementById("cartCount");
console.log(usernameElement);

  if (!usernameElement) {
    console.error("❌ usernameDisplay element not found!");
    return;
  }

  let loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  if (loggedInUser) {
    usernameElement.innerHTML = `
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">${loggedInUser.username}</a>
                <div class="dropdown-menu m-0">
                    <a href="profile.html" class="dropdown-item">Profile</a>
                    <a href="#" id="logoutBtn" class="dropdown-item">Logout</a>
                </div>
            </div>
        `;
    loginLink.style.display = "none"; // Hide login link

    document.getElementById("logoutBtn").addEventListener("click", function () {
      sessionStorage.removeItem("loggedInUser"); // ✅ Remove from sessionStorage
      window.location.reload();
    });
  } else {
    usernameElement.innerHTML = "";
    loginLink.textContent = "Login / Sign Up";
    loginLink.href = "/login.html";
  }

  cartCountElement.textContent = cartItems.length;
});
