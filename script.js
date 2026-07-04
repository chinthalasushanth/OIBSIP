// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Contact form message
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
    form.reset();
});

// Navbar shadow on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    } else {
        header.style.boxShadow = "none";
    }
});