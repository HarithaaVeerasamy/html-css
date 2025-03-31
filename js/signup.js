document.addEventListener("DOMContentLoaded", function () {
  let signupForm = document.querySelector(".signup-form");

  signupForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let username = document.querySelector('input[name="username"]').value.trim();
      let password = document.querySelector('input[name="password"]').value.trim();
      let confirmPassword = document.querySelector('input[name="confirm_password"]').value.trim();

      if (!username || !password || !confirmPassword) {
          alert("All fields are required!");
          return;
      }
      if (password !== confirmPassword) {
          alert("Passwords do not match!");
          return;
      }

      let user = { username, password };
      sessionStorage.setItem("loggedInUser", JSON.stringify(user)); // ✅ Store in sessionStorage
      alert("Signup successful! Redirecting to home page.");
      window.location.href = "/index.html"; // Redirect to home page
  });
});

  