AOS.init({
  duration: 800,
  once: true,
  offset: 100
});

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar-y2k');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.style.background = 'rgba(15, 15, 25, 0.95)';
    } else {
      navbar.style.background = 'rgba(15, 15, 25, 0.8)';
    }
  });
});
