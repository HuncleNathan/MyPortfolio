document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        feedback: document.getElementById("message").value
    };

    fetch("https://script.google.com/macros/s/AKfycbyxKXrZgUA_5yPNyqsa5_2q3XKIejaII85vw-1N7PAYKcoujyAmbVmciY-HCAD5_PAlgA/exec", { // Replace with the copied URL
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    }).then(() => {
        document.getElementById("popup").style.display = "block"; // Show success popup
        document.getElementById("feedbackForm").reset();
    }).catch(error => console.error("Error:", error));
});

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
