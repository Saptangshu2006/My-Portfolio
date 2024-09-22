// Select elements
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navlinks = document.querySelectorAll('header nav a'); // assuming this is the correct selector for nav links
let sections = document.querySelectorAll('section'); // use querySelectorAll to select all sections
let header = document.querySelector('header');

// Menu icon click event listener
menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
};

// Window scroll event listener
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
      });
    }
  });

  // Adding a debounce function to improve performance
  debounce(() => {
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
  }, 100);
};

// Typing text animation script
var typed = new Typed(".typing", {
  strings: ["Developer", "Gamer", "Designer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// ScrollReveal animations
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Debounce function (optional)
function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}