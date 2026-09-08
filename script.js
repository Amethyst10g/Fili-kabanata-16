const toggle = document.getElementById('menuToggle');
const toc = document.getElementById('toc');

toggle.addEventListener('click', () => {
  const isOpen = toc.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
});

toc.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toc.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

const sections = document.querySelectorAll('.section, .hero');
const links = document.querySelectorAll('.toc a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      links.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.toc a[href="#${id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(s => { if (s.id) observer.observe(s); });
