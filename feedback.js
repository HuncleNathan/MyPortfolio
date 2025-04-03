document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let form = this;
    let formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert("Thank you for your feedback!"); 
            form.reset();
        } else {
            alert("There was a problem submitting your feedback. Please try again.");
        }
    }).catch(error => {
        alert("Error: Could not send feedback.");
        console.error(error);
    });
});
