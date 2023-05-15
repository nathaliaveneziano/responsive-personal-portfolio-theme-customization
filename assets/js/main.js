import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

// remove class from array of spans selectors
const removeSelectors = (array, classRemove) => {
  for (let element of array) {
    element.classList.remove(classRemove);
  }
};

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

function linkAction(event) {
  removeSelectors(navLinks, 'active-link');

  const navMenu = document.getElementById('nav-menu');
  event.target.classList.toggle('active-link');

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
// get all sections that have an id defined
const sections = document.querySelectorAll('section[id]');

// add an event listener listening for scroll
window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
  // get current scroll position
  let scrollY = window.pageYOffset;

  // now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id');

    /**
     * - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
     * - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as a selector
     */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav-menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav-menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}

/* ------------ PORTFOLIO ITEM FILTER ------------ */
const filterContainer = document.querySelector('.portfolio-filter-inner'),
  filterBtns = filterContainer.children,
  totalFilterBtn = filterBtns.length,
  portfolioItem = document.querySelectorAll('.portfolio-item'),
  totalPortfolioItem = portfolioItem.length;

for (let i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener('click', function () {
    removeSelectors(filterBtns, 'active');

    this.classList.toggle('active');

    const filterValue = this.getAttribute('data-filter');
    for (let k = 0; k < totalPortfolioItem; k++) {
      if (filterValue === portfolioItem[k].getAttribute('data-category')) {
        portfolioItem[k].classList.add('show');
        portfolioItem[k].classList.remove('hide');
      } else {
        portfolioItem[k].classList.remove('show');
        portfolioItem[k].classList.add('hide');
      }

      if (filterValue === 'all') {
        portfolioItem[k].classList.add('show');
        portfolioItem[k].classList.remove('hide');
      }
    }
  });
}

/* ------------  THEME/DISPLAY CUSTOMIZATION ------------ */
const theme = document.querySelector('#theme-change');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPallete = document.querySelectorAll('.choose-color span');

var root = document.querySelector(':root');

const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

/* --- MODAL --- */
// open modal
const openThemeModal = () => {
  themeModal.style.display = 'grid';
};
theme.addEventListener('click', openThemeModal);

// close modal
const closeThemeModal = (event) => {
  if (event.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none';
  }
};
themeModal.addEventListener('click', closeThemeModal);

/* --- FONTS --- */
fontSizes.forEach((size) => {
  size.addEventListener('click', () => {
    removeSelectors(fontSizes, 'active');

    let fontSize;

    size.classList.toggle('active');

    if (size.classList.contains('font-size-1')) {
      fontSize = '12px';
    } else if (size.classList.contains('font-size-2')) {
      fontSize = '14px';
    } else if (size.classList.contains('font-size-3')) {
      fontSize = '16px';
    } else if (size.classList.contains('font-size-4')) {
      fontSize = '18px';
    }

    // change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize;
  });
});

/* --- PRIMARY COLORS --- */
colorPallete.forEach((color) => {
  color.addEventListener('click', () => {
    removeSelectors(colorPallete, 'active');

    let primaryHue;

    color.classList.toggle('active');

    if (color.classList.contains('color-1')) {
      primaryHue = 252;
    } else if (color.classList.contains('color-2')) {
      primaryHue = 52;
    } else if (color.classList.contains('color-3')) {
      primaryHue = 352;
    } else if (color.classList.contains('color-4')) {
      primaryHue = 152;
    } else if (color.classList.contains('color-5')) {
      primaryHue = 202;
    }

    root.style.setProperty('--primary-color-hue', primaryHue);
  });
});

/* --- THEME BACKGROUND --- */
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = (element, color1, color2, color3, array) => {
  element.addEventListener('click', () => {
    darkColorLightness = color1;
    whiteColorLightness = color2;
    lightColorLightness = color3;

    // remove active class from the others
    removeSelectors(array, 'active');

    // add active class
    element.classList.add('active');

    // change background color
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
  });
};

changeBG(bg1, '17%', '100%', '92%', [bg2, bg3]);
changeBG(bg2, '95%', '20%', '17%', [bg1, bg3]);
changeBG(bg3, '95%', '10%', '0%', [bg1, bg2]);

/* ------------  ------------ */
