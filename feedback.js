document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("feedbackForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            feedback: document.getElementById("message").value
        };

        fetch("https://script.google.com/macros/s/YOUR_DEPLOYED_SCRIPT_URL/exec", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
        .then(response => response.text())
        .then(data => {
            console.log("Server Response:", data);
            let responseMessage = document.getElementById("responseMessage");
            if (responseMessage) {  
                responseMessage.style.display = "block";
                responseMessage.innerHTML = "Thank you for your feedback!";
            }
            document.getElementById("feedbackForm").reset();
        })
        .catch(error => console.error("Error:", error));
    });
});
