document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from refreshing the page

        // Collect form data
        let formData = {
            fullName: document.getElementById("fullName").value.trim(),
            email: document.getElementById("email").value.trim(),
            message: document.getElementById("message").value.trim()
        };

        // Retrieve existing data from localStorage (or start with an empty array)
        let storedContacts = JSON.parse(localStorage.getItem("contactMessages")) || [];

        // Add new form data to the array
        storedContacts.push(formData);

        // Save updated data back to localStorage
        localStorage.setItem("contactMessages", JSON.stringify(storedContacts));

        // Show success message
        document.getElementById("successMessage").style.display = "block";

        // Clear the form
        document.getElementById("contactForm").reset();
    });
});
