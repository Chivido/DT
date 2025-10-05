document.getElementById('year').textContent = new Date().getFullYear();

const nav = document.getElementById('nav');
const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(15, 23, 42, 0.98)';
  } else {
    nav.style.background = 'rgba(15, 23, 42, 0.95)';
  }
});

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      menu.classList.remove('active');
    }
  });
});

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    form.reset();
  });
}
