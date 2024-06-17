'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');
// console.log(allSection);

document.getElementById('section--1"');
const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

//Creating and Inserting Elements

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use Cookied for improved functionality and analytics. <button class = "btn btn--close-cookie"> Got it ! </button>';

header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

//Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

//Styles
/*
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// console.log(message.style.height);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'red');

//Attributes

const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

logo.alt = 'Beautiful logo';
// console.log(logo.alt);

//Non standard
// console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

// const link = document.querySelector('.twitter-link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

//Data attributes

// console.log(logo.dataset.versionNumber);
*/

//classes
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();

/*
const btnscrollto = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');
const section3 = document.querySelector('#section--3');

btnscrollto.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current Scroll (X/Y)', window.pageXOffset, pageYOffset);

  //Scrolling

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
  // section3.scrollIntoView({ behavior: 'instant' });
});

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great : You are reading the heading :D');
};
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
  console.log('Remove Mouse enter');
}, 3000);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great : You are reading the heading');
// };
*/

//Event Propogation

//rgb(255,255,255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target);

  //sTOP PROPAGATION
  e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target);
  },
  false
);
