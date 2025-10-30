// Mobile menu toggle
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const allNavLinks = document.querySelectorAll('.nav-links a');

toggle.addEventListener("click", () => {
  // === FIXED: This toggles the .active class on the nav menu ===
  navLinks.classList.toggle("active");
});

// === REFINED: Close mobile menu when a link is clicked ===
allNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Check if the mobile menu is open, and if so, close it
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});


// Contact form submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});

// Scroll animations
const animatedElements = document.querySelectorAll(".fade-in, .slide-left, .slide-right");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

animatedElements.forEach(el => observer.observe(el));