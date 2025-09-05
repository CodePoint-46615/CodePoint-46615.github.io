// Hamburger Menu
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Optional: Mouse move parallax effect for header (small translation)
document.addEventListener('mousemove', (e) => {
    const about = document.getElementById('about');
    const x = (e.clientX / window.innerWidth - 0.5) * 10; // -5 to +5
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    about.style.transform = `translate(${x}px, ${y}px)`;
});
