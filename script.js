document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Mobile menu toggle (if needed in future responsiveness)
    const navToggle = document.createElement("button");
    navToggle.innerText = "☰";
    navToggle.classList.add("nav-toggle");
    document.querySelector("nav").prepend(navToggle);
    
    navToggle.addEventListener("click", function () {
        document.querySelector(".nav-links").classList.toggle("active");
    });
});
