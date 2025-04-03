document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("feedbackForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            feedback: document.getElementById("message").value
        };

        fetch("https://script.google.com/macros/s/AKfycbyxKXrZgUA_5yPNyqsa5_2q3XKIejaII85vw-1N7PAYKcoujyAmbVmciY-HCAD5_PAlgA/exec", {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }).then(() => {
            // Show success message
            let responseMessage = document.getElementById("responseMessage");
            if (responseMessage) {
                responseMessage.style.display = "block";
                responseMessage.innerHTML = "Thank you for your feedback!";
            } else {
                console.error("Element with ID 'responseMessage' not found");
            }

            // Show confirmation popup
            document.getElementById("popup").style.display = "flex";

            // Reset form
            document.getElementById("feedbackForm").reset();
        }).catch(error => console.error("Error:", error));
    });

    document.getElementById("closePopup").addEventListener("click", function() {
        document.getElementById("popup").style.display = "none";
    });
});
