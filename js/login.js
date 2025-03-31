document.addEventListener("DOMContentLoaded", function () {
  let loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let username = document.querySelector('input[name="username"]').value.trim();
      let password = document.querySelector('input[name="password"]').value.trim();

      let storedUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

      if (!storedUser || storedUser.username !== username || storedUser.password !== password) {
          alert("Invalid username or password!");
          return;
      }

      alert("Login successful!");
      window.location.href = "/index.html"; // Redirect to home page
  });
});

  