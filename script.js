document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

    form.addEventListener("submit", function (event) {
        let isValid = true;
        const errorMessages = [];

        if (username.value.length < 5) {
            errorMessages.push("Username must be at least 5 characters long.");
            isValid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email.value)) {
            errorMessages.push("Please enter a valid email address.");
            isValid = false;
        }

        if (password.value.length < 8) {
            errorMessages.push("Password must be at least 8 characters long.");
            isValid = false;
        }

        if (password.value !== confirmPassword.value) {
            errorMessages.push("Passwords do not match.");
            isValid = false;
            
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission
            displayErrors(errorMessages);
        }
    });

    function displayErrors(messages) {
        const errorDiv = document.createElement("div");
        errorDiv.classList.add("error");
        errorDiv.innerHTML = messages.join("<br>");
        form.insertBefore(errorDiv, form.firstChild);
    }
});
