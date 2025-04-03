document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("feedbackForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            feedback: document.getElementById("message").value
        };

        fetch("https://script.google.com/macros/s/AKfycbzDEgFKk6up8E4Fgym6yrQxrVDlrDHTlQmJ9m_h4Kp0zhhGOaHQ5r1yq_MsaCYZh5o23g/exec", {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }).then(() => {
            // Get the response message element
            let responseMessage = document.getElementById("responseMessage");
            if (responseMessage) {  
                responseMessage.style.display = "block";
                responseMessage.innerHTML = "Thank you for your feedback!";
            } else {  
                console.error("Element with ID 'responseMessage' not found");  
            }

            // Get the popup element
            let popup = document.getElementById("popup");
            if (popup) {  
                popup.style.display = "flex";
            } else {
                console.error("Element with ID 'popup' not found");
            }

            // Reset form
            document.getElementById("feedbackForm").reset();
        }).catch(error => console.error("Error:", error));
    });

    // Check if close button exists before adding event listener
    let closePopupButton = document.getElementById("closePopup");
    if (closePopupButton) {
        closePopupButton.addEventListener("click", function() {
            document.getElementById("popup").style.display = "none";
        });
    } else {
        console.error("Element with ID 'closePopup' not found");
    }
});
