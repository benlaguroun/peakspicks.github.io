document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to toggle the mobile menu
function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
  }
  
