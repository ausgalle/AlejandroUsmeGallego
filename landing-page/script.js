// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Trigger once on load
reveal();

// Navbar change on scroll
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(15, 23, 42, 0.95)";
        navbar.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
    } else {
        navbar.style.background = "rgba(15, 23, 42, 0.8)";
        navbar.style.boxShadow = "none";
    }
});
