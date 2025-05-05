document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const description = document.getElementById("bug");
    const server = document.getElementById("server");
    const agree = document.getElementById("agree");

    const usernameError = document.getElementById("username-error");
    const emailError = document.getElementById("email-error");
    const bugError = document.getElementById("bug-error");
    const serverError = document.getElementById("server-error");
    const agreeError = document.getElementById("agree-error");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let isValid = true;

        // Reset error styles
        resetError(username, usernameError);
        resetError(email, emailError);
        resetError(description, bugError);
        resetError(server, serverError);
        agreeError.textContent = "";

        // Validasi Username
        const usernameVal = username.value.trim();
        if (usernameVal.length < 8 || !lowerLetters(usernameVal)) {
            setError(username, usernameError, "Username must be at least 8 letters and all lowercase.");
            isValid = false;
        }

        // Validasi Email
        const emailVal = email.value.trim();
        if (!emailVal.endsWith("@gmail.com")) {
            setError(email, emailError, "Email must end with @gmail.com.");
            isValid = false;
        }

        // Validasi Deskripsi
        const descVal = description.value.trim();
        if (descVal.length < 5 || descVal.length > 50) {
            setError(description, bugError, "Description must be 5-50 characters.");
            isValid = false;
        }

        // Validasi Server
        if (server.value === "") {
            setError(server, serverError, "Please select a server.");
            isValid = false;
        }

        // Validasi Checkbox
        if (!agree.checked) {
            setError(agree, agreeError, "This field must be checked ");
            isValid = false;
        }

        // Jika semua valid
        if (isValid) {
            form.reset();
            const popup = document.getElementById("popup");
            popup.style.display = "flex";
        }
    });

    function setError(element, errorElement, message) {
        element.style.border = "2px solid red";
        errorElement.textContent = message;
        errorElement.style.color = "red";
    }

    function resetError(element, errorElement) {
        element.style.border = "2px solid white";
        errorElement.textContent = "";
    }

    function lowerLetters(email) {
        for (let i = 0; i < email.length; i++) {
            const char = email.charAt(i);
            if (char < 'a' || char > 'z') {
                return false;
            }
        }
        return true;
    }
    
    document.getElementById("close-popup").addEventListener("click", function () {
        document.getElementById("popup").style.display = "none";
    });
});
