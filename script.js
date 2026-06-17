const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        formMessage.style.color = "red";
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    if (message.length < 10) {
        formMessage.style.color = "red";
        formMessage.textContent = "Your message is too short.";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Your message has been sent successfully.";
    contactForm.reset();
});

menuToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
});

const navLinks = mainNav.querySelectorAll("a");
navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        mainNav.classList.remove("active");
    });
});