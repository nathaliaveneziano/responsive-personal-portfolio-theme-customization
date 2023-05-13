import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/* ------------ SHOW MENU ------------ */
// validate if constant exists
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/* --- MENU HIDDEN --- */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/* ------------ REMOVE MENU MOBILE ------------ */
const navLinks = document.querySelectorAll('.nav-link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // when we click on each nav link, we remove the show menu class
  navMenu.classList.remove('show-menu');
}
navLinks.forEach((link) => link.addEventListener('click', linkAction));

/* ------------ CHANGE BACKGROUND HEADER ------------ */
function scrollHeader() {
  const header = document.getElementById('header');
  // when the scroll is greater then 80 viewport height, add the class scroll header to the tag header
  if (this.scrollY >= 80) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);

/* ------------ TESTIMONIAL SWIPER ------------ */
const swiper = new Swiper('.testimonial-wrapper', {
  spaceBetween: 30,
  loop: 'true',

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/* ------------ SCROLL SECTIONS ACTIVE LINK ------------ */

/* ------------ PORTFOLIO ITEM FILTER ------------ */

/* ------------  THEME/DISPLAY CUSTOMIZATION ------------ */

/* --- FONTS --- */

/* --- PRIMARY COLORS --- */

/* --- THEME BACKGROUND --- */

/* ------------  ------------ */
