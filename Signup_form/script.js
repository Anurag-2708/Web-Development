const form_container = document.querySelector(".form_container")
const message = document.querySelector(".message")

form_container.addEventListener("submit", (event) => {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    form_container.classList.toggle("hidden");
    message.classList.toggle("hidden");
});