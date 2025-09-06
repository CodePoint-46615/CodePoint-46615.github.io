// Scroll animation for sections
// --- selectors ---
const header = document.querySelector('header'); // adjust if your header selector differs
const sections = document.querySelectorAll('main section'); // or 'section[id]' if you prefer
const anchorLinks = document.querySelectorAll('a[href^="#"]');

let observer = null;

// set CSS variable and inline scrollMarginTop (fallback)
function updateHeaderHeightVar() {
  const h = header ? Math.ceil(header.getBoundingClientRect().height) : 0;
  document.documentElement.style.setProperty('--header-height', `${h}px`);

  // fallback for older browsers or extra control:
  document.querySelectorAll('main section, section').forEach(s => {
    s.style.scrollMarginTop = `${h + 8}px`; // a tiny extra gap
  });
}

// create / recreate the IntersectionObserver using header height in the rootMargin
function createObserver() {
  if (observer) observer.disconnect();

  const headerHeight = header ? header.getBoundingClientRect().height : 0;
  const rootMargin = `-${Math.ceil(headerHeight)}px 0px 0px 0px`;

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // your preferred visibility classes (Tailwind or plain)
        entry.target.classList.add('is-visible');       // plain CSS class from above
        // if you use Tailwind, you could do:
        // entry.target.classList.add('opacity-100','translate-y-0');
      } else {
        // optional: remove on exit if you want repeatable animations
        entry.target.classList.remove('is-visible');
      }
    });
  }, {
    root: null,
    rootMargin,
    threshold: 0.12
  });

  sections.forEach(s => observer.observe(s));
}

// intercept anchor clicks and perform manual offset scroll (works consistently)
function enableAnchorOffsetScrolling() {
  anchorLinks.forEach(link => {
    // only handle same-page hashes
    const href = link.getAttribute('href');
    if (!href || href.length === 1 || !href.startsWith('#')) return;

    link.addEventListener('click', (e) => {
      const targetId = href;

      // Special case: brand/home link should go to absolute top of the page
      if (targetId === '#home' || targetId === '#top') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        history.pushState(null, '', '#home');
        return;
      }

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return; // let browser handle if no target

      e.preventDefault();

      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const top = Math.max(0, targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8);

      window.scrollTo({
        top,
        behavior: 'smooth'
      });

      // update the URL "hash" without jumping
      history.pushState(null, '', targetId);
    });
  });
}

// initialization
function init() {
  updateHeaderHeightVar();
  createObserver();
  enableAnchorOffsetScrolling();
}

// update on load and resize
window.addEventListener('load', init);
window.addEventListener('resize', () => {
  updateHeaderHeightVar();
  createObserver(); // recreate observer with new rootMargin
});
