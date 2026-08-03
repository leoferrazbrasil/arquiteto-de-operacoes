const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const menuLabel = menuToggle?.querySelector('.sr-only');
const nav = document.querySelector('.nav-primary');

function setMenuOpen(open, restoreFocus = false) {
  menuToggle?.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('open', open);
  if (menuLabel) menuLabel.textContent = open ? 'Fechar menu' : 'Abrir menu';
  if (!open && restoreFocus) menuToggle?.focus();
}

window.addEventListener('scroll', () => {
  if (header) header.dataset.elevated = window.scrollY > 8 ? 'true' : 'false';
}, { passive: true });

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  setMenuOpen(!expanded);
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle?.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false, true);
  }
});

const revealElements = document.querySelectorAll('.reveal');
document.documentElement.classList.add('reveal-ready');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(element => revealObserver.observe(element));
} else {
  revealElements.forEach(element => element.classList.add('visible'));
}
