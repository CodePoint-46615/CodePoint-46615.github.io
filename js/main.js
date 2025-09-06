// Hamburger Menu
const hamburger = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const menuLinks = mobileMenu.querySelectorAll('a');

// Open drawer
hamburger.addEventListener('click', () => {
  mobileMenu.classList.remove('translate-x-full', 'pointer-events-none');
  mobileMenu.classList.add('translate-x-0', 'pointer-events-auto');
});

// Close drawer
function closeMobileMenu() {
  mobileMenu.classList.remove('translate-x-0', 'pointer-events-auto');
  mobileMenu.classList.add('translate-x-full', 'pointer-events-none');
}

closeMenu.addEventListener('click', closeMobileMenu);

// Close on nav link click (no redirect)
menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    closeMobileMenu();
  });
});


// Optional: Mouse move parallax effect for header (small translation)
document.addEventListener('mousemove', (e) => {
    const about = document.getElementById('about');
    const x = (e.clientX / window.innerWidth - 0.5) * 10; // -5 to +5
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    about.style.transform = `translate(${x}px, ${y}px)`;
});
