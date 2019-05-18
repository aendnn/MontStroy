'use strict';
var mainNav = document.querySelector('.site-nav');
var mainToggle = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('site-nav--nojs');

mainToggle.addEventListener('click', function () {
  if (mainNav.classList.contains('site-nav--closed')) {
    mainNav.classList.remove('site-nav--closed');
    mainNav.classList.add('site-nav--opened');
  } else {
    mainNav.classList.add('site-nav--closed');
    mainNav.classList.remove('site-nav--opened');
  }
});
