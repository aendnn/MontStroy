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


var linkCon = document.querySelectorAll('.scroll'),
  V = 0.3;
for (var i = 0; i < linkCon.length; i++) {
  linkCon[i].addEventListener('click', function (e) {
    e.preventDefault();
    var w = window.pageYOffset,
      hash = this.href.replace(/[^#]*(.*)/, '$1');
    var t = document.querySelector(hash).getBoundingClientRect().top,
      start = null;
    requestAnimationFrame(step);
    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
        r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
      window.scrollTo(0, r);
      if (r != w + t) {
        requestAnimationFrame(step);
      } else {
        location.hash = hash;
      }
    }
  }, false);
}

svg4everybody();

objectFitImages('img');


var partnersSwiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.arrow--next',
    prevEl: '.arrow--prev',
  },
  pagination: {
    el: '.partners__toggles',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    1200: {
      spaceBetween: 0,
      slidesPerView: 'auto',
      slidesPerGroup: 3,
      initialSlide: 2,
      centeredSlides: true,
      pagination: {
        el: '.partners__toggles',
        clickable: true,
        dynamicBullets: true
      },
    },
    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: false,
      initialSlide: 1,
      centeredSlides: false,
      pagination: {
        dynamicBullets: true,
      },
    }
  }
});
