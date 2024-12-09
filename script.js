// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Scroll Down Button Functionality
const scrollDownButton = document.getElementById('scroll-down');
const endOfPage = document.getElementById('end-of-page');

scrollDownButton.addEventListener('click', () => {
  endOfPage.scrollIntoView({ behavior: 'smooth' });
});
