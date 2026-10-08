const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

// 1. Munculkan/Sembunyikan menu saat tombol hamburger diklik
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('is-active');
  navLinks.classList.toggle('active');
});

// 2. Tutup menu secara otomatis saat salah satu menu diklik
navItems.forEach(item => {
  item.addEventListener('click', () => {
    menuToggle.classList.remove('is-active');
    navLinks.classList.remove('active');
  });
});