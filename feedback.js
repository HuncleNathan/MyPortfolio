document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.getElementById("feedbackForm");
    const responseMessage = document.getElementById("responseMessage");

    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            responseMessage.style.color = "#ff5555";
            responseMessage.textContent = "Please fill in all fields.";
            return;
        }

        // Simulate sending feedback (In real use case, send to a server)
        setTimeout(() => {
            responseMessage.style.color = "#00ffcc";
            responseMessage.textContent = "Thank you for your feedback, " + name + "!";
            feedbackForm.reset();
        }, 1000);
    });
});
