document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("feedbackForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            feedback: document.getElementById("message").value
        };

        fetch("https://script.google.com/macros/s/AKfycbxzWPlpNC1c6BvI4viRiN-_Dwjl2HAbAP_IvyJ0YmRL60ZIsG1s7HQbYlNU2cuxZcym/exec", { // Replace with your new URL
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
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
