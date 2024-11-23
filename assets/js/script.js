// Navbar Color Change on Scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Scroll Reveal Effect
const revealElements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  revealElements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
});

// Back-to-Top Button
const backToTopButton = document.createElement('div');
backToTopButton.className = 'back-to-top';
backToTopButton.innerHTML = '⬆';
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Hover Animations for Sponsors and Team
document.querySelectorAll('.sponsors img, .team img').forEach((img) => {
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.2)';
    img.style.transition = 'transform 0.3s ease';
  });

  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggles = document.querySelectorAll('.nav-item .dropdown-toggle');
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
      const parent = e.target.closest('.nav-item');
      const menu = parent.querySelector('.mega-menu');
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'block';
      }
    });
  });
});
